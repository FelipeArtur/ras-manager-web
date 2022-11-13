# RAS Manager

---

# Especificações técnicas

- Front-End: ReactJS - NPM.
- Back-End: ExpressJS - conexão direta com MySQL via `mysql2`
- Banco de Dados: MySQL - RAS Manager

`ReactJS`: Framework Front-End
`ExpressJS`: Framework Back-End Node responsável por fornecer recursos mínimos para implementação de servidor web.
`MySQL (mysql2)`: Banco de Dados relacional que interage com o ExpressJS para manipulação e integração de dados.

Tecnologia | Status 
------ | ------
ReactJS | ✔ 
ExpressJS   | ✔ 
MySQL   | ✔

# Acessos

- Rotas para navegação entre telas: [Routes](src/Routes.js)
- Conexão com Banco de Dados (MySQL): [server](server/index.js)