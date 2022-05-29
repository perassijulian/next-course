import addStyles from "../styles/AddForm.module.css";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const AddForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    image: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (formData.title === "") errors.title = "Please add a title!";
    if (formData.image === "") errors.image = "Please add an image!";
    if (formData.location === "") errors.location = "Please add a location!";
    if (formData.description === "")
      errors.description = "Please add a description!";

    if (Object.keys(errors).length === 0) {
      if (router.query.meetID) {
        await axios.put(`/api/${router.query.meetID}`, {
          ...formData,
          id: formData.title.replaceAll(" ", "-"),
        });
      } else {
        await axios.post("/api/new-meeting", {
          ...formData,
          id: formData.title.replaceAll(" ", "-"),
        });
      }
      await router.push("/");
    } else {
      setFormErrors(errors);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/${router.query.meetID}`);
    await router.push("/");
  };

  useEffect(() => {
    const handleEdit = async () => {
      const res = await axios.get(`/api/${router.query.meetID}`);
      const { _id, ...data } = res.data;
      setFormData(data);
    };

    if (router.query.meetID) {
      handleEdit();
    }
  }, []);

  return (
    <div className={addStyles.container}>
      <form className={addStyles.wrapper}>
        <input
          className={addStyles.item}
          name="title"
          value={formData.title}
          type="text"
          onChange={handleChange}
          placeholder="Title"
        />
        {formErrors.title && (
          <p className={addStyles.error}>{formErrors.title}</p>
        )}
        <input
          className={addStyles.item}
          name="location"
          value={formData.location}
          type="text"
          onChange={handleChange}
          placeholder="Location"
        />
        {formErrors.location && (
          <p className={addStyles.error}>{formErrors.location}</p>
        )}
        <input
          className={addStyles.item}
          name="image"
          value={formData.image}
          type="text"
          onChange={handleChange}
          placeholder="Image URL"
        />
        {formErrors.image && (
          <p className={addStyles.error}>{formErrors.image}</p>
        )}
        <textarea
          className={addStyles.item}
          name="description"
          value={formData.description}
          type="text"
          onChange={handleChange}
          placeholder="Description"
          style={{ height: "100px" }}
        />
        {formErrors.description && (
          <p className={addStyles.error}>{formErrors.description}</p>
        )}
        <div className={addStyles.buttonWrapper}>
          <button onClick={handleSubmit} className={addStyles.button}>
            {router.query.meetID ? "Edit" : "Add"} meeting
          </button>
          {router.query.meetID && (
            <button
              onClick={handleDelete}
              className={addStyles.button}
              style={{ backgroundColor: "red" }}
            >
              Delete meeting
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddForm;
