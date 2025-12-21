import { useState } from "react";
function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !name || !email || !password;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> <br /><br />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> <br /><br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br /><br />
      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
}

export default FormValidation;