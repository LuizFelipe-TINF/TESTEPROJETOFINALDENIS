
const relatorios = {
    blue: {
        titulo: "OPERAÇÃO BLUE SKY",
        nivel: "ULTRASSECRETO",
        codigo: "LPH-BS-001",
        texto: `
            A diretoria identificou uma operação externa de produção
            cuja qualidade e pureza ultrapassaram todos os padrões
            anteriormente conhecidos.

            O responsável utiliza o codinome HEISENBERG.
            Seu método de trabalho permanece sob investigação.
        `,
        detalhe: `
            LOCAL: Albuquerque, Novo México<br>
            ENVOLVIDOS: W. White / J. Pinkman<br>
            OBSERVAÇÃO: Não mencionar o assunto durante o horário de almoço.
        `
    },

    madrigal: {
        titulo: "RELATÓRIO MADRIGAL",
        nivel: "CONFIDENCIAL",
        codigo: "LPH-MD-002",
        texto: `
            Auditoria das relações comerciais entre a Los Pollos
            Hermanos e a Madrigal Electromotive.

            Foram identificadas diversas conexões internacionais,
            contratos de fornecimento e movimentações que exigem
            aprovação da diretoria.
        `,
        detalhe: `
            EMPRESA: Madrigal Electromotive<br>
            RESPONSÁVEL: Lydia Rodarte-Quayle<br>
            OBSERVAÇÃO: Todos os contratos devem permanecer organizados.
        `
    },

    heisenberg: {
        titulo: "PROJETO HEISENBERG",
        nivel: "ACESSO ESPECIAL",
        codigo: "LPH-HB-003",
        texto: `
            O indivíduo identificado como Heisenberg demonstrou
            capacidade técnica excepcional e uma preocupante
            dificuldade em seguir procedimentos convencionais.

            Sua associação com a empresa não deve ser confirmada
            nem negada.
        `,
        detalhe: `
            IDENTIDADE: Walter White<br>
            CODINOME: Heisenberg<br>
            PARCEIRO IDENTIFICADO: Jesse Pinkman<br>
            OBSERVAÇÃO: Diga meu nome? Não. Não diga.
        `
    },

    superlab: {
        titulo: "INCIDENTE SUPERLAB",
        nivel: "ULTRASSECRETO",
        codigo: "LPH-SL-004",
        texto: `
            Foram encontrados registros de uma instalação
            subterrânea de alta tecnologia, equipada com
            sistemas avançados de pesquisa e monitoramento.

            A estrutura apresenta características incompatíveis
            com as atividades comerciais oficialmente declaradas.
        `,
        detalhe: `
            LOCAL: Instalação subterrânea<br>
            REFERÊNCIA: Lavanderia industrial<br>
            RESPONSÁVEL TÉCNICO: Gale Boetticher<br>
            OBSERVAÇÃO: A manutenção deverá ser realizada fora do expediente.
        `
    },

    pollos: {
        titulo: "PROTOCOLO POLLOS",
        nivel: "DIRETORIA EXECUTIVA",
        codigo: "LPH-GF-005",
        texto: `
            A reputação da Los Pollos Hermanos deve permanecer
            impecável em todas as circunstâncias.

            Pontualidade, excelência, discrição e profissionalismo
            são princípios inegociáveis.

            Lembre-se: um funcionário satisfeito é um funcionário
            produtivo.
        `,
        detalhe: `
            DIRETOR: Gustavo Fring<br>
            PRINCÍPIO: Nunca comprometa a reputação da empresa.<br>
            FRASE INSTITUCIONAL: Nós cuidamos de tudo.<br>
            OBSERVAÇÃO: Tenha um excelente dia.
        `
    }
};

// FILTROS

const filtros = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".relatorio");
const contador = document.getElementById("contador");

filtros.forEach(filtro => {
    filtro.addEventListener("click", () => {

        filtros.forEach(f => f.classList.remove("ativo"));
        filtro.classList.add("ativo");

        const categoria = filtro.dataset.filter;
        let quantidade = 0;

        cards.forEach(card => {
            const corresponde =
                categoria === "todos" ||
                card.dataset.category === categoria;

            card.classList.toggle("escondido", !corresponde);

            if (corresponde) {
                quantidade++;
            }
        });

        contador.textContent = String(quantidade).padStart(2, "0");
    });
});

// MODAL DOS DOCUMENTOS

const modal = document.getElementById("modal");
const modalConteudo = document.getElementById("modalConteudo");

const fecharModal = document.getElementById("fecharModal");
const entendido = document.getElementById("entendido");

document.querySelectorAll(".abrir-relatorio").forEach(botao => {

    botao.addEventListener("click", () => {

        const id = botao.dataset.report;
        const documento = relatorios[id];

        if (!documento) return;

        modalConteudo.innerHTML = `
            <span class="etiqueta">
                ${documento.nivel} // ${documento.codigo}
            </span>

            <h2>${documento.titulo}</h2>

            <p>${documento.texto}</p>

            <div class="detalhe">
                ${documento.detalhe}
            </div>
        `;

        modal.classList.add("ativo");
        document.body.style.overflow = "hidden";

    });

});

// FECHAR MODAL

function fecharDocumento() {
    modal.classList.remove("ativo");
    document.body.style.overflow = "";
}

fecharModal.addEventListener("click", fecharDocumento);
entendido.addEventListener("click", fecharDocumento);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        fecharDocumento();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        fecharDocumento();
    }
});

// EASTER EGG: DIGITE GUS

let codigoSecreto = "";

document.addEventListener("keydown", event => {

    if (event.key.length === 1) {
        codigoSecreto += event.key.toLowerCase();
        codigoSecreto = codigoSecreto.slice(-3);

        if (codigoSecreto === "gus") {
            alert("Um homem fornece. Tenha um excelente dia.");
            codigoSecreto = "";
        }
    }

});

// CONSOLE

console.log("%c LOS POLLOS HERMANOS TECH ", 
    "background:#e7b93f;color:#101313;font-size:18px;font-weight:bold;padding:10px;"
);

console.log("%cVocê encontrou os arquivos internos.", 
    "color:#e7b93f;font-size:13px;"
);

console.log("%cNão deveria estar aqui. - G.F.", 
    "color:#78b47c;font-size:12px;"
);
