import React from 'react'
import { Logo } from './Logo.js'
import '@/assets/styles/layout/header.scss'
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header className="top-bar">
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
      </header>
    )
  }
}
