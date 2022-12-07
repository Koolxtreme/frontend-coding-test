import { useState } from "react";

function NewUserForm() {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [occupation, setOccupation] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Male");
  const [picture, setPicture] = useState("");

  const saveData = () => {
    const newData = JSON.stringify({
      fullName,
      nickname,
      occupation,
      age,
      gender,
      picture,
    });
    fetch("http://localhost:3001/people/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    }).then((res) =>
      res ? location.assign("/success") : alert("Something went wrong")
    );
  };

  const validateData = () => {
    if (
      fullName.length > 0 &&
      nickname.length > 0 &&
      occupation.length > 0 &&
      gender.length > 0 &&
      picture.length > 0 &&
      age > 0
    ) {
      saveData();
    } else alert("All the fields must be filled");
  };

  return (
    <div className="my-4">
      <h2 className="text-center text-lg font-bold mb-2">
        New User Registration
      </h2>
      <form
        className="border-2 grid gap-4 p-8 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
        }}
      >
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          className="p-2 rounded-md border-2 bg-gray-50 border-robin-s-egg-blue-50 focus:bg-white"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          id="nickname"
          className="p-2 rounded-md border-2 bg-gray-50 border-robin-s-egg-blue-50 focus:bg-white"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          id="occupation"
          className="p-2 rounded-md border-2 bg-gray-50 border-robin-s-egg-blue-50 focus:bg-white"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          className="p-2 rounded-md border-2 bg-gray-50 border-robin-s-egg-blue-50 focus:bg-white"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          className="p-2 rounded-md border-2 bg-gray-50 border-robin-s-egg-blue-50 focus:bg-white"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="picture">Profile Picture (Link)</label>
        <input
          type="text"
          id="picture"
          className="p-2 rounded-md border-2 bg-gray-50 border-robin-s-egg-blue-50 focus:bg-white"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />

        <div className="flex justify-center">
          <button className="py-2 px-6 bg-red-violet text-white hover:bg-red-violet-400 rounded-md transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewUserForm;
