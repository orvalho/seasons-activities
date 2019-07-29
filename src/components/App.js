import React from 'react';

import useLocation from './useLocation';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

export default() => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <div><SeasonDisplay lat={lat}/></div>;
  } else {
    content = <Loader message="Please accept location request"/>;
  }

  return <div>{content}</div>;
};
