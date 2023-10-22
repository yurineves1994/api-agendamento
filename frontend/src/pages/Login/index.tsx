import { FormEvent, useState } from "react";
import * as S from "./style";

import { useMutation } from "@apollo/client";
import { LOGIN } from '../../graphql/mutations';
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
  const { login: contextLogin, isAuthenticated } = useAuth();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  console.log(isAuthenticated)

  const [loginMutation] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const token = data.login;
      localStorage.setItem('accessToken', token);
      contextLogin(token);
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await loginMutation({
        variables: { login, password },
      });

      console.log('Usuário autenticado:', data.login);

      setLogin("");
      setPassword("");
    } catch (error) {
      if (!(error instanceof Error)) {
        console.error("Erro ao autenticar usuário:", error);
        return;
      }

      console.error("Erro ao autenticar usuário:", error.message);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Já tem uma conta?</S.Title>
        <S.Subtitle>Informe os seus dados abaixo para acessá-la</S.Subtitle>
        <S.InputLabel>
          Email:
          <S.Input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </S.InputLabel>
        <S.InputLabel>
          Senha:
          <S.Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputLabel>
        <S.Button type="submit">Entrar</S.Button>
      </S.Form>
      <S.Block>
        <S.Title>Não tem uma conta?</S.Title>
        <S.Subtitle>Crie uma agora para acessar o sistema</S.Subtitle>
        <S.ButtonRegister to={"/register"}>Criar conta</S.ButtonRegister>
      </S.Block>
    </S.Container>
  );
};
