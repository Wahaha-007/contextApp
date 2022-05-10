import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          
          <Navbar />
          
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
                   
          <ThemeToggle />
          
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
