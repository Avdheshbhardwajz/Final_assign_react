import { useState } from "react";
import db from "../../db"; // Ensure this is the correct path to db.js
import { useNavigate } from "react-router-dom";

function CreateTicket() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    Description: "",
    Assignee: "",
    Status: "Pending",
    Priority: 0
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTicket = { ...form, id: db.length+1 };
    db.push(newTicket); // Push the new ticket into the db array
    console.log("Form Submitted:", newTicket);
    console.log(db);
    navigate(`/ticket/${newTicket.id}`)
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <center>
      <form className="form" onSubmit={handleFormSubmit}>
        <p className="form-title">Create Tickets</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            name="title"
            onChange={handleInputs}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Description"
            name="Description"
            value={form.Description}
            onChange={handleInputs}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Assignee To?"
            name="Assignee"
            value={form.Assignee}
            onChange={handleInputs}
          />
        </div>
        <div className="input-container">
          <select className="selectinput" name="Status" value={form.Status} onChange={handleInputs}>
            <option value="Pending">Pending</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="input-container">
          <select className="selectinput" name="Priority" value={form.Priority} onChange={handleInputs}>
            {arr.map((no) => (
              <option key={no} value={no}>
                {no}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit">
          Create Ticket
        </button>
      </form>
    </center>
  );
}

export default CreateTicket;
