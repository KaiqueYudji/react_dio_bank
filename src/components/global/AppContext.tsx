//O APP CONTEXT É UTILIZADO PARA CRIAR UMA VARIÁVEL GLOBAL DENTRO DO NOSSO SISTEMA


import { createContext, useEffect, useState } from "react";
import { get_all_local_storage } from "../../services/storage";
import { useNavigate } from "react-router-dom";


interface IApp_context {// tipo da minha variável global
    user: string;
    isLoggedIn: boolean;
    setisLoggedIn: (isLoggedIn: boolean) => void
  }
  
  export const App_context = createContext({} as IApp_context);
  
  export const AppContextProvider = ({ children }: any) => {// --> A partir deste AppContextProvider eu pooso acessar o valor de user de qualquer lugar da minha aplicação
     const [ isLoggedIn, setisLoggedIn] = useState<boolean>(false)// --> valor da minha variável global
     const user: string = "";// --> valor da minha  variáviel global
     

     useEffect( () => {
      const storage = get_all_local_storage();
      if(storage){
        setisLoggedIn(JSON.parse(storage).login);
      } 
 
     }, [])

    
     return (
      <App_context.Provider value={{ user, isLoggedIn, setisLoggedIn }}>
        { children }
      </App_context.Provider>
     )
  }//a minha variável children está reenderizado todo o meu sistema de rota, pois eu passei o meu componente de rota como tag filha a compomponetProvider