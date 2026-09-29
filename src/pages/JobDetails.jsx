import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'

const JobDetails = () => {
    const { id } = useParams();
    const job = useLoaderData();

  return (
    <div className="bg-indigo-50 min-h-screen pt-20">
      
      {/* Back Navigation Bar */}
      <nav className="fixed top-16 w-full left-0 z-50 bg-stone-100 text-orange-600 py-4 shadow-md ">
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
        {/* Responsive Grid Layout: Stacks vertically on mobile/tablet, side-by-side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Main Content Area (Spans 2 columns on desktop) */}
          <main className="lg:col-span-2 space-y-6">
            
            {/* Header Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {job?.type}
              </span>
              <h1 className="text-2xl md:text-xl text-black font-bold mb-4">{job?.title}</h1>
              <div className="flex items-center justify-center md:justify-start text-gray-600 font-medium">
                <FaMapMarker className="text-red-600 mr-2 text-sm flex-shrink-0" />
                <p className="text-red-600">{job?.location}</p>
              </div>
            </div>

            {/* Description & Salary Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-black font-bold mb-4">Job Description</h3>
              <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                {job?.description}
              </p>
              
              <h3 className="text-xl text-black font-bold mb-2">Salary Range</h3>
              <p className="text-orange-500 font-semibold text-sm">{job?.salary}</p>
            </div>
          </main>

          {/* Sidebar Area (Spans 1 column on desktop) */}
          <aside className="space-y-6">
            
            {/* Company Info Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-orange-600 font-bold mb-4 border-b pb-2">Company Information</h3>
              <h4 className="text-lg text-black font-bold mb-2">{job?.company?.name}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{job?.company?.description}</p>
              
              <div className="space-y-3 pt-2">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">Contact Email</h5>
                  <p className="mt-1 bg-slate-50 border border-slate-200 text-gray-700 break-all font-semibold rounded p-2 text-sm">
                    {job?.company?.email}
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">Contact Phone</h5>
                  <p className="mt-1 bg-slate-50 border border-slate-200 text-gray-700 font-semibold rounded p-2 text-sm">
                    {job?.company?.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Admin Management Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-orange-600 font-bold mb-4 text-center">Manage Job</h3>
              <div className="space-y-3">
                <Link
                  to={`/addjob/edit/${job?.id}`} 
                  className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center font-bold py-2.5 px-4 rounded-lg transition duration-200 shadow-sm"
                >
                  Edit Job
                </Link>
                <button className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-lg transition duration-200 shadow-sm">
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

const jobLoader = async ({ params }) => {
    const response = await fetch(`/api/jobs/${params.id}`);   
    const data = await response.json();
    return data;
};
 
export { JobDetails as default, jobLoader };
