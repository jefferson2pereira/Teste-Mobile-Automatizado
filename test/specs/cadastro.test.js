import { expect, driver } from '@wdio/globals'
import cadastroPage from '../pageobjects/cadastro.page'
import homePage from '../pageobjects/home.page'


describe('Cadastro', () => {
  it('Deve Cadastrar com Sucesso', async () => {
    await homePage.openMenu('profile')
    await cadastroPage.cadastro('Jefferson', 'Pereira', 98999999999, 'jefferson2pereiraa@teste.com.br', 'teste123', 'teste123')
    
  })
})

