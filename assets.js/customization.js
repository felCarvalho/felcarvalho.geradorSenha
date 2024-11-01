import {
  verificacaoGerador,
  newPassword,
  sliderRangeStyle,
  controlePassword,
  controleSLider,
  slider,
} from "../assets.js/script.js";
  
const btnConfig = document.querySelector(".icon-config-header-open");
const config = document.querySelector(".container-menu-config");
const backgroundFundoPopUp = document.querySelector(".fundo-background-menu");
const titleClosedConfig = document.querySelector(".title-closed");
const btnClosedConfig = document.querySelector(".content-closed");
const optionPersonalizar = document.querySelector(".sub-content-link");
const modalOptionCaracteresForm = document.querySelector(
  ".container-option-config"
);
const tilteBackOptionForm = document.querySelector(".title-back-form");
const btnClosedOptionForm = document.querySelector(".btn-closed-form");
const inputLowerCase = document.querySelector("#abc");
const inputUpperCase = document.querySelector("#ABC");
const inputNumber = document.querySelector("#numeros");
const inputSimbols = document.querySelector("#simbolos");
export const btnConfirmar = document.querySelector(".btn-confirmar-form");
const btnCancelar = document.querySelector(".btn-cancelar-form");

const verificacaoLower = /[a-z]/;
const verificacaoUpper = /[A-Z]/;
const verificacaoNumber = /[0-9]/;
const verificacaoCaracteresEspeciais = /[!@#$%&()-+=): /[!@#$%&()\-\+=]/;

//background para o popUp de configurações(remove o display-none)
const backgroundPopUpOn = () => {
  backgroundFundoPopUp.classList.remove("display-none");
};

//background para o popUp de configurações(adiciona o display-none)
const backgroundPopUpOff = () => {
  backgroundFundoPopUp.classList.add("display-none");
};

//popUp de configurações(remove display-none) e ativa o background para o popUp(backgroundPopUpOn)
const menuConfigOn = () => {
  config.classList.toggle("display-none");
  backgroundPopUpOn();
};

//popUp de configurações(adiciona display-none) e ainda deixa o background para o popUp de personalizar os caracteres.
const menuConfigOff = () => {
  config.classList.add("display-none");
  backgroundPopUpOn();
};

btnConfig.addEventListener("click", () => {
  menuConfigOn();
});

titleClosedConfig.addEventListener("click", () => {
  menuConfigOff();
  backgroundPopUpOff();
});

btnClosedConfig.addEventListener("click", () => {
  menuConfigOff();
  backgroundPopUpOff();
});

optionPersonalizar.addEventListener("click", () => {
  modalOptionCaracteresForm.classList.remove("display-none");
  menuConfigOff();
  backgroundPopUpOn();
});

tilteBackOptionForm.addEventListener("click", () => {
  modalOptionCaracteresForm.classList.add("display-none");
  menuConfigOn();
});

btnClosedOptionForm.addEventListener("click", () => {
  modalOptionCaracteresForm.classList.add("display-none");
  menuConfigOff();
  backgroundPopUpOff();
});

const verificarCaracteresPersonalizados = function (
  lower,
  upper,
  number,
  simbols
) {
  const lowerCase = new Set(lower);
  const upperCase = new Set(upper);
  const numerosCaracteres = new Set(number);
  const simbolosCaracteres = new Set(simbols);
  console.log(lowerCase, upperCase, numerosCaracteres, simbolosCaracteres);

  const lowerCaseArray = [...lowerCase];
  const upperCaseArray = [...upperCase];
  const numerosCaracteresArray = [...numerosCaracteres];
  const simbolosCaracteresArray = [...simbolosCaracteres];

  const lowerCaseFinal = lowerCaseArray.join("");
  const upperCaseFinal = upperCaseArray.join("");
  const numerosCaracteresFinal = numerosCaracteresArray.join("");
  const simbolosCaracteresFinal = simbolosCaracteresArray.join("");

  verificacaoGerador(
    lowerCaseFinal,
    upperCaseFinal,
    numerosCaracteresFinal,
    simbolosCaracteresFinal
  );
};

btnConfirmar.addEventListener("click", function () {
  const minusculas = inputLowerCase.value;
  const maiusculas = inputUpperCase.value;
  const numeros = inputNumber.value;
  const simbolos = inputSimbols.value;

  const validacao = [
    {
      valor: minusculas,
      validar: () =>
        verificacaoUpper.test(minusculas) ||
        verificacaoNumber.test(minusculas) ||
        verificacaoCaracteresEspeciais.test(minusculas),
      erro: "Ops, digite apenas caracteres minusculos",
    },
    {
      valor: maiusculas,
      validar: () =>
        verificacaoLower.test(maiusculas) ||
        verificacaoNumber.test(maiusculas) ||
        verificacaoCaracteresEspeciais.test(maiusculas),
      erro: "Ops, digite apenas caracteres maiusculos",
    },
    {
      valor: numeros,
      validar: () => !verificacaoNumber.test(numeros),
      erro: "Ops, digite apenas caracteres numericos",
    },
    {
      valor: simbolos,
      validar: () =>
        verificacaoUpper.test(simbolos) ||
        verificacaoLower.test(simbolos) ||
        verificacaoNumber.test(simbolos),
      erro: "Ops, digite apenas caracteres especiais",
    },
  ];

  let isError = false;

  for (const { validar, erro } of validacao) {
    if (validar()) {
      alert(erro);
      isError = true;
      break;
    }
  }

  if (!isError) {
    sliderRangeStyle.removeEventListener("input", controleSLider);
    newPassword.removeEventListener("click", controlePassword);

    const newSliderRange = function () {
      slider();
      verificarCaracteresPersonalizados(
        minusculas,
        maiusculas,
        numeros,
        simbolos
      );
    };

    const newVariablePassword = function () {
      verificarCaracteresPersonalizados(
        minusculas,
        maiusculas,
        numeros,
        simbolos
      );
    };

    sliderRangeStyle.addEventListener("input", newSliderRange);
    newPassword.addEventListener("click", newVariablePassword);
  }
});
//replace(/[^a-zA-AZ\s]+/g, "").trim();

//modelo usando regex sem verificação, apenas formatando da forma necessaria para o codigo funcionar(obs: não apresenta erros ao usuario.)

//const lowerRegex = minusculas
/*.replace(/[^a-zA-Z\s]+/g, "")
.trim()
.toLowerCase();
const upperRegex = maiusculas
.replace(/[^a-zA-Z\s]+/g, "")
.trim()
.toUpperCase();
const numerosegex = numeros;
const simbolosRegex = simbolos.replace(/^[!@#$%&*0+,:]^><]+$/

if (
    verificacaoUpper.test(minusculas) ||
    verificacaoNumber.test(minusculas) ||
    verificacaoCaracteresEspeciais.test(minusculas)
  ) {
    alert("ops! insira apenas caracteres minusculos");
  } else {
    verificarCaracteresPersonalizados(minusculas);
  }
  if (
    verificacaoLower.test(maiusculas) ||
    verificacaoNumber.test(maiusculas) ||
    verificacaoCaracteresEspeciais.test(maiusculas)
  ) {
    alert("ops! insira apenas caracteres maiusculos");
  } else {
    verificarCaracteresPersonalizados(maiusculas);
  }

  if (verificacaoNumber.test(numeros)) {
    verificarCaracteresPersonalizados(numeros);
  }

  if (
    verificacaoUpper.test(simbolos) ||
    verificacaoNumber.test(simbolos) ||
    verificacaoLower.test(simbolos)
  ) {
    alert(
      "ops! insira apenas caracteres especiais listados abaixo do campo de digitação"
    );
  } else {
    verificarCaracteresPersonalizados(simbolos);
  }
*/
