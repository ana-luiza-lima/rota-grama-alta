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
                    <button class="btn-secundario" type="button" data-pokemon-id="${pokemon.numero}">CAPTURAR</button>
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

    const isRelatorio = window.location.pathname.toLowerCase().indexOf("relatorio.html") !== -1;

    const footerHtml = isRelatorio ? `
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h4>RELATÓRIOS</h4>
                    <p>Painel administrativo de clientes e compras.</p>
                </div>
                <div class="footer-section">
                    <h4>ADMINISTRAÇÃO</h4>
                    <p>Relatórios exclusivos para controle interno da loja.</p>
                </div>
            </div>
            <div class="footer-divisor">
                <p>© 2026 Rota Grama Alta • Admin Dashboard</p>
            </div>
        </div>
    ` : `
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

// Carrinho

function atualizarQuantidadeCarrinho(numeroPokemon, quantidade) {
    const carrinho = obterCarrinho();
    const item = carrinho.find(function(carrinhoItem) {
        return carrinhoItem.numero === numeroPokemon;
    });

    if (!item) {
        return;
    }

    if (quantidade <= 0) {
        const carrinhoAtualizado = carrinho.filter(function(carrinhoItem) {
            return carrinhoItem.numero !== numeroPokemon;
        });
        salvarCarrinho(carrinhoAtualizado);
        renderizarCarrinho();
        return;
    }

    item.quantidade = quantidade;
    salvarCarrinho(carrinho);
    renderizarCarrinho();
}

function removerPokemonDoCarrinho(numeroPokemon) {
    const carrinho = obterCarrinho().filter(function(item) {
        return item.numero !== numeroPokemon;
    });

    salvarCarrinho(carrinho);
    renderizarCarrinho();
}

function renderizarCarrinho() {
    const main = document.querySelector("main");

    if (!main || window.location.pathname.toLowerCase().indexOf("carrinho.html") === -1) {
        return;
    }

    const carrinho = obterCarrinho();

    if (!carrinho.length) {
        main.innerHTML = `
            <div class="carrinho-vazio" style="grid-column: 2;">
                <p>Sua Pokebola está vazia</p>
                <button class="btn-secundario"><a href="index.html">IR PARA POKEDEX</a></button>
            </div>
        `;
        return;
    }

    const itensHtml = carrinho.map(function(item) {
        const subtotal = item.preco * item.quantidade;

        return `
            <div class="carrinho-item" data-numero="${item.numero}">
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="carrinho-item-info">
                    <div class="carrinho-item-nome">${item.nome}</div>
                    <div class="carrinho-item-preco">${formatarPreco(item.preco)}</div>
                </div>
                <div class="carrinho-item-controles">
                    <input type="number" min="1" value="${item.quantidade}" data-quantidade-carrinho="${item.numero}">
                    <button type="button" data-remover-carrinho="${item.numero}">X</button>
                </div>
                <div class="carrinho-item-preco">${formatarPreco(subtotal)}</div>
            </div>
        `;
    }).join("");

    const subtotal = carrinho.reduce(function(total, item) {
        return total + (item.preco * item.quantidade);
    }, 0);

    main.innerHTML = `
        <div class="carrinho-grid" style="grid-column: 2; display: grid; gap: 1rem;">
            <div class="carrinho-lista">
                ${itensHtml}
            </div>
            <button class="btn-secundario btn-continuar-capturando" type="button" id="btnContinuarCapturando">CONTINUAR CAPTURANDO</button>
            <div class="carrinho-sumario">
                <div class="sumario-row sumario-total">
                    <span>Total:</span>
                    <span>${formatarPreco(subtotal)}</span>
                </div>
                <button class="checkout-btn" type="button">FINALIZAR COMPRA</button>
            </div>
        </div>
    `;

    const lista = main.querySelector(".carrinho-lista");

    if (lista) {
        lista.addEventListener("input", function(event) {
            const inputQuantidade = event.target.closest("input[data-quantidade-carrinho]");

            if (!inputQuantidade) {
                return;
            }

            const numeroPokemon = parseInt(inputQuantidade.getAttribute("data-quantidade-carrinho"), 10);
            const quantidade = parseInt(inputQuantidade.value, 10);

            if (Number.isNaN(numeroPokemon) || Number.isNaN(quantidade)) {
                return;
            }

            atualizarQuantidadeCarrinho(numeroPokemon, quantidade);
        });

        lista.addEventListener("click", function(event) {
            const botaoRemover = event.target.closest("button[data-remover-carrinho]");

            if (!botaoRemover) {
                return;
            }

            const numeroPokemon = parseInt(botaoRemover.getAttribute("data-remover-carrinho"), 10);

            if (Number.isNaN(numeroPokemon)) {
                return;
            }

            removerPokemonDoCarrinho(numeroPokemon);
        });
    }

    const botaoContinuar = document.getElementById("btnContinuarCapturando");

    if (botaoContinuar) {
        botaoContinuar.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }

    const botaoFinalizar = main.querySelector(".checkout-btn");

    if (botaoFinalizar) {
        botaoFinalizar.addEventListener("click", function() {
            const usuario = obterUsuarioLogado();

            if (!usuario) {
                window.location.href = "login.html";
                return;
            }

            const carrinhoAtual = obterCarrinho();

            if (!carrinhoAtual.length) {
                return;
            }

            const historicoCompras = JSON.parse(localStorage.getItem("historicoCompras") || "[]");
            const totalCompra = carrinhoAtual.reduce(function(total, item) {
                return total + (item.preco * item.quantidade);
            }, 0);
            const proximoNumero = historicoCompras.length + 1;
            const itensCompra = carrinhoAtual.map(function(item) {
                const pokemonOriginal = estoque[item.numero];

                return {
                    ...pokemonOriginal,
                    quantidade: item.quantidade
                };
            });

            historicoCompras.push({
                id: `CP${String(proximoNumero).padStart(3, "0")}`,
                usuarioId: usuario.id,
                data: new Date().toLocaleDateString("pt-BR"),
                total: totalCompra,
                itens: itensCompra
            });

            localStorage.setItem("historicoCompras", JSON.stringify(historicoCompras));
            localStorage.removeItem("carrinhoPokemons");

            alert("Compra realizada com sucesso");
            window.location.href = "conta.html";
        });
    }
}

function obterCarrinho() {
    const carrinho = localStorage.getItem("carrinhoPokemons");
    return carrinho ? JSON.parse(carrinho) : [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinhoPokemons", JSON.stringify(carrinho));
}

function adicionarPokemonAoCarrinho(pokemon) {
    const carrinho = obterCarrinho();
    const itemExistente = carrinho.find(function(item) {
        return item.numero === pokemon.numero;
    });

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            numero: pokemon.numero,
            nome: pokemon.nome,
            imagem: pokemon.imagem,
            preco: pokemon.preco,
            quantidade: 1
        });
    }

    salvarCarrinho(carrinho);
}

function obterCapturaPendente() {
    const pendente = localStorage.getItem("capturaPendente");
    return pendente ? parseInt(pendente, 10) : null;
}

function limparCapturaPendente() {
    localStorage.removeItem("capturaPendente");
}

function processarCapturaPendente() {
    const numeroPokemon = obterCapturaPendente();

    if (!numeroPokemon || !estoque[numeroPokemon]) {
        limparCapturaPendente();
        return false;
    }

    adicionarPokemonAoCarrinho(estoque[numeroPokemon]);
    limparCapturaPendente();
    return true;
}

function redirecionarParaLoginComCaptura(numeroPokemon) {
    localStorage.setItem("capturaPendente", String(numeroPokemon));
    window.location.href = "login.html";
}

function capturarPokemon(numeroPokemon) {
    if (!verificarUsuarioLogado()) {
        redirecionarParaLoginComCaptura(numeroPokemon);
        return;
    }

    adicionarPokemonAoCarrinho(estoque[numeroPokemon]);
    window.location.href = "carrinho.html";
}

function inicializarCapturaPokemons() {
    const grade = document.querySelector(".pokemon-grid");

    if (!grade) {
        return;
    }

    grade.addEventListener("click", function(event) {
        const botao = event.target.closest("button[data-pokemon-id]");

        if (!botao) {
            return;
        }

        const numeroPokemon = parseInt(botao.getAttribute("data-pokemon-id"), 10);

        if (Number.isNaN(numeroPokemon)) {
            return;
        }

        capturarPokemon(numeroPokemon);
    });
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

    const capturaPendente = obterCapturaPendente();

    document.querySelector("form").reset();
    alert("Cadastro realizado com sucesso!");

    if (capturaPendente) {
        localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));
        processarCapturaPendente();

        setTimeout(() => {
            window.location.href = "carrinho.html";
        }, 1000);

        return;
    }

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}

// Inicializar o sistema de cadastro
function inicializarCadastro() {
    if (!document.getElementById("confirm-password")) {
        return;
    }

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
    const adminEmail = "admin@ifsc.com";
    const adminSenha = "admin";

    if (!email) {
        alert("Por favor, insira seu email.");
        return;
    }

    if (!senha) {
        alert("Por favor, insira sua senha.");
        return;
    }

    if (email === adminEmail && senha === adminSenha) {
        localStorage.removeItem("usuarioLogado");
        localStorage.setItem("adminLogado", JSON.stringify({
            email: adminEmail,
            nome: "Administrador"
        }));

        alert("Bem-vindo, administrador!");
        setTimeout(function() {
            window.location.href = "relatorio.html";
        }, 1000);
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
    localStorage.removeItem("adminLogado");
    alert(`Bem-vindo, ${usuario.nome}!`);
    processarCapturaPendente();

    setTimeout(() => {
        window.location.href = "carrinho.html";
    }, 1000);
}

function inicializarLogin() {
    if (document.getElementById("confirm-password")) {
        return;
    }

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", realizarLogin);
    }

    const botaoAdmin = document.getElementById("btnLoginAdmin");

    if (botaoAdmin) {
        botaoAdmin.addEventListener("click", function() {
            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("password").value;

            if (email === "admin@ifsc.com" && senha === "admin") {
                localStorage.removeItem("usuarioLogado");
                localStorage.setItem("adminLogado", JSON.stringify({
                    email: "admin@ifsc.com",
                    nome: "Administrador"
                }));

                alert("Bem-vindo, administrador!");
                setTimeout(function() {
                    window.location.href = "relatorio.html";
                }, 1000);
                return;
            }

            alert("Credenciais de administrador inválidas.");
        });
    }
}

function verificarUsuarioLogado() {
    return localStorage.getItem("usuarioLogado");
}

function obterUsuarioLogado() {
    const usuario = localStorage.getItem("usuarioLogado");
    return usuario ? JSON.parse(usuario) : null;
}

function verificarAdminLogado() {
    return localStorage.getItem("adminLogado");
}

function sairAdmin() {
    localStorage.removeItem("adminLogado");
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
}

function salvarUsuarioLogado(usuarioAtualizado) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));

    const usuarios = obterUsuarios();
    const usuariosAtualizados = usuarios.map(function(usuario) {
        if (usuario.id === usuarioAtualizado.id) {
            return usuarioAtualizado;
        }
        return usuario;
    });

    salvarUsuarios(usuariosAtualizados);
}

function obterHistoricoCompras() {
    return JSON.parse(localStorage.getItem("historicoCompras") || "[]");
}

function obterClientesAdministracao() {
    return obterUsuarios().filter(function(usuario) {
        return usuario.email !== "admin@ifsc.com";
    });
}

function normalizarTexto(texto) {
    return String(texto || "").toLowerCase();
}

function renderizarRelatorioAdmin() {
    const totalClientes = document.getElementById("totalClientes");
    const totalComprasAdmin = document.getElementById("totalComprasAdmin");
    const receitaTotalAdmin = document.getElementById("receitaTotalAdmin");
    const tbodyClientes = document.getElementById("tbodyClientesAdmin");
    const tbodyCompras = document.getElementById("tbodyComprasAdmin");
    const inputCliente = document.getElementById("buscarClienteInput");
    const filtroCompra = document.getElementById("filtroCompraAdmin");
    const inputCompra = document.getElementById("buscarCompraInput");
    const adminLogado = verificarAdminLogado();

    if (!totalClientes) {
        return;
    }

    if (!adminLogado) {
        window.location.href = "login.html";
        return;
    }

    const clientes = obterClientesAdministracao();
    const compras = obterHistoricoCompras();
    let termoCliente = "";
    let termoCompra = "";
    let filtroAtual = "todas";

    function renderizarClientes() {
        const termo = normalizarTexto(termoCliente);
        const clientesFiltrados = clientes.filter(function(cliente) {
            if (!termo) {
                return true;
            }

            return [cliente.id, cliente.nome, cliente.email, cliente.cpf].some(function(campo) {
                return normalizarTexto(campo).indexOf(termo) !== -1;
            });
        });

        if (tbodyClientes) {
            tbodyClientes.innerHTML = clientesFiltrados.length ? clientesFiltrados.map(function(cliente) {
                const totalComprasCliente = compras.filter(function(compra) {
                    return compra.usuarioId === cliente.id;
                }).length;

                return `
                    <tr>
                        <td>${cliente.id}</td>
                        <td>${cliente.nome}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.cpf}</td>
                        <td>${totalComprasCliente}</td>
                    </tr>
                `;
            }).join("") : `
                <tr>
                    <td colspan="5" class="empty-message">Nenhum cliente encontrado</td>
                </tr>
            `;
        }
    }

    function renderizarCompras() {
        const termo = normalizarTexto(termoCompra);
        const comprasFiltradas = compras.filter(function(compra) {
            if (!termo || filtroAtual === "todas") {
                return true;
            }

            const cliente = clientes.find(function(item) {
                return item.id === compra.usuarioId;
            });

            const itensTexto = compra.itens.map(function(item) {
                return item.nome;
            }).join(" ");
            const totalTexto = formatarPreco(compra.total);

            if (filtroAtual === "id") {
                return normalizarTexto(compra.id).indexOf(termo) !== -1;
            }

            if (filtroAtual === "cliente") {
                return cliente && (
                    normalizarTexto(cliente.nome).indexOf(termo) !== -1 ||
                    normalizarTexto(cliente.id).indexOf(termo) !== -1 ||
                    normalizarTexto(cliente.email).indexOf(termo) !== -1 ||
                    normalizarTexto(cliente.cpf).indexOf(termo) !== -1
                );
            }

            if (filtroAtual === "data") {
                return normalizarTexto(compra.data).indexOf(termo) !== -1;
            }

            if (filtroAtual === "valor") {
                return normalizarTexto(totalTexto).indexOf(termo) !== -1;
            }

            if (filtroAtual === "produto") {
                return normalizarTexto(itensTexto).indexOf(termo) !== -1;
            }

            return true;
        });

        if (tbodyCompras) {
            tbodyCompras.innerHTML = comprasFiltradas.length ? comprasFiltradas.map(function(compra) {
                const cliente = clientes.find(function(item) {
                    return item.id === compra.usuarioId;
                });
                const itensResumo = compra.itens.map(function(item) {
                    return `${item.quantidade}x ${item.nome}`;
                }).join(", ");

                return `
                    <tr>
                        <td>${compra.id}</td>
                        <td>${cliente ? cliente.nome : "Cliente removido"}</td>
                        <td>${compra.data}</td>
                        <td>${itensResumo}</td>
                        <td>${formatarPreco(compra.total)}</td>
                    </tr>
                `;
            }).join("") : `
                <tr>
                    <td colspan="5" class="empty-message">Nenhuma compra encontrada</td>
                </tr>
            `;
        }
    }

    if (totalClientes) totalClientes.textContent = clientes.length;
    if (totalComprasAdmin) totalComprasAdmin.textContent = compras.length;
    if (receitaTotalAdmin) {
        receitaTotalAdmin.textContent = formatarPreco(compras.reduce(function(total, compra) {
            return total + compra.total;
        }, 0));
    }

    renderizarClientes();
    renderizarCompras();

    if (inputCliente) {
        inputCliente.addEventListener("input", function() {
            termoCliente = inputCliente.value;
            renderizarClientes();
        });
    }

    if (inputCompra) {
        inputCompra.addEventListener("input", function() {
            termoCompra = inputCompra.value;
            renderizarCompras();
        });
    }

    if (filtroCompra) {
        filtroCompra.addEventListener("change", function() {
            filtroAtual = filtroCompra.value;
            renderizarCompras();
        });
    }
}

// Conta

function inicializarBotaoConta() {
    const botaoConta = document.getElementById("btnConta");

    if (!botaoConta) {
        return;
    }

    botaoConta.addEventListener("click", function(event) {
        event.preventDefault();

        if (verificarUsuarioLogado()) {
            window.location.href = "conta.html";
            return;
        }

        window.location.href = "login.html";
    });
}

function renderizarConta() {
    const usuario = obterUsuarioLogado();

    if (!usuario) {
        window.location.href = "login.html";
        return;
    }

    const elementoNome = document.getElementById("contaNome");
    const elementoEmail = document.getElementById("contaEmail");
    const elementoCpf = document.getElementById("contaCpf");
    const elementoId = document.getElementById("contaId");
    const totalCompras = document.getElementById("totalCompras");
    const gastoTotal = document.getElementById("gastoTotal");

    if (elementoNome) elementoNome.textContent = usuario.nome;
    if (elementoEmail) elementoEmail.textContent = usuario.email;
    if (elementoCpf) elementoCpf.textContent = usuario.cpf;
    if (elementoId) elementoId.textContent = usuario.id;
    if (totalCompras) totalCompras.textContent = "0";
    if (gastoTotal) gastoTotal.textContent = "R$ 0,00";
}

function renderizarHistoricoCompras() {
    const usuario = obterUsuarioLogado();
    const listaCompras = document.getElementById("listaCompras");
    const mensagemCompras = document.getElementById("mensagemCompras");
    const totalCompras = document.getElementById("totalCompras");
    const gastoTotal = document.getElementById("gastoTotal");

    if (!usuario || !listaCompras || !mensagemCompras || !totalCompras || !gastoTotal) {
        return;
    }

    const historicoCompras = obterHistoricoCompras().filter(function(compra) {
        return compra.usuarioId === usuario.id;
    });

    if (!historicoCompras.length) {
        mensagemCompras.style.display = "block";
        listaCompras.style.display = "none";
        totalCompras.textContent = "0";
        gastoTotal.textContent = "R$ 0,00";
        return;
    }

    mensagemCompras.style.display = "none";
    listaCompras.style.display = "block";

    listaCompras.innerHTML = historicoCompras.map(function(compra) {
        const itensResumo = compra.itens.map(function(item) {
            return `${item.quantidade}x ${item.nome}`;
        }).join(", ");

        return `
            <div class="pokemon-pedido" data-compra-id="${compra.id}">
                <div>
                    <div class="id-pedido">${compra.id}</div>
                    <div class="data-pedido">${compra.data}</div>
                    <div class="data-pedido">${itensResumo}</div>
                </div>
                <div class="valor-pedido">${formatarPreco(compra.total)}</div>
            </div>
        `;
    }).join("");

    totalCompras.textContent = historicoCompras.length;
    gastoTotal.textContent = formatarPreco(historicoCompras.reduce(function(total, compra) {
        return total + compra.total;
    }, 0));
}

function abrirModalCompra(compra) {
    const modal = document.getElementById("modalCompra");
    const conteudo = document.getElementById("modalCompraConteudo");

    if (!modal || !conteudo || !compra) {
        return;
    }

    const itensHtml = compra.itens.map(function(item) {
        const tiposHtml = item.tipos.map(function(tipo) {
            return `<span class="${tipo.classe}">${tipo.nome}</span>`;
        }).join("");

        return `
            <div class="modal-compra-item">
                <div class="modal-compra-info">
                    <img class="modal-compra-imagem" src="${item.imagem}" alt="${item.nome}">
                    <div>
                        <div class="modal-compra-nome">${item.nome}</div>
                        <div class="pokemon-tipos" style="margin-bottom: 0.5rem;">${tiposHtml}</div>
                        <div class="data-pedido">HP: ${item.stats.hp} | ATK: ${item.stats.atk} | DEF: ${item.stats.def}</div>
                        <div class="data-pedido">${item.quantidade}x ${formatarPreco(item.preco)}</div>
                    </div>
                </div>
                <div class="modal-compra-subtotal">${formatarPreco(item.preco * item.quantidade)}</div>
            </div>
        `;
    }).join("");

    conteudo.innerHTML = `
        <div class="data-pedido" style="margin-bottom: 1rem;">Compra ${compra.id} • ${compra.data}</div>
        ${itensHtml}
        <div class="sumario-row sumario-total" style="margin-top: 1rem;">
            <span>Total:</span>
            <span>${formatarPreco(compra.total)}</span>
        </div>
    `;

    modal.classList.add("ativo");
    modal.setAttribute("aria-hidden", "false");
}

function fecharModalCompra() {
    const modal = document.getElementById("modalCompra");

    if (!modal) {
        return;
    }

    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
}

function inicializarModalCompras() {
    const listaCompras = document.getElementById("listaCompras");
    const btnFechar = document.getElementById("btnFecharModalCompra");
    const modal = document.getElementById("modalCompra");

    if (listaCompras) {
        listaCompras.addEventListener("click", function(event) {
            const itemCompra = event.target.closest("[data-compra-id]");

            if (!itemCompra) {
                return;
            }

            const usuario = obterUsuarioLogado();
            const historicoCompras = obterHistoricoCompras();
            const compra = historicoCompras.find(function(item) {
                return item.id === itemCompra.getAttribute("data-compra-id") && item.usuarioId === usuario.id;
            });

            if (compra) {
                abrirModalCompra(compra);
            }
        });
    }

    if (btnFechar) {
        btnFechar.addEventListener("click", fecharModalCompra);
    }

    if (modal) {
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                fecharModalCompra();
            }
        });
    }
}

function ativarEdicaoConta() {
    const botaoEditar = document.getElementById("btnEditarConta");
    const campoNome = document.getElementById("contaNome");
    const campoEmail = document.getElementById("contaEmail");
    const campoCpf = document.getElementById("contaCpf");
    const campoId = document.getElementById("contaId");
    const usuario = obterUsuarioLogado();

    if (!botaoEditar || !campoNome || !campoEmail || !campoCpf || !campoId || !usuario) {
        return;
    }

    var modoEdicao = false;

    function criarInput(valor, id) {
        var input = document.createElement("input");
        input.type = "text";
        input.value = valor;
        input.id = id;
        input.className = "conta-input-edicao";
        return input;
    }

    function entrarModoEdicao() {
        var nomeAtual = campoNome.textContent;
        var emailAtual = campoEmail.textContent;
        var cpfAtual = campoCpf.textContent;

        campoNome.innerHTML = "";
        campoEmail.innerHTML = "";
        campoCpf.innerHTML = "";

        campoNome.appendChild(criarInput(nomeAtual, "editNome"));
        campoEmail.appendChild(criarInput(emailAtual, "editEmail"));
        campoCpf.appendChild(criarInput(cpfAtual, "editCpf"));

        botaoEditar.textContent = "✓";
        botaoEditar.setAttribute("aria-label", "Salvar informações");
        modoEdicao = true;
    }

    function salvarEdicao() {
        var novoNome = document.getElementById("editNome").value.trim();
        var novoEmail = document.getElementById("editEmail").value.trim();
        var novoCpf = document.getElementById("editCpf").value.trim();

        if (!novoNome || !novoEmail || !novoCpf) {
            alert("Preencha nome, email e CPF.");
            return;
        }

        var usuarioAtualizado = {
            id: usuario.id,
            nome: novoNome,
            email: novoEmail,
            cpf: novoCpf,
            senha: usuario.senha,
            dataCadastro: usuario.dataCadastro
        };

        salvarUsuarioLogado(usuarioAtualizado);
        renderizarConta();
        modoEdicao = false;
        botaoEditar.textContent = "✎";
        botaoEditar.setAttribute("aria-label", "Editar informações");
    }

    botaoEditar.addEventListener("click", function() {
        if (!modoEdicao) {
            entrarModoEdicao();
            return;
        }

        salvarEdicao();
    });
}

function inicializarConta() {
    if (document.getElementById("contaNome")) {
        renderizarConta();
        renderizarHistoricoCompras();
        inicializarModalCompras();
        ativarEdicaoConta();
    }

    const botaoSair = document.getElementById("btnSair");

    if (botaoSair) {
        botaoSair.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.removeItem("usuarioLogado");
            localStorage.removeItem("adminLogado");
            window.location.href = "index.html";
        });
    }
}

function inicializarRelatorioAdmin() {
    if (!document.getElementById("tbodyClientesAdmin")) {
        return;
    }

    renderizarRelatorioAdmin();

    const botaoSairAdmin = document.getElementById("btnSairAdmin");

    if (botaoSairAdmin) {
        botaoSairAdmin.addEventListener("click", function() {
            sairAdmin();
        });
    }
}

// Inicializa

document.addEventListener("DOMContentLoaded", renderizarPokemons);
document.addEventListener("DOMContentLoaded", renderizarFooter);
document.addEventListener("DOMContentLoaded", renderizarCarrinho);
document.addEventListener("DOMContentLoaded", inicializarCadastro);
document.addEventListener("DOMContentLoaded", inicializarLogin);
document.addEventListener("DOMContentLoaded", inicializarBotaoConta);
document.addEventListener("DOMContentLoaded", inicializarConta);
document.addEventListener("DOMContentLoaded", inicializarRelatorioAdmin);
document.addEventListener("DOMContentLoaded", inicializarCapturaPokemons);