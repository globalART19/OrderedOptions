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
import s from './ActiveOptRow.css';

class ActiveOptRow extends React.Component {
  render() {
    const { activeOptListItem } = this.props;
    return (
      <tr className="AORow">
        <td>{activeOptListItem.stock}</td>
        <td>{activeOptListItem.stockPrice}</td>
        <td>{activeOptListItem.optDetails}</td>
        <td>{activeOptListItem.optValue}</td>
        <td>{activeOptListItem.gainLoss}</td>
      </tr>
    );
  }
}

export default withStyles(s)(ActiveOptRow);
