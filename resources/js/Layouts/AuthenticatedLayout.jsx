import { useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import logo from '../../../public/images/logo.png'

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 mt-8 flex items-center">
                                <Link href="/">
                                    <img src= {logo} alt="" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
            <div className="flex justify-center mt-16 px-6 ml-40 mb-10 mr-40 sm:justify-between">
                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/zerg959"
                                    className="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 128 128">
                                  <g fill="#181616">
                                    <path fillRule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545c0 18.797 12.19 34.745 29.095 40.37c2.126.394 2.907-.923 2.907-2.047c0-1.014-.04-4.366-.058-7.92c-11.837 2.573-14.334-5.02-14.334-5.02c-1.935-4.918-4.724-6.226-4.724-6.226c-3.86-2.64.29-2.586.29-2.586c4.273.3 6.523 4.385 6.523 4.385c3.794 6.504 9.953 4.623 12.38 3.536c.383-2.75 1.485-4.628 2.702-5.69c-9.45-1.075-19.384-4.724-19.384-21.026c0-4.645 1.662-8.44 4.384-11.42c-.442-1.072-1.898-5.4.412-11.26c0 0 3.572-1.142 11.7 4.363c3.395-.943 7.035-1.416 10.65-1.432c3.616.017 7.258.49 10.658 1.432c8.12-5.504 11.688-4.362 11.688-4.362c2.316 5.86.86 10.187.418 11.26c2.728 2.978 4.378 6.774 4.378 11.42c0 16.34-9.953 19.938-19.427 20.99c1.526 1.32 2.886 3.91 2.886 7.88c0 5.692-.048 10.273-.048 11.674c0 1.13.766 2.458 2.922 2.04c16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512" clipRule="evenodd"></path><path d="M37.57 62.596c-.095.212-.428.275-.73.13c-.31-.14-.482-.427-.382-.64c.09-.216.424-.277.733-.132c.31.14.486.43.38.642zm1.723 1.924c-.203.187-.6.1-.87-.198c-.278-.297-.33-.694-.124-.884c.208-.188.593-.1.87.197c.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367c-.262-.377-.262-.83.005-1.013c.264-.182.684-.018.95.357c.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163c-.372-.343-.475-.83-.242-1.087c.237-.257.736-.185 1.102.163c.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344c-.482-.146-.796-.536-.7-.872c.1-.336.582-.493 1.067-.342c.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648c-.508.012-.92-.272-.926-.618c0-.354.4-.642.908-.65c.506-.01.92.272.92.62m3.24-.551c.06.342-.29.694-.793.787c-.494.092-.95-.12-1.014-.46c-.06-.35.297-.7.79-.792c.503-.088.953.118 1.017.466zm0 0"></path></g><path fill="#100e0f" d="M24.855 108.302h-10.7a.5.5 0 0 0-.5.5v5.232a.5.5 0 0 0 .5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508c0-9.393 4.448-10.63 8.624-10.63c3.614 0 5.17.636 6.162.943c.31.094.6-.216.6-.492l1.193-5.055a.47.47 0 0 0-.192-.39c-.403-.288-2.857-1.66-9.058-1.66c-7.144 0-14.472 3.038-14.472 17.65c0 14.61 8.39 16.787 15.46 16.787c5.854 0 9.405-2.502 9.405-2.502c.146-.08.162-.285.162-.38v-16.316a.5.5 0 0 0-.5-.5zM79.506 94.81H73.48a.5.5 0 0 0-.498.503l.002 11.644h-9.392V95.313a.5.5 0 0 0-.497-.503H57.07a.5.5 0 0 0-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 0 0 .497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 0 0 .497-.504v-31.53a.497.497 0 0 0-.497-.502m-47.166.717c-2.144 0-3.884 1.753-3.884 3.923c0 2.167 1.74 3.925 3.884 3.925c2.146 0 3.885-1.758 3.885-3.925c0-2.17-1.74-3.923-3.885-3.923m2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 0 0-.498-.502zm67.606.047h-5.98a.5.5 0 0 0-.496.504v15.46s-1.52 1.11-3.675 1.11s-2.727-.977-2.727-3.088v-13.482a.5.5 0 0 0-.497-.504h-6.068a.5.5 0 0 0-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804c3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.5.5 0 0 0 .5-.504l-.003-21.166a.504.504 0 0 0-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 0 0-.497-.503H107a.5.5 0 0 0-.5.503v31.53a.5.5 0 0 0 .5.503h4.192c.19 0 .332-.097.437-.268c.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594c0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107c-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 0 0 .5-.504v-4.856a.5.5 0 0 0-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 0 0-.36.48v3.877a.5.5 0 0 0 .497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61c1.497 0 3.29-.48 3.586-.59c.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 0 0-.5-.502z">
                                      </path>
                                      </svg>
                                    zerg959
                                </a>
                            </div>
                        </div>

                        <div className="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
                            {new Date().getFullYear()}
                        </div>
                    </div>
        </div>
        
    );
}
