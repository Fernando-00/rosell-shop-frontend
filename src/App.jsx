import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import Profile from "./pages/Profile";
import Order from "./pages/Order";


const App = () => {

  

  const user = useSelector(state=> state.persistedReducer.user?.currentUser);

  console.log(user)

  

  

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
            
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Product/>}/> 


          <Route path="/cart" element={<Cart/>}/>

          <Route path="/success/:id" element={<Success/>}/>


          <Route path="/login" element={ user ? <Navigate to="/"/> : <Login/>}/>  
          <Route path="/register" element={ user ? <Navigate to="/"/> : <Register/>}/>
          <Route path="/profile" element={ user ? <Profile/> : <Navigate to="/"/>}/>
          <Route path="/profile/orders" element={ user ? <Order/> : <Navigate to="/"/>}/>

           
        </Routes>
        </ScrollToTop>
    </Router>
  );
};

export default App;