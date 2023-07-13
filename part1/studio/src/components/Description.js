import React from 'react'
import styles from './Description.module.css';

function RecipeAuthor() {
   const authorLink = 'https://downshiftology.com/';
   const authorPhoto = 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/07/Lisa-Bryan-square-4.jpg';
   const authorName = 'Lisa Bryan';
   return (
      <div className={styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Blog name</a>
         </div>
      </div>
   );
}

function RecipeDescription() {
   return (
      <div>
         <div>
            <h1>Best Ever Guacamole</h1>
            <p>This is the best guacamole recipe as it’s simple to make and uses fresh, high-quality ingredients. 
               Authentic guacamole doesn’t contain fillers and unnecessary ingredients. All you need is avocados, onion, 
               tomatoes, cilantro, jalapeno pepper, lime juice, garlic, and salt. Easy and delicious!</p>
         </div>
         <RecipeAuthor />
      </div>
   )
}

export default RecipeDescription;