import { useState } from "react";
import { AiOutlineSave, AiOutlineEdit } from "react-icons/ai";

function EditionForm({ profile }) {
  const { fullName, nickname, age, occupation, gender, picture } = profile;
  const [nome, setNome] = useState(fullName);
  const [nick, setNick] = useState(nickname);
  const [old, setOld] = useState(age);
  const [profession, setProfession] = useState(occupation);
  const [pick, setPick] = useState(picture);
  const [gen, setGen] = useState(gender);
  const [isDisabled, setIsDisabled] = useState(true);

  const switchEdition = () => {
    setIsDisabled(!isDisabled);
  };
  const saveData = () =>{
    const newData = JSON.stringify({
      fullName: nome,
      nickname: nick,
      age: old,
      occupation: profession,
      gender: gen,
      picture: pick
    })
    fetch(`http://localhost:3001/people/${profile.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: newData
    }).then((res) => (res ? switchEdition() : alert("Something went wrong")))
  }

  const validation = () => {
    if(nome.length > 0 && nick.length > 0 && old > 0 && profession.length > 0 && pick.length > 0 && gen.length > 0)
    {
      saveData()
    }
    else{
      alert("Fields must be filled")
    }
  };

  return (
    <form className="border-2 grid gap-4 p-8 rounded-md my-8">
      <div className="flex justify-center">
        {isDisabled ? (
          <a
            className="p-2 bg-yellow-200 cursor-pointer text-xl rounded-md"
            onClick={switchEdition}
          >
            <AiOutlineEdit />
          </a>
        ) : (
          <a
            className="p-2 bg-green-200 cursor-pointer text-xl rounded-md"
            onClick={validation}
          >
            <AiOutlineSave />
          </a>
        )}
      </div>

      <label htmlFor="namae">Full Name <span className="text-red-500">*</span></label>
      <input
        type="text"
        name="namae"
        id="namae"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />

        <label htmlFor="nik">Nickname <span className="text-red-500">*</span></label>
      <input
        type="text"
        name="nik"
        id="nik"
        value={nick}
        onChange={(e) => {
          setNick(e.target.value);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />
  <label htmlFor="oldity">Age <span className="text-red-500">*</span></label>
      <input
        type="number"
        name="oldity"
        id="oldity"
        value={old}
        onChange={(e) => {
          setOld(e.target.value);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />

        <label htmlFor="pro">Occupation <span className="text-red-500">*</span></label>
      <input
        type="text"
        name="pro"
        id="pro"
        value={profession}
        onChange={(e) => {
          setProfession(e.target.value);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />
      <label htmlFor="pic">Link to profile image <span className="text-red-500">*</span></label>
      <input
        type="text"
        name="pic"
        id="pic"
        value={pick}
        onChange={(e) => {
          setPick(e.target.value);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />

  <label htmlFor="gend">Gender <span className="text-red-500">*</span></label>
      <select
        name="gend"
        id="gend"
        value={gen}
        onChange={(e) => {
          setGen(e.target.value);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </form>
  );
}

export default EditionForm;
