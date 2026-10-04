import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'
import { doc, getDoc } from 'firebase/firestore'
import { database } from '../config/firebase'

const JobDetails = () => {
  const jobDetails = useLoaderData()

  return (
    <div className="bg-indigo-50 min-h-screen pt-20">

      {/* Back Navigation Bar */}
      <nav className="fixed top-16 w-full left-0 z-50 bg-stone-100 text-orange-600 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/jobpage"
            className="inline-flex items-center text-base font-bold hover:text-orange-700 transition-colors"
          >
            <FaArrowLeft className="mr-2 text-sm" />
            Back to Browse Jobs
          </Link>
        </div>
      </nav>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Main Content Area */}
          <main className="lg:col-span-2 space-y-6">

            {/* Header Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">

              <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {jobDetails?.type || 'Job'}
              </span>

              <h1 className="text-2xl md:text-3xl text-black font-bold mb-4">
                {jobDetails?.title || 'Job Title'}
              </h1>

              <div className="flex items-center justify-center md:justify-start text-gray-600 font-medium">
                <FaMapMarker className="text-red-600 mr-2 text-sm flex-shrink-0" />

                <p className="text-red-600">
                  {jobDetails?.location || 'Location not specified'}
                </p>
              </div>
            </div>

            {/* Description & Salary Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">

              <h3 className="text-xl text-black font-bold mb-4">
                Job Description
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                {jobDetails?.description || 'No description available.'}
              </p>

              <h3 className="text-xl text-black font-bold mb-2">
                Salary Range
              </h3>

              <p className="text-orange-500 font-semibold text-sm">
                {jobDetails?.salary || 'Salary not specified'}
              </p>

            </div>
          </main>

          {/* Sidebar Area */}
          <aside className="space-y-6">

            {/* Company Info Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">

              <h3 className="text-xl text-orange-600 font-bold mb-4 border-b pb-2">
                Company Information
              </h3>

              <h4 className="text-lg text-black font-bold mb-2">
                {jobDetails?.company?.name || 'Company name not available'}
              </h4>

              <div className="space-y-3 pt-2">

                {/* Email */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Contact Email
                  </h5>

                  <p className="mt-1 bg-slate-50 border border-slate-200 text-gray-700 break-all font-semibold rounded p-2 text-sm">
                    {jobDetails?.company?.email || 'Email not available'}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Contact Phone
                  </h5>

                  <p className="mt-1 bg-slate-50 border border-slate-200 text-gray-700 font-semibold rounded p-2 text-sm">
                    {jobDetails?.company?.phone || 'Phone not available'}
                  </p>
                </div>

              </div>
            </div>

            {/* Admin Management Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">

              <h3 className="text-xl text-orange-600 font-bold mb-4 text-center">
                Manage Job
              </h3>

              <div className="space-y-3">

                {/* Edit Job */}
                <Link
                  to={`/addjob/edit/${jobDetails?.id}`}
                  className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center font-bold py-2.5 px-4 rounded-lg transition duration-200 shadow-sm"
                >
                  Edit Job
                </Link>

                {/* Delete Job */}
                <button
                  type="button"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-lg transition duration-200 shadow-sm"
                >
                  Delete Job
                </button>

              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  )
}


/*
  Loader

  Gets a single job from the Firestore JobDetails collection
  using the ID from the URL.
*/
const jobLoader = async ({ params }) => {
  try {
    if (!params.id) {
      throw new Error('Job ID is missing from the URL')
    }

    // Reference the specific document
    const jobRef = doc(database, 'JobDetails', params.id)

    // Get the document
    const jobSnapshot = await getDoc(jobRef)

    // Check if the document exists
    if (!jobSnapshot.exists()) {
      throw new Error('Job not found')
    }

    // Return the job data together with the document ID
    return {
      id: jobSnapshot.id,
      ...jobSnapshot.data(),
    }

  } catch (error) {
    console.error('Error loading job details:', error)
    throw error
  }
}

export { JobDetails as default, jobLoader }
