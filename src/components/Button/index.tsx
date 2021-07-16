import React from 'react'

import { Container } from './styles'

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<Props> = (props) => {

  const {  
    backgroundColor = '#F14964', 
    color = '#fff', 
    outlined, 
    children 
  } = props

  return (
    <Container 
      backgroundColor={backgroundColor}
      outlined={outlined}
      color={color}
      {...props}
    >
      {children}
    </Container>
  )
}

export { ButtonWrapper as Button };