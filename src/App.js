import * as React from "react";
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Outlet, Link, Navigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import SignIn from "./components/Login/signIn";
import { products } from "./products";
/*import { categories } from "./categories";*/
/*import Categories from "./components/Categories/Categories";*/
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";


const App = () => {
  /*const params = useParams();*/
  const [user, setUser] = React.useState({});
  const [cart, setCart] = React.useState([]);
  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    axios.get('/users.json').then(res => {
      const usersList = res.data;
      localStorage.setItem('usersList', JSON.stringify(usersList));
    })
    localStorage.setItem('productsList', JSON.stringify(products));
    /*localStorage.setItem('categoriesList', JSON.stringify(categories));*/
  }, []);

  const handleAddToCart = (product) => {
    let cartList = cart;
    cartList.push(product);
    setCart(cartList);
  }

  const handleUpdateCartQty = (prodID, quantity) => {

  }

  const handleRemoveFromCart = (prodID) => {
    let cartList = cart;
    for (var i = 0; i < cartList.length; i++) {
      if (cartList[i].prodID === prodID) {
        cartList.splice(i, 1);
      }
    }
  }

  const handleEmptyCart = () => {
    setCart([]);
  }
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route element={<Navbar cartTotal={cart} />}>
          {/*<Route index element={user!== undefined ? <Home /> : <Navigate to = "/login"/>} />*/}
          {/* <Route index element={<Categories/>} /> */}
          <Route index element={<Products handleAddToCart={handleAddToCart} />} />
          <Route path="cart" element={
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />} />
          <Route path="orders" element={<Orders />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App;