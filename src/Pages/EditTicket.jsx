import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../db"; // Ensure this is the correct path to db.js

function EditTicket() {
   const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    Description: "",
    Assignee: "",
    Status: "Pending",
    Priority: 0,
    id: ""
  });

  useEffect(() => {
    const ticket = db.find((ticket) => ticket.id === parseInt(id));
    if (ticket) {
      setForm(ticket);
    }
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    db[id] = form; // Update the existing ticket in the db array
    console.log("Updated Form:", form);
    navigate(`/ticket/${form.id}`)
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <center>
      <form className="form" onSubmit={handleFormSubmit}>
        <p className="form-title">Edit Ticket</p>
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
        <div>
          <select className="selectinput" name="Status" value={form.Status} onChange={handleInputs}>
            <option value="Pending">Pending</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <select className="selectinput" name="Priority" value={form.Priority} onChange={handleInputs}>
            {arr.map((no) => (
              <option key={no} value={no}>
                {no}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit">
          Update Ticket
        </button>
      </form>
    </center>
  );
}

export default EditTicket;
