"use client";
import { useState } from "react";

export default function SimpleTestPage() {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [surname, setSurname] = useState("");
    const [userStatus, setUserStatus] = useState("");
    const [school, setSchool] = useState("");
    const [grade, setGrade] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);

    const res = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        fullname,
        surname,
        userStatus,
        school,
        grade
         }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      alert(data.error);
      return;
    }

    alert("check mongo idk");
    setUsername("");
    setFullname("");
    setSurname("");
    setUserStatus("");
    setSchool("");
    setGrade("");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Test DB Save</h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />

      <input
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        placeholder="full name"
        style={{ padding: 10, width: 300 }}
      />
        <br /><br />

      <input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="surname"
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />
        <input
        value={userStatus}
        onChange={(e) => setUserStatus(e.target.value)}
        placeholder="user status"
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />

      <input
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        placeholder="school"
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />
      <input
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="grade"
        style={{ padding: 10, width: 300 }}
      />


      <br /><br />
      <button onClick={submit} disabled={loading}>
        {loading ? "hmm" : "Submit"}
      </button>
    </div>
  );
}
