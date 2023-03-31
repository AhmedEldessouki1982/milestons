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
        targetDate = {"04/26/2023"}
        activityName = {"63BAT BackFeed"}
       />
       <Cards
        targetDate = {"04/28/2023"}
        activityName = {"62 FirstFiring"}
       />

       <Footer />     
    </div>
  );
}

export default App;
