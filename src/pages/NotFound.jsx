import React from 'react';

import notFoundImg from '@icons/error-page.png';

import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="NotFound">
      <img src={notFoundImg} alt="" />
      <p>Error 404 Not Found</p>
    </div>
  );
};

export default NotFound;
