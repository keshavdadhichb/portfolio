'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Check for hoverable elements
        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoverable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('hoverable');
            setIsHovering(!!isHoverable);
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mousemove', handleElementHover);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mousemove', handleElementHover);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Hide on mobile/touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <div
                className={cn(
                    'fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-100',
                    isClicking && 'scale-75',
                    !isVisible && 'opacity-0'
                )}
                style={{
                    transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
                }}
            />
            {/* Cursor ring */}
            <div
                className={cn(
                    'fixed top-0 left-0 w-10 h-10 border-2 border-primary rounded-full pointer-events-none z-[100] transition-all duration-300 ease-out',
                    isHovering && 'scale-150 border-primary/50 bg-primary/10',
                    isClicking && 'scale-90',
                    !isVisible && 'opacity-0'
                )}
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
                }}
            />
        </>
    );
};

export default CustomCursor;
