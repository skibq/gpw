import React from 'react'
import '@/assets/styles/companies/companies.scss'
import { Input } from '@/components/global-components/Input';
import { Button } from '@/components/global-components/Button';
import { getCompanyBySymbol } from "@/api/alphavantage";

export class NewCompany extends React.Component {
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

  findSymbol = () => {
    getCompanyBySymbol(this.state.symbolValue).then((res) => {
      if (res.data['Global Quote']) {
        // save this data
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
