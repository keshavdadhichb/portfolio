'use client';
import { GENERAL_INFO } from '@/lib/data';

const StickyEmail = () => {
    return (
        <div className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center gap-6 z-[1]">
            <a
                href={`mailto:${GENERAL_INFO.email}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest"
                style={{ writingMode: 'vertical-rl' }}
            >
                {GENERAL_INFO.email}
            </a>
            <div className="w-[1px] h-24 bg-border" />
        </div>
    );
};

export default StickyEmail;
