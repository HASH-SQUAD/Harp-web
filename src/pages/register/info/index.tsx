// 라이브러리
import React, { ChangeEvent, useRef, useState } from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import { formatBirthday } from 'lib/utils/formatBirthday';

const Info = () => {
  const statusBarHeight = useStatusBarHeight();
  const title = '환영합니다!\n회원정보를 입력해주세요.';

  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [isSelected, setIsSelected] = useState({
    female: false,
    male: false
  });

  const birthdayRef = useRef<HTMLInputElement | null>(null);

  const handleBirthday = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedBirthday = formatBirthday(e.target.value);
    setBirthday(formattedBirthday);
  };

  const handleGenderBox = (selectedGender: string) => {
    setGender(selectedGender);
    setIsSelected({
      female: selectedGender === '여성',
      male: selectedGender === '남성'
    });
  };

  return (
    <_.Info_Container>
      <_.Info_Layout StatusBarSize={`${statusBarHeight}px`}>
        <Header
          StatusBar={0}
          title=""
          buttonState=""
          onClickMethod={() => {
            return 0;
          }}
        />
        <_.Info_Title_Layout>
          <_.Info_Title_Big>{title}</_.Info_Title_Big>
          <_.Info_Title_Small>
            하프 서비스 이용을 위해 활용됩니다.
          </_.Info_Title_Small>
        </_.Info_Title_Layout>
        <_.Info_Inputs>
          <_.Info_Input_Layout>
            <_.Info_Input_Title>
              여행자 닉네임 <_.Info_Input_Title_Star>*</_.Info_Input_Title_Star>
            </_.Info_Input_Title>
            <_.Info_Input_Box
              type="text"
              placeholder="2글자 이상 입력해주세요."
            />
          </_.Info_Input_Layout>
          <_.Info_Input_Layout>
            <_.Info_Input_Title>
              생년월일 <_.Info_Input_Title_Star>*</_.Info_Input_Title_Star>
            </_.Info_Input_Title>
            <_.Info_Input_Box
              type="tel"
              placeholder="2024/01/01"
              value={birthday}
              onChange={handleBirthday}
              ref={birthdayRef}
            />
          </_.Info_Input_Layout>
          <_.Info_Input_Layout>
            <_.Info_Input_Title>
              성별 <_.Info_Input_Title_Star>*</_.Info_Input_Title_Star>
            </_.Info_Input_Title>
            <_.Info_Gender_Box>
              <_.Info_Gender
                isSelected={isSelected.female}
                onClick={() => handleGenderBox('여성')}
              >
                여성
              </_.Info_Gender>
              <_.Info_Gender
                isSelected={isSelected.male}
                onClick={() => handleGenderBox('남성')}
              >
                남성
              </_.Info_Gender>
            </_.Info_Gender_Box>
          </_.Info_Input_Layout>
        </_.Info_Inputs>
        <NextButton text="다음" state={!!birthday} />
      </_.Info_Layout>
    </_.Info_Container>
  );
};

export default Info;
