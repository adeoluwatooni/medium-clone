
import './App.css';

import Navbar from './components/Navbar';
import Categories from './components/Categories';
import StaffPicks from './components/StaffPicks';
import PostPreview from './components/PostPreview';
import RecommendedTopics from './components/RecommendedTopics';
import WhoToFollow from './components/WhoToFollow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">

        {/* left side of the body */}
        <main className="leftBodySection">
          <div className="timelineSection">
            <Categories/>
          </div>
          <div className="articles">
            <PostPreview />
            <PostPreview />
            <PostPreview />
          </div>
        </main> 

        {/* Right side of the body */}
        <aside className="rightBodySection">
          <section className="staffPicksSection">
            <StaffPicks />
            <RecommendedTopics />
            <WhoToFollow />
          </section> 

          <section className="recommendedTopicsSection"></section>
        </aside>
      </div>
    </div>
  );
}

export default App;
