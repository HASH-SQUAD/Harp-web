//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';

const SurveyStyle = () => {
  const statusBarHeight = useStatusBarHeight();
  return (
    <_.SurveyStyle_Container>
      <_.SurveyStyle_Layout StatusBarSize={`${statusBarHeight}px`}>
        <Header
          title=""
          StatusBar={1}
          buttonState=""
          onClickMethod={() => {
            return;
          }}
        />

        <_.SurveyStyle_ProgressText>1/3</_.SurveyStyle_ProgressText>

        <_.SurveyStyle_MainText>
          좋아하는 여행 유형을
          <br /> 골라보세요.
          <_.SurveyStyle_SubText>
            최대 3개까지 선택할 수 있어요!
          </_.SurveyStyle_SubText>
        </_.SurveyStyle_MainText>

          

      </_.SurveyStyle_Layout>
    </_.SurveyStyle_Container>
  );
};

export default SurveyStyle;