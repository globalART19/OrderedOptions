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
import s from './OptOfDay.css';
// import Link from '../Link';
import OptOfDayTable from '../OptOfDayTable';

// const activeOptList = [
//   { stock: 'TSLA', stockPrice: 167.45, optDetails: 'TSLA170217C00165000', optValue: 54.95, gainLoss: 12 },
//   { stock: 'MSFT', stockPrice: 64.00, optDetails: 'MSFT170217C00064000', optValue: 0.30, gainLoss: -0.02 },
// ];

class OptOfDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeOptList: [],
      stock: '',
      stockPrice: null,
      optDetails: '',
      optValue: null,
      gainLoss: null,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h3>Options of the Day</h3>
          <div>
            <OptOfDayTable />
            {/* activeOptList={activeOptList} */}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(OptOfDay);
