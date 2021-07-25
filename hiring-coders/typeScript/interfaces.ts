interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Vitor',
        email: 'vitor@vitor.com.br'
    }
}

function setUser(usuario: Usuario) {
   //..
}