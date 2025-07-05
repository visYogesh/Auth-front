// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

const Landing = () => {
  return (
    <div className="text-center space-y-6 bg-white shadow-xl rounded-xl p-10">
      <h1 className="text-4xl font-extrabold text-blue-700">
        Welcome to Yogesh Auth App
      </h1>
      <p className="text-gray-600">Please choose an option to continue</p>
      <div className="space-x-6">
        <Link
          to="/signup"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition-all"
        >
          Signup
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition-all"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default App;
