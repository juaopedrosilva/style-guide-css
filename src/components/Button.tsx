import React from 'react'

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<Props> = (props) => {
  return (
    <button>{props.children}</button>
  )
}

export { ButtonWrapper as Button }