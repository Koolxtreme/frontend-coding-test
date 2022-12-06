import { useState } from "react";

function EditionForm({ profile }) {
  const { fullName, nickname, age, occupation, gender, picture } = profile;
  const [nome, setNome] = useState(fullName);
  const [nick, setNick] = useState(nickname);
  const [old, setOld] = useState(age);
  const [profession, setProfession] = useState(occupation);
  const [pick, setPick] = useState(picture);
  const [gen, setGen] = useState(gender);

  return (
    <form className="border-2 grid gap-4 p-8">
      <input
        type="text"
        name="namae"
        id="namae"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        className=""
      />

      <input
        type="text"
        name="nik"
        id="nik"
        value={nick}
        onChange={(e) => {
          setNick(e.target.value);
        }}
      />

      <input
        type="number"
        name="oldity"
        id="oldity"
        value={old}
        onChange={(e) => {
          setOld(e.target.value);
        }}
      />

      <input
        type="text"
        name="pro"
        id="pro"
        value={profession}
        onChange={(e) => {
          setProfession(e.target.value);
        }}
      />

      <input
        type="text"
        name="pic"
        id="pic"
        value={pick}
        onChange={(e) => {
          setPick(e.target.value);
        }}
      />

      <select
        name="gender"
        id="gender"
        value={gen}
        onChange={(e) => {
          setGen(e.target.value);
        }}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </form>
  );
}

export default EditionForm;
