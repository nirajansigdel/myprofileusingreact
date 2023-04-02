import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Product from './component/Product/product';
import Project from './component/Project/Project';
import Resume from './component/Resume/Resume';

function App() {
  return (
  
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={ <Home/>}></Route>
    <Route exact path='/about' element={ <About/>}></Route>
    <Route exact path='/product' element={<Product/>}></Route>
    <Route exact path='/project' element={<Project/>}></Route>
    <Route exact path='/resume' element={<Resume/>}></Route>
    <Route exact path='/contact' element={ <Contact/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
