import React,{useEffect} from 'react';

import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    fecth('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data));
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
