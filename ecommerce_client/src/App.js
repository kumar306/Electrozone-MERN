import { BrowserRouter, Route,Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import "./App.css";
import Home from "./components/home";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/privateroute";
import Categories from "./components/categories";
import Mob from "./components/mob";
import Profile from "./components/profile";
import Cart from "./components/cart";
import Orders from "./components/orders";
import Check from "./components/check";

function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/register' component={Register}></Route>
    <PrivateRoute exact path='/home' component={Dashboard}></PrivateRoute> 
    <PrivateRoute exact path={['/home/mobiles','/home/laptops','/home/cameras','/home/audio']} component={Categories}></PrivateRoute>
    <PrivateRoute exact path='/home/:id' component={Mob}></PrivateRoute>
    <PrivateRoute exact path='/profile/:id' component={Profile}></PrivateRoute>
    <PrivateRoute exact path='/cart/:id' component={Cart}></PrivateRoute>
    <PrivateRoute exact path='/orders/:id' component={Orders}></PrivateRoute>
    </Switch>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
