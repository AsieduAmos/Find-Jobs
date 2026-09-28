import React from 'react'
import { useState, useEffect } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobPage = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? '/api/jobs?_per_page=3' : '/api/jobs';
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [isHome]);

  return (
    <> 
    <section className="bg-slate-100 py-12">
      {/* Dynamic Heading Section */}
      <div className="bg-orange-600 shadow-sm mb-10">
        <h2 className="font-bold text-3xl md:text-4xl text-center text-white py-8 px-4 max-w-7xl mx-auto">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
      </div>
      
      {/* Outer Layout Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-20 text-gray-600 font-medium text-lg animate-pulse">
            Loading jobs...
          </div>
        ) : (
          /* Smoothly transitions 1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {jobs.map((job) => (
              <div key={job.id} className="flex flex-col justify-between p-6 rounded-xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition duration-200">
                
                {/* Main Card Content */}
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="text-xl text-gray-800 font-bold leading-snug">{job.title}</h3>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                      {job.type}
                    </span>
                  </div>
                  
                  <p className="mb-4 text-gray-600 text-sm md:text-base leading-relaxed">
                    {job.description?.slice(0, 90) || "No description available"}...
                  </p>
                </div>

                {/* Card Footer Details */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="font-semibold text-indigo-700">{job.salary}</span>
                    <div className="text-red-600 flex items-center gap-1 font-medium max-w-[150px] truncate">
                      <FaMapMarker className="flex-shrink-0 text-xs" /> 
                      <span className="truncate" title={job.location}>{job.location}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/jobpage/${job.id}`} 
                    className="block w-full text-center text-white py-2.5 px-4 rounded-lg bg-gray-700 hover:bg-gray-800 transition text-sm font-bold shadow-sm"
                  >
                    Read More
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>

    </>
  )
}

export default JobPage;
