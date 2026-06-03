// =========================================================================
// FUNCIONALIDADE 1: Sistema de Validação do Formulário (Exigência do Professor)
// =========================================================================
const formCadastro = document.getElementById('formCadastro');

formCadastro.addEventListener('submit', function(evento) {
    // Impede o formulário de enviar e recarregar a página antes da validação
    evento.preventDefault(); 

    // Capturando os elementos e valores digitados
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const tipoSkateInput = document.getElementById('tipoSkate');

    const nomeValor = nomeInput.value.trim();
    const emailValor = emailInput.value.trim();
    const tipoSkateValor = tipoSkateInput.value;

    // Capturando os campos onde as mensagens de erro vão aparecer
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroTipo = document.getElementById('erro-tipo');

    // Resetando erros e estilos anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroTipo.textContent = "";
    nomeInput.style.borderColor = "";
    emailInput.style.borderColor = "";
    tipoSkateInput.style.borderColor = "";

    let formularioValido = true;

    // Validação do campo Nome
    if (nomeValor === "") {
        erroNome.textContent = "O nome não pode ficar vazio.";
        nomeInput.style.borderColor = "red";
        formularioValido = false;
    } else if (nomeValor.length < 3) {
        erroNome.textContent = "Digite um nome válido (mínimo 3 caracteres).";
        nomeInput.style.borderColor = "red";
        formularioValido = false;
    }

    // Validação do campo E-mail
    if (emailValor === "") {
        erroEmail.textContent = "O e-mail é obrigatório.";
        emailInput.style.borderColor = "red";
        formularioValido = false;
    } else if (!emailValor.includes("@") || !emailValor.includes(".")) {
        erroEmail.textContent = "Por favor, digite um e-mail válido com '@' e ponto.";
        emailInput.style.borderColor = "red";
        formularioValido = false;
    }

    // Validação do Campo de Seleção (Estilo)
    if (tipoSkateValor === "") {
        erroTipo.textContent = "Escolha o seu estilo favorito de skate.";
        tipoSkateInput.style.borderColor = "red";
        formularioValido = false;
    }

    // Se passou em todas as validações, simula o sistema real
    if (formularioValido) {
        alert(`🛹 Cadastro realizado com sucesso!\nParabéns ${nomeValor}, seu cupom de 10% OFF foi enviado para: ${emailValor}`);
        formCadastro.reset(); // Limpa todos os campos
    }
});


// =========================================================================
// FUNCIONALIDADE 2 (Extra): Simulador Dinâmico de Carrinho de Compras
// =========================================================================
let totalItensCarrinho = 0;
const contadorCarrinho = document.getElementById('contador-carrinho');

// Seleciona todos os botões de comprar que têm a classe 'btn-comprar'
const botoesComprar = document.querySelectorAll('.btn-comprar');

// Passa por cada botão adicionando um evento de clique
botoesComprar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        totalItensCarrinho++; // Adiciona +1 ao carrinho
        contadorCarrinho.textContent = totalItensCarrinho; // Atualiza o HTML
        
        // Efeito visual simples para confirmar que o clique funcionou
        alert("Skate adicionado ao carrinho com sucesso!");
    });
});