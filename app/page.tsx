import ExploreBtn from '@/components/ExploreBtn'
import React from 'react'

const Home = () => {
  return (
    <section>
      <h1 className="text-center">Take the hassle out of your day.</h1>
      <p className="text-center mt-5"> ErrandFlow helps you plan, organize, and complete your errands smarter — saving you time and energy, one task at a time.</p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>
        Featured Items 
        </h3>

        <ul className="events">
          {[1,2,3,4,5].map((event)=>
          (
            <li key={event}> Item {event}</li>
          )
          )}
        </ul>
      </div>
      </section>
  )
}

export default Home