import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getJohnProfile();
  }, []);

  const getJohnProfile = async () => {
    const response = await axios.get(
      "https://dark-cyan-salmon-gear.cyclic.app/profile"
    );
    setProfile(response.data);
  };

  return (
    <div className="App">
      <h1>John Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Job: {profile.job}</p>
    </div>
  );
}

export default App;
