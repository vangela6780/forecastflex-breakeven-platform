import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">ForecastFlex</h1>
      <p className="text-gray-500">Cost & viability analysis, made simple.</p>
      <Link
        to="/login"
        className="mt-4 px-6 py-2 bg-teal-700 text-white rounded"
      >
        Log in
      </Link>
    </div>
  );
}
