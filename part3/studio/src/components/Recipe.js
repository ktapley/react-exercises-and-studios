const RecipeAuthor = () => {
   let authorLink = "https://downshiftology.com/";
   let authorPhoto = "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/07/Lisa-Bryan-square-4.jpg";
   let authorName = "Lisa Bryan";

   return (
      <div>
         <img src={authorPhoto} alt = "Author Photo" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['avocados', 'tomatoes', 'lime', 'onion', 'garlic'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Best Ever Guacamole</h1>
            <p>This is the best guacamole recipe as it’s simple to make and uses fresh, high-quality ingredients. 
               Authentic guacamole doesn’t contain fillers and unnecessary ingredients. All you need is avocados, onion, 
               tomatoes, cilantro, jalapeno pepper, lime juice, garlic, and salt. Easy and delicious!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-2-2.jpg" alt="Recipe Photo" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}