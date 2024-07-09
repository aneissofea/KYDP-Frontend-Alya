//import { Home } from '@mui/icons-material';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { useState } from 'react';


function App() {

  //state isLoggedIn should be here so can be passed to Home and Login 
  const [values, setValues] = useState({
    //username: "",
    isLoggedIn: false
  });

  //function state
  const setisLoggedIn = () => {
    setValues.isLoggedIn = !values.isLoggedIn
  };



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
      <Login setLogIn={setisLoggedIn}/>
    </>
  );
}

export default App;
