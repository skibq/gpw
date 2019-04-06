import React from 'react'
import { Logo } from './Logo.js'
import '@/assets/styles/header/header.scss'
import { BrowserRouter as Router, Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar__container container">
          <Logo />
          <nav className="main-menu">
            <ul className="main-menu__list">
              <li className="main-menu__element">
                <Link to={`/new-company`}>Track new company</Link>
              </li>
              <li className="main-menu__element">
                <Link to={`/`}>Companies</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
