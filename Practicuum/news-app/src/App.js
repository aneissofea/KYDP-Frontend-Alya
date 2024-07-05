import './App.css';
import Login from './components/Login';
//import Home from './components/Home';


function App() {
  return (
    /**<div>
      <Router>
        <Routes>
          <Route path="/" {...props} element={<Login/>} />
          <Route path="/home" {...props} element={<Home/>} />
        </Routes>
      </Router> 
    </div> */

    <>
      <Login />
    </>
  );
}

export default App;
