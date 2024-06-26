import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { useImageUpload } from './useImageUpload';
import { postMbtiTestAPI, postImageUplodAPI, updateMbtiTestAPI } from '@/services/mbtiTset';
import { isEditContentState, mbtiImageState, mbtiTestDataState } from '@/states/contentUpdateState';
import { messageState } from '@/states/messageState';
import { MessageState } from '@/types/util';
import { ISO_Date } from '@/utils/dateTime';

export const useSaveMbti = () => {
  const { fileIndexes } = useImageUpload();
  const imageUploads = useRecoilValue(mbtiImageState);
  const [mbtiTestData, setMbtiTestData] = useRecoilState(mbtiTestDataState);

  const [updateImgUploading, setUpdateImgUploading] = useState(true);
  const [postImgUploading, setPostImgUploading] = useState(true);
  const [isEditContent, setIsEditContent] = useRecoilState(isEditContentState);

  const [isLoading, setIsLoading] = useState(false);

  const setMessageState = useSetRecoilState<MessageState>(messageState);

  const handleImageUpload = async () => {
    setIsLoading(true);

    try {
      if (fileIndexes.length > 0) {
        const uploadImages: string[] = [];

        if (isEditContent) setUpdateImgUploading(true);
        else setPostImgUploading(true);

        for (const file of imageUploads) {
          if (file !== undefined) {
            const formData = new FormData();
            formData.append('file', file);

            const response = await postImageUplodAPI(formData);
            uploadImages.push(response.data);
          }
          fileIndexes.forEach((idx, index) => {
            if (idx === 0) {
              setMbtiTestData((prev) => ({
                ...prev,
                imageUrl: uploadImages[idx],
              }));
            } else {
              setMbtiTestData((prev) => ({
                ...prev,
                results: prev.results.map((result, i) =>
                  i === idx - 1 ? { ...result, imageUrl: uploadImages[index] } : result,
                ),
              }));
            }
          });
        }
      }

      if (isEditContent) {
        setUpdateImgUploading(false);
      } else {
        setMbtiTestData((prev) => ({
          ...prev,
          createDate: ISO_Date,
        }));
        setPostImgUploading(false);
      }
    } catch (error) {
      setMessageState({
        isOn: true,
        type: 'error',
        content: `error: ${error}`,
      });
    }
  };

  useEffect(() => {
    const updateMbtiTest = async () => {
      if (!updateImgUploading) {
        const mbtiTestJSON = JSON.stringify(mbtiTestData);
        await updateMbtiTestAPI(mbtiTestJSON);
        setMessageState({
          isOn: true,
          type: 'success',
          content: '테스트 업로드 완료',
        });
        setIsEditContent(false);
        setIsLoading(false);
      }
    };
    updateMbtiTest();
  }, [updateImgUploading]);

  useEffect(() => {
    const postAddMbtiTest = async () => {
      if (!postImgUploading) {
        const mbtiTestJSON = JSON.stringify(mbtiTestData);
        await postMbtiTestAPI(mbtiTestJSON);
        setMessageState({
          isOn: true,
          type: 'success',
          content: '테스트 업로드 완료',
        });
        setIsLoading(false);
      }
    };
    postAddMbtiTest();
  }, [postImgUploading]);

  return {
    handleImageUpload,
    isLoading,
  };
};
