import styled from 'styled-components';

import { MEDIAQUERY } from '@/constants/constant';

import * as Types from '../types';

export const Wrap_mediaquery = styled.div<Types.WrapMediaqueryProp>`
  background-color: white;
  width: ${MEDIAQUERY.WIDTH_420};
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? ''};
  justify-content: ${(props) => props.justifyContent ?? ''};
  align-items: ${(props) => props.alignitems ?? ''};
  padding: ${(props) => props.padding ?? ''};
  margin: ${(props) => props.margin ?? ''};
  position: ${(props) => props.position ?? ''};
  text-align: ${(props) => props.textAlign ?? ''};

  @media (max-width: ${MEDIAQUERY.WIDTH_375}) {
    width: ${MEDIAQUERY.WIDTH_375};
  }
`;
