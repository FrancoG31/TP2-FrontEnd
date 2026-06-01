import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import Bitacora from './pages/Bitacora';
import Profile from './pages/Profile';
import Galeria from './pages/Galeria';
import ExploradorDatos from './pages/ExploradorDatos';
import ArbolComponentes from './pages/ArbolComponentes';
import ApiModule from './pages/ApiModule'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="bitacora" element={<Bitacora />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="explorador-datos" element={<ExploradorDatos />} />
          <Route path="arbol-componentes" element={<ArbolComponentes />} />
          <Route path="api" element={<ApiModule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}