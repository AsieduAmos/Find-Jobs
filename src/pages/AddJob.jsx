import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

const AddJob = ({ submitJob }) => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('Full-Time')
  const [description, setDescription] = useState('')
  const [salary, setSalary] = useState('GH 1,000 - GH 2,000')  
  const [location, setLocation] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      description,  
      location,
      salary,
      company: { 
        name: companyName,
        email,
        phone,
      },
    };
    
    submitJob(newJob);
    return navigate('/jobpage');
  };
  
  return (
 <>
  <section className="bg-slate-50 min-h-screen py-10 px-4 sm:px-2 mt-12">
      <section className="py-2 md:py-6 px-6 sm:px-12 text-center mx-auto shadow-xl">
           <h2 className="font-bold text-xl md:text-2xl text-orange-600">
            Add New Job
         </h2>
         <p className="text-gray-500 text-sm mt-1">Fill out the details below to post your job vacancy.</p>
     </section>
 
              {/* Form Card Wrapper */}
  <div className="max-w-xl mx-auto bg-white p-5 sm:p-8 shadow-xl border border-gray-100">
    <form onSubmit={formSubmit} className="space-y-2">
      
      {/* Job Type */}
      <div>
        <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-1.5">
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

      {/* Salary Selection */}
      <div>
        <label htmlFor="salary" className="block text-sm font-semibold text-gray-700 mb-1.5">
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
          <option value="GH 1,000 - GH 2,000">GH 1,000 - GH 2,000</option>
          <option value="GH 2,000 - GH 4,000">GH 2,000 - GH 4,000</option>
          <option value="GH 4,000 - GH 6,000">GH 4,000 - GH 6,000</option>
          <option value="GH 7,000 - GH 9,000">GH 7,000 - GH 9,000</option>
          <option value="Negotiable">Negotiable</option>
        </select>
      </div>

      {/* Location */}
      <div>
        
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

      {/* Section Divider */}
      <div className="border-t border-gray-100 pt-5 my-2">
        <h3 className="text-md font-bold text-orange-600 text-center">Company Details</h3>
      </div>

      {/* Company Name */}
      <div>
       
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="border border-gray-300 rounded-lg w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-800"
          placeholder=" Shop Or Company Name (e.g. ABC Company)"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      {/* Email */}
      <div>
      
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
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
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
    <div className="flex justify-center items-center">
        <button
         type="submit"
        className=" bg-orange-600 text-white font-bold  py-3 px-12 rounded-lg shadow-xl hover:bg-orange-800 focus:ring-4 focus:ring-indigo-100 transition duration-200 text-sm mt-2"
      >
       Post Job
    </button>
      </div>
     
    </form>
  </div>
</section>

   </>
  )
}

export default AddJob


