import { Button, TextField, Typography as Type } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [lastField, setLastField] = useState("");

  const errors = {
    nameEmpty: "Name can't be empty",
    emailEmpty: "Email can't be empty",
    emailInvalid: "Email is not valid",
    bodyEmpty: "Message can't be empty",
  };

  const [error, setError] = useState({
    name: errors.nameEmpty,
    email: errors.emailEmpty,
    body: errors.bodyEmpty,
  });

  const getName = (e) => {
    const intake = e.target.value;

    if (intake.length > 0) {
      setName(intake);
      delete error.name;
    } else {
      setError({ ...error, name: errors.nameEmpty });
    }

    setLastField("name");
  };

  const getEmail = (e) => {
    const val = e.target.value;

    if (val.length === 0) {
      setError({ ...error, email: errors.emailEmpty });
    } else if (!val.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError({ ...error, email: errors.emailInvalid });
    } else {
      setEmail(val);
      delete error.email;
    }

    setLastField("email");
  };

  const getMessage = (e) => {
    const inp = e.target.value;

    if (inp.length > 0) {
      setBody(inp);
      delete error.body;
    } else {
      setError({...error, body: errors.bodyEmpty});
    }

    setLastField("message");
  };

  const submitForm = () => {
    if (Object.values(error).length !== 0) return;

    console.log(name, email, body);
  };

  const displayError = () => {
    if (Object.keys(error).includes(lastField)) return error[lastField];

    return Object.values(error)[0];
  };

  return (
    <>
      <Type variant="h3">Contact</Type>
      <br />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <div>
          <TextField
            id="name"
            label="name"
            onBlur={getName}
          />
        </div>
        <div>
          <TextField
            id="email"
            label="email"
            onBlur={getEmail}
          />
        </div>
        <div>
          <TextField
            id="message"
            label="message"
            onBlur={getMessage}
          />
        </div>
        <Type>{displayError()}</Type>
        <br />
        <Button onClick={submitForm}>Submit</Button>
      </Box>
    </>
  );
}

export default Contact;
