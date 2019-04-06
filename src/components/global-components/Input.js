import React from 'react'
import '@/assets/styles/global-components/input.scss'

export class Input extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.name} className="input__label">{this.props.label}</label>
        <input type="text" onChange={this.props.onChange} placeholder={this.props.placeholder} id={this.props.name} className="input"/>
      </>
    )
  }
}
