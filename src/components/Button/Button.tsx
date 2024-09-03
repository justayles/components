import React, { useState, useEffect } from 'react';
import cslx from 'clsx';
import { Spinner } from '../Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  className?: string;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setLoading(loading);
    }
  }, [loading]);

  const defaultClassName = cslx(
    'border hover:brightness-90 p-2 px-4 sm:px-6 rounded w-auto flex items-center justify-between gap-2 my-6 disabled:opacity-75',
    {
      'bg-primary text-white border-primary': variant === 'primary',
      'bg-secondary text-dark border-secondary': variant === 'secondary',
      'bg-white text-dark border-dark': variant === 'tertiary',
    },
  );
  const classes = className ? className : defaultClassName;

  return (
    <button
      className={classes}
      onClick={onClickHandler || undefined}
      disabled={isLoading || props.disabled}
      type={props.type || 'submit'}
      {...props}
    >
      {children}
      {isLoading && <Spinner color="white" />}
    </button>
  );
};

export default Button;
