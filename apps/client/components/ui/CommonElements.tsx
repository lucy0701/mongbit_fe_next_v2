import styled from 'styled-components';

import { FONT } from '@/constants/constant';

import * as TypesCommonElements from '@/components/ui/types/commonElements';
import * as TypesButton from '@/components/ui/types/button';

export const Image = styled.img<TypesButton.Image>`
  width: ${(props) => props.width ?? ''};
  margin: ${(props) => props.margin ?? ''};
  object-fit: ${(props) => props.objectFit ?? ''};
  border-radius: ${(props) => props.borderRadius ?? ''};
  cursor: ${(props) => props.cursor ?? ''};
`;
export const TitleText = styled.p<TypesCommonElements.Text>`
  color: ${(props) => props.color ?? FONT.COLOR.BLACK};
  font-size: ${(props) => props.fontSize ?? FONT.SIZE.MEDIUM};
  font-weight: ${(props) => props.fontWeight ?? ''};
  padding: ${(props) => props.padding ?? ''};
  margin: ${(props) => props.margin ?? ''};
  padding-left: 1.5rem;
`;

export const Text = styled.p<TypesCommonElements.Text>`
  color: ${(props) => props.color ?? FONT.COLOR.BLACK};
  width: ${(props) => props.width ?? ''};
  padding: ${(props) => props.padding ?? ''};
  font-size: ${(props) => props.fontSize ?? FONT.SIZE.MEDIUM};
  white-space: ${(props) => props.whiteSpace ?? ''};
  overflow: ${(props) => props.overflow ?? ''};
  text-overflow: ${(props) => props.textOverflow ?? ''};
  cursor: ${(props) => props.cursor ?? 'auto'};
  display: ${(props) => props.display ?? 'block'};
  margin-left: ${(props) => props.marginLeft ?? ''};
`;

export const Wrap = styled.div<TypesCommonElements.Wrap>`
  width: ${(props) => props.width ?? ''};
  height: ${(props) => props.height ?? ''};
  margin: ${(props) => props.margin ?? ''};
  overflow: ${(props) => props.overflow ?? ''};
  display: ${(props) => props.display ?? ''};
  flex-wrap: ${(props) => props.flexWrap ?? ''};
  position: ${(props) => props.position ?? ''};
  right: ${(props) => props.right ?? ''};
  bottom: ${(props) => props.bottom ?? ''};
  padding: ${(props) => props.padding ?? ''};
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  justify-content: ${(props) => props.justifyContent ?? ''};
  align-items: ${(props) => props.alignItems ?? ''};
  background-color: ${(props) => props.backgroundColor ?? ''};
  border-radius: ${(props) => props.borderRadius ?? '0'};
`;

export const Stroke = styled.div`
  border-bottom: 0.1rem solid #f1f1f1;
  width: 90%;
  height: 0.5rem;
`;
