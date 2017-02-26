/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AccountStatus.css';
import AccountStatusTable from '../AccountStatusTable'
// import Link from '../Link';

class AccountStatus extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2>Account Status</h2>
          <AccountStatusTable />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AccountStatus);
