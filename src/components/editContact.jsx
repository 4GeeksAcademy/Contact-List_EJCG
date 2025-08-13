import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const editContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchContact = async () => {
      const res = await fetch(
        `https://playground.4geeks.com/contact/agendas/gaboozc/contacts/${id}`
      );
      if (res.ok) {
        const data = await res.json();
        setContact(data);
      }
    };
    fetchContact();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/gaboozc/contacts/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact),
        }
      );

      if (response.ok) {
        navigate("/", { state: { refresh: true } });
      } else {
        console.error("Failed to update contact");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">Edit contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Full Name"
            value={contact.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={contact.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter phone"
            value={contact.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter address"
            value={contact.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          update
        </button>
      </form>

      <div className="mt-3 text-start">
        <Link to="/" className="text-decoration-none">
          or get back to contacts
        </Link>
      </div>
    </div>
  );
};

export default editContact;

