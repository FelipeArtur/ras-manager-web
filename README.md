# RAS Manager

## Equipe e corpo docente do PI

Discentes (integrantes):

- Amanda Rigaud
- Felipe Ribeiro
- Guilherme Almeida
- Jorge Ricarte
- Rodrigo Macêdo

Docentes:

- Marcio Soussa
- Hilton Vicente


## Como acessar

**Clonando o repositório:**<br/>
1. Clique no botão de cor verde escrito "Code"
2. Copie a URL fornecida na aba Local > HTTPS
3. Abra o terminal no diretório desejado e digite o comando: `git clone https://github.com/RAS-MANAGER/ras-manager-web.git`

**Executando o projeto**<br/>
> Executando o Back-end

*Requisitos*: 
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [MySQL](https://dev.mysql.com/downloads/installer/)

- [Nosso script MySQL](https://docs.google.com/document/d/17Ae6wyL0NVFgF1mbksu7tVYMInyjssj7VDAuagkcBpc/edit?usp=sharing)

1. Caso não tenha o MySQL instalado, siga este [passo-a-passo para instalação](https://youtu.be/KYaZVqHHXpM).
2. Após instalado o MySQL, abra o MySQL Workbench.
3. Crie uma nova conexão (de preferência com o usuário `root`).
4. Vá na aba `Server` e clique em `Data Import`.
5. Em `Import from Dump Project Folder`, selecione a pasta extraída do arquivo WinRar [que você deverá fazer download aqui](https://github.com/RAS-MANAGER/assets/blob/main/Dump20221113.rar).
6. Clique em `Load Folder Contents`. 
7. Deixe a conexão aberta e volte para o projeto que você clonou do Github.
8. Na pasta `server`, abra o arquivo `index.js`.
9. Neste arquivo, da linha 7 à linha 10, altere o que for necessário baseado nas configurações de sua conexão no MySQL Workbench.
10. Após as alterações, abra um terminal dentro do projeto e digite `cd server`
11. Execute o comando `node index.js`
12. Será aberta uma janela em seu navegador acessando o `localhost:3001`.
13. Faça um teste acrescentando um caminho a essa URL. Recomendamos: `localhost:3001/pessoas`.
14. Caso seja exibido um `json`, pode fechar apenas a janela, mas deixe o terminal aberto. Ele será importante para deixar o servidor funcionando.

> Executando o Front-End

*Requisitos*:
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Abra um OUTRO terminal dentro do projeto (na raiz, **fora** da pasta **server**).
2. Digite `npm start`
3. Será aberta uma aba conectada ao `localhost:3000`.
4. Não é necessário fazer login. Clique em `Entrar`.
5. Telas conectadas ao banco de dados e funcionando: `Membros RAS`, `Eventos` e `Reuniões`.


---

# Especificações técnicas

- Front-End: ReactJS - NPM.
- Back-End: ExpressJS - conexão direta com MySQL via `mysql2`
- Banco de Dados: MySQL - RAS Manager

`ReactJS`: Framework Front-End<br/>
`ExpressJS`: Framework Back-End Node responsável por fornecer recursos mínimos para implementação de servidor web.<br/>
`MySQL (mysql2)`: Banco de Dados relacional que interage com o ExpressJS para manipulação e integração de dados.

Tecnologia | Status 
------ | ------
ReactJS | ✔ 
ExpressJS   | ✔ 
MySQL   | ✔

# Acessos

- Rotas para navegação entre telas: [Routes](src/Routes.js)
- Conexão com Banco de Dados (MySQL): [server](server/index.js)