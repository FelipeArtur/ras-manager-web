import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Habilidades from './modules/auth/register/Habilidades/Habilidades';
// import Login from './modules/auth/login/Login';
import Register from './modules/auth/register/Register';
import Catalogo from './modules/catalogo/Catalogo';
import Eventos from './modules/catalogo/Eventos/Eventos';
import MembrosRAS from './modules/catalogo/MembrosRAS/MembrosRAS';

export default function AppRoutes () {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Register/>}/>
            <Route exact path="/cadastro-habilidades" element={<Habilidades/>}/>
            <Route exact path="/catalogo" element={<Catalogo/>}/>
            <Route exact path="/membros" element={<MembrosRAS/>}/>
            <Route exact path="/eventos" element={<Eventos/>}/>
          </Routes>
        </BrowserRouter>
    );
}