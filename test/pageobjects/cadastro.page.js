import { $, browser } from '@wdio/globals'
import { isAwaitExpression } from 'typescript'


class CadastroPage {

get signUp(){
    return $('id:signUp')
}

get firshname(){
    return $('id:firstName')
}
get lastName(){
    return $('id:lastName')}

get phone(){
    return $('id:phone')}

get email(){
    return $('id:email')}

get password(){
    return $('id:password')
}
get repassword(){
    //return $('id:repassword')
    return $('id:repassword')
}
get btncreate(){
    return $('id:create')
}
//metodo
async cadastro (firshname,lastname,phone,emailnew,passwordnew,passwordnew1) {
    
    await this.signUp.click()

    await this.firshname.setValue(firshname)
    await this.lastName.setValue(lastname)
    await this.phone.setValue(phone)
    await this.email.setValue(emailnew)
    await this.password.setValue(passwordnew)
    await this.repassword.setValue(passwordnew1)
    await this.btncreate.click()
}
}

export default new CadastroPage();
