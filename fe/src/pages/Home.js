import React, { useEffect, useState } from 'react';
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
import api from '../api/api';
import { getCustomExtension, postCustomExtension } from '../api/fileExtension';

const Home = () => {
  const FILELIST_MAX_SIZE = 200;

  const [customExtensionInput, setCustomExtensionInput] = useState('');
  const [getCustomExtensionData, setCustomExtensionData] = useState([]);
  const onChangeCustomExtensionInput = (e) => {
    setCustomExtensionInput(e.target.value.trim());
  };

  const onClickPostExtension = async () => {
    let body = {
      customExtensionName: customExtensionInput,
    };
    if (getCustomExtensionData.length > 200) {
      alert('최대 허용 개수(200개)를 초과하였습니다.');
      return;
    }
    postCustomExtension(body).then((res) => {
      if (res.status === 201) {
        alert('추가 완료');
        setCustomExtensionInput('');
      }
    });
  };
  useEffect(() => {
    getCustomExtension().then((res) => {
      setCustomExtensionData(res?.data?.data);
    });
  }, [customExtensionInput]);

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
            value={customExtensionInput}
            onChange={onChangeCustomExtensionInput}
            maxLength={'20'}
            placeholder={'확장자 입력'}
          />
          <ButtonGrayFontSize10px
            onClick={onClickPostExtension}
            text={'+추가'}
          />
        </FlexAlignItemsCenter>
      </LabelComponents>
      <LabelComponents label={''}>
        <CustomBox>
          <p>/{FILELIST_MAX_SIZE}</p>

          <FlexWrapContainer>
            {getCustomExtensionData?.map((item, index) => (
              <CustomFileExtensionBoxStyle>
                <p>{item?.customExtensionName}</p>
                <span onClick={''}>x</span>
              </CustomFileExtensionBoxStyle>
            ))}
          </FlexWrapContainer>
        </CustomBox>
      </LabelComponents>
    </RootContainerStyle>
  );
};

export default Home;
