import "./App.scss";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Calendar from './Calendar/Calendar';
import Map from './Map/Map';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-section">
        <Map/>
        <Calendar/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
