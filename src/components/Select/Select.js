import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  position: absolute;
`

const PresentationalBit = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 12px;

  font-size: 1rem;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
  }

  ${NativeSelect}:focus ~ & {
    background-color: red;
  }
  
  ${NativeSelect}:hover ~ & {
    color: ${COLORS.black};
  }
`

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const ArrowIcon = styled(Icon)`
  margin-left: 16px;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <ArrowIcon id="chevron-down" size={24} strokeWidth={2} />
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
