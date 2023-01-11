import { Box, ChakraProvider, Text } from '@chakra-ui/react';

import { Header } from '../../components/Header/Header';

export default function App(){
    return(
        <>
        <Header/>
        <div className="App">
          <ChakraProvider>
    
            <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px" alignContent="center">

              </Box>
              
         
          </ChakraProvider>
        </div>
        </>
    )
}