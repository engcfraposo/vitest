import { ComponentMeta, Story } from '@storybook/react';
import Button, {ButtonProps} from '.';

export default {
    title: "Buttons/Button",
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: "select"
            }
        },
        type: {
            control: {
                type: "select"
            }
        }
    }
} as ComponentMeta<typeof Button>

export const Primary: Story<ButtonProps> = (args) => (
    <Button {...args}>Ok</Button>
)