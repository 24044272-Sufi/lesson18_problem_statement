import { useLocation, Link } from 'react-router-dom';

function Confirmation() {
  const location = useLocation();
  const { name, email, courseName } = location.state || {};

  return (
    <div>
      <h1>Registration Successful!</h1>
      <p>Thank you for registering, {name}!</p>
      <p>Email: {email}</p>
      <p>Course: {courseName}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Confirmation;
