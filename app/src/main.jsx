// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import {store} from './1_Setup/store.js';
// import App from './1_Setup/App.jsx'
// import {Provider} from "react-redux";
 

// createRoot(document.getElementById('root')).render(

  
//   <StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
 
//   </StrictMode>
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {store} from './2_Query/store.js';
import App from './2_Query/App.jsx'
import {Provider} from "react-redux";
 

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
 
  </StrictMode>
)
