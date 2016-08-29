import React from 'react'
import styles from './Layout.scss'
import { getParameterByName } from '../utils/stringParsing'
import { login, setAuthToken, getAccounts } from '../api/MonzoApi'

import AccountList from './AccountList'

class Layout extends React.Component {
  componentWillMount() {
    let authToken = getParameterByName('code');
    if (authToken) {
      setAuthToken(authToken);
      getAccounts().then((accounts) => {
        this.setState(...this.state, accounts);
      });
      return this.setState({
        loggedIn: true
      })
    }
    this.setState({});
  }

  loginToMonzo() {
    login();
  }

  render() {
    if (!this.state.loggedIn) {
      return <button onClick={this.loginToMonzo}>Login to Monzo</button>
    }
    return (
      <AccountList accounts={this.state.accounts} />
    )
  }
}

export default Layout;
