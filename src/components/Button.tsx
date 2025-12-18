import Link from 'next/link';
import React, { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
    as?: 'link' | 'button';
    loading?: boolean;
    children: ReactNode | ReactNode[];
    className?: string;
    variant?: 'primary' | 'secondary' | 'link';
} & (ComponentProps<typeof Link> | ButtonProps);

const Button = ({
    loading,
    variant = 'primary',
    className,
    children,
    as = 'link',
    ...rest
}: Props) => {
    const variantClasses = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        link: 'text-foreground hover:text-primary',
    }[variant];

    const buttonClasses = cn(
        'group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden',
        variantClasses,
        className,
    );

    if (as === 'link') {
        const props = rest as ComponentProps<typeof Link>;

        if (props.target === '_blank') {
            return (
                <a
                    className={buttonClasses}
                    {...props}
                    href={props.href?.toString() || '#'}
                >
                    {variant !== 'link' && (
                        <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                    )}
                    <span className="z-[1]">
                        {loading ? 'Processing...' : children}
                    </span>
                </a>
            );
        }

        return (
            <Link className={buttonClasses} {...props} href={props.href || '#'}>
                {variant !== 'link' && (
                    <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                )}
                <span className="z-[1]">
                    {loading ? 'Processing...' : children}
                </span>
            </Link>
        );
    } else {
        const props = rest as ButtonProps;

        return (
            <button className={buttonClasses} {...props}>
                {variant !== 'link' && (
                    <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                )}
                <span className="z-[1]">
                    {loading ? 'Processing...' : children}
                </span>
            </button>
        );
    }
};

export default Button;
