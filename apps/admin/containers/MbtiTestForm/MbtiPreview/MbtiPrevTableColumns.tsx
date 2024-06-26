import { PaperClipOutlined } from '@ant-design/icons';
import { Space, TableProps } from 'antd';
import { useRecoilValue } from 'recoil';

import { mbtiImageState } from '@/states/contentUpdateState';
import { MbtiQuestions, MbtiResults } from '@/types/contents';

export default function TableColumns() {
  const imageUploads = useRecoilValue(mbtiImageState);

  const questionNames = ['E / I', 'N / S', 'F / T', 'J / P'];

  const questionsColumns: TableProps<MbtiQuestions>['columns'] = [
    {
      title: 'Index',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      width: 120,
      render: (text, _, i) => (
        <p key={text}>
          [ {questionNames[Math.floor(i / 3)]} ] 질문 {text + 1}
        </p>
      ),
    },
    {
      title: 'Question',
      key: 'question',
      dataIndex: 'question',
    },
    {
      title: 'AnswerPlus',
      key: 'answerPlus',
      dataIndex: 'answerPlus',
    },
    {
      title: 'AnswerMinus',
      key: 'answerMinus',
      dataIndex: 'answerMinus',
    },
  ];

  const resultsColumns: TableProps<MbtiResults>['columns'] = [
    {
      title: 'Result',
      dataIndex: 'result',
      key: 'result',
      align: 'center',
      width: 70,
    },
    {
      title: 'Title',
      key: 'title',
      dataIndex: 'title',
      width: 150,
    },
    {
      title: 'Content',
      key: 'content',
      dataIndex: 'content',
    },
    {
      title: 'Image URL',
      key: 'imageUrl',
      dataIndex: 'imageUrl',
      width: 250,
      render: (text, _, i) => (
        <Space style={{ width: '100%' }}>
          <PaperClipOutlined />
          <p key={text}>{imageUploads[i + 1]?.name}</p>
        </Space>
      ),
    },
  ];

  return {
    questionsColumns,
    resultsColumns,
  };
}
