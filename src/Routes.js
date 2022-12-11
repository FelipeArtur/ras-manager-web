import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEvent from './modules/admin/AddEvent/AddEvent';
import AddMeeting from './modules/admin/AddMeeting/AddMeeting';
import AddMember from './modules/admin/AddMember/AddMember';
import AddProject from './modules/admin/AddProject/AddProject';
import Login from './modules/auth/login/Login';
import Habilidades from './modules/auth/register/Habilidades/Habilidades';
import Catalogo from './modules/catalogo/Catalogo';
import InfoDev from './modules/catalogo/components/InfoDev/InfoDev';
import EventoView from './modules/catalogo/Eventos/components/EventoView/EventoView';
import Eventos from './modules/catalogo/Eventos/Eventos';
import AtualizarCargo from './modules/catalogo/MembrosRAS/components/AtualizarCargo/AtualizarCargo';
import MembroHabilidades from './modules/catalogo/MembrosRAS/components/MembroHabilidades/MembroHabilidades';
import MembroView from './modules/catalogo/MembrosRAS/components/MembroView/MembroView';
import MembrosRAS from './modules/catalogo/MembrosRAS/MembrosRAS';
import ProjetoView from './modules/catalogo/Projetos/components/ProjetoView/ProjetoView';
import Projetos from './modules/catalogo/Projetos/Projetos';
import ReuniaoView from './modules/catalogo/Reunioes/components/ReuniaoView/ReuniaoView';
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
            <Route exact path="/membro/:id" element={<MembroView/>}/>
            <Route exact path="/habilidade-membro/:id" element={<MembroHabilidades/>}/>
            <Route exact path="/eventos" element={<Eventos/>}/>
            <Route exact path="/evento/:id" element={<EventoView/>}/>
            <Route exact path="/eventos/adicionar" element={<AddEvent/>}/>
            <Route exact path="/reunioes" element={<Reunioes/>}/>
            <Route exact path="/reuniao/:id" element={<ReuniaoView/>}/>
            <Route exact path="/reunioes/adicionar" element={<AddMeeting/>}/>
            <Route exact path="/projetos" element={<Projetos/>}/>
            <Route exact path="/projeto/:id" element={<ProjetoView/>}/>
            <Route exact path="/projetos/adicionar" element={<AddProject/>}/>

            <Route exact path="/atualizar-cargo-membro/:id" element={<AtualizarCargo/>}/>

            {/* ------------------------------------------------------------- */}

            <Route exact path="/infodev" element={<InfoDev/>}/>

          </Routes>
        </BrowserRouter>
    );
}