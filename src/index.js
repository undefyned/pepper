import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from './themes/CustomThemeProvider';

ReactDOM.render(
  // <React.StrictMode>
  <CustomThemeProvider>
    <Router>
    <CssBaseline />
    <App />
    </Router>
    </CustomThemeProvider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

let deferredPrompt;
const addBtn = document.querySelector('#add-button');

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          addBtn.style.display = 'none';
        } else {
          addBtn.style.display = 'block';
        }
        deferredPrompt = null;
      });
  });
});

if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
  addBtn.style.display = 'none';
}
