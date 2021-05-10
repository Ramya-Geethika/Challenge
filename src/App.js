import Home_Page from './components/welcome/welcome';
import Login_Page from './components/login/login';
import Buyer_Page from './components/buyer/buyer';
import Seller_Page from './components/seller/seller';

import {Route,BrowserRouter as Router,Switch,Link} from "react-router-dom";

function App() {
  return (
    <div>
       <Router>
          <Switch>
            <Route path='/' exact component={Home_Page}/>
            <Route path='/login' exact component={Login_Page}/>
            <Route path='/buyer' exact component={Buyer_Page}/>
            <Route path='/seller' exact component={Seller_Page}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
