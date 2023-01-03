//teste unitário da função soma.
import { soma, multiplica } from './soma';

describe('soma', () => {//describe reecebe no primeiro parâmetro o título do teste, e no segundo parâmetro começa a escrever o teste.
   it('deve somar 1 ao número informado', () => {//o primeiro parâmetro do it vai descrever a função do teste, o segundo parâmetro é a função do teste
      const value: number = soma(1);
      expect(value).toBe(2); //eu estou esperando que o valor dde retorno da minha função seja 2
      //value = ARRANGE
      //soma() = AT
   })

   it('deve multiplicar o número por 2', () => {
    const value = multiplica(2,2);
    expect(value).toBe(4);
   })

   it('deve multiplicar o número por 3', () => {
    const value = multiplica(2,3);
    expect(value).toBe(6);
   })


})


//SETUP

//ARRANGE -> configuração que nós precisamos fazer para o teste comecar a funcionar
//AT -> ação que nós esperamos que o teste faça