import styled from 'styled-components';

import { FONT, MEDIAQUERY, CONST_HEADER } from '@/constants/constant';

import { Div, Text } from '@/components/ui/CommonElements';

// MyHeader.tsx
export const HeaderButton = styled.button<CommonStyledComponents.HeaderButtonProp>`
  width: ${(props) => props.width ?? ''};
  height: ${(props) => props.height ?? ''};
  z-index: ${(props) => props.zIndex ?? ''};
  border-style: none;
  background: none;
  background-image: url('${(props) => props.imageUrl ?? ''}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 1rem;
`;

// MyFooter.tsx
export const PolicyText = styled(Text)`
  margin-right: 0.5rem;
  font-size: ${FONT.SIZE.EXTRA_SMALL};
  color: ${FONT.COLOR.DEEPGRAY};
`;

export const WrapForDiscription = styled(Div)`
  margin: 0 0 1.8rem 0.5rem;
`;

export const WrapForPolicyText = styled(Div)`
  display: flex;
  alignitems: center;
  position: ${(props) => props.position ?? ''};
  right: ${(props) => props.right ?? ''};
  bottom: ${(props) => props.bottom ?? ''};
  padding: ${(props) => props.padding ?? ''};
  margin: ${(props) => props.margin ?? ''};
`;

export const CopyrightText = styled(Text)`
  position: absolute;
  right: 0;
  bottom: 1.5rem;
  padding: 0.2rem 1.5rem 0 0;
  font-size: ${FONT.SIZE.EXTRA_SMALL};
  color: ${FONT.COLOR.DEEPGRAY};
`;

export const DescriptionText = styled(Text)`
  padding: 0 0 0.2rem 0;
  font-size: ${FONT.SIZE.EXTRA_SMALL};
  color: ${FONT.COLOR.DEEPGRAY};
`;

// SideMenu.tsx
export const SideMenuBlackDiv = styled.div<CommonStyledComponents.SideMenuDivProp>`
  background-color: black;
  transition: opacity 0.3s ease-in-out;
  position: fixed;
  top: 0;
  z-index: 1;
  width: ${MEDIAQUERY.WIDTH_420};
  height: ${(props) => `${props.height}px`};
  opacity: ${(props) => (props.show?.showSideMenu ? '.5' : '0')};
  pointer-events: ${(props) => (props.show?.showSideMenu ? 'auto' : 'none')};
`;

export const SideMenuWhiteDiv = styled.div<CommonStyledComponents.SideMenuDivProp>`
  background-color: white;
  transition: left 0.3s ease-in-out;
  width: ${CONST_HEADER.SIDE_MENU_WHITE_BOARD_WIDTH}px;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${(props) =>
    props.show?.showSideMenu
      ? `calc(50% - ${parseInt(MEDIAQUERY.WIDTH_420) / 2}px)`
      : `calc(50% - ${parseInt(MEDIAQUERY.WIDTH_420) + 10}px)`};
  z-index: 2;
`;

export const SideMenuGrayDiv = styled(Div)`
  background-color: #f4f4f4;
  padding-top: 1rem;
  width: ${CONST_HEADER.SIDE_MENU_WHITE_BOARD_WIDTH}px;
  height: 100%;
  position: fixed;
  top: 0;
  left: calc(50% - ${parseInt(MEDIAQUERY.WIDTH_420) + 10}px);
  z-index: 3;
`;

export const ListElementTitle = styled.li<CommonStyledComponents.ListElementTitle>`
  font-weight: ${FONT.BOLD_SCALE.BOLD};
  position: ${(props) => (props.logIn ? 'absolute' : '')};
  bottom: ${(props) => (props.logIn ? '0' : '')};
  font-size: ${(props) => props.fontSize ?? FONT.SIZE.MEDIUM};
  padding: ${(props) => props.padding ?? ''};
`;

export const ListElementContent = styled.li`
  font-size: ${FONT.SIZE.MEDIUM};
  padding: 0 0 0.2rem 0.5rem;
`;

