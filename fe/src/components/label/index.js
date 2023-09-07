import React from 'react';
import { LabelRootContainer } from './styles';

const LabelComponents = ({ children, label }) => {
  return (
    <LabelRootContainer>
      <p>{label}</p>
      <div>{children}</div>
    </LabelRootContainer>
  );
};

export default LabelComponents;
