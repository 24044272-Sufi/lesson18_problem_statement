import { useNavigate } from 'react-router-dom';
import {getDiplomas} from '../api'
import { useState } from 'react';

export default function Register(){
    const diplomas = getDiplomas()
    const navigate = useNavigate()

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courseName, setCourseName] = useState(diplomas[0].name);



    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/confirmation', { 
      state: { name, email, courseName } 
    });

    }
    
    return (
      <div>
      <h1>Course Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Course Name:</label>
          <select value={courseName} onChange={(e) => setCourseName(e.target.value)} required>
                {diplomas.map(dip=> <option key={dip.id} value={dip.name}>{dip.name}</option>)}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>

        
    )
}