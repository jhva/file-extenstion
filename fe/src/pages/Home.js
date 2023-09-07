import React from 'react';
import { FlexWrapContainer, RootContainerStyle } from './styles';
import LabelComponents from '../components/label';
import CheckMapComponent from '../components/check';
import { FILE_EXTENSION } from '../constants';

import { ButtonGrayFontSize10px } from '../components/button';
import { FlexAlignItemsCenter } from '../components/container/styles';
import { InputRadius5pxPadding7px } from '../components/inputs/styles';
import {
  CustomBox,
  CustomFileExtensionBoxStyle,
} from '../components/box/styles';

const Home = () => {
  const FILELIST_MAX_SIZE = 200;

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

      <LabelComponents label={'고정 확장자'}>
        <CheckMapComponent data={FILE_EXTENSION} />
      </LabelComponents>
      <LabelComponents label={'커스텀 확장자'}>
        <FlexAlignItemsCenter style={{ gap: '10px' }}>
          <InputRadius5pxPadding7px
            maxLength={'20'}
            placeholder={'확장자 입력'}
          />
          <ButtonGrayFontSize10px text={'+추가'} />
        </FlexAlignItemsCenter>
      </LabelComponents>
      <LabelComponents label={''}>
        <CustomBox>
          <FlexWrapContainer>
            <CustomFileExtensionBoxStyle>
              <p>testes</p>
              <span
                onClick={() => {
                  console.log('123');
                }}
              >
                x
              </span>
            </CustomFileExtensionBoxStyle>
          </FlexWrapContainer>
        </CustomBox>
      </LabelComponents>
    </RootContainerStyle>
  );
};

export default Home;
