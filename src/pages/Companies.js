import React from 'react'
import '@/assets/styles/companies/companies.scss'
import { connect } from 'react-redux'
import { SingleCompany } from '@/components/companies/SingleCompany'
import { Link } from "react-router-dom";

export class CompaniesComponent extends React.Component {
  render() {
    let list;
    if (this.props.companies) {
      list = this.props.companies.map((company, index) =>
        <SingleCompany company={company} index={index} key={company.name}/>
      );
    }
    return (
      <div>
        <h1 className="page-title">Companies</h1>
        { ( this.props.companies && this.props.companies.length > 0 ) ? (
          <ul className="companies">
            { list }
          </ul>
          ) : (
          <div>There are no companies yet. <Link to={`/new-company`}>Track your first company</Link></div>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  companies: state.companies
});

export const Companies = connect(
  mapStateToProps,
  null
)(CompaniesComponent);
