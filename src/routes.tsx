
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";


//SISTEMA DE LOGIN COM VARIÁVEL GLOBAL MUITO INTERESSANTE PARA UTILIZAR NO SITE DA MYSIMTRAVEL.

  import Home from './pages/home/home';
  import Account from "./pages/account/account";
  import InfoConta from "./pages/infoAccount/infoAccount";
  import { useContext } from "react";
  import { App_context } from "./components/global/AppContext";
  import Infopage from "./pages/infoPage/infopage";

export default function Rotas(){
   const { isLoggedIn } = useContext(App_context);

   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/conta/:id" element={ isLoggedIn ? <Account/> : <Home/> }/>  {/* Nós estamos falando que a minha rota conta precisa de um parâmetro de rota para ser exibida */} {/* quando eu uso o operador && é a mesma coisa que usar o "?" porém, quando eu uso o &&, eu não preciso utilizar um "else" */}
            <Route path="/infoConta" element={ <InfoConta/> }/>
            <Route path="/infopage" element={ <Infopage/>} />
        </Routes>
    </BrowserRouter>
   )
}