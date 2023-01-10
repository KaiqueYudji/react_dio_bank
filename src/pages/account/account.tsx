import { Box, Center, ChakraProvider, Input, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/card";
import { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { App_context } from "../../components/global/AppContext";



interface UserData{
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string
  }


function App() {
    const [user_data, Set_user_data] = useState<null | UserData>();
    const context = useContext(App_context);// destam maneira eu estou acessando a minha variável globl que eu defini na pasta global
    const navigate = useNavigate();

    const params  = useParams();//aqui nós estamos armazeando o valor que foi passado na nossa rota conta. ex {id: 12}, o objeto  tem um campo chamado "id" porque este é o nome do nosso parâmetro de rota

    !context.isLoggedIn  &&  navigate('/')// if my global variable: "isLoggedIn" equals the false, my code'll redirect the user to the home page 

    useEffect( () => {

        const get_data = async() => {
         const request: any | UserData = await api;
         Set_user_data(request)
        }
     
        get_data();
      }, [])


      const actualData = new Date();

     //interrogação antes de acessar o valor está falando: Se a minha variável user_data existi, eu vou acessaar o me campo id
      if(user_data && params.id !== user_data?.id){//this validation is speaking: is my variable userData isn't empty and my route parameter is different than my api response, i'll execute the if code
        navigate("/");
      }

  return (
    <>
    <Header/>
    <div className="App">
       
      <ChakraProvider>

        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px" alignContent="center">
       {/*  { user_data === null || user_data === undefined ? <h1>Loading...</h1> :<h1>Informações carregadas</h1>}{/* se a minha variável for igual a null ou undefined */} 
         
          
           
            <Center>
                <SimpleGrid columns={2} spacing={8} padding="25px">
                  { 
                    user_data === undefined || user_data === null 
                      ?  ( <Center> <Spinner size="xl" color="white"/> </Center> ) 
                      :  ( 
                        <>
                           <Card mainContent={`Bem vindo ${user_data?.name}`} content={`${actualData.getDay()} /${actualData.getMonth()} /${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} /> 
                           <Card mainContent="Saldo"  content={`R$ ${user_data.balance}`}/>
                        </>
                      )
                  }
                   
                    {/* <Card text="Informações da conta"/> */}
                </SimpleGrid>
            </Center>

        
          
        </Box>
       
      </ChakraProvider>
    </div>
    </>
  );
}

export default App;

