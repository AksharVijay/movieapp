import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home/Home';
import Details from './Details/Details';

function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch >
            <Route path="/" exact component ={Home}/>
            <Route path="/Details/:slug" component = { Details }/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
