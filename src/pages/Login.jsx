import React, { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      return alert("All inputs are required");
    }

    // Obtenemos los usuarios guardados, si no hay se asigna un array vacio
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) return alert("There is not user");

    const user = users.find(
      (savedUser) =>
        savedUser.password === password && savedUser.email === email
    );

    alert(user ? `Hi, ${user.name}` : "Not user found");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"email"}
        name="email"
        placeholder="Email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type={"Password"}
        name="password"
        placeholder="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <input type="submit" value="Login" />
    </form>
  );
}