import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
<<<<<<< HEAD
        
=======
>>>>>>> b4395e829ac0a614e9380f57ac44cea183986234
      </Routes>
    </BrowserRouter>
  );
}

export default App;