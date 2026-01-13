import * as React from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { v4 as uuid } from "uuid";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) {
    return [];
  } else {
    return data;
  }
};

export default function TodoList() {
  const [todos, setTodos] = React.useState(getInitialData);
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  const removeItem = (id) =>
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  const toggleTodo = (id) => {
    setTodos((prevtodos) => {
      return prevtodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { text: text, id: uuid(), completed: false }]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          m: 3,
        }}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <Typography variant="h2" component={"h1"}>
            Todos
          </Typography>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              toggleTodo={toggleTodo}
              removeItem={removeItem}
              key={todo.id}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </List>
      </Box>
    </>
  );
}

// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.includes(value)}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
