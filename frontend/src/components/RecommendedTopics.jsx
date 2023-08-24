
import '../styles/./RecommendedTopics.css'

const RecommendedTopics = () => {

  const topics = ['Startup', 'UX', 'Leadership', 'Front End Development', 'Typescript', 'Personal Development', 'Inspiration']

  return (
    <div className="recommendedTopicsDiv">
      <section className="recommendedTopicsSection">
        <h3>
          Recommended Topics
        </h3>
        <div className="topicDiv">
          {topics.map((topic) => {
            return (
              <div className="topic">
                <a className='topicsLinks' href="google.com">{topic}</a>
              </div>
            )
          })}
        </div>
        <div className="seeMoreDiv">

        </div>
        <a className='recommended-SeeMore' href="google.com">See more topics</a>
      </section>
    </div>
    
  );
}

export default RecommendedTopics;