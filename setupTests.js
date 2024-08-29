/* eslint-disable no-undef */
// make react testing library available to all tests
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

global.React = React;

beforeEach(() => {
  console.log('before each');
});

afterEach(() => {
  cleanup();
});
