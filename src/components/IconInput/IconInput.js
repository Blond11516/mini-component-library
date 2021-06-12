import React, { useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 18,
    borderThickness: 1,
    iconSize: 15,
    fontSize: 14 / 16
  },
  large: {
    height: 28,
    borderThickness: 2,
    iconSize: 24,
    fontSize: 18 / 16
  }
}

const NativeInput = styled.input`
  padding-left: 28px;
  height: ${({ size }) => STYLES[size].height}px;
  width: ${({ width }) => width}px;

  font-size: ${({ size }) => STYLES[size].fontSize}rem;
  color: ${COLORS.gray700};
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    font-size: ${({ size }) => STYLES[size].fontSize}rem;
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  border: none;
  border-bottom: ${({ size }) => STYLES[size].borderThickness}px solid ${COLORS.black};
`

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  cursor: text;

  &:hover {
    color: ${COLORS.black};
  }
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const inputRef = useRef(null)

  return (
    <Wrapper>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <StyledIcon id={icon} size={STYLES[size].iconSize} onClick={() => inputRef.current.focus()} />
      <NativeInput type="text" placeholder={placeholder} width={width} size={size} ref={inputRef} />
    </Wrapper>
  );
};

export default IconInput;
