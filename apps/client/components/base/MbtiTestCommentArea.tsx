import { FONT } from '@/constants/constant';
import { MbtiTestCommentImage, MbtiTestCommentSubmitImage } from '@/public/images/mbtiTest';
import { formatTimeDifference } from '@/utils/common';

import {
  CommentBodyWrap,
  CommentDetailWrap,
  CommentHeaderText,
  CommentHeaderWrap,
  CommentSubmitButton,
  CommentText,
  CommentTextBox,
  CommentTextBoxWrap,
  EachCommentWrap,
} from './styledComponents';
import { Image } from '@/components/ui/CommonElements';
import { Wrap_mediaquery } from '@/components/ui/Wrap';

export default function MbtiTestCommentArea({ commentCount, mbtiTestCommentData }: Base.MbtiTestCommentAreaProp) {
  return (
    <Wrap_mediaquery alignItems="center" flexDirection="column">
      <CommentHeaderWrap>
        <Image src={MbtiTestCommentImage.src} width="1rem" />
        <CommentHeaderText>댓글</CommentHeaderText>
        <CommentHeaderText color={FONT.COLOR.DEEPGRAY}>{commentCount}</CommentHeaderText>
      </CommentHeaderWrap>

      <CommentTextBoxWrap>
        <CommentTextBox placeholder="나쁜말 하면 신고합니다 ㅇㅅㅇ" />
        <CommentSubmitButton imageUrl={MbtiTestCommentSubmitImage.src} />
      </CommentTextBoxWrap>

      <CommentBodyWrap>
        {mbtiTestCommentData.map((el: Base.MbtiTestCommentData) => (
          <EachCommentWrap key={el.id}>
            <Image src={el.thumbnailImage} width="2.5rem" height="2.5rem" borderRadius="1rem" />
            <CommentDetailWrap>
              <CommentText
                color={FONT.COLOR.DEEPGRAY}
              >{`${el.username} · ${formatTimeDifference(el.commentDate)}`}</CommentText>
              <CommentText padding="0.2rem 0 0 0">{el.content}</CommentText>
            </CommentDetailWrap>
          </EachCommentWrap>
        ))}
      </CommentBodyWrap>
    </Wrap_mediaquery>
  );
}
