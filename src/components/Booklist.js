import React, { Component, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class Booklist extends Component {
  
//   //  Good point of this method :
//   //  - Clean code  
//   //  Bad point
//   //  - Can use in class component only

//   static contextType = ThemeContext; 

//   render() { 

//     const { isLightTheme, light, dark }   = this.context;
//     const theme = isLightTheme ? light : dark;

//     return (
//       <div className='book-list' style = {{ background : theme.bg, color: theme.syntax }}>
//         <ul>
//           <li style={{ background : theme.ui }}>the way of kings</li>
//           <li style={{ background : theme.ui }}>the name of the wind</li>
//           <li style={{ background : theme.ui }}>the final empire</li>
//         </ul>
//       </div>  
//     );
//   }
// }


const Booklist = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;

  return ( 
    <div className='book-list' style = {{ background : theme.bg, color: theme.syntax }}>
      <ul>
        {books.map(book => {
            return (
              <li key={book.id} style={{ background : theme.ui }}>{ book.title }</li>
            );
        })}
      </ul>
    </div>  
  );
}
 
export default Booklist;