import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password, role });
      // Auto-redirect to login after registration
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2>Register</h2>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <span onClick={() => setShowPassword(!showPassword)} style={styles.eye}>
            {showPassword ? '🙈' : '👁'}
          </span>
        </div>
        <select value={role} onChange={e => setRole(e.target.value)} style={styles.select}>
          <option value='user'>User</option>
          <option value='hotel'>Hotel</option>
        </select>
        <button type='submit' style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#1f2937',
  },
  card: {
    background: 'white',
    padding: '40px',
    borderRadius: '12px',
    width: '300px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
  },
  eye: {
    position: 'absolute',
    right: '10px',
    top: '15px',
    cursor: 'pointer',
  },
  select: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#10b981',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Register;