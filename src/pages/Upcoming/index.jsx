import { Box, Divider, Typography } from "@mui/material";
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
  const now = dayjs();
  const next7Day = [0, 1, 2, 3, 4, 5, 6].map((num) => now.add(num, "day"));

  const customHeight = `calc(100vh - 177px)`;

  return (
    <Box sx={{ padding: "60px 20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 100,
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontSize={26} fontWeight={700} mb={1}>
          Upcoming
        </Typography>
        <DatePick />
      </Box>
      <Divider />
      <Box
        spacing={2}
        px={1}
        mt={2}
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          height: customHeight,
        }}
      >
        {next7Day.map((day) => (
          <TodoContainer day={day} key={day} />
        ))}
      </Box>
    </Box>
  );
}

export default Upcoming;
