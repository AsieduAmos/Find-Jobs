import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

const AddJob = ({ submitJob }) => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('Full-Time')
  const [description, setDescription] = useState('')
  const [salary, setSalary] = useState('GH 1,000 - GH 2,000')  
  const [location, setLocation] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyDescription, setCompanyDescription] = useState('')
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
        description: companyDescription,
        email,
        phone,
      },
    };
    
    submitJob(newJob);
    return navigate('/jobpage');
  };
  
  return (
    <section className="bg-slate-100 min-h-screen pt-20 pb-12 px-4 sm:px-6"> 
      <div className="max-w-xl mx-auto">
        <div className="bg-white p-6 sm:p-10 shadow-xl rounded-xl"> 
           <form onSubmit={formSubmit}>
             <h3 className="text-2xl text-center text-gray-900 font-bold mb-6">Add New Job</h3>
             
              {/* Job Type */}
              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                  Job Type
                </label>
                <select 
                  id="type"
                  name="type" 
                  className="border rounded w-full py-2 px-3 bg-white focus:outline-indigo-500"
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
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Job Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 focus:outline-indigo-500"
                  placeholder="eg. Store Keeper"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Job Description */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Job Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="border rounded w-full py-2 px-3 focus:outline-indigo-500"
                  placeholder="eg. We are looking for someone to manage inventory and ensure smooth operations."
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Salary Selection */}
              <div className="mb-4">
                <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">
                  Salary
                </label>
                
                <select 
                  name="salary" 
                  id="salary"
                  className="border rounded w-full py-2 px-3 bg-white focus:outline-indigo-500"
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
              <div className="mb-6">
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 focus:outline-indigo-500"
                  placeholder="eg. Drobo"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center border-t pt-4">Company Details</h2>

              {/* Company Name */}
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
                  Shop / Company Name 
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="border rounded w-full py-2 px-3 focus:outline-indigo-500"
                  placeholder="eg. ABC Company"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              {/* Company Description */}
              <div className="mb-4">
                <label htmlFor="companyDescription" className="block text-gray-700 font-bold mb-2">Shop or Company Description</label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  rows="3"
                  className="border rounded w-full py-2 px-3 focus:outline-indigo-500"
                  placeholder="What do you do at your Shop or Company?"
                  required
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3 focus:outline-indigo-500"
                  placeholder="eg. company@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border rounded w-full py-2 px-3 focus:outline-indigo-500"
                  placeholder="eg. +233 123 456 789"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition duration-200"
              >
                Add Job
              </button>
           </form>
        </div>
      </div>
   </section>
  )
}

export default AddJob


