import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // temporary redirect for now
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f6f0] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-[#001d3d] text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001d3d]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001d3d]"
        />

        <button
          type="submit"
          className="w-full bg-[#001d3d] text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#001d3d] font-medium underline hover:opacity-80"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
