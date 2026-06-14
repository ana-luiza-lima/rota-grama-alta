const estoque = {
    1: {
        numero: 1,
        nome: "Bulbassauro",
        imagem: "img/1.png",
        tipos: [
            { "nome": "Planta", "classe": "etiqueta-planta" },
            { "nome": "Veneno", "classe": "etiqueta-veneno" }
        ],
        stats: {
            hp: 45,
            atk: 49,
            def: 49
        },
        preco: 500
    },
    4: {
        numero: 4,
        nome: "Charmander",
        imagem: "img/4.png",
        tipos: [
            { "nome": "Fogo", "classe": "etiqueta-fogo" }
        ],
        stats: {
            hp: 39,
            atk: 52,
            def: 43
        },
        preco: 500
    },
    7: {
        numero: 7,
        nome: "Squirtle",
        imagem: "img/7.png",
        tipos: [
            { "nome": "Água", "classe": "etiqueta-agua" }
        ],
        stats: {
            hp: 44,
            atk: 48,
            def: 65
        },
        preco: 500
    },
    18: {
        numero: 18,
        nome: "Pidgeot",
        imagem: "img/18.png",
        tipos: [
            { "nome": "Normal", "classe": "etiqueta-normal" },
            { "nome": "Voador", "classe": "etiqueta-voador" }
        ],
        stats: {
            hp: 83,
            atk: 80,
            def: 75
        },
        preco: 1200
    },
    25: {
        numero: 25,
        nome: "Pikachu",
        imagem: "img/25.png",
        tipos: [
            { "nome": "Elétrico", "classe": "etiqueta-eletrico" }
        ],
        stats: {
            hp: 35,
            atk: 55,
            def: 40
        },
        preco: 800
    },
    39: {
        numero: 39,
        nome: "Jigglypuff",
        imagem: "img/39.png",
        tipos: [
            { "nome": "Normal", "classe": "etiqueta-normal" },
            { "nome": "Fada", "classe": "etiqueta-fada" }
        ],
        stats: {
            hp: 115,
            atk: 40,
            def: 20
        },
        preco: 600
    },
    52: {
        numero: 52,
        nome: "Meowth",
        imagem: "img/52.png",
        tipos: [
            { "nome": "Normal", "classe": "etiqueta-normal" }
        ],
        stats: {
            hp: 40,
            atk: 45,
            def: 35
        },
        preco: 500
    },
    58: {
        numero: 58,
        nome: "Growlithe",
        imagem: "img/58.png",
        tipos: [
            { "nome": "Fogo", "classe": "etiqueta-fogo" }
        ],
        stats: {
            hp: 55,
            atk: 70,
            def: 45
        },
        preco: 650
    },
    63: {
        numero: 63,
        nome: "Abra",
        imagem: "img/63.png",
        tipos: [
            { "nome": "Psiquico", "classe": "etiqueta-psiquico" }
        ],
        stats: {
            hp: 25,
            atk: 20,
            def: 15
        },
        preco: 650
    },
    83: {
        numero: 83,
        nome: "Farfetch’d",
        imagem: "img/83.png",
        tipos: [
            { "nome": "Normal", "classe": "etiqueta-normal" },
            { "nome": "Voador", "classe": "etiqueta-voador" }
        ],
        stats: {
            hp: 40,
            atk: 40,
            def: 35
        },
        preco: 1000
    },
    94: {
        numero: 94,
        nome: "Gengar",
        imagem: "img/94.png",
        tipos: [
            { "nome": "Fantasma", "classe": "etiqueta-fantasma" },
            { "nome": "Veneno", "classe": "etiqueta-veneno" }
        ],
        stats: {
            hp: 70,
            atk: 80,
            def: 50
        },
        preco: 1750
    },
    132: {
        numero: 132,
        nome: "Ditto",
        imagem: "img/132.png",
        tipos: [
            { "nome": "Normal", "classe": "etiqueta-normal" }
        ],
        stats: {
            hp: 10,
            atk: 5,
            def: 5
        },
        preco: 10000
    }
}
// ------------------------------------------------
function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function criarCardPokemon(pokemon) {
    const tiposHtml = pokemon.tipos
        .map((tipo) => `<span class="${tipo.classe}">${tipo.nome}</span>`)
        .join("");

    return `
        <div class="pokemon-card">
            <div class="pokemon-header">
                <span class="pokemon-numero">#${pokemon.numero}</span>
            </div>
            <div class="pokemon-img">
                <img src="${pokemon.imagem}" alt="${pokemon.alt ?? pokemon.nome}">
            </div>
            <div class="pokemon-info">
                <div class="pokemon-nome">${pokemon.nome}</div>
                <div class="pokemon-tipos">
                    ${tiposHtml}
                </div>
                <div class="pokemon-stats">
                    <div class="stat-box"><div class="stat-etiqueta">HP</div><div class="stat-value">${pokemon.stats.hp}</div></div>
                    <div class="stat-box"><div class="stat-etiqueta">ATK</div><div class="stat-value">${pokemon.stats.atk}</div></div>
                    <div class="stat-box"><div class="stat-etiqueta">DEF</div><div class="stat-value">${pokemon.stats.def}</div></div>
                </div>
                <div class="pokemon-footer">
                    <div class="pokemon-preco">${formatarPreco(pokemon.preco)}</div>
                    <button class="btn-capturar" type="button">CAPTURAR</button>
                </div>
            </div>
        </div>
    `;
}

