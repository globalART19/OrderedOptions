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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {/* <Link className={s.brand} to="/"> */}
            {/* <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" /> */}
            {/* <span className={s.brandTxt}>Sentient Solutions</span> */}
          {/* </Link> */}
          <div className={s.banner}>
            <Link className={s.bannerTitle} to="/">
              ORDERED OPTIONS
            </Link>
            <div className={s.bannerBottom}>
              <div className={s.spacer}></div>
              <p className={s.bannerDesc}>Identify and control your options investments</p>
              <Navigation className={s.nav} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
