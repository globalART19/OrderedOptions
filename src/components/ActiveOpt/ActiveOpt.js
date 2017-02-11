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
import s from './ActiveOpt.css';
import Link from '../Link';

const activeOptList = [
  { stock: 'TSLA', stockPrice: 167.45, optDetails: 'TSLA170217C00165000', optValue: 54.95, gainLoss: 12 },
  { stock: 'MSFT', stockPrice: 64.00, optDetails: 'MSFT170217C00064000', optValue: 0.30, gainLoss: -0.02 },
];

class ActiveOpt extends React.Component {
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
    // const activeOptList = [
    //   { stock: 'TSLA', stockPrice: 167.45,
    // optDetails: 'TSLA170217C00165000', optValue: 54.95, gainLoss: 12 },
    //   { stock: 'MSFT', stockPrice: 64.00,
    // optDetails: 'MSFT170217C00064000', optValue: 0.30, gainLoss: -0.02 },
    // ];

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h3>Active Options</h3>
          <div>
            <ActiveOptTable activeOptList={activeOptList} />
          </div>
        </div>
      </div>
    );
  }
}

class ActiveOptTable extends React.Component {

  render() {
    const rows = [];
    activeOptList.forEach((activeOptList) => {
      rows.push(<ActiveOptRow activeOptList={activeOptList} key={activeOptList.stock} />);
    },
    );
    return (
      <table>
        <thead>
          <tr>
            <th className="Stock">Stock</th>
            <th className="Stock-price">Stock Price</th>
            <th className="Opt-details">Option Details</th>
            <th className="Opt-value">Opt Value</th>
            <th className="Gain-loss">+/-</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>Covered Calls: </tr> */}
          {rows}
        </tbody>
      </table>
    );
  }
}

class ActiveOptRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{activeOptList.stock}</td>
        <td>{activeOptList.stockPrice}</td>
        <td>{activeOptList.optDetails}</td>
        <td>{activeOptList.optValue}</td>
        <td>{activeOptList.gainLoss}</td>
      </tr>
    );
  }
}

export default withStyles(s)(ActiveOpt);
