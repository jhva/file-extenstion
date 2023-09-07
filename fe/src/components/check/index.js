import React from 'react';
import { FlexAlignItemsCenter, FlexContainer } from '../container/styles';

const CheckMapComponent = ({ data, onClickFixFileExtension }) => {
  return (
    <FlexContainer style={{ gap: '10px' }}>
      {data.map((item, index) => (
        <FlexAlignItemsCenter key={index}>
          <input
            onClick={() => {
              onClickFixFileExtension(item.name);
            }}
            id={item.name}
            type={'checkbox'}
          />
          <label htmlFor={item.name}>{item.name}</label>
        </FlexAlignItemsCenter>
      ))}
    </FlexContainer>
  );
};

export default CheckMapComponent;
