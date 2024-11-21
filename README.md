# SafePassApp: Gerador de Senhas Aleatórias Pessoal

Um App web simples e responsivo. Desenvolvido com JavaScript, HTML e CSS (usando Sass para estilização e Tailwind CSS para auxílio na construção do layout dos botões toggle), animações de pop-ups de aviso utilizando GSAP, e ícones do Font Awesome para uma melhor experiência visual.
<br>

### Funcionalidades

<details>
 <summary> <strong> Seleção de tipos caracteres </strong> </summary>
 Inclui letras maiúsculas, minúsculas, números e caracteres especiais, atráves de botões toggle.
</details>
<br>
<details>
<summary><strong>Personalização</strong></summary> Personalize a quantidade de caracteres cada opção disponivel, e também pode optar por adicionar uma palavra personalizada para fazer parte da sua senha aléatoria.
</details>
<br>
<details>
<summary> <strong> Escolha do comprimento da senha </strong> </summary>
 Ajustável pelo usuário com um input range com apresentação do valor atual em container ao lado.
</details>
<br>
<details>
<summary> <strong>Modo escuro</strong> </summary>
Ativado por meio de um botão de interação do usuário (somente disponível para usuários após o login).
</details>
<br>
<details>
<summary><strong>Login e restrições</strong></summary> Ao acessar sem login, o usuário pode gerar senhas, mas não terá acesso ao modo escuro nem às configurações de personalização. A utilização é restrita a 1 minuto por sessão.
</details>
<br>
<details>
<summary> <strong> Pop-ups de aviso animados</strong> </summary> Utilizando a biblioteca GSAP, os pop-ups de aviso são animados para uma experiência mais interativa.
</details>
<br>
<details>
<summary><strong>Ícones</strong></summary> Icones do Font Awesome são usados em diversos elementos da interface para uma melhor visualização e interação.
</details>
<br>

### Tecnologias Utilizadas

**HTML:** para a estrutura do aplicativo.

**CSS:** para estilização, incluindo o uso de _**Sass**_ e _**Tailwind CSS**._

**JavaScript:** lógica para geração de senhas e interação com o usuário.

**GSAP:** para animações de pop-ups de aviso.

**Font Awesome:** para os ícones na interface.

**Fontes:** fonte Poppins importada do _**Google Fonts**_.
<br>

### Como Usar

**1. Selecione o comprimento da senha usando o input range.**

**2. Escolha os tipos de caracteres que deseja incluir (letras maiúsculas, minúsculas, números e caracteres especiais).**

**3. (Opcional) Selecione a quantidade de cada tipo de caractere que deseja incluir na senha.**

**3. (Opcional) Selecione uma palavra personaliza para facilitar a memorização da sua senha.**

**4. Clique em "Gerar Senha" para criar uma senha aleatória com as especificações escolhidas.**

**5 A senha gerada será exibida na tela. É possível copiar e usar onde desejar.**

**6. Login: ao acessar sem login, o acesso às configurações de personalização e ao modo escuro será restrito. O uso do gerador de senhas será limitado a 1 minuto por sessão.**
<br>

### Restrições de Personalizações

_Ao definir a quantidade de cada tipo de caractere, não serão permitidos caracteres repetidos. Ou seja, ao escolher os tipos de caracteres que devem aparecer na senha, somente um caractere de cada tipo pode ser selecionado._
<br>

### Instalação

**Para instalar as dependências, execute:**<br>
npm install;

**sass:** Compila o arquivo estilo.scss em ( ./src/assets.css/estilo.css) para CSS<br>
npm run sass

**sassLogin:** Compila o arquivo estiloLogin.scss em ( ./src/assets.css/loginUser.css/estiloLogin.css) para CSS.<br>
npm run sassLogin

 **twind:** Processa o arquivo input.css em ( ./src/inputTwind.css/input.css) com Tailwind CSS e gera um arquivo de saída output.css em ( ./src/dist/output.css)<br>
 npm run twind

**build:** Executa os scripts sass, sassLogin e twind em sequência.<br>
npm run build

**Obs:** utilizar o **--watch** no **package.json** momento do deploy pode causar um loop infinito no momento de executar o npm run build por parte da sua ferramenta de deploy (fique atento).

### Dependências de Desenvolvimento

Este projeto utiliza as seguintes dependências de desenvolvimento:

> **@fortawesome/fontawesome-free:** 6.6.0 — Ícones Font Awesome.

> **autoprefixer:** 10.4.20 — Adiciona prefixos CSS automaticamente para compatibilidade entre navegadores.

> **postcss:** 8.4.47 — Ferramenta para transformar CSS com plugins.

> **sass:** 1.81.0 — Compilador Sass para SCSS.

> **tailwindcss:** 3.4.14 — Framework utilitário para CSS.

**Como Usar o comando build:**

> **1. Execute npm run build para compilar e processar todos os arquivos CSS.** <br>
> **2. Integre os arquivos gerados no seu projeto conforme necessário.**
