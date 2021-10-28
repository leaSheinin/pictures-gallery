import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path={'/gallery'} component={Gallery} />
       
       <Redirect to="/gallery" />
     </Router>
    </div>
  );
}

export default App;
