

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
      {stories.map((story => {
        return (
        <div className="preview">
          <h6 className="writer">
            {story.writer}
          </h6>
          <h4 className="snippet">
              {story.snippet}
          </h4>
        </div>
        )
      }))}
    </div>
  )
}

export default StaffPicks;