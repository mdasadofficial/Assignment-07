import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center px-4">

            <h1 className="text-6xl font-bold text-green-600 mb-4">
                404
            </h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>

            <p className="text-gray-500 mb-6">
                Oops! The page you are looking for doesn’t exist.
            </p>

            <Link href="/"
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-800 transition"
            >
                Go Back Home

            </Link>

        </div>
    );
}