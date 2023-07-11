import React from 'react';
import classes from './BookList.module.css';

export default function BookList() {

   let pageTitle = "Book List";
   let book1 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipZHR6mgNe_ZhHAa9vNuL80ycPJ9AhGHZpP8nUVrjsR_-6evXKxA-oF2iKjH8cI8bHX2dBZ9w3wFWR7264E32U5cqHZq3pspbq2n9lupIIsHslnj99jH16fOTT4k0RI27cjM9Odr9X-yYJsmDVEwiHOpKTKPHDEp0zeHMiR0S0gS-8NHKp0nnOFUVk/s1000/57693338%20(1).jpg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzSaRW_-K33UghJKTi0k2Zq4usJzX3UcT6A&usqp=CAU";
   let book3 = "https://miro.medium.com/v2/resize:fit:1400/1*nXhlpUfYHD5uC0qOzL9Y5w.jpeg";

   return (
      <div>
         <h3 className={pageTitle}>Books To Read</h3>
         <img src={book1} alt="The Younger Wife" width={"300px"} /> <br />
         <img src={book2} alt="The Eyes of the Dragon"  width={"300px"} /> <br />
         <img src={book3} alt="Book of Night"  width={"300px"} />
      </div>
   );

}
