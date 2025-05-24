    // File: src/components/CTAButton/CTAButton.tsx

    import React from 'react';
    import './Button.css';

    interface ButtonProps {
    text?: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    }

    const Button: React.FC<ButtonProps> = ({
    text = "ADD YOUR CALL TO ACTION",
    variant = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    className = ''
    }) => {
    const buttonClasses = [
        'button',
        `button--${variant}`,
        `button--${size}`,
        disabled ? '-button--disabled' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        type="button"
        >
        {text}
        </button>
    );
    };

    export default Button;