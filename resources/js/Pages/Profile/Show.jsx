import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import User from '@/Components/User';

export default function Show(props) {
  const { user } = usePage().props
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="User Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
              <div className="flex-1">
                  <div className="flex justify-between items-center">
                      <div>
                          <span className="text-gray-800">{user.name}</span>
                          <small className="ml-2 text-sm text-gray-600">{new Date(user.created_at).toLocaleString()}</small>
                      </div>
                  </div>
                  <p className="mt-4 text-lg text-gray-900">{user.surname}</p>
              </div>
              <Link href={route('profile.edit')}
              className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
              Manage
              </Link>
            </div>
        </AuthenticatedLayout>

    );
    
}

