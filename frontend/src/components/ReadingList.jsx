

import '../styles/ReadingList.css'
import bookmark from '../assets/images/bookmark_add_24.svg'

const ReadingList = () => {
  return (
    <div className="readingListSection">
      <h4>
        Reading list
      </h4>
      <div className='readingListText'>
          Click the <span className="inline-svg"><img src={bookmark} alt="" /></span> on any story to easily add it to your reading list or a custom list that you can share.
      </div>
    </div>
  );
}

export default ReadingList;


