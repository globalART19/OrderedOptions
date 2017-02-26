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
import s from './AccountStatusTable.css';
// import Link from '../Link';
// import ActiveOptRow from '../ActiveOptRow';
//
const acctStatusData = [
  {balance: 1252.00, longStock: 627.00, options: 431.00, cash: 194.00}
]

class AccountStatusTable extends React.Component {
  render() {
    // const acctStatusData = [];
    // activeOptList.forEach((activeOptListItem) => {
    //    rows.push(<ActiveOptRow activeOptListItem={activeOptListItem} key={activeOptListItem.optDetails} />);
    // });

    return (
      // <div id="astable">
      <table className={s.astable}>
        <thead>
        </thead>
        <tbody>
          <tr>
            <th className="Balance">Balance:</th>
            <th className={s.astabledata}>$1234.00</th>
            {/* {acctStatusData.balance} */}
          </tr>
          <tr>
            <td className="Long-Stock">&nbsp;&nbsp;-Long Stock:</td>
            <td className={s.astabledata}>$123.00</td>
            {/* {acctStatusData.longStock} */}
          </tr>
          <tr>
            <td className="Options">&nbsp;&nbsp;-Options:</td>
            <td>{acctStatusData.options}</td>
          </tr>
          <tr>
            <td className="Cash">&nbsp;&nbsp;-Cash:</td>
            <td>{acctStatusData.cash}</td>
          </tr>
          <tr>
            <th className="Returns">Returns</th>
          </tr>
          <tr>
            <td className="Week-Return">&nbsp;&nbsp;-Month:</td>
            <td>{acctStatusData.weekReturn}</td>
          </tr>
          <tr>
            <td className="Month-Return">&nbsp;&nbsp;-Month:</td>
            <td>{acctStatusData.monthReturn}</td>
          </tr>
          <tr>
            <td className="YTD-Return">&nbsp;&nbsp;-YTD:</td>
            <td>{acctStatusData.ytdReturn}</td>
          </tr>
          <tr>
            <td className="All-Time-Return">&nbsp;&nbsp;-All Time:</td>
            <td>{acctStatusData.allTimeReturn}</td>
          </tr>
        </tbody>
      </table>
    // </div>
    );
  }
}

// class ActiveOptRow extends React.Component {
//   render() {
//     const { activeOptListItem } = this.props;
//     return (
//       <tr>
//         <td>{activeOptListItem.stock}</td>
//         <td>{activeOptListItem.stockPrice}</td>
//         <td>{activeOptListItem.optDetails}</td>
//         <td>{activeOptListItem.optValue}</td>
//         <td>{activeOptListItem.gainLoss}</td>
//       </tr>
//     );
//   }
// }

export default withStyles(s)(AccountStatusTable);
