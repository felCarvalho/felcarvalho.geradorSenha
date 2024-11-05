const password = document.querySelector(".login-password");
const user = document.querySelector(".login-user");
const formLogin = document.querySelector(".container-form");
let linkConvidado = document.querySelector(".link");

const login = {
  userKey: "felipeAdmin",
  passwordKey: "20232024",
};

const loginValidar = function ({ userKey, passwordKey }) {
  return function (e) {
    const valorUser = user.value.trim();
    const valorPassword = password.value.trim();

    if (valorUser !== userKey || valorPassword !== passwordKey) {
      alert("usuário ou senha invalida");
      e.preventDefault();
    } else {
      alert("login feito com sucesso");
    }
  };
};

const validarLoginReferencia = loginValidar(login);
formLogin.addEventListener("submit", validarLoginReferencia);
