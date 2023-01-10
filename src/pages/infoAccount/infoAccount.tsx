import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function App(){
    return(
      <>
        <Text fontSize='3xl' fontWeight='bold'>Informações da Conta</Text>
        <Link to="/conta/1">Conta</Link>
      </>
    )
}