'use client';

import { PaperClipOutlined } from '@ant-design/icons';
import { Button, Card, Space, Table } from 'antd';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

import { Paths } from '@/constants/paths';
import { useImageUpload } from '@/hooks/useImageUpload';
import { useSaveMbti } from '@/hooks/useSaveMbti';
import { mbtiImageState, mbtiTestDataState } from '@/states/contentUpdateState';

import styles from './index.module.scss';
import TableColumns from '@/containers/MbtiTestForm/MbtiPreview/MbtiPrevTableColumns';

interface Props {
  onPrev: () => void;
}

export default function MbtiPreview({ onPrev }: Props) {
  const { handleImageUpload, loading } = useSaveMbti();
  const { deleteImageFileArray } = useImageUpload();
  const testData = useRecoilValue(mbtiTestDataState);
  const imageUploads = useRecoilValue(mbtiImageState);

  const TableCilumn = TableColumns();
  const router = useRouter();

  const onClickSaveBtn = async () => {
    try {
      await handleImageUpload();
      deleteImageFileArray();
      router.push(Paths.contentsRegisterSuccess);
    } catch (error) {
      alert(`error : ${error}`);
    }
  };

  return (
    <div className={styles.wrap}>
      <h2 className="title_a">Preview</h2>
      <div className={styles.formWrap}>
        <Space direction="vertical" className={styles.infoCardWrap}>
          <Card title={testData.title} extra={<p>MBTI</p>} style={{ width: 650 }}>
            <div className={styles.infoWrap}>
              <p style={{ marginBottom: 25 }}>{testData.content}</p>
              <p>
                <PaperClipOutlined />
                {imageUploads[0]?.name}
              </p>
            </div>
          </Card>
        </Space>
        <Table
          className={styles.tableWrap}
          columns={TableCilumn.questionsColumns}
          dataSource={testData.questions}
          rowKey="index"
          bordered
          pagination={false}
          title={() => 'Questions'}
        />
        <Table
          className={styles.tableWrap}
          columns={TableCilumn.resultsColumns}
          dataSource={testData.results}
          bordered
          rowKey="result"
          pagination={false}
          title={() => 'Results'}
        />
      </div>
      {loading ? (
        <p>업데이트 중...</p>
      ) : (
        <div className={'button_box'}>
          <Button onClick={onPrev}>이전</Button>
          <Button onClick={onClickSaveBtn} className={styles.btn_orange}>
            저장
          </Button>
        </div>
      )}
    </div>
  );
}
