import PathConfig from "../../common/PathConfig";
import HttpService from "../../services/HttpService";
import { useState } from "react";

function LoginPage() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError("");
    }


    const login = async () => {
        try {
            const requestBody = {
                username: "admin",
                password: "admin"
            }
            const response = await HttpService.post(PathConfig.LOGIN_, requestBody);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-center text-3xl font-bold text-white">VibeLance</h1>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Sign in to your account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={login}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                                Username
                            </label>
                            <div className="mt-1">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={user.username}
                                    onChange={handleChange}
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your username"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={user.password}
                                    onChange={handleChange}
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="rounded-md bg-red-900/50 border border-red-500 p-4">
                            <div className="text-sm text-red-200">{error}</div>
                        </div>
                    )}

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 bg-gray-800 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </div>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-400">
                            Don't have an account?{" "}
                            <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                                Sign up
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;