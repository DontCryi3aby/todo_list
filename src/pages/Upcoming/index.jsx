import { Box, Divider, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import DatePick from "./DatePick";
import TodoContainer from "./TodoContainer";

// const TodoList = [
//   { title: "Đi ngủ", decription: "Trước 11h, ngủ đủ 8 tiếng", priority: 1 },
//   { title: "Tập gym", decription: "Tay, vai, ngực", priority: 2 },
//   { title: "Code", decription: "Tìm hiểu công nghệ mới", priority: 3 },
//   { title: "Code", decription: "Tìm hiểu công nghệ mới", priority: 4 },
// ];

function Upcoming() {
  const daysOfWeek = [1, 2, 3, 4, 5, 6, 0].map((num) => dayjs().day(num));

  // const customHeight = `calc(100vh - 177px)`;

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 20px 0",
        }}
      >
        <Typography variant="h4" fontSize={26} fontWeight={700} mb={1}>
          Upcoming
        </Typography>
        <DatePick />
      </Box>
      <Box
        spacing={2}
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          flex: 1,
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          mt: "20px",
          padding: "20px 12px 0",
        }}
      >
        {daysOfWeek.map((day) => (
          <TodoContainer day={day} key={day} />
        ))}
      </Box>
    </Stack>
  );
}

export default Upcoming;