function renderizarPokemons() {
    const grade = document.querySelector(".pokemon-grid");

    if (!grade) {
        return;
    }

    const pokemons = Object.values(estoque);
    grade.innerHTML = pokemons.map(criarCardPokemon).join("");
}

function renderizarFooter() {
    const footerContainer = document.querySelector("footer");

    if (!footerContainer) {
        return;
    }

    const footerHtml = `
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h4>SOBRE</h4>
                    <p>Rota Grama Alta oficial para captura e treinamento de Pokémon.</p>
                </div>
                <div class="footer-section">
                    <h4>CONTATO</h4>
                    <p>Email: rotagramalta@pokemon.com<br>Tel: (55) 9999-9999</p>
                </div>
            </div>
            <div class="footer-divisor">
                <p>© 2026 Rota Grama Alta. Todos os direitos reservados. Fire Red Edition.</p>
            </div>
        </div>
    `;

    footerContainer.innerHTML = footerHtml;
}


// Cadastro de usuário

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // .test para verificar se o email é válido
}

function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
    
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

    return true;
}

function validarSenha(senha) {
    return senha.length >= 6;
}

function obterUsuarios() {
    const usuarios = localStorage.getItem("usuarios");
    return usuarios ? JSON.parse(usuarios) : [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function usuarioJaExiste(cpf) {
    const usuarios = obterUsuarios();
    return usuarios.some(u => u.cpf === cpf);
}

function gerarIDUsuario() {
    const usuarios = obterUsuarios();

    if (usuarios.length === 0) return "C001";


    const idsNumericos = usuarios.map(u => {
        return parseInt(u.id.replace('C', ''));
    });

    const maiorID = Math.max(...idsNumericos);
    const proximoNumero = maiorID + 1;
    return `C${String(proximoNumero).padStart(3, "0")}`;
}

function realizarCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("password").value;
    const confirmaSenha = document.getElementById("confirm-password").value;

    // Validações
    if (!nome) {
        alert("Por favor, insira seu nome.");
        return;
    }

    if (!email) {
        alert("Por favor, insira seu email.");
        return;
    }

    if (!validarEmail(email)) {
        alert("Email inválido. Insira um email válido.");
        return;
    }

    if (!cpf) {
        alert("Por favor, insira seu CPF.");
        return;
    }

    if (!validarCPF(cpf)) {
        alert("CPF inválido. Insira um CPF válido (11 dígitos).");
        return;
    }

    if (!senha) {
        alert("Por favor, insira uma senha.");
        return;
    }

    if (!validarSenha(senha)) {
        alert("Senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmaSenha) {
        alert("As senhas não correspondem.");
        return;
    }

    if (usuarioJaExiste(cpf)) {
        alert("Este CPF já está cadastrado.");
        return;
    }

    // Criar novo usuário
    const novoUsuario = {
        id: gerarIDUsuario(),
        nome: nome,
        email: email,
        cpf: cpf,
        senha: senha,
        dataCadastro: new Date().toLocaleDateString("pt-BR")
    };

    const usuarios = obterUsuarios();
    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);


    document.querySelector("form").reset();
    alert("Cadastro realizado com sucesso! Você será redirecionado para o login.");

    // Redirecionar para login
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}

// Inicializar o sistema de cadastro
function inicializarCadastro() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", realizarCadastro);
    }
}

// Login

function realizarLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value;

    // Validações
    if (!email) {
        alert("Por favor, insira seu email.");
        return;
    }

    if (!senha) {
        alert("Por favor, insira sua senha.");
        return;
    }

    // Buscar usuário no localStorage
    const usuarios = obterUsuarios();
    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
        alert("Email não encontrado. Verifique ou cadastre-se.");
        return;
    }

    if (usuario.senha !== senha) {
        alert("Senha incorreta.");
        return;
    }


    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    alert(`Bem-vindo, ${usuario.nome}!`);

    setTimeout(() => {
        window.location.href = "carrinho.html";
    }, 1000);
}

function inicializarLogin() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", realizarLogin);
    }
}


// Inicializa

document.addEventListener("DOMContentLoaded", renderizarPokemons);
document.addEventListener("DOMContentLoaded", renderizarFooter);
document.addEventListener("DOMContentLoaded", inicializarCadastro);
document.addEventListener("DOMContentLoaded", inicializarLogin);