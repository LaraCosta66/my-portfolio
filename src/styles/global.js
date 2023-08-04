import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{

--blue-100: #ebebf3;
--blue-200: #d2d4e5;
--blue-300: #aaadcf;
--blue-400: #7c82b4;
--blue-600: #474b82;
--blue-800: #333559;
--blue-900: #2d2e49;
--blue-950: #1f1f32;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
}
html{
    @media (max-width: 1080px ) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}
body{
    background: var(--blue-100);

}
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`;
