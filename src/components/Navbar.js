import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  
  //  Good point of this method :
  //  - Can use in both Class and Functional component
  //  - Can consume multiple contexts 
  //  Bad point
  //  - Look a little bit strange code

  render() { 

    return (
      <ThemeContext.Consumer>
        {(context) => {

        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <nav style = {{ background : theme.ui, color: theme.syntax }}>
            <h1>Context App</h1> 
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        );    
      }}
      </ThemeContext.Consumer>
    );
  }
}
 
export default Navbar;