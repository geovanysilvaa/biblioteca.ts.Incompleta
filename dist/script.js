"use strict";
class Livro {
    constructor(titulo, categoria, paginas, ano) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.paginas = paginas;
        this.paginaatual = 0;
        this.ano = ano;
    }
    lerLivro() {
        let lendo = true;
        while (lendo) {
            alert(this.paginas[this.paginaatual]);
            let opcao = Number(prompt('📘 ' + (this.titulo) + '- pagina' + (this.paginaatual + 1) + '/' + (this.paginas.length) + ' \n' +
                "\n1 -> proxima pagina\n2 -> pagina anterior\n3 -> sair da leitura"));
            if (opcao == 1) {
                if (this.paginaatual < this.paginas.length - 1) {
                    this.paginaatual = this.paginaatual + 1;
                }
                else {
                    alert("voce ja esta na ultima pagina.");
                }
            }
            else if (opcao == 2) {
                if (this.paginaatual > 0) {
                    this.paginaatual = this.paginaatual - 1;
                }
                else {
                    alert("Você está na primeira página.");
                }
            }
            else if (opcao == 3) {
                lendo = false;
                alert("voce saiu da leitura.");
            }
            else {
                alert("opção invalida.");
            }
        }
    }
}
class Biblioteca {
    constructor() {
        this.livros = [
            new Livro("Bruxa de Blair", "Terror", paginaslivros1, 2000),
            new Livro("acao", " Acao", paginaslivros2, 1000),
            new Livro("romance", "Romance", paginaslivros3, 1000)
        ];
        this.livrosadicionado = [];
    }
    AdicionarLivro() {
        let menu = "📚 Livros disponíveis:\n";
        for (let i = 0; i < this.livros.length; i++) {
            menu = menu + +(i + 1) + '->' + (this.livros[i].titulo) + '(' + (this.livros[i].categoria) + ')' + '(' + (this.livros[i].ano) + '). ' + '\n';
        }
        let resposta;
        resposta = String(prompt(menu + 'Digite um dos titulo acima para adicionar:'));
        let jaexiste;
        jaexiste = false;
        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].titulo == resposta) {
                jaexiste = true;
            }
        }
        if (!jaexiste) {
            alert('Esse livro nao esta na lista!');
        }
        else {
            let jacadastrado;
            jacadastrado = false;
            for (let i = 0; i < this.livrosadicionado.length; i++) {
                if (this.livrosadicionado[i] == resposta) {
                    jacadastrado = true;
                }
            }
            if (jacadastrado) {
                alert('Esse livro ja esta cadastrado!');
            }
            else {
                this.livrosadicionado.push(resposta);
                alert('Livro adicionado com sucesso!');
            }
        }
    }
    Listalivros() {
        if (this.livrosadicionado.length === 0) { //se o array livrosadicionado estiver vazio voce nao pode ver a lista
            alert("Nenhum livro cadastrado.");
            return;
        }
        let menu = "📚 Livros cadastrados:\n";
        for (let i = 0; i < this.livrosadicionado.length; i++) {
            menu = menu + (i + 1) + '->' + (this.livrosadicionado[i]) + '\n';
        }
        let resposta = Number(prompt(menu + "Escolha o número do livro para ler:")); //pergunta pro usuario qual livro ele que ler.
        if (resposta >= 1 && resposta <= this.livrosadicionado.length) { //aqui vai verificar se o numero escolhido arteriormente esta nesse intervalo
            let titulo = this.livrosadicionado[resposta - 1]; //aqui titulo recebe a resposta do prompt escolha 
            for (let i = 0; i < this.livros.length; i++) { //percorre o array livros
                if (this.livros[i].titulo == titulo) { ///verifica se o valor que esta em titulo e igual ao array livros
                    this.livros[i].lerLivro();
                    return;
                }
            }
        }
        alert('Opção invalida');
    }
    RemoverLivros() {
        if (this.livrosadicionado.length == 0) { //verifica se tem livros adicionado no array livros 
            alert('Nenhum livro adicionado para remover'); //se nao tiver ele emprime essa memsagem
        }
        else {
            let lista = 'Lista: \n';
            for (let i = 0; i < this.livrosadicionado.length; i++) {
                lista = lista + (i + 1) + '->' + (this.livrosadicionado[i]) + '\n';
            }
            let resposta;
            resposta = Number(prompt(lista + 'Escolha o numero do livro para remover:')); //pergunta para o usuario
            if (resposta >= 1 && resposta <= this.livrosadicionado.length) { //so permite resposta >= 1 <=tamanho do array
                this.livrosadicionado.splice(resposta - 1, 1); //remove o livro na pos certa ex:(1 - 1,1); = pos 1 - 1 = 0; remove um elemento
                alert('Livro removido com sucesso');
            }
            else {
                alert('Opcao invalida');
            }
        }
    }
    Buscarlivros() {
        let resposta;
        resposta = String(prompt('Pesquisar livros: \n'));
        let jaexiste;
        jaexiste = false;
        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].titulo == resposta) {
                jaexiste = true;
            }
        }
        if (!jaexiste) {
            alert('Lista: \n\n Livro nao encontrado');
        }
        else {
            let resultado = "Resultado: \n";
            for (let i = 0; i < this.livros.length; i++) {
                if (this.livros[i].titulo == resposta) {
                    resultado = resultado + " -> " + (this.livros[i].titulo) + '\n';
                    alert(resultado);
                }
            }
        }
    }
}
let paginaslivros1 = [
    "📖 Página 1 – A Jornada Começa\n Era outubro de 1994...",
    "📖 Página 2 – A Floresta Fecha os Caminhos\n Os dias seguintes trouxeram confusão...",
    "📖 Página 3 – O Desaparecimento e o Medo\n Na manhã seguinte, Josh desapareceu...",
    "📖 Página 4 – A Casa e o Fim\n Na última noite, seguindo os gritos de Josh..."
];
let paginaslivros2 = [
    "📖 Página 1 – aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "📖 Página 2 – bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "📖 Página 3 – cccccccccccccccccccccccccccccccccccccc",
    "📖 Página 4 – dddddddddddddddddddddddddddddddddddddd"
];
let paginaslivros3 = [
    "📖 Página 1 – ffffffffffffffffffffffffffffffffffffff",
    "📖 Página 2 – ffffffffffffffffffffffffffffffffffffff",
    "📖 Página 3 – gggggggggggggggggggggggggggggggggggggg",
    "📖 Página 4 – hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
];
let minhaBiblioteca = new Biblioteca(); //cria o biblioteca
let menu;
menu = true;
while (menu) {
    let resposta;
    resposta = String(prompt('Lista: \n1 -> Adiciona livros\n2 -> Lista de livros\n3 -> Remove livros\n4 -> Buscar livros\n5 -> Sair'));
    if (resposta == '1') {
        minhaBiblioteca.AdicionarLivro();
    }
    if (resposta == '2') {
        minhaBiblioteca.Listalivros();
    }
    if (resposta == '3') {
        minhaBiblioteca.RemoverLivros();
    }
    if (resposta == '4') {
        minhaBiblioteca.Buscarlivros();
    }
    if (resposta == '5') {
        menu = false;
    }
}
