import { useState } from "react";

function NewTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [personId, setPersonId] = useState(0);

  const dateRevision = (date) => {
    const today = new Date();
    const dDate = new Date(date);
    if (dDate < today) {
      setCompleted(true);
    }
  };
  const saveData = () => {
    const newData = JSON.stringify({
      title,
      description,
      completed,
      startDate,
      endDate,
      personId,
    });
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    }).then((res) =>
      res ? location.assign("/success") : alert("Something went wrong")
    );
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
    <form
      className="border-2 grid gap-4 p-8 rounded-md my-8"
      onSubmit={(e) => {
        e.preventDefault();
        validation();
      }}
    >
      <div className="flex justify-center"></div>
      <label htmlFor="title">
        Task Title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={
          "p-2 rounded-md border-2 bg-white border-robin-s-egg-blue-50"
        }
      />

      <label htmlFor="description">
        Task Description <span className="text-red-500">*</span>
      </label>
      <textarea
        name="description"
        id="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className={
          "p-2 rounded-md border-2 bg-white border-robin-s-egg-blue-50"
        }
      />

      <label htmlFor="personId">
        Person on charge(ID) <span className="text-red-500">*</span>
      </label>
      <input
        type="number"
        name="personId"
        id="personId"
        value={personId}
        onChange={(e) => {
          setPersonId(e.target.value);
        }}
        className={
          "p-2 rounded-md border-2 bg-white border-robin-s-egg-blue-50"
        }
      />
      <label htmlFor="startDate">
        Start Date <span className="text-red-500">*</span>
      </label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={startDate}
        onChange={(e) => {
          setStartDate(e.target.value);
        }}
        className={
          "p-2 rounded-md border-2 bg-white border-robin-s-egg-blue-50"
        }
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
        className={
          "p-2 rounded-md border-2 bg-white border-robin-s-egg-blue-50"
        }
      />

      <label htmlFor="completed">
        Task Accomplished <span className="text-red-500">*</span>
      </label>
      <select
        name="completed"
        id="completed"
        value={completed}
        onChange={(e) => {
          setCompleted(JSON.parse(e.target.value));
        }}
        className={
          "p-2 rounded-md border-2 bg-white border-robin-s-egg-blue-50"
        }
      >
        <option value={true}>true</option>
        <option value={false}>false</option>
      </select>

      <div className="flex justify-center">
        <button className="py-2 px-6 bg-red-violet text-white hover:bg-red-violet-400 rounded-md transition">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewTaskForm;
