class User {
    constructor(email, senha, nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }

    imprime(){
        console.log('CLASS USER >>>> email : ' + this.email + ' || senha: ' + this.senha);
    }

}

module.exports = User;