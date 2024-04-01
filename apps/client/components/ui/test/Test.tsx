'use client';
import styled from 'styled-components';

import { FONT, MEDIAQUERY } from '@/constants/constant';
import { TestPlayCountImage } from '@/public/images/test';

import * as TypesTest from '@/components/ui/types/test';
import { TestTitleBlackSquareArea } from '@/components/ui/square/Square';
import { TestCountIconImage } from '@/components/ui/button/Button';
import { Text, Wrap, Image } from '@/components/ui/CommonElements';
import { Wrap_mediaquery } from '@/components/ui/wrap/Wrap';

const TestImageBig = styled(Image)`
  width: ${MEDIAQUERY.WIDTH_370};
  height: 15rem;
  border-radius: 1rem;
  margin: 0.5rem 0;

  @media (max-width: ${MEDIAQUERY.WIDTH_375}) {
    width: ${MEDIAQUERY.WIDTH_345};
  }
`;

const TestImageSmall = styled(Image)`
  width: 11.2rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 1rem;

  @media (max-width: ${MEDIAQUERY.WIDTH_375}) {
    width: 10.3rem;
    height: 7rem;
  }
`;

const WrapForSmallMbtiTest = styled.div`
  background-color: white;
  width: ${MEDIAQUERY.WIDTH_420};
  display: flex;
  position: relative;
  flex-wrap: wrap;
  padding: 0.5rem 0 0 0;
  justify-content: space-evenly;

  @media (max-width: ${MEDIAQUERY.WIDTH_375}) {
    width: ${MEDIAQUERY.WIDTH_375};
  }
`;

export function TestVersionBig({ imageUrl, squareText }: TypesTest.TestVersionBigProp) {
  return (
    <Wrap_mediaquery justifyContent="center">
      <TestImageBig src={imageUrl} />
      <TestTitleBlackSquareArea text={squareText} />
    </Wrap_mediaquery>
  );
}

export function TestVersionSmallForSeveral({ testData }: TypesTest.TestVersionSmallForSeveralProp) {
  return (
    <WrapForSmallMbtiTest>
      {testData?.map((e, i) => (
        <Wrap key={`${e.id} ${i}`} padding="0 0 0.7rem 0">
          <TestImageSmall src={e.imageUrl} />
          <Text
            color={FONT.COLOR.DARKGRAY}
            width="10rem"
            padding="0 0 0 0.2rem"
            fontSize={FONT.SIZE.SMALL}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            cursor="pointer"
          >
            {e.title}
          </Text>
          <Wrap display="flex" justifyContent="baseline" alignItems="center">
            <TestCountIconImage imageUrl={TestPlayCountImage.src} />
            <Text
              fontSize={FONT.SIZE.SMALL}
              color={FONT.COLOR.DARKGRAY}
              display="inline-block"
              marginLeft="0.2rem"
              cursor="pointer"
            >
              {e.playCount}
            </Text>
          </Wrap>
        </Wrap>
      ))}
    </WrapForSmallMbtiTest>
  );
}

// export function MyPageTestResult({ data, altString }: TypesTest.MyPageTestResultProp) {
//   // ksh --- 마이페이지 수정 시 업데이트
//   const resultDescriptionArray = data ?? data.content.split('<br>');
//   return (
//     <Wrap margin="0.5rem 0 1rem 1rem" display="flex" justifyContent="center">
//       <Image
//         src={data.imageUrl}
//         alt={altString}
//         width="120px"
//         objectFit="cover"
//         borderRadius="1rem"
//         margin="0 0.5rem 0 0"
//         cursor="pointer"
//       />
//       <Wrap height="11rem" overflow="hidden" margin="2px 0 0 5px">
//         <Text fontWeight={CONST.BOLD_SCALE.FIRST} fontSize={CONST.SIZE.SMALL}>
//           {data.title}
//         </Text>
//         <Ul style={{ color: CONST.COLOR.DEEPGRAY, fontSize: CONST.SIZE.EXTRA_SMALL }}>
//           {resultDescriptionArray ?? resultDescriptionArray.map((e, i) => <li key={e + i}>{e}</li>)}
//         </Ul>
//       </Wrap>
//     </Wrap>
//   );
// }
