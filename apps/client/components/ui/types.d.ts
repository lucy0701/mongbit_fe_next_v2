declare namespace Ui {
  type Image = {
    width?: string;
    height?: string;
    margin?: string;
    imageUrl?: string;
    objectFit?: string;
    borderRadius?: string;
    cursor?: string;
  };
  type SeeMoreButtonProp = {
    onClick: (event: React.MouseEvent) => void;
  };

  type Text = {
    color?: string;
    width?: string;
    padding?: string;
    fontSize?: string;
    whiteSpace?: string;
    overflow?: string;
    textOverflow?: string;
    cursor?: string;
    display?: string;
    marginLeft?: string;
    fontWeight?: string;
    margin?: string;
  };

  type Wrap = {
    width?: string;
    height?: string;
    margin?: string;
    overflow?: string;
    display?: string;
    flexWrap?: string;
    position?: string;
    right?: string;
    bottom?: string;
    top?: string;
    padding?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    backgroundColor?: string;
    borderRadius?: string;
  };

  type Stroke = {
    width?: string;
    margin?: string;
  };

  type MbtiTestProp = {
    mbtiTestData: {
      id?: string;
      title?: string;
      imageUrl?: string;
      playCount?: number;
      type?: string;
      likeCount?: number;
      commentCount?: number;
    }[];
  };

  type MbtiTestVersionBigProp = {
    imageUrl?: string;
    squareText?: string;
    countData?: {
      playCount?: number;
      likeCount?: number;
      commentCount?: number;
    };
  };

  type MbtiTestVersionSmallForSeveralProp = {
    mbtiTestData:
      | {
          commentCount?: number;
          id?: string;
          imageUrl?: string;
          likeCount?: number;
          playCount?: number;
          title?: string;
          type?: string;
        }[]
      | undefined;
  };

  type MbtiTestTitleBlackSquareDivProp = {
    bottom: string;
  };

  type WrapMediaqueryProp = {
    width?: string;
    margin?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    padding?: string;
    position?: string;
    textAlign?: string;
    flexWrap?: string;
  };
}
