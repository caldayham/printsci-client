import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4%;
`;

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  margin-top: 2%;
  height: auto;
  flex: 1;
  padding: 20px;
  background-color: white;
  color: black;
  border: 1px solid rgb(200, 200, 200);
  background: rgb(231, 241, 255);

  transition: all 0.1s ease;
  &:hover {
    background: rgb(193, 220, 255);
  }
`;

const MemberDesc = styled.p`
  padding: none;
  font-size: 16px;
  text-align: left;
  font-weight: 200;
`;

const MemberImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10%;
`;

const MemberText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: 60%;
`;

const MemberDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: bottom;
`;

const MemberTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
`;

const MemberTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  display: flex;
  align-items: left;
`;

const MemberSubTitle = styled.h2`
  font-weight: 200;
  font-size: 22px;
  display: flex;
  align-items: left;
`;

export {
  MemberSubTitle,
  Container,
  MemberWrapper,
  MemberDesc,
  MemberImage,
  MemberText,
  MemberTitle,
  MemberDescWrapper,
  MemberTitleWrapper,
};
