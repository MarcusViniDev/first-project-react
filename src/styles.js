import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`
export const ImageLogo = styled.img`
width: 20%;
`
export const BoxImage = styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;
margin: 5px 0px 30px 0px;
`
export const Box = styled.div`
background-color:white;
padding: 30px 20px;
border-radius: 5px;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

ul {
    padding-left: 0;
    margin-top: 40px;
}


`
export const Input = styled.input`
width: 340px;
height: 40px;
margin-right: 40px;


`
export const Button = styled.button`
height: 40px;
width: 130px;
border-radius: 5px;
background-color: rgba(128, 82, 236, 1);
border: none;
color: white;
font-size: 1.2rem;
padding: 5px 10px;
&:hover {
  opacity: 0.8;
  cursor: pointer;
}
&:active {
  opacity: 0.9;
}
`
export const ListItem = styled.div`
  background-color: ${({ $isFinished }) => ($isFinished ? '#E8ff8b' : 'rgba(228, 228, 228, 1)')};
  width: 500px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  padding: 0 10px;
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
  user-select: none;

  li {
    list-style: none;
  }
`;




