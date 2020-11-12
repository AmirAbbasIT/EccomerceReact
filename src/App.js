import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import ProductListing from './Components/Product/ProductListing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ProductDetail from './Components/Product/ProductDetail';


function App() {
  return (<>
    <Navbar/>
    <Router>
    <Switch>
      <Route exact path="/" component={ProductListing}></Route>
      <Route  path="/products" component={ProductListing}></Route>
      <Route  path="/product/:id" component={ProductDetail}></Route>
    </Switch>
    </Router>

  </>);
}

export default App;
