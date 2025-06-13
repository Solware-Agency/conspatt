import React, { ReactNode } from 'react';
import './card-hover-effect.css';

interface HoverEffectProps {
    children: ReactNode;
}

const HoverEffect: React.FC<HoverEffectProps> = ({ children }) => {
    return (
        <div className="hover-effect">
            {children}
        </div>
    );
};

export default HoverEffect; 