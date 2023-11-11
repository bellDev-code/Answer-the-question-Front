import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const GuideTextComponent = ({ children, className }: IProps) => {
  return <div className={`${className} font-medium`}>{children}</div>;
};

export default GuideTextComponent;
