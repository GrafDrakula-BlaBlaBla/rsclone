import "./App.scss";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Calendar from './Calendar/Calendar';
import Map from './Map/Map';
import Profile from './Profile/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-section">
          <Map/>
          <Calendar/>
          <Switch>
            <Route path="/" exact><div>Main</div></Route>
            <Route path="/profile" component={ Profile } />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
