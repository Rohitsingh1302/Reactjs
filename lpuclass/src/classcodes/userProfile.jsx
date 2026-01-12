import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  return (
    <div>
      <input onChange={e => setUser({ ...user, name: e.target.value })} />
      <input onChange={e => setUser({ ...user, email: e.target.value })} />
      <input type="password" onChange={e => setUser({ ...user, password: e.target.value })} />
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default UserProfile;