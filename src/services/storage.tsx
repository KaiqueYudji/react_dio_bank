//LoocalStorage = é uma maneira de armazenar valores localmente em seu navegador. geralmente é utilizado quando efetuamos o login em um sistema e queremos continuar logados mesmo após sair do site.

//o localStorage pode guardar dados do SITE MYSIMTRAVEL.

interface IDioBank{
  user?: string;
  id?: number;
  login: boolean;
}

const dioBank = {
    user:'',
    id:0,
    login:false
}


export const get_all_local_storage = (): string | null => {
    return localStorage.getItem('dioBank');
}


export const create_local_storage = (): void => {
  localStorage.setItem("dioBank", JSON.stringify(dioBank));//esta função faz a conversão de um objeto em string ex: '{"login":false}'
}


export const change_local_storage = (dioBank: IDioBank): void => {
  return localStorage.setItem("dioBank", JSON.stringify(dioBank) )
}

//para criar uma nova propriedade dentro do localStorage mós utilizamos a função: .setItem('nomecampo', valorcampo)
//para capturar esse valor, utilizamos a função: .getItem("nomecampo")