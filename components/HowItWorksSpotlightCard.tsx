'use client';

import SpotlightCard from '@/components/SpotlightCard';
import { ReactNode } from 'react';

interface HowItWorksSpotlightCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

export default function HowItWorksSpotlightCard({
  title,
  description,
  icon,
  spotlightColor = 'rgba(0, 229, 255, 0.15)',
}: HowItWorksSpotlightCardProps) {
  return (
    <SpotlightCard
      spotlightColor={spotlightColor}
      className="w-full max-w-sm p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 rounded-2xl
                 bg-sky-100 dark:bg-slate-800 text-slate-800 dark:text-white 
                 border border-sky-200 dark:border-slate-700"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm">{description}</p>
    </SpotlightCard>
  );
}
