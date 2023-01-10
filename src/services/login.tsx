import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { api } from "../api"
import { App_context } from "../components/global/AppContext"

export const Login = async(email: string, password: string): Promise<boolean> => {
  const data: any = await api;
 
  if(email !== data.email || password !== data.password){
    return false
  }

  return true
}