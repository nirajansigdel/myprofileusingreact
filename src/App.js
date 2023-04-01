import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Nav from './component/Nav/Nav';
import About from './component/About/About';
import Product from './component/Product/product';

function App() {
  return (
  
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={ <Nav/>}></Route>
    <Route exact path='/' element={ <Home/>}></Route>
    <Route exact path='/about' element={ <About/>}></Route>
    <Route exact path='/contact' element={ <Contact/>}></Route>
    <Route exact path='/product' element={<Product/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
