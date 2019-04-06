import React from 'react'
import '@/assets/styles/companies/companies.scss'
import { Input } from '@/components/global-components/Input';
import { Button } from '@/components/global-components/Button';

export class NewCompany extends React.Component {
  render() {
    return (
      <div className="new-company">
        <h1 className="page-title">Add new company</h1>
        <Input label="Company symbol" placeholder="PKOBP" name="company-symbol" />
        <p className="new-company__newinfo">Provide the stock exchange symbol of a company you want to track</p>
        <div className="new-company__track-btn">
          <Button name="Track" />
        </div>
      </div>
    )
  }
}
