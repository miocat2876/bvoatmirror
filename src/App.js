import { Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main.js';
import ProductList from './components/kimCom/ProductList';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Bottom from './components/bottom/Bottom';
import Login from './components/kimCom/login/Login';
import Mypage from './components/kimCom/mypage/Mypage';
import Cart from './components/kimCom/cart/Cart';
import Search from './components/kimCom/search/Search';
import './styles/basic.css';

import './App.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ProductList" component={ProductList} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Mypage" component={Mypage} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Search" component={Search} />
        </Switch>
        <Bottom/>
      </div>
    </>
  );
}

export default App;
