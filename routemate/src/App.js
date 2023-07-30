import {Routes, Route, Navigate} from "react-router-dom"
import { Header, Footer } from './components';
import { 
  Home,
  Contact,
  ProductDetail,
  ProductList,
  Admin,
  PageNotFound,
  ContactEu,
  ContactIn,
  ContactUs

 } from './pages';

 import './App.css';

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
