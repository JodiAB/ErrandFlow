import ExploreBtn from '@/components/ExploreBtn'
import HCard from '@/components/HCard'
import { CheckCircle, Map, Clock } from 'lucide-react';



const Home = () => {
  return (
    <main className="px-4 py-10">
      <section className="text-center">
        <h1 className="text-3xl font-bold">
          Take the hassle out of your day.
        </h1>
        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          ErrandFlow helps you plan, organize, and complete your errands smarter —
          saving you time and energy, one task at a time.
        </p>
        <div className="mt-7">
          <ExploreBtn />
        </div>
      </section>

      <section className="mt-20">
        <h3 className="text-xl font-semibold mb-5 text-center">
          Featured Items
        </h3>

        <ul className="events flex flex-col items-center space-y-3">
          {[1, 2, 3, 4, 5].map((event) => (
            <li key={event} className="bg-gray-100 p-4 rounded-lg w-64 text-center shadow-sm">
              Item {event}
            </li>
          ))}
        </ul>
      </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-slate-600 mt-2">Simple steps to make your day easier.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        <HCard
          title="Plan Easily"
          description="Add your errands in seconds. Group them, set reminders, and stay organized effortlessly."
          icon={<CheckCircle />}
        />

        <HCard
          title="Optimize Your Day"
          description="ErrandFlow helps you arrange errands in the best order for your time and location."
          icon={<Map />}
        />

        <HCard
          title="Stay on Track"
          description="Track progress, mark tasks done, and get reminders to keep your day running smoothly."
          icon={<Clock />}
        />
      </div>
    </section>
    </main>
  )
}

export default Home
