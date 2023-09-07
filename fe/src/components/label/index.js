import React from 'react';
import { LabelRootContainer } from './styles';

const LabelComponents = ({ children, label }) => {
  return (
    <LabelRootContainer>
      <div style={{ maxWidth: '150px', width: '100%' }}>
        <p>{label}</p>
      </div>
      <div>{children}</div>
    </LabelRootContainer>
  );
};

export default LabelComponents;
