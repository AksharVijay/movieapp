import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Title from './Title/Title';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Title/>
        </div>
    </BrowserRouter>
  );
}

export default App;
