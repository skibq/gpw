import React from 'react'
import '@/assets/styles/companies/companies.scss'

export class SingleCompany extends React.Component {
  render() {
    return (
      <li className="company">
        <div className="company__image">
        </div>
        <div className="company__info">
          <div className="company__line">
            <span className="company__symbol">{this.props.company.symbol}</span>
          </div>
          <div className="company__line">
            <span className="company__price">{this.props.company.price}</span>
            <span
              className={"company__change company__change" + (this.props.company.positiveChange ? '--positive' : '--negative') }
            >
              {this.props.company.change}
            </span>
            <span
              className={"company__change-percent company__change-percent" + (this.props.company.positiveChange ? '--positive' : '--negative') }
            >
              ({this.props.company.changePercent}%)</span>
            <span className="company__closed">Closed: {this.props.company.closed}</span>
          </div>
          <div className="company__line">
            <span> another informations </span>
          </div>
        </div>
      </li>
    )
  }
}
