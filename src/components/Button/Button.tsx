import React, { useState, useEffect, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button = ({
  variant,
  loading,
  disabled,
  className,
  onClickHandler,
  children,
  ...props
}: ButtonProps) => {
  const defaultClassName = variant ? `btn btn-${variant}` : 'btn btn-primary';
  const classNames = className ? className : defaultClassName;
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
      disabled={isLoading || disabled}
      onClick={onClickHandler}
      {...props}
    >
      {children}
      {loadingStatus}
    </button>
  );
};

export default Button;
