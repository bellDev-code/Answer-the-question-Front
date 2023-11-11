import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const BaseButton = ({ children, className, ...props }: IProps) => {
  return (
    <button
      {...props}
      className={`${className} flex items-center justify-center bg-slate-950 text-white w-20 p-1 rounded-sm disabled:bg-gray-400`}
    >
      {children}
    </button>
  );
};
