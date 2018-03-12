// import React, {PropTypes} from 'react';
//
//
// const PageNotFound = ({location}) => {
//     return (
//         <div className="jumbotron">
//             <h1 className="display-1">Page Not Found</h1>
//             <p className="lead">404 Error</p>
//             <p>No match for the link <code>{location.pathname}</code></p>
//         </div>
//     );
// };
//
//
//
// PageNotFound.propTypes = {
//     location: PropTypes.object.isRequired
// };
//
//
//
// export default PageNotFound;

import React from 'react';
// import PropTypes from 'prop-types';

const PageNotFound = (props) => {

  const style404 = {
    fontSize: 72,
    fontWeight: 'bold'
  };

  let message = 'Page not found: ';
  if(props.text)
    message += props.text;

  if(props.location)
    message += props.text;

  console.log(message);
  return (
    <div style={{textAlign:'center'}}>
      {/*<h1>{message}</h1>*/}
      {/*<div style={style404}>404</div>*/}
      {/*<img src={'/assets/Black_Hole_Orange.png'} alt={'4o4'}/>*/}
      <div className="jumbotron">
        {/*<h5 className="display-1">Page Not Found</h5>*/}
        <h1>Page Not Found</h1>
        <p className="lead">404 Error</p>
        <p>No match for the link <code>{props.location.pathname}</code></p>
      </div>
    </div>
  );
};

// PageNotFound.propTypes = {
//   // text: PropTypes.string
// };

export default PageNotFound;
