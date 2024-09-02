import React from 'react';
import { LoaderCircle } from 'lucide-react';

export interface ISpinner {
  color: string;
}

const Spinner = ({ color }: ISpinner): React.ReactNode => {
  return (
    <LoaderCircle
      color={color}
      className={`animate-spin h-4 w-4 ${color}`}
      role="alert"
      aria-label="loading"
      data-testid="spinner"
    />
  );
};

export default Spinner;
