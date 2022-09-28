import styled, { css } from 'styled-components'

const Container = styled.div`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
`


const CreateBar = styled.div`
  width: 34vw;
  background-color: ${({theme}) => theme.CreateBar};
  color: ${({theme}) => theme.TextCreateBar};
  border-radius: 0.3em;
  display: flex;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
  @media (max-width: 500px){
    width: 84vw;
  }
`
const Input = styled.input`
  margin: 1em 0em;
  border: none;
  background-color: ${({theme}) => theme.Input};
  outline: none;
  width: 90%;
  &:active {
    border: none;
    outline: none;
    color: ${({theme}) => theme.TextInput};
  }
`
const Header = styled.div`
  background-image: url(${({theme}) => theme.BackgroundImage});
  background-repeat: no-repeat;
  background-size: auto; 
  min-height: 40vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  h1{
    margin-right: 16.5vw;
  }
  @media (max-width: 500px){
    h1{
      margin-right: 45vw;
    }
  }
  @media (min-height: 750px){
    min-height: 35vh;
  }
  @media (min-height: 850px){
    min-height: 30vh;
  }
`

const Body = styled.div`
  background-color: ${({theme}) => theme.BodyColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
const MainContainer = styled.div`
  position: sticky;
  margin-top: -15vh;
  margin-bottom: auto;
`
const HeaderContent = styled.div`
  margin-bottom: 5vh;
  flex-direction: row;
  display: flex;
  @media (max-width: 500px){
    margin-bottom: 10vh;
  }
`

const Todos = styled.div`
  width: 34vw;
  background-color: ${({theme}) => theme.Todos};
  color: ${({theme}) => theme.TextTodos};
  border-radius: 0.4em;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 0.001em 0em;
  margin-top: 1em;
  @media (max-width: 500px){
    width: 84vw;
  }
`
const Item = styled.div`
  border-width: 0em 0em 0.1em 0em;
  border-color: ${({theme}) => theme.ItemBorder};
  border-style: solid;
  flex-direction: row;
  display: flex;
  align-items: center;
  p {
    max-width: 20vw;
    margin: 1em 0 1em 0;
  }
`
const TextTodo = styled.div`
  max-width: 20vw;
  margin: 1em 0 1em 0;
  color: ${({theme}) => theme.TextTodos};
`
const FinalItem = styled(Item)`
  justify-content: space-around;
  border-width: 0;
  font-size: 16px;
  color: ${({theme}) => theme.TextFinal};
  @media (max-width: 500px){
    font-size: 12px;
  }
  div{
    justify-content: space-around;
    p1{
      margin: 0 2%;
    }
  }
  p1:hover {
    color: ${({theme}) => theme.TextTodos};
  }
`
const ThemeIcon = styled.div`
  width: 5vw;
  height: 5vh;
  margin: auto;
`
const CheckIcon = styled.div`
  width: 4vw;
  height: 2.5vh;
  margin-bottom: auto;
  svg {
    margin: 0.7em;
  }
  svg:hover {
    color: hsl(220, 98%, 61%);
  }
  @media (max-width: 500px){
    margin-bottom: 10%;
    width: 15%;
  }
`
const DeleteIcon = styled.div`
  margin-left: auto;
  margin-right: 1em;
`

export { Container, CreateBar, Header, Body, Todos, Input, Item, FinalItem, MainContainer, ThemeIcon, DeleteIcon, CheckIcon, TextTodo, HeaderContent }
