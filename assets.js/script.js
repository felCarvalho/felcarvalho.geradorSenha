//todos os elementos do HTML(DOM).
export const newPassword = document.querySelector(".btn-password");
let ToggleOne = document.querySelector(".checked-one");
let ToggleTwo = document.querySelector(".checked-two");
let ToggleThree = document.querySelector(".checked-three");
let ToggleFour = document.querySelector(".checked-four");
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
const valueInsertSlider = document.querySelector(".value-slider");
export const sliderRangeStyle = document.querySelector(".custom-range");
const copyPasswordLength = document.querySelector(".numero-caracteres-copy");
export const btnResetGerador = document.querySelector(".btn-reset-gerador");

export let lowerCase = "abcdefghijklmnopqrstuvwxyz";
export let upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
export let numberCaractere = "012345679";
export let simbolosEspecial = "!@#$%&*+,:]^><\\";

//array para armazenar os ddados selecionados pelo usuario
let caracteresPassword = [];
console.log(caracteresPassword);

const modalAnimationAtivado = () => {
  modalError.style.display = "block";

  gsap.to(modalError, {
    y: 25,
    ease: "power1.out",
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
    ease: "power1.out",
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
  const passwordLength = sliderRangeStyle.value;

  const passwordArredondado = Math.floor(passwordLength);

  copyPasswordLength.textContent = `Nº Caracteres: ${passwordArredondado}`;

  //usando join() para criar um string com a array de caracteres.
  let password = caracteresPassword.join("");

  //array para armazenar os caracteres gerados
  let passwordArray = [];

  //verificando se password tem algum valor para proseguir com a geração da senha.
  if (!password || password.length === 0) {
    console.log("error-[404]");
    return;
  }

  const loopGeradorPassword = () => {
    //loop for para percorre toda a array de string para pegar os caracteres pelo seu indice.
    for (let i = 0; i < passwordArredondado; i++) {
      const randonPassword = Math.floor(Math.random() * password.length);
      console.log(randonPassword);
      //inserindo caracteres da array vazia
      passwordArray.push(password[randonPassword]);
    }
  };

  loopGeradorPassword();

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
    ease: "power1.out",
    //evita que a senha seja inserida pela metade
    onComplete: () => {
      passwordInsert.textContent = passwordOnly;
    },
  });
};

//evento de click para deixarmos o usuario selecionar quantos vezes ele vai querer geraruma senha nova
export const verificacaoGerador = (minuscula, maiuscula, numeros, simbolos) => {
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

  senhaGerada();
};

const newPasswordGenerator = function () {
  verificacaoGerador(lowerCase, upperCase, numberCaractere, simbolosEspecial);
};

export const controlePassword = function () {
  newPasswordGenerator();
};

newPassword.addEventListener("click", controlePassword);

export const slider = function () {
  const sliderValue = sliderRangeStyle.value;
  const sliderMin = sliderRangeStyle.min;
  const sliderMax = sliderRangeStyle.max;
  console.log(sliderValue);

  //calculo do slider para funcionamento dinamico
  const porcentagem =
    ((sliderValue - sliderMin) / (sliderMax - sliderMin)) * 100;
  console.log(porcentagem);

  //variavel que insere o numero de caracteres da senha controlado pelo slider.
  valueInsertSlider.textContent = Math.floor(sliderValue);

  //modo escuro e claro do slider
  if (body.classList.contains("darkmode")) {
    sliderRangeStyle.style.background = `linear-gradient(to right, #ffffffe0 ${porcentagem}%, transparent ${porcentagem}%)`;
  } else {
    sliderRangeStyle.style.background = `linear-gradient(to right, ${
      porcentagem > 73.5 ? "#8B5CF6" : "blueviolet"
    } ${porcentagem}%, transparent ${porcentagem}%)`;
    //sliderRangeStyle.style.background = `linear-gradient(to right, ${(porcentagem === 100) ? 'blueviolet' : '#8B5CF6'} ${porcentagem}%, #eeee ${porcentagem}%)`;
  }
};

export const controleSLider = function () {
  verificacaoGerador(lowerCase, upperCase, numberCaractere, simbolosEspecial);
  slider();
};

sliderRangeStyle.addEventListener("input", controleSLider);

const geradorPadrao = function (minuscula) {
  caracteresPassword = [];

  ToggleOne.checked
    ? caracteresPassword.push(minuscula) && console.log("checked padrão")
    : console.log("error no checked padrão #4563");
  verificacaoGerador(lowerCase);
  slider();
};

export const geradorPadraoReferencia = function () {
  geradorPadrao();
};

window.addEventListener("load", geradorPadraoReferencia);

export const resetGerador = function () {
  console.log("reset do gerador executado!");

  caracteresPassword = [];

  if (!ToggleOne.checked) {
    ToggleOne.checked = true;
  }
  if (ToggleTwo.checked) {
    ToggleTwo.checked = false;
  }
  if (ToggleThree.checked) {
    ToggleThree.checked = false;
  }
  if (ToggleFour.checked) {
    ToggleFour.checked = false;
  }

  const valorPadraoSlider = 10.5;
  const insertPadraoSlider = valorPadraoSlider;
  sliderRangeStyle.value = insertPadraoSlider;
  console.log(sliderRangeStyle.value);
  slider();
};

export const resetGeradorReferencia = function () {
  resetGerador();
};

btnResetGerador.addEventListener("click", resetGeradorReferencia);

//para verificar se a animação do popUp está ativa.
let isAnimation = false;

const clipBoard = () => {
  let copyPassword = passwordInsert.textContent;
  console.log(copyPassword);
  navigator.clipboard.writeText(copyPassword).then(() => {
    modalPasswordCopy.classList.remove("display-none");
    gsap.to(modalPasswordCopy, {
      opacity: 1,
      ease: "power4.out",
      duration: 1.5,
    });
  });

  setTimeout(() => {
    gsap.to(modalPasswordCopy, {
      opacity: 0,
      ease: "power4.out",
      duration: 1.5,
      onComplete: () => {
        modalPasswordCopy.classList.add("display-none");
        isAnimation = false;
      },
    });
  }, 2000);
};

copyPassword.addEventListener("click", () => {
  if (isAnimation) {
    return;
  }
  isAnimation = true;
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
  slider();
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
  });
  window.addEventListener("load", (minuscula) => {
  ToggleOne.checked
    ? caracteresPassword.push(minuscula) && console.log("checked padrão")
    : console.log("error no checked padrão #4563");
  verificacaoGerador(lowerCase);
  slider();
  caracteresPassword = [];
});

  
  
  */
