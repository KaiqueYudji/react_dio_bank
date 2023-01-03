import "./header.css"


export const Header = () => {
    return(
        <div className="header">
            <div>Seja bem-vindo a DioBank!</div>

            <div className="options">
                <div className="create_account">Crie a sua conta!</div>
                <div className="login">Já tem uma conta? Faça <b>LOGIN</b></div>
            </div>
        </div>
    )
}