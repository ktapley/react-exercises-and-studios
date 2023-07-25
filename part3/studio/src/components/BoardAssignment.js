import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Quick and Easy", value: "Quick and Easy"},
      {label: "Sides and Dips", value: "Sides and Dips"},
      {label: "Mexican", value: "Mexican"}
   ];

   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}