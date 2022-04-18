import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "../Header/Header";
import "./app.css";

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="petesita" element={<h1>hackico</h1>} />
        <Route path="motito" element={<h1>nalita</h1>} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;