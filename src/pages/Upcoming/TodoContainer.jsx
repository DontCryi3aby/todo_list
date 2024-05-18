import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Menu,
  Typography,
} from "@mui/material";
import { useState } from "react";
import theme from "../../utils/theme";
import DatePick from "./DatePick";
import TodoCard from "./TodoCard";
import dayjs from "dayjs";

function TodoContainer({ day }) {
  const [anchorElTodoCard, setAnchorElTodoCard] = useState(null);
  const open = Boolean(anchorElTodoCard);
  const [TodoList, setTodoList] = useState([]);

  const handleClick = (event) => {
    setAnchorElTodoCard(event.currentTarget);
  };
  const handleCloseTodoCard = () => {
    setAnchorElTodoCard(null);
  };

  return (
    <Box width="20%" flexShrink={0} px={1}>
      <Box mt={2}>
        <p>
          <b>
            {dayjs(day).format("D MMM")} - {dayjs(day).format("dddd")}
          </b>{" "}
          <span>{TodoList.length}</span>
        </p>

        {TodoList.map((todo, index) => (
          <Card variant="outlined" key={index} sx={{ mt: 1 }}>
            <CardContent sx={{ display: "flex", gap: 1 }}>
              {todo.priority === 1 && (
                <Box
                  onClick={() => {
                    setTodoList((prev) => prev.filter((item) => item !== todo));
                  }}
                  sx={{
                    position: "relative",
                    "&:after": {
                      position: "absolute",
                      content: '"✓"',
                      color: theme.palette.primary.main,
                      width: 20,
                      height: 20,
                      top: "0%",
                      left: "50%",
                      transform: "translate(-30%, 0)",
                      cursor: "pointer",
                      display: "none",
                    },

                    "&:hover:after": {
                      display: "block",
                      userSelect: "none",
                    },
                  }}
                >
                  <CircleOutlinedIcon
                    color="primary"
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </Box>
              )}
              {todo.priority === 2 && (
                <Box
                  onClick={() => {
                    setTodoList((prev) => prev.filter((item) => item !== todo));
                  }}
                  sx={{
                    position: "relative",
                    "&:after": {
                      position: "absolute",
                      content: '"✓"',
                      color: theme.palette.secondary.main,
                      width: 20,
                      height: 20,
                      top: "0%",
                      left: "50%",
                      transform: "translate(-30%, 0)",
                      cursor: "pointer",
                      display: "none",
                    },

                    "&:hover:after": {
                      display: "block",
                      userSelect: "none",
                    },
                  }}
                >
                  <CircleOutlinedIcon
                    color="secondary"
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </Box>
              )}
              {todo.priority === 3 && (
                <Box
                  onClick={() => {
                    setTodoList((prev) => prev.filter((item) => item !== todo));
                  }}
                  sx={{
                    position: "relative",
                    "&:after": {
                      position: "absolute",
                      content: '"✓"',
                      color: theme.palette.warning.main,
                      width: 20,
                      height: 20,
                      top: "0%",
                      left: "50%",
                      transform: "translate(-30%, 0)",
                      cursor: "pointer",
                      display: "none",
                    },

                    "&:hover:after": {
                      display: "block",
                      userSelect: "none",
                    },
                  }}
                >
                  <CircleOutlinedIcon
                    color="warning"
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </Box>
              )}
              {todo.priority === 4 && (
                <Box
                  onClick={() => {
                    setTodoList((prev) => prev.filter((item) => item !== todo));
                  }}
                  sx={{
                    position: "relative",
                    "&:after": {
                      position: "absolute",
                      content: '"✓"',
                      color: theme.palette.info.main,
                      width: 20,
                      height: 20,
                      top: "0%",
                      left: "50%",
                      transform: "translate(-30%, 0)",
                      cursor: "pointer",
                      display: "none",
                    },

                    "&:hover:after": {
                      display: "block",
                      userSelect: "none",
                    },
                  }}
                >
                  <CircleOutlinedIcon
                    color="info"
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </Box>
              )}
              <Box flex={1}>
                <Typography>{todo.title}</Typography>
                <Typography variant="body2">{todo.description}</Typography>
              </Box>
              <CloseIcon
                fontSize="small"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setTodoList((prev) => prev.filter((item) => item !== todo));
                }}
              />
            </CardContent>
          </Card>
        ))}

        <Button
          id="open-todocard"
          aria-controls={open ? "todocard-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ mt: 1 }}
        >
          <ControlPointOutlinedIcon color="primary" sx={{ mr: 1 }} />
          Add task
        </Button>
        <Menu
          id="todocard-menu"
          anchorEl={anchorElTodoCard}
          open={open}
          onClose={handleCloseTodoCard}
          MenuListProps={{
            "aria-labelledby": "open-todocard",
          }}
          sx={{ padding: "0 !important" }}
        >
          <Box>
            <TodoCard
              onCloseCard={handleCloseTodoCard}
              todoListState={[TodoList, setTodoList]}
              day={day}
            />
          </Box>
        </Menu>
      </Box>
    </Box>
  );
}

export default TodoContainer;
