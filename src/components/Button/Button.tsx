import React, { useState, useEffect, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  className?: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button = ({
  variant,
  loading,
  className,
  onClickHandler,
  children,
  ...props
}: ButtonProps) => {
  const classNames = className ? className : `btn btn-${variant}`;
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      setLoading(loading);
    }
  }, [loading]);
  const loadingStatus: ReactNode = isLoading ? <span> .... </span> : null;
  return (
    <button
      className={classNames}
      disabled={isLoading}
      onClick={onClickHandler}
      {...props}
    >
      {children}
      {loadingStatus}
    </button>
  );
};

export default Button;
