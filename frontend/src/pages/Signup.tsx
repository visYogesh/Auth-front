import { useState } from "react";
import { signupUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ username: "", mail: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signupUser(form);
      alert(res.data.message);
      navigate("/login");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-xl space-y-4 w-96"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600">Signup</h2>
      <input
        type="text"
        placeholder="Username"
        className="input"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
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
      <button type="submit" className="btn-blue w-full">Signup</button>
    </form>
  );
};

export default Signup;
