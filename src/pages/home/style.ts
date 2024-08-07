import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Home_Container = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 20px 0 20px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

// 캘린더
export const Home_Calendar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const Home_Calendar_Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Home_Calendar_Content_Day = styled.div<{ State?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.State ? '#FFF' : theme.gray[3])};
  font-weight: 400;
  font-size: 16px;
  background-color: ${(props) => (props.State ? theme.primary[7] : '')};
  padding: 4px 4px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

export const Home_Calendar_Content_Date = styled.div`
  color: ${theme.gray.black};
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 2px;
`;

export const Home_Calendar_Content_Point = styled.div`
  width: 5px;
  height: 5px;
  background-color: #ff3f9b;
  border-radius: 100%;
  margin-bottom: 50%;
`;

//검색바
export const Home_SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.gray[0]};
  border-radius: 10px;
  gap: 10px;
  margin-top: 20px;
`;

export const Home_SearchBar_Input = styled.input`
  background-color: ${theme.gray[0]};
  border: none;
  width: 82%;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  outline: none;
`;

//채팅시작하기 버튼
export const Home_Chatting = styled.img`
  width: 100%;
  margin-top: 15px;
`;

//다가오는 일정
export const Home_Plan_Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${theme.gray[4]};
  margin-top: 12px;
`;

export const Home_Plan_Contents = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-right: -15px;
  margin-left: -15px;
  padding-left: 15px;
  overflow-x: scroll;
  margin-top: 10px;

  ::-webkit-scrollbar {
    display: none !important;
  }

  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
`;

export const Home_Plan_Content = styled.div`
  min-width: 160px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.gray[0]};
  padding: 10px;
  border-radius: 5px;
`;

export const Home_Plan_Content_Title = styled.div`
  color: ${theme.sub[3]};
  font-weight: 400;
  font-size: 18px;
`;

export const Home_Plan_Content_Date_Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Home_Plan_Content_Icon = styled.div`
  background-color: ${theme.gray.white};
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

export const Home_Plan_Content_Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${theme.sub[3]};
  font-weight: 400;
  font-size: 18px;
  padding: 2px 9px 2px 9px;
  border-radius: 4px;
  background-color: #fff;
`;

//여행지추천
export const Home_RecommendPlan_Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${theme.gray[4]};
  margin-top: 20px;
`;

export const Home_RecommendPlan_Contents = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  margin-right: -15px;
  margin-left: -15px;
  padding-left: 15px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none !important;
  }

  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
`;

export const Home_RecommendPlan_Content = styled.div<{ imgUrl: string }>`
  position: relative;
  min-width: 200px;
  height: 200px;
  border-radius: 20px;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(${(props) => props.imgUrl}) lightgray 50% / cover no-repeat;
`;

export const Home_RecommendPlan_Content_Title = styled.div`
  position: absolute;
  bottom: 10px;
  left: 18px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;
