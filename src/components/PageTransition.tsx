'use client';
import { useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Small delay to ensure smooth transition
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={cn(
                'transition-all duration-700 ease-out',
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
        >
            {children}
        </div>
    );
};

export default PageTransition;
