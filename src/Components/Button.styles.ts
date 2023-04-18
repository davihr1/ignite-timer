import styled, { css } from 'styled-components'
import { ButtonVariant } from './Button'

interface ButtonContainerProps {
  variants: ButtonVariant
}

const buuttonVariant = {
  primary: 'purple',
  secundary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  //execultar como uma função e vai enviar para essa função
  //todas as propriedades do button conatiner
  /* ${(props) => {
    return css`
      background-color: ${buuttonVariant[props.variant]};
    `
  }} */
`
