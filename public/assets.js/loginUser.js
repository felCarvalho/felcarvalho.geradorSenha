"use strict";

import {
  btnConfig,
  desativarBtnVoltar,
  ativarBtnVoltar,
} from "../assets.js/customization.js";

export const password = document.querySelector(".login-password");
export const user = document.querySelector(".login-user");
const geradorContainer = document.querySelector(".borda");
const loginContainer = document.querySelector(".container-login");
const nameAutor = document.querySelector(".content-tag-name");
const btnLogin = document.querySelector(".btn-login");
export const temporizadorConvidadoUser = document.querySelector(
  ".container-temporizador"
);
const visualizarPassword = document.querySelector(
  ".icon-viasualiador-password"
);
const esconderPassword = document.querySelector(".icon-esconder-password");
export const containerPopUp = document.querySelector(
  ".container-animation-login"
);
const containerPopUpLoginSucesso = document.querySelector(
  ".container-animation-login-sucesso"
);
const containerPopUpLoginError = document.querySelector(
  ".container-animation-login-error"
);

export const ativarPoUpLogin = function () {
  containerPopUp.classList.remove("display-none");
};

const ativarPoUpLoginReferencia = function () {
  ativarPoUpLogin();
};
 
export const desativarPoUpLogin = function () {
  containerPopUp.classList.add("display-none");
};

const desativarPoUpLoginReferencia = function () {
  desativarPoUpLogin();
};

export let isAnimationLogin = false;

export const verficarAnimaçao = function (status) {
  isAnimationLogin = status;
};

export const popUpLogin = function (modal) {
  modal.classList.remove("display-none");
  gsap.to(modal, {
    opacity: 1,
    y: 20,
    ease: "power4.out",
    duration: 1.5,
  });

  setTimeout(() => {
    gsap.to(modal, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
      duration: 1.5,
      onComplete: () => {
        modal.classList.add("display-none");
        verficarAnimaçao(false);
      },
    });
  }, 3500);
};

const login = {
  userKey: "felipeAdmin",
  passwordKey: "20232024",
};

//função de ativar a pag de login
export const ativarInterfaceLogin = () => {
  loginContainer.classList.remove("display-none");
};

export const desativarTemporizador = function () {
  temporizadorConvidadoUser.classList.add("display-none");
};

const desativarTemporizadorReferencia = function () {
  desativarTemporizador();
};

export const ativarTemporizador = function () {
  temporizadorConvidadoUser.classList.remove("display-none");
};

const ativarTemporizadorReferencia = function () {
  ativarTemporizador();
};

//função de referencia para ativar pag de login("muito util caso queria remover essa função em algum outro tipo de uso" de evento de load)
const ativarInterfaceLoginReferencia = function () {
  ativarInterfaceLogin();
  desativarBtnVoltar();
};

//função de desativar a pag de login
const desativarInterfaceLogin = () => {
  loginContainer.classList.add("display-none");
  ativarBtnVoltar();
};
//função de referencia para desativar pag de login("muito util caso queria remover essa função em algum outro tipo de uso" de evento de load)
export const desativarInterfaceLoginReferencia = function () {
  desativarInterfaceLogin();
};

//evento de load para atualzar a varivel de controle assim que a pag carregar
//window.addEventListener("load", controleLoginReferencia);
window.addEventListener("load", desativarTemporizadorReferencia);

//evento de load para carregar a interface de login
window.addEventListener("load", ativarInterfaceLoginReferencia);

//função de execução direta para ativar o gerador
export const ativarGerador = () => {
  geradorContainer.classList.remove("display-none");
  nameAutor.classList.remove("display-none");
};

//função de desativar o gerador
export const desativarGerador = () => {
  geradorContainer.classList.add("display-none");
  nameAutor.classList.add("display-none");
};

export const voltarPagLoginRefernciaTwo = function () {
  voltarPagLoginTwo();
};

//função de verificar o login de acrodo com os parametrôs escolhidos para efetuar ou não o login.
const verificarLogin = function ({ userKey, passwordKey }) {
  console.log(`Esse é o usuer: ${userKey}`);
  console.log(`Essa é a senha: ${passwordKey}`);

  const valorUser = user.value;
  const valorPassword = password.value;

  if (valorUser !== userKey || valorPassword !== passwordKey) {
    desativarGerador();
    popUpLogin(containerPopUpLoginError);
  } else {
    desativarBtnVoltar();
    desativarInterfaceLogin();
    desativarTemporizador();
    ativarGerador();
    popUpLogin(containerPopUpLoginSucesso);
    btnConfig.classList.remove("display-none");
  }
};

//função de referencia para executar a funçaõ de verificação de login ("muito util caso queria remover essa função em algum outro tipo de uso).
const verificarLoginReferencia = function () {
  verificarLogin(login);
};

//evento de clickda função verficarLoginReferencia
btnLogin.addEventListener("click", verificarLoginReferencia);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    verificarLogin(login);
  }
});
