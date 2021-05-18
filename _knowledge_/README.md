# Como funciona o protocolo GraphQL

- Apenas uma rota que aceita apenas o método `post`.

```graphql
POST - /graphql
{
  query todosUsuarios {
  users()
}

query todosPedidos {
  orders()
  }
}
```

- Para realizar ações que condizem com intenções similares os métodos http comuns de API rest (GET, PUT, DELETE, POST), possuimos três varições no GraphQL que podem ser enviadas no corpo da requisição.
  - query serve apenas para buscas com o conceito imutabilidade.
  - mutation condiz com todas as intenções de alteração de dados.
  - subscription são ações que gostariamos de consumir informações em tempo real, normalmente todo os frameworks de graphql já possuem suporte ao realtime integrado.
- **Resolve um problema de overfetching que possuimos em API REST ao trazer informações de necessárias e consumindo uma banda além do necessário.**

# Criando projeto

- Selecione o framework + package graphql
  - Apollo Server
- Criar schemas com:
  - definir `type` _User_ [id, name, email]
  - definir `type` _Query_ `users: [User!]!`
  - ainda dentro de query `user(id: ID!): User`
  - ! dentro de array deixa todo o tipo como obrigatório, e para o lado de fora deixa opcional o retorno `<type|null>`.
  - definir `type` _Mutation_ createUser(name: String!, email: string!): User

# Definindo os types no server

- importar o schema do path e incluir no server.
- criar os resolvers do tipo objeto.
  - declarar os resolvers de cada tipo, Queries e Mutations.
- Criar mock de repository para mockar base de dados.
