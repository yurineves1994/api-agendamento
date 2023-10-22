import { useMutation, useQuery } from "@apollo/client";
import { format } from "date-fns";
import * as Mask from '../../masks/masks'
import { FormEvent, useEffect, useState } from "react";
import { CREATE_SCHEDULING } from "../../graphql/mutations";
import { GET_LIST_EMPLOYEES } from "../../graphql/queries";
import * as S from "./style";

interface EmployeeData {
  id: string;
  name: string;
}

export const AddEvent = () => {
  const {
    loading,
    error,
    data: { getAllEmployee: employees = []} = {}, refetch
  } = useQuery(GET_LIST_EMPLOYEES);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");

  const [createSchedulingMutation] = useMutation(CREATE_SCHEDULING);

  useEffect(() => {
    refetch()
    if (!loading && employees && employees.length > 0) {
      setSelectedEmployeeId(employees[0].id);
    }
  }, [loading, employees]);

  const formatDate = (date: string) => {

    const selectedDate = new Date(date);

    return format(selectedDate, 'dd/MM/yyyy HH:mm');
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let date = formatDate(dateTime);
      
      await createSchedulingMutation({
        variables: {
          title,
          description,
          duration,
          clientName,
          clientEmail,
          clientPhone,
          date,
          employeeId: selectedEmployeeId,
        },
      });

      setTitle("");
      setDescription("");
      setDuration("");
      setClientName("");
      setClientEmail("");
      setClientPhone("");
      setDateTime("");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao criar agendamento:", error.message);
      } else {
        console.error("Erro ao criar agendamento:", error);
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar usuários</p>;

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Cadastrar Agendamento</S.Title>
        <S.BlockInputs>
          <S.InputLabel>
            Título:
            <S.Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </S.InputLabel>
          <S.InputLabel>
            Duração (em minutos):
            <S.Input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </S.InputLabel>
        </S.BlockInputs>
        <S.InputLabel>
          Descrição:
          <S.Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </S.InputLabel>

        <S.InputLabel>
          Nome do Cliente:
          <S.Input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </S.InputLabel>
        <S.BlockInputs>         
          <S.InputLabel>
            Email do Cliente:
            <S.Input
              type="text"
              value={clientEmail}
              onChange={(e) => setClientEmail(Mask.normalizeEmail(e.target.value))}
            />
          </S.InputLabel>
          <S.InputLabel>
            Telefone do Cliente:
            <S.Input
              type="text"
              value={clientPhone}
              onChange={(e) => setClientPhone(Mask.normalizePhoneNumber(e.target.value))}
            />
          </S.InputLabel>
        </S.BlockInputs>
        <S.BlockInputs>
          <S.InputLabel>
            Data:
            <S.Input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />
          </S.InputLabel>
          <S.InputLabel>
            Responsável:
            <S.Select
              value={selectedEmployeeId}
              onChange={(e) => setSelectedEmployeeId(e.target.value)}
            >
              {employees.map((employee: EmployeeData) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </S.Select>
          </S.InputLabel>
        </S.BlockInputs>
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Container>
  );
};
