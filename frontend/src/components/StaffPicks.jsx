

import '../styles/./StaffPicks.css'
import authorDP from "../assets/images/authorDP.jpeg"


const StaffPicks = () => {

  const stories = [
    {
      writer: 'Megan Finley Horowitz',
      snippet: 'Hey haole! If you’ve taken a trip to Maui, you need to give back'
    },
    {
      writer: 'Quintessa Williams',
      snippet: 'Henrietta Lacks, Subjectivity, & The Medical Exploitation of Black Women'
    },
    {
      writer: 'Christopher P Jones',
      snippet: 'The Art of Slowing Down'
    }
  ]


  return (
    <div className="staffSuggestions">
      <h3>
        Staff Picks
      </h3>
      {stories.map((story) => {
        return (
          <div className="preview">
            <div className="writerDetails">
              <img src={authorDP} alt="display pic" />
              <h6 className="writerName">
                {story.writer}
              </h6>
            </div>
          
          <h4 className="snippet">
              {story.snippet}
          </h4>
        </div>
        )
      })}
      <a href="google.com">See the full list</a>
    </div>
  )
}

export default StaffPicks;