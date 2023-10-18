import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'


import NewProduct from './components/newproduct.component';
import NewShop from './components/newshop.components';
import Navbar from './components/navigation.component';


function App() {
  return (

    <Router>
      <Navbar></Navbar>

    <Routes>


     <Route path='/NewProduct' Component={NewProduct}/>
     <Route path='/NewShop' Component={NewShop}/>


    </Routes>
    



    </Router>


  );
}

export default App;
