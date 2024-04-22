'use client';

import { Card, Flex } from 'antd';
import { useEffect, useState } from 'react';

import { MbtiTestCover } from '@/types/contents';
import { Counts } from '@/types/count';

import MbtiTestContent from './MbtiTestContent';
import MbtiInfoCard from './MbtiTestInfoCard';
import CountCard from '@/components/lib/antd_dev/CountCard';

interface Props {
  testData: MbtiTestCover;
}

export default function ContenDetalis({ testData }: Props) {
  const { id, title, type, imageUrl, createDate, results, questions, playCount } = testData.test;
  const [contentCountData, setContentCountData] = useState<Counts[]>([]);

  useEffect(() => {
    setContentCountData([
      {
        name: 'Play',
        count: playCount!,
      },
      {
        name: 'Share',
        count: testData.sharesCount,
      },
      {
        name: 'Link Copie',
        count: testData.linkCount,
      },
      { name: 'Like', count: testData.likeCount },
      {
        name: 'Comment',
        count: testData.commentCount,
      },
    ]);
  }, []);

  return (
    <Flex wrap="wrap" gap="large" justify="center">
      <MbtiInfoCard
        id={id!}
        title={title}
        type={type}
        imageUrl={imageUrl}
        createDate={createDate}
        resultsLength={results.length}
        questionsLength={questions.length}
      />

      <Card title="Insight">
        <Flex wrap="wrap" gap="small" justify="space-between" style={{ width: 320 }}>
          {contentCountData.map((count) => (
            <CountCard key={count.name} countName={count.name} countNum={count.count} hover={false} />
          ))}
        </Flex>
      </Card>
      <MbtiTestContent results={results} questions={questions} />
    </Flex>
  );
}
