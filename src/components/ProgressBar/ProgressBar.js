/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHT = {
  small: 8,
  medium: 12,
  large: 24
}

const Background = styled.div`
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  border-radius: 4px;
  height: ${({ size }) => HEIGHT[size]}px;

  ${({ size }) => size === 'large' ? 'padding: 4px;' : ''}
`

const Wrapper = styled.div`
  height: 100%;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};

  width: ${({ width }) => width}%;
  height: 100%;

  border-radius: 2px;
  ${({ width }) => {
    if (width < 99) {
      return css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `
    }
  }}
`

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <Background size={size} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
        <Wrapper>
          <Bar width={value} size={size}>
            <VisuallyHidden>
              {value}%
            </VisuallyHidden>
          </Bar>
        </Wrapper>
      </Background>
    </>
  )
};

export default ProgressBar;
