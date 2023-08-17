
import './App.css';

import Navbar from './components/Navbar';
import Categories from './components/Categories';
import StaffPicks from './components/StaffPicks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        {/* left side of the body */}
        <div className="leftBodySection">
          <div className="timelineSection">
            <Categories/>
          </div>
          <div className="articles"></div>
        </div> 
        {/* Right side of the body */}
        <div className="rightBodySection">
          <section className="staffPicksSection">
            <StaffPicks />
          </section>
          <section className="recommendedTopicsSection"></section>
        </div>
      </div>
    </div>
  );
}

export default App;
