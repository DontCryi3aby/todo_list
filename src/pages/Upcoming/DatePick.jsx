import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import * as React from "react";

export default function DatePick() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [date, setDate] = React.useState(dayjs(new Date()));

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Typography color="#000">{dayjs(date).format("MMM YYYY")}</Typography>
          <KeyboardArrowDownIcon color="string" />
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                  handleClose();
                }}
              />
            </LocalizationProvider>
          </DemoItem>
        </MenuItem>
      </Menu>
    </Box>
  );
}
