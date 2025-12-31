import React from 'react';
import Image from 'next/image';

interface NotionIconProps {
    className?: string;
    'aria-hidden'?: boolean;
}

export function NotionIcon({ className, ...props }: NotionIconProps) {
    return (
        <Image
            src="/notion.svg"
            className={className}
            alt="Notion"
            width={24}
            height={24}
            {...props}
        />
    );
}

export default NotionIcon;
