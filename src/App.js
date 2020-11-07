import { Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main.js';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
