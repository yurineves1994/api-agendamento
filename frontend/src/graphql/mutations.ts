import { gql } from "@apollo/client";

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($name: String!, $document: String!, $position: String!) {
    createEmployee(name: $name, document: $document, position: $position) {
      id
      name
      document
      position
    }
  }
`;

export const CREATE_SCHEDULING = gql`
  mutation CreateScheduling($title: String!, $description: String!, $duration: String!, $clientName: String!,$clientEmail: String!, $clientPhone: String!, $date: String!, $employeeId: String!) {
    createScheduling(title: $title, description: $description, duration: $duration, clientName: $clientName, clientEmail: $clientEmail, clientPhone: $clientPhone, date: $date, employeeId: $employeeId) {
      id
      title
      description
      duration
      clientName
      clientEmail
      clientPhone
      date
    }
  }
`;

export const DELETE_SCHEDULING = gql`
  mutation RemoveScheduling($id: String!) {
    removeScheduling(id: $id)
  }
`;

export const REGISTER = gql`
  mutation Register($login: String!,$password: String!, $name: String!, $cpf: String!, $phone: String!, $birth: String!, $role: String!) {
    register(login: $login, password: $password, name: $name, cpf: $cpf, phone: $phone, birth: $birth, role: $role) {
      id,
      password
      role
    }
  }
`;

export const LOGIN = gql`
  mutation Login($login: String!, $password: String!) {
    login(login: $login,password: $password)
  }
`;