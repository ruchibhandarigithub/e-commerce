
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         
          <Nav />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Products />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/update/:id" element={<UpdateProduct />} />
              <Route path="/logout" element={<h1>logout Component</h1>} />
              <Route path="/profile" element={<h1>Profile Component</h1>} />
            </Route>
            
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
