// Boolean

const contaPaga: boolean = false;

// Number

const idade: number =23;
const avalicao: number = 4.5;

// string

const nome: string = "Celia Regina";

// Array

const idades: number[] = [23, 28, 45, 32];
const idades2: Array<number> = [23, 45, 67, 90];

// Tuple
let jogadores: [string, string, string];
jogadores = ['Vitor', 'Marcelo', 'Carlos'];

// Enum
enum statusAprovacao{
    Aprovado = '001',
    Pendete = '002',
    Reprovado = '003'
}
const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado;

// Any aceita qualquer retorno qual o tipo vai ser dados.

const retornoApi = any [] = [123, 'Vitor', false];
const retonoApi2 = any {
    //............
};

// Void
function printaNaTela(msg: string): void {
console.log(msg);
}

// Null e Undefined

const u: undefined = undefined;
const n: null = null;

// Objeto
function criar(objeto: object){
    //...
}
criar({
    propriedade: 1,
})
criar ('Vitor') // Vai dar errado.

// Never
function loopInfinito(): never{
    while (true){ }
}

function erro(mensagem: string): never{
    throw new Error(mensagem)
}
function falha(){
    return erro('Algo falhou');
}

//Union Types
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}
exibirNota('10');
exibirNota(10);

const nota: string | number = 5;

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<string>;

const funcionarios: Funcionario [] = [{
    nome:'Vitor', 
    sobrenome:'Farias', 
    dataNascimento: new Date()
},{
    nome:'Reneto', 
    sobrenome:'Macedo', 
    dataNascimento: new Date()
}
];

function crachaFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionario:  ',funcionario.nome);
    }
}
// Usando o ponto de interrogação ?

let altura: number | null  = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; //  neste campo quero informar ao programa que ele não é obrigadorio/opcinal que não precisa, basta colocar o ponto de ? junto ao nome do campo.
}
// Type Assertion como fazer acerto em variaveis, mudança de tipo ou quando dizemos explicitamento qual o tipo da variavel. 

const minhaIdade: any = 23;
(minhaIdade as boolean).toString();

const input = document.getElementById('numero1') as HTMLInputElement; // exemplo 01
console.log(input.value);

const input = <HTMLInputElement>document.getElementById('numero1'); // exemplo 2
console.log(input.value);


