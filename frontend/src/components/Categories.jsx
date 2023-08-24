

import '../styles/./Categories.css'

const Categories = () => {

  const categories = ['For you', 'Following', 'React', 'Mindfulness', 'Podcast', 'JavaScript', 'Marketing', 'Freelancing', 'Digitalization', 'Creativity', 'Remote Work', 'Fitness', 'Humor', 'Space', 'Productivity', 'Dance'] 

  return (
      <div className="categories" >
        <a class="material-symbols-outlined" href="google.com">add</a>

        <span>
          {categories.map(category => {
            return (
              <span>
                <a href="google.com" className="category" >
                  {category}
                </a>
              </span>              
            )
          })}
        </span>
      </div>
  );
}

export default Categories;