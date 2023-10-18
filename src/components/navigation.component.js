import React,{Component} from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{
    render(){
        return(
            
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <Link class="navbar-toggler-icon"></Link>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <a class="nav-item nav-link active" href="/">Home </a>
      </li>

      <li class="nav-item active"> 
      <a class="nav-item nav-link" href="/NewShop">New Shop</a>
      </li>
      <li class="nav-item active"> 
      <a class="nav-item nav-link" href="/NewProduct">New Product</a>
      </li>


    
  
    </ul>
  </div>
</nav>
        )
    }


}