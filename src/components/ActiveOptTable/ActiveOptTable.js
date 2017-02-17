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
import s from './ActiveOptTable.css';
import Link from '../Link';
// import ActiveOptTable from './ActiveOptTable';

const activeOptList = [
  { stock: 'TSLA', stockPrice: 167.45, optDetails: 'TSLA170217C00165000', optValue: 54.95, gainLoss: 12 },
  { stock: 'MSFT', stockPrice: 64.00, optDetails: 'MSFT170217C00064000', optValue: 0.30, gainLoss: -0.02 },
];

class ActiveOptTable extends React.Component {
  render() {
    const rows = [];
    activeOptList.forEach((activeOptListItem) => {
      rows.push(<ActiveOptRow activeOptListItem={activeOptListItem} key={activeOptListItem.stock} />);
    });
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
    const { activeOptListItem } = this.props;
    return (
      <tr>
        <td>{activeOptListItem.stock}</td>
        <td>{activeOptListItem.stockPrice}</td>
        <td>{activeOptListItem.optDetails}</td>
        <td>{activeOptListItem.optValue}</td>
        <td>{activeOptListItem.gainLoss}</td>
      </tr>
    );
  }
}

export default withStyles(s)(ActiveOptTable);
