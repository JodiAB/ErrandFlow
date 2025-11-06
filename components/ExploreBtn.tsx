'use client';
import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto inline-flex items-center gap-2 rounded-full px-6 py-3 
                 bg-sky-500 hover:bg-sky-600 text-white dark:bg-sky-400 dark:hover:bg-sky-500 
                 transition-all duration-300 shadow-md hover:shadow-lg"
      onClick={() => console.log('CLICK')}
    >
      <a href="#events" className="flex items-center gap-2">
        Get started
        <Image src="/icons/arrow-down.svg" alt="arrow-down" width={20} height={20} />
      </a>
    </button>
  );
}

export default ExploreBtn;
