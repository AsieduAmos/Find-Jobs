import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { database } from '../config/firebase'

const AddJob = () => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('Full-Time')
  const [description, setDescription] = useState('')
  const [salary, setSalary] = useState('GH 1,000 - GH 2,000')
  const [location, setLocation] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const formSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    const newJob = {
      title: title.trim(),
      type,
      description: description.trim(),
      location: location.trim(),
      salary,
      company: {
        name: companyName.trim(),
        email: email.trim(),
        phone: phone.trim(),
      },
      createdAt: new Date(),
    }

    try {
      // Save the job to the same collection
      // used by JobPage and JobDetails
      const jobCollection = collection(database, 'JobDetails')

      const docRef = await addDoc(jobCollection, newJob)

      console.log('Job added successfully:', docRef.id)

      // Go back to the jobs page after successful submission
      navigate('/jobpage')
    } catch (error) {
      console.error('Error adding job:', error)

      setError(
        'Failed to post the job. Please check your Firebase configuration and try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-slate-50 min-h-screen py-10 px-4 sm:px-2 mt-12">

      {/* Header */}
      <section className="py-2 md:py-6 px-6 sm:px-12 text-center mx-auto shadow-xl">
        <h2 className="font-bold text-xl md:text-2xl text-orange-600">
          Add New Job
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Fill out the details below to post your job vacancy.
        </p>
      </section>

      {/* Form Card */}
      <div className="max-w-xl mx-auto bg-white p-5 sm:p-8 shadow-xl border border-gray-100">

        {/* Error Message */}
        {error && (
          <div className="mb-5 rounded-lg bg-red-50 border border-red-200 text-red-700 p-3 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={formSubmit} className="space-y-4">

          {/* Job Type */}
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Job Type
            </label>

            <select
              id="type"
              name="type"
              className="border border-gray-300 rounded-lg w-full py-2.5 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Job Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Job Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
              placeholder="Job Title (e.g. Store Keeper)"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Job Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Job Description
            </label>

            <textarea
              id="description"
              name="description"
              rows="4"
              className="border border-gray-300 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
              placeholder="Describe the main responsibilities and requirements..."
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Salary */}
          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Salary Range
            </label>

            <select
              name="salary"
              id="salary"
              className="border border-gray-300 rounded-lg w-full py-2.5 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            >
              <option value="GH 1,000 - GH 2,000">
                GH 1,000 - GH 2,000
              </option>

              <option value="GH 2,000 - GH 4,000">
                GH 2,000 - GH 4,000
              </option>

              <option value="GH 4,000 - GH 6,000">
                GH 4,000 - GH 6,000
              </option>

              <option value="GH 7,000 - GH 9,000">
                GH 7,000 - GH 9,000
              </option>

              <option value="Negotiable">
                Negotiable
              </option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Location
            </label>

            <input
              type="text"
              id="location"
              name="location"
              className="border border-gray-300 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
              placeholder="Location (e.g. Drobo)"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Company Section */}
          <div className="border-t border-gray-100 pt-5 my-4">
            <h3 className="text-md font-bold text-orange-600 text-center">
              Company Details
            </h3>
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Company Name
            </label>

            <input
              type="text"
              id="companyName"
              name="companyName"
              className="border border-gray-300 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
              placeholder="Shop or Company Name (e.g. ABC Company)"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
              placeholder="Email Address (e.g. company@example.com)"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              className="border border-gray-300 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
              placeholder="e.g. +233 123 456 789"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white font-bold py-3 px-12 rounded-lg shadow-xl hover:bg-orange-800 focus:ring-4 focus:ring-indigo-100 transition duration-200 text-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Posting...' : 'Post Job'}
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default AddJob
