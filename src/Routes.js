import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './modules/auth/login/Login';
import Catalogo from './modules/catalogo/Catalogo';
import MembrosRAS from './modules/catalogo/MembrosRAS/MembrosRAS';

export default function AppRoutes () {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/catalogo" element={<Catalogo/>}/>
            <Route exact path="/membros" element={<MembrosRAS/>}/>
          </Routes>
        </BrowserRouter>
    );
}