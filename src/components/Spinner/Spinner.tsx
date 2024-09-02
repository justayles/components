/* eslint-disable no-undef */
// make react testing library available to all tests
import React from 'react';
import { LoaderCircle } from 'lucide-react';

export interface ISpinner {
  color: string;
}

const Spinner = ({ color }: ISpinner) => {
  return (
    <LoaderCircle
      color={color}
      className={`animate-spin h-4 w-4 text-white ${color}`}
      role="alert"
      aria-label="loading"
    />
  );
};

export default Spinner;
