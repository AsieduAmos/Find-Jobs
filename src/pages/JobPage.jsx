import React, { useState, useEffect } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { database } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const JobPage = ({ isHome = false }) => {
  const [jobDetails, setJobDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const jobDetailsCollectionRef = collection(database, 'JobDetails')
        const data = await getDocs(jobDetailsCollectionRef)

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))

        // If this is the home page, only show 3 jobs
        setJobDetails(isHome ? filteredData.slice(0, 3) : filteredData)
      } catch (error) {
        console.error('Error fetching job details:', error)
      } finally {
        setLoading(false)
      }
    }

    getJobDetails()
  }, [isHome])

  return (
    <section className="bg-slate-100 py-12">
      {/* Dynamic Heading Section */}
      <div className="bg-stone-100 shadow-sm mb-10">
        <h2 className="font-bold text-3xl md:text-4xl text-center text-orange-600 py-8 px-4 max-w-7xl mx-auto">
          {isHome ? 'Recent Job Posts' : 'Browse Jobs'}
        </h2>
      </div>

      {/* Outer Layout Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-20 text-gray-600 font-medium text-lg animate-pulse">
            Loading jobs...
          </div>
        ) : jobDetails.length === 0 ? (
          <div className="text-center py-20 text-gray-600 font-medium text-lg">
            No jobs available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {jobDetails.map((jobDetail) => (
              <div
                key={jobDetail.id}
                className="flex flex-col justify-between p-6 rounded-xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition duration-200"
              >
                {/* Main Card Content */}
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="text-xl text-black font-bold leading-snug">
                      {jobDetail.title || 'Untitled Job'}
                    </h3>

                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                      {jobDetail.type || 'Full Time'}
                    </span>
                  </div>

                  <p className="mb-4 text-black text-sm md:text-base leading-relaxed">
                    {jobDetail.description
                      ? `${jobDetail.description.slice(0, 90)}...`
                      : 'No description available'}
                  </p>
                </div>

                {/* Card Footer Details */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="font-semibold text-indigo-700">
                      {jobDetail.salary || 'Salary not specified'}
                    </span>

                    <div className="text-red-600 flex items-center gap-1 font-medium max-w-[150px] truncate">
                      <FaMapMarker className="flex-shrink-0 text-xs" />

                      <span
                        className="truncate"
                        title={jobDetail.location || 'Location not specified'}
                      >
                        {jobDetail.location || 'Location not specified'}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/jobpage/${jobDetail.id}`}
                    className="block w-full text-center text-black py-2 px-4 rounded-lg bg-orange-400 hover:bg-orange-600 transition text-sm font-bold shadow-sm"
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
  )
}

export default JobPage
