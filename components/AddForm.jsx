import addStyles from '../styles/AddForm.module.css';

import { useState } from "react"
import axios from 'axios';

const AddForm = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/new-meeting', 
            {...formData, id: formData.title.replaceAll(' ', '-')}
        );
    }
        
    return (
        <div className={addStyles.container}>
            <form className={addStyles.wrapper} onSubmit={handleSubmit}>
                <input className={addStyles.item} name='title' type='text' onChange={handleChange} placeholder='Title'/>
                <input className={addStyles.item} name='location' type='text' onChange={handleChange} placeholder='Location'/>
                <input className={addStyles.item} name='image' type='text' onChange={handleChange} placeholder='Image URL'/>
                <input className={addStyles.item} name='description' type='text' onChange={handleChange} placeholder='Description'/>
                <button className={addStyles.button} >Add meeting</button>
            </form>
        </div>
    )
}

export default AddForm