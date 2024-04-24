import {BrowserRouter , Switch , Route} from 'react-router-dom'
import './App.css';
import Products from './components/Products';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/products" component={Products}/>
        <ProtectedRoute exact path="/about" component={About}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
