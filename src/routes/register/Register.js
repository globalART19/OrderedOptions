/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.css';

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  onSubmit() {
    var email,pass;
    email = this.email;
    pass = this.password;
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <input type="text" size="40" placeholder="Type your email" id="email" /><br />
          <input type="password" size="40" placeholder="Type your new password" id="password" /><br />
          <input type="passwordConf" size="40" placeholder="Re-type your new password" id="passwordConf" /><br />
          <input type="button" value="Submit" id="submit" />
          <p>Now to learn how to store user information!!</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);
