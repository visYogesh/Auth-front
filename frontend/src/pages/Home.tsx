const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="text-center space-y-4 bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-purple-600">Dashboard</h1>
      <p className="text-gray-600">Welcome back! 🔐</p>
      <p className="text-sm break-all text-gray-400">Your Token: {token}</p>
    </div>
  );
};

export default Home;
