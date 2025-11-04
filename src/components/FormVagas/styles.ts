import styled from 'styled-components'
import * as Sg from '../../Global'

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${Sg.TemaPadrao.corPrincipal};
`
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Sg.TemaPadrao.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BtnPesquisar = styled.button`
  background-color: ${Sg.TemaPadrao.corPrincipal};
  border: 1px solid ${Sg.TemaPadrao.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Sg.TemaPadrao.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
