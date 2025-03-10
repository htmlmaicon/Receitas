import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './assets/pages/Home';
import Formulario from './assets/pages/Formulario';
import Erro from './assets/pages/Erro';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/formulario" element={<Formulario/>}/>
                <Route path="/*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;