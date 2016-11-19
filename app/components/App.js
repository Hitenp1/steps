// import redux, react
import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet';
import Navbar from './navbar/Navbar';

/* Material Theme components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default ({ children }) => (
  <MuiThemeProvider>
    <div id="main">
      <Helmet
        defaultTitle="Therapy"
        titleTemplate="%s | Therapy" />
      <Navbar />
      <div className="container content">
        { children }
      </div>
      <Navbar />
    </div>
  </MuiThemeProvider>
);