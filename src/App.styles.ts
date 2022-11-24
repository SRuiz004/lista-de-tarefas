// Criando componente geral
/*
Como framwork, possui elementos de estilização práticos, como o
pacote styled
*/
import styled from 'styled-components';

// Conataine onde ficará o conteúdo do site
export const Container = styled.div` 
    background-color: #D8BFD8; 
    color: 	#CD5C5C;
    min-height: 100vh;
`;

// Estilização da área onde está o conteúdo
export const Area = styled.div `
    margin: auto;
    max-width:980px;
    padding: 10px;
`;

// Estilização do cabeçalho
export const Header = styled.h1 `
    margin: 0;
    padding: 0;
    color: white;
    text-align: center;
    border-bottom: 1px solid white;
`;