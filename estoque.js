console.log("===== PARTE 1: DECLARAÇÃO E MODIFICAÇÃO BÁSICA =====");

// Questão 1.1
const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];

console.log("1.1 - Categorias:", categorias);

// Questão 1.2
const codigosProdutos = [101, 102, 103, 104];

const fornecedores = new Array(
    'TechSupply',
    'ModaExpress',
    'SuperFoods'
);

console.log("1.2 - Códigos dos produtos:", codigosProdutos);
console.log("1.2 - Fornecedores:", fornecedores);

// Questão 1.3
const primeiraCategoria = categorias[0];

categorias[1] = 'Calçados';

console.log("1.3 - Primeira categoria:", primeiraCategoria);
console.log("1.3 - Categorias atualizadas:", categorias);


// PARTE 2: INSERÇÃO, REMOÇÃO E PESQUISA

console.log("\n===== PARTE 2: INSERÇÃO, REMOÇÃO E PESQUISA =====");

// Questão 2.1
categorias.push('Livros');
console.log("Após adicionar Livros:", categorias);

categorias.pop();
console.log("Após remover o último elemento:", categorias);

categorias.unshift('Brinquedos');
console.log("Após adicionar Brinquedos:", categorias);

categorias.shift();
console.log("Após remover o primeiro elemento:", categorias);

// Questão 2.2
const tamanho = categorias.length;

console.log("2.2 - Tamanho do array:", tamanho);

// Questão 2.3
const indiceCalcados = categorias.indexOf('Calçados');

const temEletronicos = categorias.includes('Eletrônicos');

document.getElementById('operacoes').innerHTML = `
    <div class="resultado">
        <strong>Adicionar no final (push):</strong>
        Adicionamos "Livros" ao final do array.
    </div>

    <div class="resultado">
        <strong>Remover do final (pop):</strong>
        Removemos o último elemento do array.
    </div>

    <div class="resultado">
        <strong>Adicionar no início (unshift):</strong>
        Adicionamos "Brinquedos" ao início do array.
    </div>

    <div class="resultado">
        <strong>Remover do início (shift):</strong>
        Removemos o primeiro elemento do array.
    </div>

    <div class="resultado">
        <strong>Array final:</strong>
        ${JSON.stringify(categorias)}
    </div>

    <div class="resultado">
        <strong>Tamanho do array:</strong>
        ${categorias.length}
    </div>

    <div class="resultado">
        <strong>Índice de Calçados:</strong>
        ${indiceCalcados}
    </div>

    <div class="resultado">
        <strong>Contém Eletrônicos?</strong>
        ${temEletronicos}
    </div>
`;

console.log("2.3 - Índice de Calçados:", indiceCalcados);
console.log("2.3 - Eletrônicos está presente?", temEletronicos);


// PARTE 3: ITERAÇÃO

console.log("\n===== PARTE 3: ITERAÇÃO =====");

// Questão 3.1
console.log("3.1 - Usando for:");

let textoFor = '';

for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
    textoFor += `<li>${categorias[i]}</li>`;
}

// Questão 3.2
console.log("3.2 - Usando for...of:");

let textoForOf = '';

for (const categoria of categorias) {
    console.log(categoria);
    textoForOf += `<li>${categoria}</li>`;
}


// PARTE 4: ARRAYS DE OBJETOS

console.log("\n===== PARTE 4: ARRAYS DE OBJETOS =====");

