import { useState } from "react";
import { AiOutlineSave, AiOutlineEdit } from "react-icons/ai";

function TaskEdition({ task }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);
  const [startDate, setStartDate] = useState(task.startDate);
  const [endDate, setEndDate] = useState(task.endDate);
  const [personId, setPersonId] = useState(task.personId);

  const [isDisabled, setIsDisabled] = useState(true);

  const switchEdition = () => {
    setIsDisabled(!isDisabled);
  };
  const dateRevision = (date) =>{
    const today = new Date();
    const dDate = new Date(date)
    if(dDate < today) {
      setCompleted(true);
    }
  }
  const saveData = () => {
    const newData = JSON.stringify({
        title,
        description,
        completed,
        startDate,
        endDate,
        personId
    });
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    }).then((res) => (res ? switchEdition() : alert("Something went wrong")));
  };

  const validation = () => {
    if (
      title.length > 0 &&
      description.length > 0 &&
      startDate.length > 0 &&
      personId > 0
    ) {
      saveData();
    } else {
      alert("Fields must be filled");
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
      <label htmlFor="title">Task Title <span className="text-red-500">*</span></label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />

      <label htmlFor="description">Task Description <span className="text-red-500">*</span></label>
      <textarea
        name="description"
        id="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />

        <label htmlFor="personId">Person on charge(ID) <span className="text-red-500">*</span></label>
      <input
        type="number"
        name="personId"
        id="personId"
        value={personId}
        onChange={(e) => {
          setPersonId(e.target.value);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />
      <label htmlFor="startDate">Start Date <span className="text-red-500">*</span></label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={startDate}
        onChange={(e) => {
          setStartDate(e.target.value);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />
    <label htmlFor="endDate">Deadline</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={endDate}
        onChange={(e) => {
          const date = e.target.value;
          setEndDate(date);
          dateRevision(date);
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      />

        <label htmlFor="completed">Task Accomplished <span className="text-red-500">*</span></label>
      <select
        name="completed"
        id="completed"
        value={completed}
        onChange={(e) => {
            setCompleted(JSON.parse(e.target.value));
        }}
        className={`p-2 rounded-md border-2 ${
          isDisabled
            ? "bg-gray-200 border-gray-400"
            : "bg-white border-robin-s-egg-blue-50"
        }`}
        disabled={isDisabled}
      >
        <option value={true}>true</option>
        <option value={false}>false</option>
      </select>
    </form>
  );
}

export default TaskEdition;
