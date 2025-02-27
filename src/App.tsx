import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home/Home";
import ListaPlanos from "./components/planos/listaplanos/ListaPlanos";
import "./App.css";

import { AuthProvider } from "./context/UserContext";
import ListaUsuarios from "./components/usuario/listausuario/ListaUsuarios";
import Cadastro from "./pages/home/cadastro/Cadastro";
import Login from "./pages/home/login/Login";
import FormPlanos from "./components/planos/formplanos/FormPlanos";
import CardSobreNos from "./pages/sobrenos/cardsobrenos/CardSobreNos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/planos" element={<ListaPlanos />} />
            <Route path="/cadastrarplano" element={<FormPlanos />} />
            <Route path="/editarplano/:id" element={<FormPlanos />} />
            <Route path="/sobrenos" element={<CardSobreNos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
