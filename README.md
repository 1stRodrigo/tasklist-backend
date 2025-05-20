# 📝 TaskList Backend

Tasklist: API REST simples para gerenciar tarefas.

utilizado: **Node.js**, **Express**, **PrismaORM** e **PostgresSQL**.

---

## 🚀 Funcionalidades

- Criar usuário
- Logar usuário
- Detalhes do usuário
- Criar uma tag
- Listar todas as tags
- Criar tarefas
- Listar tarefas por tag
- Listar todas as tarefas
- Detalhes da tarefa
- Remover tarefas
- Finalizar tarefa

---

## ⚙️ Tecnologias

- Node.js
- Express
- PostgresSQL + PrismaORM
- dotenv (variáveis de ambiente)
- Cors
- jsonwebtoken

---

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/1stRodrigo/tasklist-backend.git
```

2. **Acesse a pasta do projeto:**
```bash
cd tasklist-backend
```

3. **Instale as dependências:**
```bash
npm install
```

4. **Inicie o servidor:**
```bash
yarn dev
```

> O servidor ficará disponível em: [Projeto na Vercel](https://vercel.com/1strodrigos-projects/tasklist-backend/H3yGCR2XRdoE5x99zxKvWxBZVeXi)

---

## Rotas da API
### `POST /users`
Criar um usuário.
### `POST /session`
Logar um usuário.
### `POST /profile`
Detalhes do usuário.
### `POST /tag`
Criar uma nova tag.
### `GET /tag`
Listar todas as tags.
### `POST /task`
Criar uma tarefa. <br>
**IMPORTANTE:**
No esquema do banco de dados, utilizei enum para tipar o que seria enviado nas requisições. Nos campos Status e Prioridade.
~~~
enum TaskStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
}
enum TaskPriority {
  LOW 
  MEDIUM
  HIGH
}
~~~
## Rotas da API
### `GET /task/tag`
Listar tarefa pela tag.
### `DELETE /task`
Remover tarefa.
### `GET /tasks`
Listar todas as tarefas.
### `GET /task/detail`
Detalhar tarefa.
### `PUT /task/finish`
Finalizar tarefa.


**Exemplo de corpo da requisição:**
```json
{
	"title": "Testar primeira API",
	"description": "aprendendo a criar APIs REST usando Nodejs e Prisma!",
	"due_date": "25/05/25",
	"status": "PENDING",
	"priority": "HIGH",
	"tag_name": "Casa"
}
```
---

## 📂 Estrutura de Pastas
Utilizei a estrutura MVC (Model-View-Controller)

```
tasklist-backend/
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
└── package.json
```
---

### 🧑‍💻 Projeto pessoal
Criado para aprender mais sobre APIs, NodeJs e Banco de Dados. <br> 
Feito por [Rodrigo Oliveira](https://github.com/1stRodrigo)
