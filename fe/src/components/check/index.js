import React from 'react';
import { FlexAlignItemsCenter, FlexContainer } from '../container/styles';

const CheckMapComponent = ({
  onClickFixFileExtension,
  checkedList,
  setCheckedList,
  data,
}) => {
  return (
    <FlexContainer style={{ gap: '10px' }}>
      {data.map((item, index) => (
        <FlexAlignItemsCenter key={index}>
          <input
            onChange={(e) => {
              onClickFixFileExtension(e);
            }}
            type={'checkbox'}
            id={item.name}
            value={item.name}
            checked={checkedList.includes(item.name)}
          />
          <label htmlFor={item.name}>{item.name}</label>
        </FlexAlignItemsCenter>
      ))}
    </FlexContainer>
  );
};

export default CheckMapComponent;
