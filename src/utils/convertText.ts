import { TGameCategory, TPlaySelectionType } from '@Api/types';

export const convertPlayerSelectionType = (type: TPlaySelectionType) => {
  switch (type) {
    case 'direct':
      return '지목 방식';
    case 'random':
      return '랜덤 방식';
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
