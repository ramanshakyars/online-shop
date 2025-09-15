import { NavLink } from "react-router-dom";

function Navbar({ searchText, setSearchText }) {
  return (
    <div>
      <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Left Logo */}
            <div className="flex shrink-0 items-center">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>

            {/* Center Search Bar */}
            <div className="flex-1 flex justify-center px-4">
              <div className="w-full max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Menu */}
            <div className="hidden sm:flex space-x-4 ml-6">
              <NavLink
                to={"/"}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Shop
              </NavLink>
              <NavLink
                to={"/trending"}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Trending
              </NavLink>
              <NavLink
                to={"/cart"}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Cart
              </NavLink>
              <NavLink
                to={"/wishlist"}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Wishlist
              </NavLink>
            </div>

            {/* Profile Dropdown */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button className="relative flex rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
