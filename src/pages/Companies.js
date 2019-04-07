import React from 'react'
import '@/assets/styles/companies/companies.scss'
import { connect } from 'react-redux'
import { SingleCompany } from '@/components/companies/SingleCompany'
import { Link } from "react-router-dom";

export class CompaniesComponent extends React.Component {
  render() {
    const list = this.props.companies.map((company) =>
      <ul className="companies">
          <SingleCompany company={company} />
      </ul>
    );
    return (
      <div>
        <h1 className="page-title">Companies</h1>
        { this.props.companies.length > 0 ? (
          list
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
