import { atom } from 'recoil';

import { MbtiQuestions, MbtiTest } from '@/types/test';

const mbtiQuestionsArray: MbtiQuestions[] = [];

for (let i = 0; i < 12; i++) {
  const mbtiQuestion: MbtiQuestions = {
    index: i,
    question: '',
    answerPlus: '',
    answerMinus: '',
  };
  mbtiQuestionsArray.push(mbtiQuestion);
}

const generateMbtiResultState = () => {
  const resultTitles = [
    'ENFJ',
    'ENFP',
    'ENTJ',
    'ENTP',
    'ESFJ',
    'ESFP',
    'ESTJ',
    'ESTP',
    'INFJ',
    'INFP',
    'INTJ',
    'INTP',
    'ISFJ',
    'ISFP',
    'ISTJ',
    'ISTP',
  ];

  return resultTitles.map((title) => ({
    result: title,
    title: '',
    content: '',
    imageUrl: '',
  }));
};

export const initialMbtiTestData: MbtiTest = {
  title: '',
  content: '',
  questions: mbtiQuestionsArray,
  results: generateMbtiResultState(),
  imageUrl: '',
  type: 'MBTI',
};

export const mbtiTestDataState = atom<MbtiTest>({
  key: 'mbtiTestDataState',
  default: initialMbtiTestData,
});
