import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="border-b-4 border-green-700 text-center fixed top-0 bg-green-600
        font-bold w-full text-lg text-white">
            <li className="inline-block py-4">
                <Link to="/" className="pl-6 pr-8">Home</Link>
            </li>
            <li className="inline-block py-4">
                <Link to="/about" className="pl-6 pr-8">About</Link>
            </li>
            <li className="inline-block py-4">
                <Link to="/articles-list" className="pl-6 pr-8">ArticlesList</Link>
            </li>
        </ul>
      </nav>
    )
  }
}
