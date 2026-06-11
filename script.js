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
                <div class="footer-section">
                    <h4>LINKS</h4>
                    <p><a href="#">Política de Privacidade</a><br><a href="#">Termos de Serviço</a></p>
                </div>
            </div>
            <div class="footer-divisor">
                <p>© 2026 Rota Grama Alta. Todos os direitos reservados. Fire Red Edition.</p>
            </div>
        </div>
    `;

    footerContainer.innerHTML = footerHtml;
}

document.addEventListener("DOMContentLoaded", renderizarPokemons);
document.addEventListener("DOMContentLoaded", renderizarFooter);