import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home/Home";
import ListaPlanos from "./components/planos/listaplanos/ListaPlanos";
import "./App.css";
import Login from "./pages/home/login/Login";
import { AuthProvider } from "./context/UserContext";
import ListaUsuarios from "./components/usuario/listausuario/ListaUsuarios";
import Cadastro from "./pages/home/cadastro/Cadastro";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/planos" element={<ListaPlanos />} />
            <Route path="/usuario" element={<ListaUsuarios />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
