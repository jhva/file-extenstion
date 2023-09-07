import React from 'react';
import { RootContainerStyle } from './styles';
import { LabelRootContainer } from '../components/label/styles';
import LabelComponents from '../components/label';

const Home = () => {
  return (
    <RootContainerStyle>
      <div>
        <h2>파일확장자 차단</h2>
        <hr />
      </div>
      <div>
        <span>
          파일확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한
        </span>
      </div>

      <LabelComponents label={'고정 확장자'}>1</LabelComponents>
      <LabelComponents label={'커스텀 확장자'}>1</LabelComponents>
    </RootContainerStyle>
  );
};

export default Home;
