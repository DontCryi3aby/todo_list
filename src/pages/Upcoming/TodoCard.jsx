import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React, { useState } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function TodoCard({ onCloseCard, todoListState }) {
  const [anchorElDateTodo, setAnchorElDateTodo] = useState(null);
  const openDateTodo = Boolean(anchorElDateTodo);
  const handleClick = (event) => {
    setAnchorElDateTodo(event.currentTarget);
  };
  const handleCloseDateTodo = () => {
    setAnchorElDateTodo(null);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTodo, setDateTodo] = useState(dayjs(new Date()));
  const [priority, setPriority] = useState(1);

  const [TodoList, setTodoList] = todoListState;

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (title && description && dateTodo && priority) {
      setTodoList((prev) => [
        ...prev,
        { title, description, dateTodo, priority },
      ]);

      console.log({ title, description, dateTodo, priority });
      onCloseCard();
    }
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <form onSubmit={handleAddTodo}>
        <CardContent>
          <TextField
            label="Task name"
            variant="standard"
            size="small"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
          />
          <TextField
            sx={{ mt: 1 }}
            label="Description"
            variant="standard"
            size="small"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
          />
          <Box mt={2} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box>
              <Button
                id="basic-button"
                aria-controls={openDateTodo ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openDateTodo ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  height: 40,
                  border: "1px solid rgba(0, 0, 0, 0.25)",
                  "&:hover": {
                    borderColor: "#000",
                    background: "unset",
                  },
                }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography color="#000">
                    {dayjs(dateTodo).format("DD MMM")}
                  </Typography>
                </Box>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElDateTodo}
                open={openDateTodo}
                onClose={handleCloseDateTodo}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  sx={{
                    "&:hover": {
                      background: "unset",
                    },
                  }}
                >
                  <DemoItem label="Choose the date">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar
                        value={dateTodo}
                        onChange={(newDate) => {
                          setDateTodo(newDate);
                          handleCloseDateTodo();
                        }}
                      />
                    </LocalizationProvider>
                  </DemoItem>
                </MenuItem>
              </Menu>
            </Box>
            <FormControl>
              <Select
                size="small"
                labelId="todo-priority-label"
                id="todo-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <MenuItem value={1}>Priority 1</MenuItem>
                <MenuItem value={2}>Priority 2</MenuItem>
                <MenuItem value={3}>Priority 3</MenuItem>
                <MenuItem value={4}>Priority 4</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
        <Divider py={1} />
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip title="Cancel">
            <Button size="small" variant="outlined" onClick={onCloseCard}>
              <CloseOutlinedIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Add task">
            <Button size="small" type="submit" variant="contained">
              <SendOutlinedIcon />
            </Button>
          </Tooltip>
        </CardActions>
      </form>
    </Box>
  );
}

export default TodoCard;
