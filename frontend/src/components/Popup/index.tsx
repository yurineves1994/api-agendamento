import { useMutation } from "@apollo/client";
import { redirect } from "react-router-dom";
import { DELETE_SCHEDULING } from "../../graphql/mutations";
import { GET_ALL_EMPLOYEES } from "../../graphql/queries";
import { IEventScheduling } from "../../interfaces/IScheduling";
import * as S from "./style";

const formatDateTime = (isoString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  };

  return new Date(isoString).toLocaleString('pt-BR', options);
};

export const Popup = ({ event, onClose }: IEventScheduling) => {
  const [cancelSchedulingMutation] = useMutation(DELETE_SCHEDULING);
  const handleCancelScheduling = (id:string) => {
    cancelSchedulingMutation({
      variables: {
        id
      },
      refetchQueries: [{query: GET_ALL_EMPLOYEES}]
    })
    onClose()
  }

  return (
    <S.PopupOverlay>
      <S.PopupContent>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        <S.InfoList>
          <li>
            <strong>Responsavel</strong> 
            <span>{event.employeeName}</span>
          </li>
          <li>
            <strong>Evento:</strong> 
            <span>{event.titleEvent}</span>
          </li>
          <li>
            <strong>Descrição:</strong>
            <span> {event.description}</span>
          </li>
          <li>
            <strong>Data:</strong> 
            <span>{formatDateTime(event.date)}</span>
          </li>
          <li>
            <strong>Duração:</strong>
            <span> {event.duration} minutos</span>
          </li>
          <li>
            <strong>Cliente:</strong> 
            <span>{event.clientName}</span>
          </li>
          <li>
            <strong>Telefone do Cliente:</strong>{" "}
            <span>{event.clientPhone}</span>
          </li>
          <li>
            <strong>Email do Cliente:</strong> 
            <span>{event.clientEmail}</span>
          </li>
        </S.InfoList>
        <S.Buttons >
          <button  onClick={() => handleCancelScheduling(event.id)}>Cancelar Agendamento</button>
          <button  onClick={() => {
            handleCancelScheduling(event.id)
            redirect("/employee")
          }}>Remarcar Agendamento</button>
        </S.Buttons>
      </S.PopupContent>
    </S.PopupOverlay>
  );
};
