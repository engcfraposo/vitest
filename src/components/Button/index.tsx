import React from 'react';

// import { Container } from './styles';
export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "large" | "medium" | "small";
    type: "button" | "submit" | "reset";
    children: React.ReactNode;
    onClick: () => void;
}

const Button = (props: ButtonProps) => {
    const setSize = {
        "small": 12,
        "medium": 16,
        "large": 24,
    }
  return (
    <button
        type={props.type}
        style={{
            backgroundColor: props.variant !== "primary"?"blue":"white",
            color: props.variant !== "primary"?"white":"blue",
            borderColor: props.variant !== "primary"?"white":"blue",
            width: setSize[props.size]*4,
            height: setSize[props.size]*2,
            fontSize: setSize[props.size]
        }}
        onClick={props.onClick}
    >{props.children}
    </button>
  );
}

export default Button;