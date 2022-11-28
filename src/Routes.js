import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEvent from './modules/admin/AddEvent/AddEvent';
import AddMeeting from './modules/admin/AddMeeting/AddMeeting';
import AddMember from './modules/admin/AddMember/AddMember';
import Login from './modules/auth/login/Login';
import Habilidades from './modules/auth/register/Habilidades/Habilidades';
// import Register from './modules/auth/register/Register';
import Catalogo from './modules/catalogo/Catalogo';
import Eventos from './modules/catalogo/Eventos/Eventos';
import MembrosRAS from './modules/catalogo/MembrosRAS/MembrosRAS';
import Projetos from './modules/catalogo/Projetos/Projetos';
import Reunioes from './modules/catalogo/Reunioes/Reunioes';

export default function AppRoutes () {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/cadastro/habilidades" element={<Habilidades/>}/>
            <Route exact path="/catalogo" element={<Catalogo/>}/>
            <Route exact path="/membros" element={<MembrosRAS/>}/>
            <Route exact path="/membros/cadastrar" element={<AddMember/>}/>
            <Route exact path="/eventos" element={<Eventos/>}/>
            <Route exact path="/eventos/adicionar" element={<AddEvent/>}/>
            <Route exact path="/reunioes" element={<Reunioes/>}/>
            <Route exact path="/reunioes/adicionar" element={<AddMeeting/>}/>
            <Route exact path="/projetos" element={<Projetos/>}/>
          </Routes>
        </BrowserRouter>
    );
}