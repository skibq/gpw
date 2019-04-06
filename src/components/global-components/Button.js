import React from 'react'
import '@/assets/styles/global-components/button.scss'

export class Button extends React.Component {
  render() {
    return (
      <button type="button" className="button">{this.props.name}</button>
    )
  }
}
