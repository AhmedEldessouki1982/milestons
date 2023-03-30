import Cards from './components/Cards';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      {/*card sequance */}
      <Cards
        targetDate = {"04/10/2023"}
        activityName = {"63BAT BackFeed"}
       />
       <Cards
        targetDate = {"05/01/2023"}
        activityName = {"62 GasCharging"}
       />

       <Footer />     
    </div>
  );
}

export default App;
