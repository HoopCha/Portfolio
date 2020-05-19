import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';


export const Main = styled.div `
display:flex;
justify-content:center;
padding: 5% 14%;
border-bottom: 1px solid black;

${ breakpoint('mobile', 'tablet')`
flex-direction: column;
align-items: center;
`};
`;

export const Main2 = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items: flex-start;
padding: 0% 7%;
`;

export const About = styled.div `
padding: 0px;
width:500px;
`;

export const StyledLink = styled.a `
text-decoration: none;
width:50%;
:hover{
  background-color: #ebebeb;
  border-radius: 15px;
}
`;

export const LogoBox = styled.div `
display:flex;
align-items: center;
color:#333;
flex-direction:column;
font-weight: bold;
padding: 1rem;
-webkit-transition:all .6s ease-in-out;
&:hover {
-webkit-transition:all .2s ease-in-out;
transform:scale(1.1,1.1);
}
`;

export const Image = styled.img `
max-width: 640px;
max-height: 360px;
`;