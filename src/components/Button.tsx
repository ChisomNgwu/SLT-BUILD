    // File: src/components/CTAButton/CTAButton.tsx
    import React from 'react';
    import './Button.css';

    interface ButtonProps {
    text?: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    }

    const Button: React.FC<ButtonProps> = ({
    text = "LOAD MORE PRODUCTS",
    variant = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    loading = false,
    className = ''
    }) => {
    const buttonClasses = [
        'button',
        `button--${variant}`,
        `button--${size}`,
        (disabled || loading) ? 'button--disabled' : '',
        loading ? 'button--loading' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled || loading}
        type="button"
        >
        {loading && (
            <span className="button__spinner" aria-hidden="true">
            <svg
                className="button__spinner-svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="37.7"
                strokeDashoffset="37.7"
                />
            </svg>
            </span>
        )}
        <span className={loading ? 'button__text--loading' : 'button__text'}>
            {loading ? 'Loading...' : text}
        </span>
        </button>
    );
    };

    export default Button;