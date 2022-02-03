import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  children: 'Hello',
  // primary: false,
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  // onClick: () => {},
  // className: '',
};
