import styled from 'styled-components';

export const RegularContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 2500px) / 2);
background: #fff;
color: #101010;
`;

export const RegularWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`

export const RegularCard = styled.div`
margin: 2rem 2rem;
line-height: 2;
width: 500px;
transition: all 0.4s;
&:hover {
    transform: scale(1.1) rotate(0.01deg);
}
`;

export const RegularImg = styled.img`
height: 400px;
min-width: 400px;
max-width: 100%;
cursor: pointer;
margin-bottom: 1rem;
border-radius: 10px;

&:hover {
    opacity: 0.8;
}
`;