//todos os elementos intertivos do HTML
const newPassword = document.querySelector(".btn-password");
const ToggleOne = document.querySelector(".checked-one");
const ToggleTwo = document.querySelector(".checked-two");
const ToggleThree = document.querySelector(".checked-three");
const ToggleFour = document.querySelector(".checked-four");
const passwordInsert = document.querySelector(".senha-gerada");
const backdropBlur = document.querySelector(".fundo-blur");
const modalError = document.querySelector(".modal-error");
const mensagemError = document.querySelector(".mensage-error");
const btnClosed = document.querySelector(".modal-closed");
const btnDarkMode = document.querySelector(".button-dark");
const iconDark = document.querySelector(".dark-mode");
const iconSun = document.querySelector(".sun-mode");
const modalPasswordCopy = document.querySelector(".container-modal-clipboard");
const copyPassword = document.querySelector(".icon-copy");

//variaveis de dados a serem manipulados
const minuscula = "abcdefghijklmnopqrstuvwxyz";
const maiuscula = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const numeros = "12345679";
const simbolos = "!@#$%&*0+,:210]^><";

//array para armazenar os ddados selecionados pelo usuario
let caracteresPassword = [];
console.log(caracteresPassword);

const modalAnimationAtivado = () => {
  modalError.style.display = "block";

  gsap.to(modalError, {
    y: 25,
    ease: "linear",
    duration: 0.2,
    opacity: 1,
    onComplete: () => {
      modalError.style.display = "block";
    },
  });
};

const modalAnimationDesativado = () => {
  modalError.style.display = "block";

  gsap.to(modalError, {
    y: -25,
    ease: "linear",
    duration: 0.2,
    opacity: 0,
    onComplete: () => {
      modalError.style.display = "none";
    },
  });
};

//função fundo com efeito desfocado do modal
const fundoBlurOn = () => {
  backdropBlur.classList.remove("display-none");
};

//função modal sendo ativado
const popUpOn = () => {
  modalError.classList.remove("display-none");
  modalAnimationAtivado();
};

//função de desativar fundo de efeito dessfocado
const fundoBlurOff = () => {
  backdropBlur.classList.add("display-none");
};

//função de desativar o modal
const popUpOff = () => {
  modalError.classList.add("display-none");
  modalAnimationDesativado();
};

//função btn-closed para desativar modal
const closed = () => {
  modalError.classList.add("display-none");
  fundoBlurOff();
};

//função para mensagem de error presente no modal
const mensageUpdate = (updateError) => {
  mensagemError.textContent = updateError;
};

//função para criar a logica de armazenamento e de caracteres aleátorios para a senha de 20 caracteres
const senhaGerada = () => {
  let passwordOnly = "";
  const passwordLength = 20;

  //usando join() para criar um string com a array de caracteres.
  let password = caracteresPassword.join("");

  //array para armazenar os caracteres gerados
  let passwordArray = [];

  //verificando se password tem algum valor para proseguir com a geração da senha.
  if (!password || password.length === 0) {
    console.log('error-[404]')
    return;
  }

  //loop for para percorre toda a array de string para pegar os caracteres pelo seu indice.
  for (let i = 0; i < passwordLength; i++) {
    const randonPassword = Math.floor(Math.random() * password.length);
    console.log(randonPassword);
    //inserindo caracteres da array vazia
    passwordArray.push(password[randonPassword]);
  }

  //tranformando caracteres da array vazia em string.
  passwordOnly = passwordArray.join("");
  console.log(passwordOnly);

  //inserindo string no DOM
  passwordInsert.textContent = passwordOnly;

  //animação de exibição da senha
  gsap.registerPlugin(TextPlugin);

  const senhaOriginal = passwordInsert.textContent;
  passwordInsert.textContent = "";

  gsap.to(passwordInsert, {
    duration: 0.15,
    text: senhaOriginal,
    ease: "linear",
    //evita que a senha seja inserida pela metade
    onComplete: () => {
      passwordInsert.textContent = passwordOnly;
    },
  });
};

//senha sendo executada ao carregar o object window
window.addEventListener("load", () => {
  ToggleOne.checked
    ? caracteresPassword.push(minuscula) && console.log("checked padrão")
    : console.log("error no checked padrão #4563");

  senhaGerada();
});

//evento de click para deixarmos o usuario selecionar quantos vezes ele vai querer geraruma senha nova
newPassword.addEventListener("click", () => {
  caracteresPassword = [];
  console.log(caracteresPassword);

  //verificando se os botões estão checked
  if (
    !ToggleOne.checked &&
    !ToggleTwo.checked &&
    !ToggleThree.checked &&
    !ToggleFour.checked
  ) {
    fundoBlurOn();
    popUpOn();
    mensageUpdate("Ops! Selecione algum tipo de caractere.");
  }

  ToggleOne.checked
    ? caracteresPassword.push(minuscula)
    : console.log("error-toogle-one");

  ToggleTwo.checked
    ? caracteresPassword.push(maiuscula)
    : console.log("error-toogle-two");

  ToggleThree.checked
    ? caracteresPassword.push(numeros)
    : console.log("error-toogle-three");

  ToggleFour.checked
    ? caracteresPassword.push(simbolos)
    : console.log("error-toogle-four");

  //funçaõ de gerar senha só será executada após as verificações de botões.
  senhaGerada();
});

const clipBoard = () => {
  let copyPassword = passwordInsert.textContent;
  console.log(copyPassword);

  navigator.clipboard.writeText(copyPassword).then(() => {});
};

copyPassword.addEventListener("click", () => {
  clipBoard();
});

//fn=unção para retirar popUp da tela com o btnClosed
btnClosed.addEventListener("click", () => {
  closed();
  popUpOff();
  fundoBlurOff();
});

//mesma funçao de retirar o popUp da tela ao clica no modal com efeito desfocado.
backdropBlur.addEventListener("click", () => {
  closed();
  fundoBlurOff();
  popUpOff();
});

//function de ativar animação de button modo escuro e claro
const darkModeAtivado = () => {
  iconSun.classList.add("display-none");
  iconDark.classList.remove("display-none");
};

//function de desativar animação de button modo escuro e claro
const darkModeDesativado = () => {
  iconDark.classList.add("display-none");
  iconSun.classList.remove("display-none");
};

//variavel para pegar todos os elementos do DOM
const body = document.body;

btnDarkMode.addEventListener("click", () => {
  if (body.classList.contains("darkmode")) {
    darkModeAtivado();
    body.classList.remove("darkmode");
  } else {
    darkModeDesativado();
    body.classList.add("darkmode");
  }
});

//trocado pelo operador tenario.
/*if (ToggleOne.checked) {
    caracteresPassword.push(minuscula);
  }
  if (ToggleTwo.checked) {
    caracteresPassword.push(maiuscula);
  }
  if (ToggleThree.checked) {
    caracteresPassword.push(numeros);
  }
  if (ToggleFour.checked) {
    caracteresPassword.push(simbolos);
  }
    
  
  gsap.registerPlugin(TextPlugin);

  const senha = document.querySelector(".senha-gerada");
  const senhaOriginal = passwordOnly;
  senha.textContent = "";

  gsap.to(senha, {
    duration: 1,
    text: senhaOriginal,
    ease: "linear",
  });*/
