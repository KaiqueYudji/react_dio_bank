import { resolve } from "path"

const conta = {
     email:"yudjikaique@gmail.com",
     password:"kaique@123",
     name:"Kaique Yudji",
     balance:"2000",
     id: "1"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
       resolve(conta)
    }, 3000)
})