export const WrapForText = styled(Div)`
  padding: 0.7rem 0 0.5rem 0;
`;

export const WrapBottomLogoutArea = styled(Div)`
  display: flex;
  justify-content: space-between;
  width: ${CONST_HEADER.SIDE_MENU_WHITE_BOARD_WIDTH - 60}px;
  color: ${FONT.COLOR.DARKGRAY};
`;

export const AdminAreaText = styled(Text)`
  font-size: ${FONT.SIZE.MEDIUM};
  color: ${FONT.COLOR.DARKGRAY};
  font-weight: ${(props) => props.fontWeight ?? FONT.BOLD_SCALE.MEDIUM};
`;

// MbtiTestContent.tsx
export const WrapForMbtiTestCountImageArea = styled(Div)`
  display: flex;
  margin: 0 0.7rem 0 0;
  margin: ${(props) => props.margin ?? ''};
  position: ${(props) => props.position ?? ''};
  top: ${(props) => props.top ?? ''};
`;

export const MbtiTestCountImageText = styled(Text)`
  color: ${FONT.COLOR.DARKGRAY};
  padding: ${(props) => props.padding ?? ''};
`;

// MbtiTestButtonArea.tsx
export const ButtonTextWrap = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

export const ButtonText = styled(Text)`
  font-size: ${FONT.SIZE.LARGE};
  color: ${(prop) => prop.color ?? FONT.COLOR.BLACK};
  padding-top: 0.3rem;
`;

// MbtiTestCommentArea.tsx
export const CommentHeaderWrap = styled(Div)`
  display: flex;
  width: ${MEDIAQUERY.WIDTH_370};
  margin-bottom: 0.5rem;

  @media (max-width: ${MEDIAQUERY.WIDTH_375}) {
    width: ${MEDIAQUERY.WIDTH_340};
  }
`;

export const CommentHeaderText = styled(Text)`
  font-size: ${FONT.SIZE.MEDIUM};
  color: ${(prop) => prop.color ?? FONT.COLOR.BLACK};
  padding-left: 0.2rem;
`;

export const CommentTextBoxWrap = styled(Div)`
  position: relative;
  display: flex;
  align-items: center;
`;
export const CommentTextBox = styled.input`
  width: ${MEDIAQUERY.WIDTH_370};
  height: 2.5rem;
  padding: 0 4rem 0 1rem;
  margin: 0.3rem 0;
  background-color: ${FONT.COLOR.LIGHTGRAY};
  font-size: 1rem;
  color: ${FONT.COLOR.DEEPGRAY};
  border-radius: 0.3rem;
  border-style: none;

  &::placeholder {
    font-size: ${FONT.SIZE.SMALL};
    color: ${FONT.COLOR.DEEPGRAY};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${MEDIAQUERY.WIDTH_375}) {
    width: ${MEDIAQUERY.WIDTH_340};
  }
`;

export const CommentSubmitButton = styled.button<CommonStyledComponents.CommentSubmitButton>`
  background-image: url(${(prop) => prop.imageUrl ?? ''});
  background-size: cover;
  width: 1.5rem;
  height: 1.5rem;
  border-style: none;
  position: absolute;
  right: 0;
  margin-right: 0.5rem;
`;

export const CommentBodyWrap = styled(Div)`
  width: ${MEDIAQUERY.WIDTH_370};

  @media (max-width: ${MEDIAQUERY.WIDTH_375}) {
    width: ${MEDIAQUERY.WIDTH_340};
  }
`;

export const EachCommentWrap = styled(Div)`
  padding-top: 1rem;
  display: flex;
`;

export const CommentDetailWrap = styled(Div)`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0 0 0.7rem;
`;

export const CommentText = styled(Text)`
  font-size: ${FONT.SIZE.SMALL};
  color: ${(prop) => prop.color ?? FONT.COLOR.BLACK};
  padding: ${(prop) => prop.padding ?? ''};
`;
