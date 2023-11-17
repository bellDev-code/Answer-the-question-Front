import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const BackButton = ({ className, ...props }: IProps) => {
  return (
    <button {...props} className={`${className}`}>
      <ArrowBackIcon />
    </button>
  );
};
