import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/favicon.ico"
            alt="Icon Puskesmas"
            className={`block h-9 w-auto object-contain ${className}`}
        />
    );
}