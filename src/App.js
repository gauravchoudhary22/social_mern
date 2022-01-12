// import './App.css';
import Login from './components/login'
import Register from './components/register'
// import Dashboard from './components/dashboard'
// import Create from './components/create'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Social Media MERN</h1><hr/>
    <Link to="/login">Login</Link> |{" "} 
    <Link to="/register">Register</Link> |{" "}
    </div>
  );
}

export default App;
