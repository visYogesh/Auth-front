import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ mail: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.token);
      console.log(res.data)
      alert("Login successful!");
      navigate("/home");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-xl space-y-4 w-96"
    >
      <h2 className="text-2xl font-bold text-center text-green-600">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="input"
        onChange={(e) => setForm({ ...form, mail: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <hr />
      <div className="flex bg-gray-400 items-end h-40">
        <button type="submit" className="bg-red-300 ">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
