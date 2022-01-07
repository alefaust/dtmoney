import React, {useState}  from 'react';
import {NewTransactionModal} from './components/NewTransactionModal';
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
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleOpenAndCloseNewTransactionModalOpen}
      />
      <GlobalStyle />
    </>
  );
}

