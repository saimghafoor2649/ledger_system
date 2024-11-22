import React from 'react';
import './signup.css';
function Home() {
  return (
    <div>
         <h2 className='text-center text-light shadow'>Home</h2>  
         <nav  class="navbar navbar-expand-lg navbar-light bg-secondary">
           <div class="container-fluid">
             <a class="navbar-brand" href="/login">Login</a>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                  <li class="nav-item d-inline">
                  <a class="nav-link active" href="/register">Signup</a>
        </li>
        <li class="nav-item d-inline">
          <a class="nav-link" href="/home">Home</a>
        </li>
        <li class="nav-item d-inline">
          <a class="nav-link" href="#">Add Customer</a>
        </li>
        <li class="nav-item d-inline">
          <a class="nav-link" href="#">Add Product</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    
  )
}

export default Home
