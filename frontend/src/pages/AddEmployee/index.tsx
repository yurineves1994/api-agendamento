import { useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import * as Mask from '../../masks/masks'
import { CREATE_EMPLOYEE } from '../../graphql/mutations';
import * as S from './style'

export const AddEmployee = () => {
  const [nome, setNome] = useState('');
  const [documento, setDocumento] = useState('');
  const [cargo, setCargo] = useState('');

  const [createUserMutation] = useMutation(CREATE_EMPLOYEE);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await createUserMutation({
        variables: { name: nome, document: documento, position: cargo },
      });

      console.log('Usuário criado:', data.createUser);

      setNome('');
      setDocumento('');
      setCargo('');
    } catch (error) {
      if (!(error instanceof Error)) {
        console.error('Erro ao criar usuário:', error);
        return;
      }

      console.error('Erro ao criar usuário:', error.message);
    }
  };


  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Cadastrar Usuário</S.Title>
        <S.InputLabel>
          Nome:
          <S.Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </S.InputLabel>
        <S.InputLabel>
          Documento:
          <S.Input type="text" value={documento} onChange={(e) => setDocumento(Mask.normalizeCpfNumber(e.target.value))} />
        </S.InputLabel>
        <S.InputLabel>
          Cargo:
          <S.Input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
        </S.InputLabel>
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Container>
  );
};
