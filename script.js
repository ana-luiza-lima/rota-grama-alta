// json de estoque

const estoque = {
    1: {
        numero: 1,
        nome: "Bulbassauro",
        imagem: "media/img/1.png",
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
        imagem: "media/img/4.png",
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
        imagem: "media/img/7.png",
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
        imagem: "media/img/18.png",
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
        imagem: "media/img/25.png",
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
        imagem: "media/img/39.png",
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
        imagem: "media/img/52.png",
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
        imagem: "media/img/58.png",
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
        imagem: "media/img/63.png",
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
        imagem: "media/img/83.png",
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
        imagem: "media/img/94.png",
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
        imagem: "media/img/132.png",
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

// Renderiza os pokemons
const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-BR", { // .toLocaleString formata o valor para o estilo de formatação da moeda brasileira
        style: "currency",
        currency: "BRL"
    });
};

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

// Footer

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

// Carrinho

const obterCarrinho = () => {
    const carrinho = localStorage.getItem("carrinhoPokemons");
    return carrinho ? JSON.parse(carrinho) : [];
};

const salvarCarrinho = (carrinho) => {
    localStorage.setItem("carrinhoPokemons", JSON.stringify(carrinho));
};

function removerPokemonDoCarrinho(numeroPokemon) {
    const carrinho = obterCarrinho().filter((item) => {
        return item.numero !== numeroPokemon;
    });

    salvarCarrinho(carrinho);
    renderizarCarrinho();
}

function atualizarQuantidadeCarrinho(numeroPokemon, quantidade) {
    if (quantidade <= 0) {
        removerPokemonDoCarrinho(numeroPokemon);
        return;
    }
    const carrinho = obterCarrinho();
    const item = carrinho.find((carrinhoItem) => {
        return carrinhoItem.numero === numeroPokemon;
    });
    if (item) {
        item.quantidade = quantidade;
        salvarCarrinho(carrinho);
        renderizarCarrinho();
    }
}

const tocarSomCompra = async () => {
    try {
        const som = new Audio("/media/audio/Caught a Pokemon!  Sound Effect.mp3");
        await som.play();
    } catch (erro) {
    }
};


