import React from 'react';

export default({src, alt, header, content}) => {
  return (<a className="ui card" href="/">
    <div className="image">
      <img src={src} alt={alt}/>
    </div>
    <div className="content">
      <div className="header">{header}</div>
      <div className="description">{content}</div>
    </div>
  </a>);
};