const produtos = [
    { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
    { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
    { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

// Questão 4.1
const primeiroProduto = produtos[0].nome;

console.log("4.1 - Primeiro produto:", primeiroProduto);


// Questão 4.2 - filter

const produtosBaratos = produtos.filter(
    produto => produto.preco < 300.00
);

console.log("4.2 - Produtos baratos:", produtosBaratos);

const precos = [50, 150, 200, 350, 400];

const multiplosDe100 = precos.filter(
    preco => preco % 100 === 0
);

console.log("4.2 - Preços múltiplos de 100:", multiplosDe100);


// Questão 4.3 - reduce

const quantidades = [2, 3, 5, 10];

const totalItens = quantidades.reduce(
    (total, quantidade) => total + quantidade,
    0
);

console.log("4.3 - Total de itens:", totalItens);

const valorTotalEstoque = produtos.reduce(
    (total, produto) => total + produto.preco * produto.estoque,
    0
);

console.log(
    "4.3 - Valor total do estoque: R$",
    valorTotalEstoque.toFixed(2)
);


// Questão 4.4 - map

const precosOriginais = [100, 200, 300];

const precosComDesconto = precosOriginais.map(
    preco => preco * 0.9
);

console.log("4.4 - Preços com desconto:", precosComDesconto);

const nomesProdutos = produtos.map(
    produto => produto.nome
);

console.log("4.4 - Nomes dos produtos:", nomesProdutos);


// Questão 4.5 - slice e sort

const produtosOrdenados = produtos.slice().sort(
    (a, b) => a.preco - b.preco
);

console.log("4.5 - Produtos ordenados por preço:", produtosOrdenados);


// Questão 4.6 - some e find

const existeEstoqueBaixo = produtos.some(
    produto => produto.estoque < 5
);

console.log("4.6 - Existe produto com estoque menor que 5?", existeEstoqueBaixo);

const inventario = [
    { nome: 'Teclado', estoque: 15 },
    { nome: 'Mouse', estoque: 2 },
    { nome: 'Headset', estoque: 10 }
];

const existeEstoqueCritico = inventario.some(
    produto => produto.estoque < 5
);

console.log("4.6 - Existe estoque crítico?", existeEstoqueCritico);

const produtoCritico = inventario.find(
    produto => produto.estoque < 5
);

console.log("4.6 - Primeiro produto crítico:", produtoCritico);


// EXIBIÇÃO DOS RESULTADOS NA PÁGINA HTML PELO DOM

document.getElementById('categorias').innerHTML = `
    <div class="resultado">
        <strong>Questão 1.1:</strong> ${JSON.stringify(categorias)}
    </div>

    <div class="resultado">
        <strong>Questão 1.3:</strong> Primeira categoria: ${primeiraCategoria}
    </div>

    <div class="resultado">
        <strong>Questão 2.1:</strong> Categorias após as operações:
        ${JSON.stringify(categorias)}
    </div>

    <div class="resultado">
        <strong>Questão 2.2:</strong> Tamanho do array: ${tamanho}
    </div>

    <div class="resultado">
        <strong>Questão 2.3:</strong> Índice de Calçados: ${indiceCalcados}
    </div>

    <div class="resultado">
        Eletrônicos está presente? ${temEletronicos}
    </div>
`;

document.getElementById('codigos').textContent =
    'Códigos dos produtos: ' + JSON.stringify(codigosProdutos);

document.getElementById('fornecedores').textContent =
    'Fornecedores: ' + JSON.stringify(fornecedores);

document.getElementById('iteracao').innerHTML = `
    <h3>Questão 3.1 - Laço for</h3>
    <ul>${textoFor}</ul>

    <h3>Questão 3.2 - Laço for...of</h3>
    <ul>${textoForOf}</ul>
`;


// Criar tabela de produtos

let linhasProdutos = '';

produtos.forEach(produto => {
    linhasProdutos += `
        <tr>
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${produto.estoque}</td>
        </tr>
    `;
});

document.getElementById('produtos').innerHTML = `
    <p><strong>Questão 4.1:</strong> ${primeiroProduto}</p>

    <table>
        <thead>
            <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Estoque</th>
            </tr>
        </thead>

        <tbody>
            ${linhasProdutos}
        </tbody>
    </table>
`;


// Exibir todos os resultados dos métodos avançados

document.getElementById('resultados').innerHTML = `
    <div class="resultado">
        <strong>Questão 4.2 - Produtos baratos:</strong>
        <pre>${JSON.stringify(produtosBaratos, null, 2)}</pre>
    </div>

    <div class="resultado">
        <strong>Questão 4.2 - Múltiplos de 100:</strong>
        ${JSON.stringify(multiplosDe100)}
    </div>

    <div class="resultado">
        <strong>Questão 4.3 - Total de itens:</strong>
        ${totalItens}
    </div>

    <div class="resultado">
        <strong>Questão 4.3 - Valor total do estoque:</strong>
        R$ ${valorTotalEstoque.toFixed(2)}
    </div>

    <div class="resultado">
        <strong>Questão 4.4 - Preços com desconto:</strong>
        ${JSON.stringify(precosComDesconto)}
    </div>

    <div class="resultado">
        <strong>Questão 4.4 - Nomes dos produtos:</strong>
        ${JSON.stringify(nomesProdutos)}
    </div>

    <div class="resultado">
        <strong>Questão 4.5 - Produtos ordenados por preço:</strong>
        <pre>${JSON.stringify(produtosOrdenados, null, 2)}</pre>
    </div>

    <div class="resultado">
        <strong>Questão 4.6 - Existe estoque abaixo de 5?</strong>
        ${existeEstoqueBaixo}
    </div>

    <div class="resultado">
        <strong>Questão 4.6 - Existe estoque crítico?</strong>
        ${existeEstoqueCritico}
    </div>

    <div class="resultado">
        <strong>Questão 4.6 - Primeiro produto crítico:</strong>
        <pre>${JSON.stringify(produtoCritico, null, 2)}</pre>
    </div>
`;

console.log("\n===== ATIVIDADE FINALIZADA =====");