import { Button, Flex, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { change_local_storage, get_all_local_storage } from "../../services/storage";
import { App_context } from "../global/AppContext";
import "./header.css";


export const Header = () => {
    const { isLoggedIn, setisLoggedIn } = useContext(App_context);
    const navigate = useNavigate()

    const storage = get_all_local_storage();console.log(storage)

    const logout = () => {
        setisLoggedIn(false);
        navigate('/');
        change_local_storage({login: false});
    }

    return(
        <Flex backgroundColor="orange" padding="5px">
        <div className="header">
            <h1 className="text">DioBank</h1>
        </div>
        
        {
            isLoggedIn && (//se miha variável isLoggedIn for verdadeiro, eu vou exibir o botão de sair da conta, se não, vou ocultar o botão
                <>
                <Spacer />
                <h1>Olá { storage && JSON.parse(storage).user }({ storage && JSON.parse(storage).email })</h1>
                <Spacer />
                <Button backgroundColor="white" width="40px" onClick={ () => logout() }>
                    Sair
                </Button>

                </>
            )
        }

        </Flex>
    )
}