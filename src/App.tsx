import { ChakraProvider, Input, Box, Center, Button } from '@chakra-ui/react';
import { login } from './services/login';


function App() {
  return (
    <div className="App">
      <ChakraProvider>

        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">

          <Box backgroundColor="white" borderRadius="25px" padding="15px">
            <Center>
              <h1>Faça o login</h1> 
            </Center>

              <Input placeholder="email" />
              <Input placeholder="password" />

              <Center><Button onClick={login} size="sm" marginTop="20px" width="100%" colorScheme="teal">Entrar</Button></Center>
            
          </Box>
          
        </Box>
       
      </ChakraProvider>
    </div>
  );
}

export default App;
