import '../styles/./PostPreview.css'

import prevImg from '../assets/images/blog-preview-image.jpeg'
import authorDP from "../assets/images/authorDP.jpeg"



const PostPreview = () => {
  
  return (

    <section className="previewSection">

      <div className="authorDetails">
        <img src={authorDP} alt="author pic" />
        <span>Davide Wietlisbach</span>
        <>.</>
        <span>Aug 4</span>
      </div>

      <div className='postSnippetDiv'>
        <div className="previewTexts">

          <div className="postSnippetTexts">
            <h3>
              I used React wrong for years, upgrade your code with React Hooks.
            </h3>
            <p>
              Use React Hooks to decouple your code from presentation and logic to achieve higher reusability and maintainability. I have been working...
            </p>
          </div>

          <div className="baseSection">
            <div className="leftbaseSection">
              <div className="postCategory">
              React
              </div>

              <span className="readTime">
                3 min read
              </span>
            </div>

            <div className="rightbaseSection">
              <button>
                <span class="material-symbols-outlined">bookmark_add</span>
              </button>
              <button>
                <span class="material-symbols-outlined">do_not_disturb_on</span>
              </button>
              <button>
                <span class="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="prevImgDiv">
          <figure className="previewImage">
            <img src={prevImg} alt="previewimg" />
          </figure>
        </div>
      </div>
    </section>
    
  );
}

export default PostPreview;