import React from 'react'
import { Input } from '@/components/global-components/Input';
import { Button } from '@/components/global-components/Button';
import { getCompanyBySymbol, getAdditionalCompanyData, getDomainAndLogo } from "@/api";
import { connect } from 'react-redux'
import { addCompany } from '@/store/actions';
import '@/assets/styles/companies/companies.scss'

class NewCompanyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbolValue: '',
      showError: false,
      errorMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({symbolValue: event.target.value});
  }
  showError(msg) {
    this.setState({errorMessage: msg});
    this.setState({showError: true});
    setTimeout(() => {
      this.setState({showError: false})
    }, 5000)
  }

  formatCompanyData(company) {
    return {
      symbol: company['01. symbol'],
      closed: company['07. latest trading day'],
      price: Math.round(company['05. price'] * 100) / 100,
      change: Math.round(company['09. change'] * 1000) / 1000,
      changePercent: Math.round(company['10. change percent'].replace('%', '') * 1000) / 1000,
      positiveChange: company['09. change'] > 0
    }
  }

  formatCompanyDetails(company, match) {
    return {
      ...company,
      name: match['2. name'],
      region: match['4. region'],
      timezone: match['7. timezone'],
      marketOpen: match['5. marketOpen'],
      marketClose: match['6. marketClose'],
      currency: match['8. currency']
    };
  }

  findSymbol = () => {
    getCompanyBySymbol(this.state.symbolValue).then((res) => {
      if (res.data['Global Quote'] && res.data['Global Quote']['01. symbol']) {
        let company = this.formatCompanyData(res.data['Global Quote']);
        getAdditionalCompanyData(company.symbol).then(({data: {bestMatches}}) => {
          if (bestMatches && bestMatches.length && bestMatches[0]['1. symbol'] === company.symbol) {
            company = this.formatCompanyDetails(company, bestMatches[0]);
            const requestName = company.name.replace('Inc.', '').replace('L.P.', '')
            getDomainAndLogo(requestName).then(({data}) => {
              company = {
                ...company,
                domain: data[0].domain,
                logo: data[0].logo
              };
              this.props.addCompany(company);
            }).catch(() => this.props.addCompany(company))
          }
        }).catch(() => this.props.addCompany(company));
        this.setState({symbolValue: ''});
        this.props.history.push('/')
      } else {
        this.showError('We don`t found company with that symbol. Please make sure, its correct.')
      }
    })
  };
  render() {
    return (
      <div className="new-company">
        <h1 className="page-title">Add new company</h1>
        <Input label="Company symbol" value={this.state.symbolValue}  onChange={this.handleChange} placeholder="MSFT" name="company-symbol" />
        <p className="new-company__newinfo">Provide the stock exchange symbol of a company you want to track</p>
          <p className={"new-company__error error-label " + (this.state.showError ? 'error-label--show'  : '')} >{this.state.errorMessage}</p>
        <div className="new-company__track-btn">
          <Button onClick={this.findSymbol} name="Track" />
        </div>
      </div>
    )
  }
}
export const NewCompany =  connect(
  null,
  { addCompany }
)(NewCompanyComponent);
