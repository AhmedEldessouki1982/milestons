import Cards from './components/Cards';
import Nav from './components/Nav';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      {/*card sequance */}
      <Cards 
        targetDate = {"04/10/2023"} //month, day,Year
        activityName = {"63BAT BackFeeed"}
      />
      <Cards 
        targetDate = {"05/01/2023"} //month, day,Year
        activityName = {"62 Gas charging"}
      />
    </div>
  );
}

export default App;
