# Agenda com Spring + GraphQL

## Descrição

Este projeto é uma simulação de agenda implementada com Spring Boot e GraphQL. As principais entidades são User (usuário) e Scheduling (agendamento). O sistema permite o cadastro de usuários e agendamentos por meio de consultas e mutações GraphQL.

## Instalação

Certifique-se de ter o Java instalado em sua máquina. Clone este repositório e execute o seguinte comando:

    ```bash
    ./mvnw spring-boot:run

## Requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- **Java:** Versão 11 ou superior. Você pode baixá-lo [aqui](https://www.oracle.com/java/technologies/javase-downloads.html).

## Como Usar

Siga as etapas abaixo para executar localmente o projeto de Agenda com Spring + GraphQL:

### 1. Clonar o Repositório

    ```bash
    git clone https://github.com/seu-usuario/agenda-spring-graphql.git

## Como Usar

1. Acesse [http://localhost:8080/graphql](http://localhost:8080/graphql) para utilizar a interface GraphQL.

2. Utilize consultas e mutações GraphQL para interagir com o sistema.

    - **Criar Usuário:**

        ```graphql
        mutation {
          createUser(name: "Nome", document: "123456789", position: "Cargo") {
            id
            name
            document
            position
          }
        }
        ```

    - **Criar Agendamento:**

        ```graphql
        mutation {
          createScheduling(date: "2023-10-15T14:00:00", userId: "123") {
            id
            date
            userId
          }
        }
        ```

    - **Obter Todos os Usuários:**

        ```graphql
        query {
          getAllUser {
            id
            name
            document
            position
          }
        }
        ```

    - **Obter Usuário por ID:**

        ```graphql
        query {
          getUserById(id: "123") {
            id
            name
            document
            position
          }
        }
        ```

3. Explore outras funcionalidades da API GraphQL.

## Tecnologias Utilizadas

### Backend (Java/Spring Boot)
- [Java](https://www.java.com/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Hibernate](https://hibernate.org/)
- [H2 Database](https://www.h2database.com/)

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar pull requests.

## Contato
Caso tenham duvida ou identifiquem algum erro, meu LinkedIn (https://www.linkedin.com/in/yuri-travassos/)
