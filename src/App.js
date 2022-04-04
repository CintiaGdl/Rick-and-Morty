import { useContext } from 'react';
import './App.css';
import Apirequest from './complements/ApiRequest';
import Navbar from './complements/NavBar/NavBar';
import styled from 'styled-components';
import Themecontext from './contexts/ThemeContext';


function App() {

const {theme} = useContext(Themecontext);
  
  const Global = styled.div`
    background-color: ${theme.background};
  `


  return (
    <Global>
        <Navbar />
        <Apirequest />
    </Global>
  );
}

export default App;
