---------------------------------------------------------------------------------------------------------------------------------------------------------------
SafePassApp - Gerador de Senhas Aleatórias

Um App web simples e responsivo para gerar senhas aleatórias, com várias opções de personalização para caracteres e comprimento. Desenvolvido com JavaScript, HTML e CSS (usando Sass para estilização e Tailwind CSS para auxílio na construção do layout dos botões toggle), animações de pop-ups de aviso utilizando GSAP, e ícones do Font Awesome para uma melhor experiência visual.


--------------------------------------------------------------------------------------------------------
* Funcionalidades

Seleção de tipos de caracteres: inclui letras maiúsculas, minúsculas, números e caracteres especiais.

Escolha do comprimento da senha: ajustável pelo usuário com um input range.

Toggle de caracteres: permite ativar ou desativar rapidamente os tipos de caracteres.

Geração de senhas: a senha gerada é exibida diretamente na tela.

Modo escuro: ativado por meio de um botão de interação do usuário (somente disponível para usuários logados).

Login e restrições: ao acessar sem login, o usuário pode gerar senhas, mas não terá acesso ao modo escuro nem às configurações de personalização. A utilização é restrita a 1 minuto por sessão.

Pop-ups de aviso animados: utilizando a biblioteca GSAP, os pop-ups de aviso são animados para uma experiência mais interativa.

Ícones: ícones do Font Awesome são usados em diversos elementos da interface para uma melhor visualização e interação.


---------------------------------------------------------------------------------------------------------
* Tecnologias Utilizadas

HTML: para a estrutura do aplicativo.

CSS: para estilização, incluindo o uso de Sass e Tailwind CSS.

JavaScript: lógica para geração de senhas e interação com o usuário.

GSAP: para animações de pop-ups de aviso.

Font Awesome: para os ícones na interface.

Fontes: fonte Poppins importada do Google Fonts.


---------------------------------------------------------------------------------------------------------
* Como Usar

1. Selecione o comprimento da senha usando o input range.


2. Escolha os tipos de caracteres que deseja incluir (letras maiúsculas, minúsculas, números e caracteres especiais).


3. Selecione a quantidade de cada tipo de caractere que deseja incluir na senha.


4. Clique em "Gerar Senha" para criar uma senha aleatória com as especificações escolhidas.


5. A senha gerada será exibida na tela. É possível copiar e usar onde desejar.


6. Login: ao acessar sem login, o acesso às configurações de personalização e ao modo escuro será restrito. O uso do gerador de senhas será limitado a 1 minuto por sessão.


---------------------------------------------------------------------------------------------------------
* Personalização 

Adição de palavra favorita ou frase: você pode incluir uma palavra, frase, número ou caractere específico de sua escolha na senha gerada.

Quantidade de caracteres de cada tipo: você pode selecionar a quantidade de caracteres de cada tipo (maiúsculas, minúsculas, números, caracteres especiais).


* Restrições de Personalização

Ao definir a quantidade de cada tipo de caractere, não serão permitidos caracteres repetidos. Ou seja, ao escolher os tipos de caracteres que devem aparecer na senha, somente um caractere de cada tipo pode ser selecionado.


---------------------------------------------------------------------------------------------------------
Instalação

Para instalar as dependências, execute:

npm install

* Scripts

Os principais scripts definidos no arquivo package.json são:

sass: Compila o arquivo estilo.scss (em ./src/assets.css/) para CSS.

npm run sass

sassLogin: Compila o arquivo estiloLogin.scss (em ./src/assets.css/loginUser.css/) para CSS.

npm run sassLogin

twind: Processa o arquivo input.css (em ./src/inputTwind.css/) com Tailwind CSS e gera um arquivo de saída output.css em ./src/dist/.

npm run twind

build: Executa os scripts sass, sassLogin e twind em sequência.

npm run build


----------------------------------------------------------------------------------------------------------
* Dependências de Desenvolvimento

Este projeto utiliza as seguintes dependências de desenvolvimento:

@fortawesome/fontawesome-free: ^6.6.0 — Ícones Font Awesome.

autoprefixer: ^10.4.20 — Adiciona prefixos CSS automaticamente para compatibilidade entre navegadores.

postcss: ^8.4.47 — Ferramenta para transformar CSS com plugins.

sass: ^1.81.0 — Compilador Sass para SCSS.

tailwindcss: ^3.4.14 — Framework utilitário para CSS.

----------------------------------------------------------------------------------------------------------
Como Usar

1. Execute npm run build para compilar e processar todos os arquivos CSS.


2. Integre os arquivos gerados no seu projeto conforme necessário.