import {Routes, Route, Navigate} from "react-router-dom"
import './App.css';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Contact } from './pages/Contact/Contact';
import { ProductDetail } from './pages/ProductDetail';
import { ProductList } from './pages/ProductList';
import { Admin } from "./pages/Admin";
import { PageNotFound } from "./pages/PageNotFound";
import { ContactEu } from "./pages/Contact/ContactEu";
import { ContactIn } from "./pages/Contact/ContactIn";
import { ContactUs } from "./pages/Contact/ContactUs";
function App() {
  const user = true;
  
  return (
    <div className ='App'>
    <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products" element={<ProductList/>}></Route>
        <Route path="products/1001" element={<ProductDetail/>}></Route>
        <Route path="contact" element={<Contact/>}>
          <Route path="in" element={<ContactIn/>}/>
          <Route path="eu" element={<ContactEu/>}/>
          <Route path="us" element={<ContactUs/>}/>
        </Route>
        <Route path="/admin" element = {user? <Admin/> :<Navigate to="/"/>}></Route>
        <Route path = "*" element={<PageNotFound/>} ></Route>
      </Routes>
      </main>
      <Footer/> 
    </div>
  );
}

export default App;
