import logo from './logo.svg';
import './Style/style.scss'
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
    </>
  );
}

export default App;
