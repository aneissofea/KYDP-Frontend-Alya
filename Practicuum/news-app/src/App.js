//import { Home } from '@mui/icons-material';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';


function App() {

  //state isLoggedIn should be here so can be passed to Home and Login 
  //function state

  return (
    /**<div>
      <Router>
        <Routes>
          <Route path="/" {...props} element={<Login/>} />
          <Route path="/home" {...props} element={<Home/>} />
        </Routes>
      </Router> 
    </div> */

    // check if isLoggedIn is true -> Home
    // check if isLoggedIn is false -> Login

    <>
      <Login />
    </>
  );
}

export default App;
