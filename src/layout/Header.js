import React from 'react'
import '@/assets/styles/header.scss'

export class Header extends React.Component {
  render() {
    return (
      <nav class="main-menu">
        <ul class="main-menu__list">
          <li class="main-menu__element">
            Track new company
          </li>
          <li>
            Companies
          </li>
        </ul>
      </nav>
    )
  }
}
