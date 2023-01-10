import { ChakraProvider, Input, Box, Center, Button } from '@chakra-ui/react';
import { Login } from '../../services/login';
import { Header } from '../../components/Header/Header';
import { useState, useEffect, useContext } from 'react';
import { api } from '../../api';
import {  useNavigate } from 'react-router-dom';
import { App_context } from '../../components/global/AppContext';
import { change_local_storage, get_all_local_storage } from '../../services/storage';


interface UserData{
  email: string;
  password: string;
  name: string;
  id: string;
  balance: string;
}


function App() {
  const [email, setEmail] = useState("");
  const [user_data, Set_user_data] = useState<null | UserData>();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setisLoggedIn } = useContext(App_context);


 let storage = get_all_local_storage();
 if(storage){
    if(JSON.parse(storage).login = true){
      navigate(`/conta/${JSON.parse(storage).id}`)
    }
 }

 
 
 
  useEffect( () => {

   const get_data = async() => {
    const request: any | UserData = await api;
    Set_user_data(request)
   }

   get_data();
 }, [])




   const validate_user = async(email: string, password: string) => {
      const login = await Login(email, password);console.log("oi")

      if(login){
        alert("Login efetuadp com sucesso!✅");
        setisLoggedIn(true);
        change_local_storage({ user: user_data?.name, id:Number(user_data?.id), login: true })
        navigate(`/conta/${user_data?.id}`)
      }else{
        alert("Email inválido.")
      }

   }

   
   
   return (
    <>
    <Header/>
    <div className="App">
      <ChakraProvider>

        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px" alignContent="center">
       {/*  { user_data === null || user_data === undefined ? <h1>Loading...</h1> :<h1>Informações carregadas</h1>}{/* se a minha variável for igual a null ou undefined */} 
          
          <Box backgroundColor="white" borderRadius="25px" padding="15px">
            <Center>
              <h1>Faça o login</h1> 
              <br></br>
              {/*{user_data?.name} Esta interrogação está falando: se existir algo dentro da minha variável user_data, eu vou acessar a propriedade  name, se não existir, eu não vou acessá-la(com isso, consigo evitar um erro consequentemente, uma quebra de código.) */}
            </Center>

              <Input placeholder="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
              <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>

              <Center><Button onClick={() => {validate_user(email, password)} } size="sm" marginTop="20px" width="100%" colorScheme="teal">Entrar</Button></Center>
            
          </Box>
          
        </Box>
       
      </ChakraProvider>
    </div>
    </>
  );
}

export default App;

