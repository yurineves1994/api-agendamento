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

    - **Criar Funcionario:**

        ```graphql
        mutation {
          createEmployee(name: "YURI", document: "xxxxxxxxxxx", position: "diretor") {
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
          createScheduling(
            title:"REUNIÃO 01", 
            description: "DESCRIÇÃO REUNIÃO 01",
            duration: "25"
            clientName: "Cliente X"
            clientEmail: "teste@teste.com"
            clientPhone: "(11) 11111-1111"
            date: "17/11/2023 10:10",
            employeeId: "215e50e7-d584-4f1d-851b-ee0ebad75af2") {
                id
                date
                employeeId
              }
            }
        ```

    - **Obter Todos os Funcionarios:**

        ```graphql
        query {
          getAllEmployee {
              id
              name
              document
              scheduling {
                id,
                title
                description
                duration
                clientName
                clientPhone
                clientEmail
                date
              }
            }
        }
        ```

    - **Obter Usuário por ID:**

        ```graphql
        query {
           getEmployeeById(id: "910418d6-cfdb-41d7-8dfd-bb85ddc52de5") {
                  name
                  document
                scheduling {
                  title,
                  date
                }
              }
            }
        ```

    - **Registro:**

        ```graphql
        mutation {
           register(login: "mail@mail.com",
            password: "12345",
            name: "Usuario 01"
            cpf: "111.111.111-11"
            phone: "11 1111-1111"
            birth: "01/01/2000"
            role: "ADMIN") {
            id,
            password
            role
          }
        ```
    - **Login:**

        ```graphql
        mutation {
           login(login: "mail@mail.com", password: "12345")
        ```

3. Explore outras funcionalidades da API GraphQL.

## Tecnologias Utilizadas

### Backend (Java/Spring Boot)
- [Java](https://www.java.com/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Securiy](https://spring.io/projects/spring-boot)
- [JWT]
- [Hibernate](https://hibernate.org/)
- [H2 Database](https://www.h2database.com/)

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar pull requests.

## Contato
Caso tenham duvida ou identifiquem algum erro, meu LinkedIn (https://www.linkedin.com/in/yuri-travassos/)
