import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GolbalStyles = createGlobalStyle`
${normalize}
html {
    box-sizing: border-box;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}
body{
    min-height: 100vh;
    background-color:#b3b1b1;
}
`;

export default GolbalStyles;
