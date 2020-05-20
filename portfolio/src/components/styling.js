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
max-width: 100%;
`};

${ breakpoint('tablet', 'desktop')`
flex-direction: column;
align-items: center;
max-width: 100%;
`};
`;

export const Main2 = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items: flex-start;
padding: 0% 7%;
${ breakpoint('mobile', 'tablet')`
width: 90vw;
`};
`;

export const About = styled.div `
padding: 0px;
width:500px;
${ breakpoint('mobile', 'tablet')`
max-width: 100%;
`};
${ breakpoint('tablet', 'desktop')`
max-width: 100%;
`};
`;

export const StyledLink = styled.a `
text-decoration: none;
width:50%;
:hover{
  background-color: #ebebeb;
  border-radius: 15px;
}
`;

export const Video = styled.iframe `
max-width: 640px;
max-height: 100%;
${ breakpoint('mobile', 'tablet')`
max-width: 100%;
`};
${ breakpoint('tablet', 'desktop')`
max-width: 90%;
`};
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
width: 640px;
max-height: 100%;
${ breakpoint('mobile', 'tablet')`
max-width: 100%;
height:auto;
`};
`;