import React from 'react'
import '@/assets/styles/companies/companies.scss'
import { connect } from 'react-redux';
import { removeCompany } from '@/store/actions';

export class singleCompanyComponent extends React.Component {
  removeCompany = () => {
    this.props.removeCompany(this.props.index)
  };
  render() {
    const company = this.props.company;
    return (
      <li className="company">
        <div className="company__remove" onClick={this.removeCompany} >X</div>
        <div className="company__image-container">
          <img src={company.logo} className="company__image" alt=""/>
        </div>
        <div className="company__info">
          <div className="company__line">
            <strong className="company__name">{company.name}</strong>
            <span className="company__symbol">{company.symbol}</span>
            <span className="company__website">{company.domain}</span>
          </div>
          <div className="company__line">
            <span className="company__region">{company.region}</span>
            <span className="company__open">{company.marketOpen}</span>
            -
            <span className="company__close">{company.marketClose}</span>
            <span className="company__timezone">{company.timezone}</span>
          </div>
          <div className="company__line">
            <span className="company__price">{company.price}</span>
            <span className="company__currency">{company.currency}</span>
            <span className={"company__change company__change" + (company.positiveChange ? '--positive' : '--negative') }>
              {this.props.company.change}
            </span>
            <span className={"company__change-percent company__change-percent" + (company.positiveChange ? '--positive' : '--negative') }>
              ({company.changePercent}%)</span>
            <span className="company__closed">Closed: {company.closed}</span>
          </div>
        </div>
      </li>
    )
  }
}

export const SingleCompany =  connect(
  null,
  { removeCompany }
)(singleCompanyComponent);
