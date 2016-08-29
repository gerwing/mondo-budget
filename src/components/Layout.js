import React from 'react'
import styles from './Layout.scss'
import { getParameterByName } from '../utils/stringParsing'
import { login } from '../api/MonzoApi'

import TransactionList from './TransactionList'

class Layout extends React.Component {
  componentWillMount() {
    if (getParameterByName('code')) {
      return this.setState({
        authToken: getParameterByName('code')
      })
    }
    this.setState({});
  }

  loginToMonzo() {
    login();
  }

  render() {
    if (!this.state.authToken) {
      return <button onClick={this.loginToMonzo}>Login to Monzo</button>
    }
    return (
      <TransactionList />
    )
  }
}

export default Layout;
