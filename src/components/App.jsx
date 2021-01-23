import './App.scss';
import './common.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Initiatives from './Initiatives/Initiatives';
import MainPage from './MainPage/MainPage';
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
            <Route path="/create"><EventPage section='create'/></Route>
            <Route path="/event"><EventPage/></Route>
            <Route path="/completion"><EventPage section='completion'/></Route>
            <Route path="/profile" component={ Profile } />
            <Route path="/initiatives" component={ Initiatives } />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}    
// import { BrowserRouter } from "react-router-dom";
// import "./App.scss";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <div className="main-section"></div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
