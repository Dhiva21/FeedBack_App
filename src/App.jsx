import LoginPage from "./pages/LoginPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Canteen from "./pages/Canteen";
import Department from "./pages/Department";
import SuperAdmin from "./pages/SuperAdmin";
import { MenuProvider } from "./Context/MenuContext";

const App = () => {
  
  return (
    <>
 <MenuProvider >
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/department" element={<Department />} />
        <Route path="/superadmin" element={<SuperAdmin />} />
      </Routes>
    </Router>
    </MenuProvider>
    </>
  )
}

export default App