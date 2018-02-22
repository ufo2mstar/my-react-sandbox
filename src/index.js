import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './bootswatch_cyborg.css'
import './themes/bootswatch/slate/bootstrap.css'
// import './themes/bootswatch/cyborg/bootstrap.css'
import './themes/bootswatch/cyborg/_variables.scss'
// import './themes/bootswatch/cyborg/_bootswatch.scss'


render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
