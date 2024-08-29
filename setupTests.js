// make react testing library available to all tests
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

global.React = React;

beforeEach(() => {
  console.log('before each');
});

afterEach(() => {
  cleanup();
});
