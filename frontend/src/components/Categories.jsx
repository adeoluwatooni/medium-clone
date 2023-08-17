

import './Categories.css'

const Categories = () => {

  const categories = ['Foryou', 'Following', 'React', 'Mindfulness', 'Podcast', 'JavaScript', 'Marketing', 'Freelancing', 'Digitalization', 'Creativity', 'Remote Work', 'Fitness', 'Humor', 'Space', 'Productivity', 'Dance'] 

  return (
      <div className="categories" >
        <a class="material-symbols-outlined" href="google.com">add</a>

        <>
          {categories.map(category => {
            return (
              <span>
                <a href="google.com" className="category" >
                  {category}
                </a>
              </span>              
            )
          })}
        </>
      </div>
  );
}

export default Categories;