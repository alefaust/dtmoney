import React,{useEffect} from 'react';

import { Container } from './styles';
import { api } from '../../services/api';

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data));
  },[])

  return (
    <Container>
    <table>
        <thead>
            <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Desenvolvimento de website</td>
                <td>R$12.000</td>
                <td>Desenvolvimento</td>
                <td>04/01/2022</td>
            </tr>
        </tbody>

    </table>
    </Container>
  );
}
