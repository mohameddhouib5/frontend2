import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Listarticle from "./components/articles/Listarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";
import Listcategorie from "./components/categories/Listcategorie";
import Editcategorie from "./components/categories/Editcategorie";
import Viewcategorie from "./components/categories/Viewcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Listscategorie from "./components/scategorie/Listscategorie";
import Insertscategorie from "./components/scategorie/Insertscategorie";
import Editscategorie from "./components/scategorie/Editscategorie";
import Viewscategorie from "./components/scategorie/Viewscategorie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Menu />
       
        <Routes>
          <Route path="/articles" element={<Listarticle />} />
          <Route path="/articles/add" element={<Insertarticle />} />
          <Route path="/articles/edit/:id" element={<Editarticle />} />
          <Route path="/articles/view/:id" element={<Viewarticle />} />
          <Route path="/categories" element={<Listcategorie />} />
          <Route path="/categories/add" element={<Insertcategorie />} />
          <Route path="/categories/edit/:id" element={<Editcategorie />} />
          <Route path="/categories/view/:id" element={<Viewcategorie />} />
          <Route path="/scategories" element={<Listscategorie />} />
          <Route path="/scategories/add" element={<Insertscategorie />} />
          <Route path="/scategories/edit/:id" element={<Editscategorie />} />
          <Route path="/scategories/view/:id" element={<Viewscategorie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
