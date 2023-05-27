import axios from "axios";
import Register from "./Register";

function App() {
  axios.defaults.url = 'http://localhost:4000';
  axios.defaults.withCredentials= true;
  return (
    <div>
      <Register />
    </div>
  )
}

export default App;