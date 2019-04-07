import React from 'react'
import '@/assets/styles/companies/companies.scss'
import { connect } from 'react-redux'
import { SingleCompany } from '@/components/companies/SingleCompany'

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
        { list }
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
