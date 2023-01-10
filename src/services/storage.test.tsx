import { change_local_storage, create_local_storage, get_all_local_storage } from "./storage"

const dioBank = {
    login: false,
}

describe("storage", () => {
    const mock_set_item = jest.spyOn(Storage.prototype, 'setItem');

  it("deve retornar o objeto no local storage com a chave dioBank", () => {
    const mock_get_item = jest.spyOn(Storage.prototype, 'getItem');   
    get_all_local_storage();
    expect(mock_get_item).toHaveBeenCalledWith("dioBank")
  })

  it("deve criar o objeto do local storage", () => {
    const mock_set_item = jest.spyOn(Storage.prototype, 'setItem');
    create_local_storage();
    expect(mock_set_item).toHaveBeenCalledWith("dioBank", JSON.stringify(dioBank))
  })

  /* it("Deve alterar o valor do objeto no localStorage", () => {
     change_local_storage(dioBank);
     expect(mock_set_item).toHaveBeenCalledWith("dioBank", JSON.stringify(dioBank))
  }) */
})