import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import SignUp from './Pages/SignUp';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './Pages/MyOrder';


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/myorders' element={<MyOrder />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
