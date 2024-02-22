import styled, { IStyledComponent } from "styled-components";
import { BaseObject } from "styled-components/dist/types";

export const Wrapper:IStyledComponent<"web",BaseObject> = styled.div`
  width:70%;
  margin:10px auto;
  min-width:430px;
  @media (max-width:700px){
    width:95%;
  }
`

export const HeaderBlock:IStyledComponent<"web",BaseObject> = styled.div({
    width:'100%',
    display:"flex",
    marginBottom:2,
    marginTop:2,
    alignItems:"center",
})

export const ButtonContainer:IStyledComponent<"web",BaseObject> = styled.div({
    width:'100%',
    marginTop:5,
    display:"flex",
    alignItems:'center',
    justifyContent:'end',
    columnGap:5
})

export const InputContainer:IStyledComponent<"web",BaseObject> = styled.div({
    display:'flex'
})