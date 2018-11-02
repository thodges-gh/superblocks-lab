// Copyright 2018 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.less';

export default class BottomBar extends Component {

    render() {
        const { chainPreferences, endpoint } = this.props;

        return (
            <div className={style.bottomStatusBar}>
                <span className={style.left}>
                    <span className={style.note}>Note</span>
                    <span className={style.noteText}>All files are stored in the browser only, download to backup</span>
                </span>
                <div className={style.right}>
                <span>Gas Limit: {chainPreferences.gasLimit}</span>
                <span>Gas Price: {chainPreferences.gasPrice} Wei</span>
                <span>{endpoint}</span>
                </div>
            </div>
        )
    }
}

BottomBar.propType = {
    gasLimit: PropTypes.number.isRequired,
    gasLimit: PropTypes.number.isRequired,
    endpoint:  PropTypes.string.isRequired,
}

