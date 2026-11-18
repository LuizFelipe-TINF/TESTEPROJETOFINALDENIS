
const secretModal = document.getElementById("secretModal");
const classifiedBtn = document.getElementById("classifiedBtn");
const closeModal = document.getElementById("closeModal");
const modalOk = document.getElementById("modalOk");
const secretBtn = document.getElementById("secretBtn");
const toast = document.getElementById("toast");

// MOSTRA O ALERTA DE ACESSO RESTRITO
function openModal() {
    secretModal.classList.add("active");
}

// FECHA O ALERTA
function closeSecretModal() {
    secretModal.classList.remove("active");
}

classifiedBtn.addEventListener("click", openModal);
secretBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeSecretModal);
modalOk.addEventListener("click", closeSecretModal);

// FECHAR CLICANDO FORA DA CAIXA
secretModal.addEventListener("click", function(event) {
    if (event.target === secretModal) {
        closeSecretModal();
    }
});

// SISTEMA DE NOTIFICAÇÕES
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// EASTER EGG: SEQUÊNCIA SECRETA
let secretCode = "";
const password = "pollos";

document.addEventListener("keydown", function(event) {

    if (event.key.length === 1) {
        secretCode += event.key.toLowerCase();
        secretCode = secretCode.slice(-password.length);

        if (secretCode === password) {
            showToast("Bem-vindo ao setor administrativo, Sr. Fring.");
            secretCode = "";
        }
    }

    if (event.key === "Escape") {
        closeSecretModal();
    }

});

// EASTER EGG: CONSOLE
console.log("%c LOS POLLOS HERMANOS TECH ",
    "background: #e7b93f; color: #101313; font-size: 20px; font-weight: bold; padding: 10px;"
);

console.log("%cSe você está lendo isso, provavelmente sabe demais.",
    "color: #e7b93f; font-size: 13px;"
);

console.log("%cSistema monitorado. Tenha um excelente dia.",
    "color: #78c27e; font-size: 11px;"
);

// DATA DO SISTEMA
console.log("LPH SYSTEM // " + new Date().toLocaleString("pt-BR"));
