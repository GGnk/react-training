import React from "react";
import Link from 'next/link'

const Logo: React.FC = () => {
    return (
        <Link href='/'>
            <div className="logo">netflix<span>roulette</span></div>
        </Link>
    );
}

export default Logo;
