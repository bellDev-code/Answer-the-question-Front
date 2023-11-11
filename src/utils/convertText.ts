import { TGameCategory, TPlaySelectionType } from '@Api/types';

export const convertPlayerSelectionType = (type: TPlaySelectionType) => {
  switch (type) {
    case 'direct':
      return '직접 선택';
    case 'random':
      return '랜덤 선택';
    default:
      return '';
  }
};

export const convertCategory = (category: TGameCategory) => {
  switch (category) {
    case 'serious':
      return '진지한';
    case 'funny':
      return '재미있는';
    case 'crazy':
      return '미친';
    default:
      return '';
  }
};