function renderizarCarrinho() {
    const main = document.querySelector("main");

    if (!main || window.location.pathname.toLowerCase().indexOf("carrinho.html") === -1) { //
        return;
    }

    const carrinho = obterCarrinho();

    if (!carrinho.length) {
        main.innerHTML = `
            <div class="carrinho-vazio carrinho-coluna-central">
                <p>Sua Pokebola está vazia</p>
                <button class="btn-secundario" id="btnPokedex" type="button">IR PARA POKEDEX</button>
</div>
        `;
        return;
    }

    const itensHtml = carrinho.map((item) => {
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

    const subtotal = carrinho.reduce((total, item) => {
        return total + (item.preco * item.quantidade);
    }, 0);

    main.innerHTML = `
        <div class="carrinho-grid carrinho-coluna-central">
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
        lista.addEventListener("input", (event) => {
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

        lista.addEventListener("click", (event) => {
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
        botaoContinuar.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    const botaoFinalizar = main.querySelector(".checkout-btn");

    if (botaoFinalizar) {
        botaoFinalizar.addEventListener("click", async () => {
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
            const totalCompra = carrinhoAtual.reduce((total, item) => {
                return total + (item.preco * item.quantidade);
            }, 0);
            const proximoNumero = historicoCompras.length + 1;
            const itensCompra = carrinhoAtual.map((item) => {
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
            
            await tocarSomCompra();
            alert("Compra realizada com sucesso");
            window.location.href = "conta.html";
        });
    }
}


function adicionarPokemonAoCarrinho(pokemon) {
    const carrinho = obterCarrinho();
    const itemExistente = carrinho.find((item) => {
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

const obterCapturaPendente = () => {
    const pendente = localStorage.getItem("capturaPendente");
    return pendente ? parseInt(pendente, 10) : null;
};

const limparCapturaPendente = () => {
    localStorage.removeItem("capturaPendente");
};

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

const redirecionarParaLoginComCaptura = (numeroPokemon) => {
    localStorage.setItem("capturaPendente", String(numeroPokemon));
    window.location.href = "login.html";
};

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

    grade.addEventListener("click", (event) => {
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

const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // .test para verificar se o email é válido
};

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

const validarSenha = (senha) => {
    return senha.length >= 6;
};

const obterUsuarios = () => {
    const usuarios = localStorage.getItem("usuarios");
    return usuarios ? JSON.parse(usuarios) : [];
};

const salvarUsuarios = (usuarios) => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

const usuarioJaExiste = (cpf) => {
    const usuarios = obterUsuarios();
    return usuarios.some(u => u.cpf === cpf);
};

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
        alert("CPF inválido. Insira um CPF válido.");
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
            nome: "Administradora"
        }));

        alert("Bem-vinda, administradora!");
        setTimeout(() => {
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
        botaoAdmin.addEventListener("click", () => {
            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("password").value;

            if (email === "admin@ifsc.com" && senha === "admin") {
                localStorage.removeItem("usuarioLogado");
                localStorage.setItem("adminLogado", JSON.stringify({
                    email: "admin@ifsc.com",
                    nome: "Administradora"
                }));

                alert("Bem-vinda, administradora!");
                setTimeout(() => {
                    window.location.href = "relatorio.html";
                }, 1000);
                return;
            }

            alert("Credenciais de administradora inválidas.");
        });
    }
}

const verificarUsuarioLogado = () => {
    return localStorage.getItem("usuarioLogado");
};

const obterUsuarioLogado = () => {
    const usuario = localStorage.getItem("usuarioLogado");
    return usuario ? JSON.parse(usuario) : null;
};

const verificarAdminLogado = () => {
    return localStorage.getItem("adminLogado");
};

const sairAdmin = () => {
    localStorage.removeItem("adminLogado");
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
};

function salvarUsuarioLogado(usuarioAtualizado) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));

    const usuarios = obterUsuarios();
    const usuariosAtualizados = usuarios.map((usuario) => {
        if (usuario.id === usuarioAtualizado.id) {
            return usuarioAtualizado;
        }
        return usuario;
    });

    salvarUsuarios(usuariosAtualizados);
}

const obterHistoricoCompras = () => {
    return JSON.parse(localStorage.getItem("historicoCompras") || "[]");
};

const obterClientesAdministracao = () => {
    return obterUsuarios().filter((usuario) => {
        return usuario.email !== "admin@ifsc.com";
    });
};

const normalizarTexto = (texto) => {
    return String(texto || "").toLowerCase();
};

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
        const clientesFiltrados = clientes.filter((cliente) => {
            if (!termo) {
                return true;
            }

            return [cliente.id, cliente.nome, cliente.email, cliente.cpf].some((campo) => {
                return normalizarTexto(campo).includes(termo);
            });
        });

        if (tbodyClientes) {
            tbodyClientes.innerHTML = clientesFiltrados.length ? clientesFiltrados.map((cliente) => {
                const totalComprasCliente = compras.filter((compra) => {
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
        const comprasFiltradas = compras.filter((compra) => {
            if (!termo || filtroAtual === "todas") {
                return true;
            }

            const cliente = clientes.find((item) => {
                return item.id === compra.usuarioId;
            });

            const itensTexto = compra.itens.map((item) => {
                return item.nome;
            }).join(" ");
            const totalTexto = formatarPreco(compra.total);

            if (filtroAtual === "id") {
                return normalizarTexto(compra.id).includes(termo);
            }

            if (filtroAtual === "cliente") {
                return cliente && (
                    normalizarTexto(cliente.nome).includes(termo) ||
                    normalizarTexto(cliente.id).includes(termo) ||
                    normalizarTexto(cliente.email).includes(termo) ||
                    normalizarTexto(cliente.cpf).includes(termo)
                );
            }

            if (filtroAtual === "data") {
                return normalizarTexto(compra.data).includes(termo);
            }

            if (filtroAtual === "valor") {
                return normalizarTexto(totalTexto).includes(termo);
            }

            if (filtroAtual === "produto") {
                return normalizarTexto(itensTexto).includes(termo);
            }

            return true;
        });

        if (tbodyCompras) {
            tbodyCompras.innerHTML = comprasFiltradas.length ? comprasFiltradas.map((compra) => {
                const cliente = clientes.find((item) => {
                    return item.id === compra.usuarioId;
                });
                const itensResumo = compra.itens.map((item) => {
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
        receitaTotalAdmin.textContent = formatarPreco(compras.reduce((total, compra) => {
            return total + compra.total;
        }, 0));
    }

    renderizarClientes();
    renderizarCompras();

    if (inputCliente) {
        inputCliente.addEventListener("input", () => {
            termoCliente = inputCliente.value;
            renderizarClientes();
        });
    }

    if (inputCompra) {
        inputCompra.addEventListener("input", () => {
            termoCompra = inputCompra.value;
            renderizarCompras();
        });
    }

    if (filtroCompra) {
        filtroCompra.addEventListener("change", () => {
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

    botaoConta.addEventListener("click", (event) => {
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

    const historicoCompras = obterHistoricoCompras().filter((compra) => {
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

    listaCompras.innerHTML = historicoCompras.map((compra) => {
        const itensResumo = compra.itens.map((item) => {
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
    gastoTotal.textContent = formatarPreco(historicoCompras.reduce((total, compra) => {
        return total + compra.total;
    }, 0));
}

function abrirModalCompra(compra) {
    const modal = document.getElementById("modalCompra");
    const conteudo = document.getElementById("modalCompraConteudo");

    if (!modal || !conteudo || !compra) {
        return;
    }

    const itensHtml = compra.itens.map((item) => {
        const tiposHtml = item.tipos.map((tipo) => {
            return `<span class="${tipo.classe}">${tipo.nome}</span>`;
        }).join("");

        return `
            <div class="modal-compra-item">
                <div class="modal-compra-info">
                    <img class="modal-compra-imagem" src="${item.imagem}" alt="${item.nome}">
                    <div>
                        <div class="modal-compra-nome">${item.nome}</div>
                        <div class="pokemon-tipos pokemon-tipos-modal">${tiposHtml}</div>
                        <div class="data-pedido">HP: ${item.stats.hp} | ATK: ${item.stats.atk} | DEF: ${item.stats.def}</div>
                        <div class="data-pedido">${item.quantidade}x ${formatarPreco(item.preco)}</div>
                    </div>
                </div>
                <div class="modal-compra-subtotal">${formatarPreco(item.preco * item.quantidade)}</div>
            </div>
        `;
    }).join("");

    conteudo.innerHTML = `
        <div class="data-pedido modal-compra-cabecalho">Compra ${compra.id} • ${compra.data}</div>
        ${itensHtml}
        <div class="sumario-row sumario-total modal-compra-total">
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
        listaCompras.addEventListener("click", (event) => {
            const itemCompra = event.target.closest("[data-compra-id]");

            if (!itemCompra) {
                return;
            }

            const usuario = obterUsuarioLogado();
            const historicoCompras = obterHistoricoCompras();
            const compra = historicoCompras.find((item) => {
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
        modal.addEventListener("click", (event) => {
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

    botaoEditar.addEventListener("click", () => {
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
        botaoSair.addEventListener("click", (event) => {
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
        botaoSairAdmin.addEventListener("click", () => {
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



///////////////botões

function inicializarBotoesNavegacao() {
    const btnSobre = document.getElementById("btnSobre");
    const btnCarrinho = document.getElementById("btnCarrinho");
    const btnVoltar = document.getElementById("btnVoltar");
    const btnPokedex = document.getElementById("btnPokedex");
    const paginaAtual = window.location.pathname.toLowerCase();
    const estaNaPaginaSobre = paginaAtual.includes("sobre.html");

    if (btnSobre) {
        if (estaNaPaginaSobre) {
            btnSobre.textContent = "INICIO";
            btnSobre.addEventListener("click", () => {
                window.location.href = "index.html";
            });
        } else {
            btnSobre.textContent = "SOBRE";
            btnSobre.addEventListener("click", () => {
                window.location.href = "sobre.html";
            });
        }
    }

    if (btnCarrinho) {
        btnCarrinho.addEventListener("click", () => {
            window.location.href = "carrinho.html";
        });
    }

    if (btnVoltar) {
        btnVoltar.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    if (btnPokedex) {
        btnPokedex.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
}

document.addEventListener("DOMContentLoaded", inicializarBotoesNavegacao);
