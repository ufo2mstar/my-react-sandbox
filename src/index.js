import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './bootswatch_cyborg.css'
// import './themes/bootswatch/slate/bootstrap.css'

import './themes/bootswatch/cyborg/bootstrap.css'
// import './themes/bootswatch/cyborg/_variables.scss'

// import './themes/bootswatch/cyborg/_bootswatch.scss'

// const theme = "slate";
// const theme = "cyborg";
// import `./themes/bootswatch/${theme}/bootstrap.css`
// import `./themes/bootswatch/${theme}/_variables.scss`

// import './themes/bootswatch/slate/bootstrap.css'
// import './themes/bootswatch/slate/_variables.scss'
// import './themes/bootswatch/slate/_bootswatch.scss'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// bootswatch
//scss
// @import "~bootswatch/dist/[theme]/variables";
// @import "~bootstrap/scss/bootstrap";
// @import "~bootswatch/dist/[theme]/bootswatch";

// import "bootswatch/dist/united/bootstrap.min.css";
// import "bootswatch/dist/united/_bootswatch.scss";
// import "bootswatch/dist/united/_variables.scss";

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
