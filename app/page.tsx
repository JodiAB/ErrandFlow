'use client';

import ExploreBtn from '@/components/ExploreBtn';
import HowItWorksSpotlightCard from '@/components/HowItWorksSpotlightCard';
import SpotlightCard from '@/components/SpotlightCard';
import { CheckCircle, Map, Clock, CalendarCheck, Users, Star } from 'lucide-react';

const Home = () => {
  return (
    <main className="px-4 py-10 text-slate-900 dark:text-white transition-colors duration-300">

      {/* Hero Section */}
      <section className="text-center mt-10">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
          Take the hassle out of your day.
        </h1>
        <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          ErrandFlow helps you plan, organize, and complete your errands smarter — saving you time and energy, one task at a time.
        </p>
        <div className="mt-7">
          <ExploreBtn />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 text-center mt-25">
        <h2 className="text-3xl font-bold mb-4">We all waste hours trying to manage daily chaos</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Between errands, appointments, and to-dos, time slips away. ErrandFlow helps you take it back — no stress, no clutter.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Simple steps to make your day easier.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <HowItWorksSpotlightCard
            title="Plan Easily"
            description="Add your errands in seconds. Group them, set reminders, and stay organized effortlessly."
            icon={<CheckCircle className="text-sky-400 w-10 h-10" />}
            className="p-6 rounded-2xl bg-sky-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-sky-200 dark:border-slate-700 transition-colors duration-300"
          />
          <HowItWorksSpotlightCard
            title="Optimize Your Day"
            description="ErrandFlow arranges errands in the best order for your time and location."
            icon={<Map className="text-sky-400 w-10 h-10" />}
            className="p-6 rounded-2xl bg-sky-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-sky-200 dark:border-slate-700 transition-colors duration-300"
          />
          <HowItWorksSpotlightCard
            title="Stay on Track"
            description="Track progress, mark tasks done, and get reminders to keep your day running smoothly."
            icon={<Clock className="text-sky-400 w-10 h-10" />}
            className="p-6 rounded-2xl bg-sky-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-sky-200 dark:border-slate-700 transition-colors duration-300"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">What People Are Saying</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Alex M.', quote: 'ErrandFlow saves me an hour every single day!', stars: 5 },
            { name: 'Priya D.', quote: 'Finally, something that keeps my life organized.', stars: 5 },
            { name: 'Jordan K.', quote: 'The optimization feature is a lifesaver for my daily errands.', stars: 5 },
          ].map((t, i) => (
            <SpotlightCard
              key={i}
              spotlightColor="rgba(0,229,255,0.15)"
              className="p-6 rounded-2xl bg-sky-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-sky-200 dark:border-slate-700 transition-colors duration-300"
            >
              <div className="flex justify-center mb-3">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="italic text-gray-700 dark:text-gray-300 mb-3">&quot;{t.quote}&quot;</p>
              <h4 className="font-semibold text-slate-800 dark:text-white">— {t.name}</h4>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 text-center bg-sky-100 dark:bg-slate-800 rounded-3xl transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">Stay in the Loop</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Be the first to know when new features drop.
        </p>
        <form 
          className="flex justify-center max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Implement newsletter signup logic
            console.log('Newsletter signup submitted');
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 w-64 rounded-l-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-sky-200 dark:border-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
          >
            Notify Me
          </button>
        </form>
      </section>

      {/* CTA + Footer */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to simplify your day?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Start planning smarter today — it’s fast, easy, and free to try.
        </p>
        <ExploreBtn />
      </section>

      <footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} ErrandFlow. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
