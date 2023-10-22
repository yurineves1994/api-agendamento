import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { client } from './config/cliente-graphql';
import { RoutesList } from './routes/RoutesList';
import { GlobalStyle } from './styles/globalStyle';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <RoutesList />
    </ApolloProvider>
  </AuthProvider>
);

