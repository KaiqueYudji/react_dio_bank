import { Login } from "./login";
import * as mockapi  from "../api";// o "* as api" significa que eu estou importanto TUDO do aqrquivo api.ts, não apenas a função

/* const mockSetIsLoggedIn = jest.fn();
jest.mock('react', () => ({
   ...jest.requireActual('react'),
   useContext: () => ({ 
     setisLoggedIn: mockSetIsLoggedIn
    })
}));


const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
      useNavigate: () => mockNavigate
}))


describe('login', () => {

  it("deve retornar true apenas se o email e a senha estiverem compatíveis", async() => {
    const response = await Login("yudjikaique@gmail.com", "kaique@123");
    expect(response).toBe(true)
  })
}) */