import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'color' },
    loading: { control: 'boolean' },
    onClickHandler: { action: 'clicked' },
    children: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    loading: false,
    onClickHandler: () => console.log('Button clicked'),
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    loading: false,
    onClickHandler: () => console.log('Button clicked'),
    children: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    loading: false,
    onClickHandler: () => console.log('Button clicked'),
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    onClickHandler: () => console.log('Button clicked'),
    children: 'Button',
  },
};
