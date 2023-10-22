import { useMutation } from "@apollo/client";
import { format } from "date-fns";
import { FormEvent, useState } from "react";
import { REGISTER } from "../../graphql/mutations";
import * as Mask from '../../masks/masks';
import * as S from "./style";

export const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [role, setRole] = useState("ADMIN");

  const [registerMutation] = useMutation(REGISTER);

  const formatDate = (date: string) => {

    const selectedDate = new Date(date);

    return format(selectedDate, 'dd/MM/yyyy');
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  

    try {
      let birth = formatDate(date);

      const { data } = await registerMutation({
        variables: {
          login,
          password,
          name,
          cpf,
          phone,
          birth,
          role
        },
      });

      console.log('Usuário registrado:', data.register);

      // Limpa os campos após o registro
      setLogin("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setCpf("");
      setPhone("");
      setDate("");
    } catch (error) {
      if (!(error instanceof Error)) {
        console.error("Erro ao registrar usuário:", error);
        return;
      }

      console.error("Erro ao registrar usuário:", error.message);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Crie uma conta</S.Title>
        <S.Subtitle>Preencha os campos abaixo para criar sua conta</S.Subtitle>
        <S.BlockInputs>
        <S.InputLabel>
          Nome:
          <S.Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputLabel>
        <S.InputLabel>
          Data de Nascimento:
          <S.Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </S.InputLabel>
        </S.BlockInputs>
        <S.BlockInputs>
        <S.InputLabel>
          Email:
          <S.Input
            type="text"
            value={login}
            onChange={(e) => setLogin(Mask.normalizeEmail(e.target.value))}
          />
        </S.InputLabel>
        <S.InputLabel>
          CPF:
          <S.Input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(Mask.normalizeCpfNumber(e.target.value))}
          />
        </S.InputLabel>
        </S.BlockInputs>
        <S.BlockInputs>
        <S.InputLabel>
          Senha:
          <S.Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputLabel>
        <S.InputLabel>
          Confirmar Senha:
          <S.Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </S.InputLabel>
        </S.BlockInputs>
        <S.InputLabel>
          Telefone:
          <S.Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(Mask.normalizePhoneNumber(e.target.value))}
          />
        </S.InputLabel>
        
        <S.Button type="submit">Registrar</S.Button>
      </S.Form>
    </S.Container>
  );
};