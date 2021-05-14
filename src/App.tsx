import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      {process.env.REACT_APP_FIREBASE_KEY}
      {process.env.REACT_APP_FIREBASE_DOMAIN}
      {process.env.REACT_APP_FIREBASE_PROJECT_ID}
      {process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}
      {process.env.REACT_APP_FIREBASE_SENDER_ID}
      {process.env.REACT_APP_FIREBASE_APP_ID}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
