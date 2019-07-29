import React from 'react';

import Card from './Card';
import {seasonConfig} from '../helper.js';

export default({season}) => {
  const cards = seasonConfig[season].activities.map(activity => {
    return <Card key={activity.image.split('.')[0]} header={activity.header} content={activity.content} src={`\\img\\activities\\${season}\\${activity.image}`} alt={activity.image.split('.')[0]}/>
  });
  return <div className="ui cards">{cards}</div>;
};
