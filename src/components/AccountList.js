import React from 'react'

class AccountList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.accounts.map((acc) => <li>{ acc.description }</li>)}
        </ul>
      )
    }
}

export default AccountList;
