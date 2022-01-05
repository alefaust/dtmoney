import React, {useState}  from 'react';
import Modal from 'react-modal';
import {GlobalStyle} from './styles/global';
import {Dashboard} from './components/Dashboard';
import { Header } from './components/Header';

Modal.setAppElement('#root');

export const App : React.FC = () =>{
    const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenAndCloseNewTransactionModalOpen () {
    setIsNewTransactionModalOpen( old => !old);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenAndCloseNewTransactionModalOpen}/>
      <Dashboard />
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleOpenAndCloseNewTransactionModalOpen}>
          <h2>Cadastrar transação</h2>
        </Modal>
      <GlobalStyle />
    </>
  );
}

