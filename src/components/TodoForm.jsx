import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          label="New Todo"
          variant="outlined"
          value={text}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" edge="end">
                  <CreateIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
