import { Link } from '@inertiajs/react';
export default function User({ user }) {
  return (
      <div className="p-6 flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
          <div className="flex-1">
              <div className="flex justify-between items-center">
                  <div>
                      <li><span className="text-gray-800"><b>Profile of {user.name}</b></span></li>
                      <li><span className="text-gray-800">Name: {user.name}</span></li>
                      <li><span className="text-gray-800">Surname: {user.surname}</span></li>
                      <li><span className="text-gray-800">Username: {user.username}</span></li>
                      <li><span className="text-gray-800">Email: {user.email}</span></li>
                      <li><span className="text-gray-800">DOB: {user.date_of_birth}</span></li>
                      <li><span className="text-gray-800">Gender: {user.gender}</span></li>
                  </div>
                  <Link href={`/profile/`+ user.id}>User Details</Link>
              </div>
          </div>
      </div>
    );
  }
