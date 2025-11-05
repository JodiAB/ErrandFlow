'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

interface HCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const HCard: React.FC<HCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        'group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky-500 p-6 cursor-pointer h-56 w-full max-w-sm',
        className
      )}
    >
      {/* Default (title + icon) */}
      <div
        className={clsx(
          'absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300',
          hovered ? 'opacity-0' : 'opacity-100'
        )}
      >
        {icon && <div className="mb-3 text-sky-600 text-3xl">{icon}</div>}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {/* Hover content */}
      <div
        className={clsx(
          'absolute inset-0 flex flex-col items-center justify-center px-4 text-center transition-opacity duration-300',
          hovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        <p className="text-slate-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default HCard;
