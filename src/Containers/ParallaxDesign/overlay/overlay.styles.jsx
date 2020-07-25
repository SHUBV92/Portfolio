import styled from "styled-components"


export const OverlayStyle = styled.div `

body {
    font-family: "Lato", sans-serif
}
.overlay{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.9);
    overflow-x: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
}



`