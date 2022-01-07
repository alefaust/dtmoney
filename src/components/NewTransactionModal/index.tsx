import React, { useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, Radiobox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { createTransaction } = useContext(TransactionsContext);
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    createTransaction({
      title,
      amount,
      category,
      type,
    });

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Valor"
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <Radiobox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </Radiobox>
          <Radiobox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </Radiobox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadasters</button>
      </Container>
    </Modal>
  );
};
