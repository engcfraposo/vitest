import { ComponentMeta, Story } from "@storybook/react";
import Button, {ButtonProps} from ".";

export default {
    title: "Buttons/Button",
    component: Button,
    argTypes: {
        variant: {
            defaultValue: "primary",
            control: {
                type: "select"
            }
        },
        size: {
            defaultValue: "small",
        }
    }
} as ComponentMeta<typeof Button>

export const Primary: Story<ButtonProps> = (args) => (
    <Button {...args}>+</Button>
)