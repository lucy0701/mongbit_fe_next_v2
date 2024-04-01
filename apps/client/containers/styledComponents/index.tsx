import styled from 'styled-components';

import { FONT, MEDIAQUERY } from '@/constants/constant';

import { YellowButton } from '@/components/ui/button/Button';

// main
export const RandomStartYellowButton = styled(YellowButton)`
  margin: 1rem 0;
  border-radius: 1rem;
  width: ${MEDIAQUERY.WIDTH_370};
  height: 2.5rem;
  border-style: none;
  font-size: ${FONT.SIZE.LARGE};

  @media (max-width: ${MEDIAQUERY.WIDTH_375}) {
    width: ${MEDIAQUERY.WIDTH_345};
`;
