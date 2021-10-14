import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Switch>
          <Route path="/admin" component={AdminScreen} />
          <Route path="/order" component={OrderScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/policy" component={Policy} exact />
          <Route path="/cart" component={CartScreen} exact />
          <Route path="/" component={HomeScreen} exact />
          {/* <Route path="/home" component={HomeScreen} exact /> */}
        </Switch>
      </BrowserRouter>

      <BottomBar />
    </>
  );
}

export default App;
