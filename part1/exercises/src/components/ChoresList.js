// export default function ChoresList () {
//    return <p>No content is here!</p>;
// }

import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Finish GA5!", "Survive React exercises", "Make it to class on time", "Drink all the coffee"];
      return (
         <div>
            <h3 className={classes.choresHeading}>Chores To Do:</h3>
            <ol>
               <li className={classes.choresText}>{chores[0]}</li>
               <li className={classes.choresText}>{chores[1]}</li>
               <li className={classes.choresText}>{chores[2]}</li>
               <li className={classes.choresText}>{chores[3]}</li>
            </ol>
         </div>
      );
   }
}

export default ChoresList;