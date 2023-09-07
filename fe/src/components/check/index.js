import React from 'react';
import { FlexAlignItemsCenter, FlexContainer } from '../container/styles';

const CheckMapComponent = ({ data }) => {
  return (
    <FlexContainer style={{ gap: '10px' }}>
      {data.map((item, index) => (
        <FlexAlignItemsCenter key={index}>
          <input id={item.name} type={'checkbox'} />
          <label for={item.name}>{item.name}</label>
        </FlexAlignItemsCenter>
      ))}
    </FlexContainer>
  );
};

export default CheckMapComponent;
