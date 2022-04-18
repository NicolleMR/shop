import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./app.css";

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/petesita">Petesita</Link>
          </li>
          <li>
            <Link to="/motito">Motito</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="petesita" element={<h1>hackico</h1>} />
        <Route path="motito" element={<h1>nalita</h1>} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;