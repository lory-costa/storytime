import "./App.css";
import Home from "./pages/Home";
import Story from "./pages/Story";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <Route exact path='/' component={Home} />
      <Route path='/story' component={Story} />
    </div>
  );
}

export default App;
