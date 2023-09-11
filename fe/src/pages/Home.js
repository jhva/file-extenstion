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
import {
  deleteCustomExtension,
  getCustomExtension,
  postCustomExtension,
  postFixFileExtension,
} from '../api/fileExtension';

const Home = () => {
  const FILELIST_MAX_SIZE = 200;

  const [customExtensionInput, setCustomExtensionInput] = useState('');
  const [getCustomExtensionData, setGetCustomExtensionData] = useState([]);

  const [checkedList, setCheckedList] = useState([]);
  useEffect(() => {
    getCustomExtension().then((res) => {
      setGetCustomExtensionData(res?.data?.data);
    });
  }, [checkedList]);
  useEffect(() => {
    const postData = async () => {
      if (await postFixFileExtension(checkedList)) {
        console.log('123');
      }
    };

    if (checkedList.length > 0) {
      postData();
    }
  }, [checkedList]);
  const onChangeCustomExtensionInput = (e) => {
    setCustomExtensionInput(e.target.value.trim());
  };

  const onClickPostExtension = async () => {
    let body = {
      customExtensionName: customExtensionInput,
    };
    if (getCustomExtensionData?.length > 200) {
      alert('최대 허용 개수(200개)를 초과하였습니다.');
      return;
    }
    if (customExtensionInput === '') {
      alert('확장자를 입력해주세요');
      return;
    }

    if (await postCustomExtension(body)) {
      alert('추가 완료');

      body.id = getCustomExtensionData[0].id + 1;
      /**
       * 데이터의 삭제가 id 기준으로 삭제되기때문에
       * 데이터가 삭제 or 추가될때마다 새로고침 을 통해서 데이터를 불러오는게 불필요하다 판단,
       * 이후 데이터가 추가되는게 if 블록안에 타게될경우 기존에 데이터를 복사하여
       * POST 요청시 추가했던 body 객체에 id 프로퍼티를 넣어줌
       * id가 [0]번째 데이터에서 가져와 +1을 한 이유  : 최신순으로 넣어줘야하기때문에 unshift 는   요소를 배열의 맨 앞쪽에 추가해주기때문에 최신순 유지해주고,
       * +1을 해주는경우는 [0].id 기준으로 +1 을해주면 id+1이 들어가기때문에  문제가 없다라고 판단
       */

      setGetCustomExtensionData((prev) => {
        let newData = Object.assign([], prev);
        newData.unshift(body);
        return newData;
      });
    }

    setCustomExtensionInput('');
  };

  const onClickFixFileExtension = (e) => {
    if (!e.target.checked) {
      setCheckedList(checkedList.filter((el) => el !== e.target.value));
    } else {
      setCheckedList([...checkedList, e.target.value]);
    }
  };

  const onClickDeleteExtension = async (customFileId) => {
    if (await deleteCustomExtension(customFileId)) {
      alert('삭제 완료');
      setGetCustomExtensionData(
        getCustomExtensionData.filter((data) => data.id !== customFileId)
      ); // 기존에 데이터를 삭제한다.
    }
  };
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
        <CheckMapComponent
          onClickFixFileExtension={onClickFixFileExtension}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          data={FILE_EXTENSION}
        />
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
          <div>
            <p>
              {getCustomExtensionData?.length}/{FILELIST_MAX_SIZE}
            </p>

            {getCustomExtensionData?.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                현재 데이터가 존재하지 않습니다.
              </div>
            )}
            <FlexWrapContainer>
              {getCustomExtensionData?.map((item, index) => (
                <CustomFileExtensionBoxStyle key={index}>
                  <p>{item?.customExtensionName}</p>
                  <span
                    onClick={() => {
                      onClickDeleteExtension(item?.id);
                    }}
                  >
                    x
                  </span>
                </CustomFileExtensionBoxStyle>
              ))}
            </FlexWrapContainer>
          </div>
        </CustomBox>
      </LabelComponents>
    </RootContainerStyle>
  );
};

export default Home;
