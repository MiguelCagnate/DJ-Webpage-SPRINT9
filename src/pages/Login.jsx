import React, { useState, useContext } from "react";
import { UserContext } from "../user-context";


export function Login() {
  const { setUser } = useContext(UserContext);
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

    const newUser = users.find(
      (savedUser) =>
        savedUser.password === password && savedUser.email === email
    );

    alert(newUser ? `Hi, ${newUser.name}` : "Not user found");

    // Save logged user
    localStorage.setItem("user", JSON.stringify(newUser));

    setUser(newUser);
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
