import React from 'react';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export const Dashboard: React.FC = () => (
  <Container>
    <Summary />
    <TransactionsTable />
  </Container>
);
