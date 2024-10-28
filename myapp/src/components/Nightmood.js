import { useState } from "react";
import Form from "react-bootstrap/Form";
import '../components/css/main.css';

function Nightmood() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  if (darkTheme) {
    document.body.classList.add("dark-theme");
  } 
  else {
    document.body.classList.remove("dark-theme");
  }

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Dark Theme"
        onChange={handleToggle}
      />
    </Form>
  );
}

export default Nightmood;