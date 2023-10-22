import { gql } from "@apollo/client";

export const GET_LIST_EMPLOYEES = gql`
  query {
    getAllEmployee {
      id
      name
    }
  }
`;

export const GET_ALL_EMPLOYEES = gql`
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
`;

export const GET_EMPLOYEE_BY_ID = gql`
  query {
    getEmployeeById(id: "8a7679c5-1f7f-484b-a036-4b20f3eb8eed") {
      id
      name
      document
      scheduling {
        id
        date
      }
    }
  }
`;
