import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// bootswatch
//scss
// @import "~bootswatch/dist/[theme]/variables";
// @import "~bootstrap/scss/bootstrap";
// @import "~bootswatch/dist/[theme]/bootswatch";

// let theme = 'united';
import "bootswatch/dist/cyborg/bootstrap.min.css";
// import "bootswatch/dist/united/bootstrap.min.css";
// import "bootswatch/dist/united/_bootswatch.scss";
// import "bootswatch/dist/united/_variables.scss";

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
