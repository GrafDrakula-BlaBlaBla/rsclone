import "./App.scss";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Initiatives from './Initiatives/Initiatives';
import MainPage from './MainPage/MainPage';
import EventCreationPage from './EventCreationPage/EventCreationPage';
import EventPage from './EventPage/EventPage';
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
          <Switch>
            <Route path="/" exact component={ MainPage }></Route>
            <Route path="/create" component={ EventCreationPage }></Route>
            <Route path="/event" component={ EventPage }></Route>
            <Route path="/profile" component={ Profile } />
            <Route path="/initiatives" component={ Initiatives } />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
