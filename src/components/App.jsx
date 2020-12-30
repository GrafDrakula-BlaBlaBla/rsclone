import "./App.scss";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Calendar from './Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-section">
        <Calendar/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
