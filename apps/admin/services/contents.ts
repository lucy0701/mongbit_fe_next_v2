import { ContentsCover, LatestTestCover, MbtiTestCover } from '@/types/contents';
import { DateRangeCounts, TopContents, TotalCounts } from '@/types/count';
import { getHeaders } from '@/utils/utils';

import { apiBe_v1, apiBe_v2 } from '.';

const headers = getHeaders();

export const getContentsAPI = ({ page, size }: { page: number; size: number }) =>
  apiBe_v2<ContentsCover>(`contents/content`, {
    params: {
      page: page,
      size: size,
    },
    headers,
  });

export const getContentAPI = (testId: string) =>
  apiBe_v1<MbtiTestCover>(`tests/test/${testId}`, {
    headers,
  });

export const getLatestContentAPI = (page: number, size: number) =>
  apiBe_v1<LatestTestCover>(`tests/${page}/${size}`, { headers });

export const deleteContentAPI = (testId: string) =>
  apiBe_v1.delete(`tests/test/${testId}`, {
    headers,
  });

// count
export const getCommentCountAPI = (testId: string) =>
  apiBe_v1<number>(`test/${testId}/comments/count`, {
    headers,
  });

export const getSharesCountAPI = (testId: string) =>
  apiBe_v1<number>(`tests/${testId}/shares/count`, {
    headers,
  });

export const getLinkCountAPI = (testId: string) =>
  apiBe_v1<number>(`tests/${testId}/shares/count/type`, {
    params: {
      type: 'LINK',
    },
    headers,
  });

export const getLikeCountAPI = (testId: string) =>
  apiBe_v1<number>(`test/${testId}/like/count`, {
    headers,
  });

// Total Counts
export const getTotalCountsAPI = () => apiBe_v2<TotalCounts>(`metrics/total`, { headers });

export const getDateRangeCountsAPI = (startDate: string, endDate: string) =>
  apiBe_v2<DateRangeCounts[]>(`metrics/total/date-range`, {
    params: {
      startDate: `${startDate} 00:00:00`,
      endDate: `${endDate} 24:00:00`,
    },
    headers,
  });

// TopContents
export const getTopContentsAPI = ({ option, quantity }: { option: string; quantity: number }) =>
  apiBe_v2<TopContents[]>(`metrics/${option}?quantity=${quantity}`, { headers });
