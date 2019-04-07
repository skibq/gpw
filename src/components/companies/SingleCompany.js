import React from 'react'
import '@/assets/styles/companies/companies.scss'

export class SingleCompany extends React.Component {
  render() {
    const company = this.props.company;
    return (
      <li className="company">
        <div className="company__image-container">
          <img src={company.name} alt=""/>
        </div>
        <div className="company__info">
          <div className="company__line">
            <strong className="company__name">{company.name}</strong>
            <span className="company__symbol">{company.symbol}</span>
            <span className="company__website">{company.website}</span>
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
