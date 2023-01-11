import { Routes, Route } from "react-router-dom";
import MasterLayout from "./Components/Layouts/MasterLayout";
import Home from "./Components/Pages/Home/Home";
import About from './Components/Pages/About/About';
import Category from './Components/Pages/Category/Category';
import AddCategory from "./Components/Pages/Category/AddCategory";
import UpdateCategory from "./Components/Pages/Category/UpdateCategory";
function App() {
  return (
    <Routes> 
      <Route path="/" element={<MasterLayout children={<Home />} />} />
      <Route path="/about" element={<MasterLayout children={<About />} />} />
      <Route path="/category" element={<MasterLayout children={<Category />} />} />
      <Route path="/add-category" element={<MasterLayout children={<AddCategory />} />} />
      <Route path="/category/edit/:id" element={<MasterLayout children={<UpdateCategory />} />} />
    </Routes>
  );
}

export default App;
