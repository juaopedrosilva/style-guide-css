import styled from 'styled-components'
import { darken, lighten, readableColor } from 'polished';

import { Props } from './index'

export const Container = styled.button<Props>`
  padding: 20px 16px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 4px;

  background-color: ${({ outlined, backgroundColor }) => outlined ? 'transparent' : backgroundColor};
  color: ${({ color }) => readableColor(color as string, '#fff', '#19181f')};
  border: ${(props) => props.outlined ? `2px solid ${props.backgroundColor}` : 'none'};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    background-color: ${({ backgroundColor, outlined }) =>
      outlined
        ? backgroundColor
        : lighten(0.03, backgroundColor as string)};
  }

  :active:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    background-color: ${(props) =>
      darken(0.03, props.backgroundColor as string)};
  }
`
