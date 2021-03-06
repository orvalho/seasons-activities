import './SeasonDisplay.css';

import React from 'react';

import CardList from './CardList';
import Attribution from './Attribution';
import {getSeason} from '../helper.js';
import {seasonConfig} from '../helper.js';

export default({lat}) => {
  const season = getSeason(lat, new Date().getMonth());
  return (<div className={`${season} season-display`}>
    <h2>{`${seasonConfig[season].header}...`}</h2>
    <h3>{`${season} activities`}</h3>
    <CardList season={season}/>
    <Attribution/>
  </div>);
};
