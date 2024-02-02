import "./App.css";
import { IoSearchOutline } from "react-icons/io5";

function App() {
  return (
    <div className=" container">
      <div className="input-container">
        <input type="text" className="cityInput" placeholder="Search City" />
        <div className="search-icon">
          <IoSearchOutline />
        </div>
      </div>
    </div>
  );
}

export default App;
