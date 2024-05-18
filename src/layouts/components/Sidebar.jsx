import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SortByAlphaOutlinedIcon from "@mui/icons-material/SortByAlphaOutlined";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../App";

export default function Sidebar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box mx={2} sx={{ color: "black" }}>
        <List component="nav" aria-label="nav">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    src="https://dcff1xvirvpfp.cloudfront.net/69a9c4688b8a49939e95c08d1da50c20_big.jpg"
                  >
                    abc
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Typography sx={{ fontWeight: 600 }}>i3oyhp</Typography>
            </Box>
            <Box>
              <Tooltip title="Notifications">
                <NotificationsActiveOutlinedIcon
                  fontSize="small"
                  sx={{ cursor: "pointer" }}
                />
              </Tooltip>
            </Box>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Box>
                <Typography fontWeight={600}>Nguyen Ngoc Thach</Typography>
              </Box>
            </MenuItem>
            <Divider />
            <Link to="#">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PermIdentityIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
            </Link>
            <Link to="#">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <LogoutOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Log out
              </MenuItem>
            </Link>
          </Menu>

          <Divider sx={{ pt: 1 }} />

          <NavLink exact to="/tasks/add">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <AddCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Add task" />
            </ListItemButton>
          </NavLink>
          <NavLink exact to="/search">
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <SearchOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </NavLink>

          <NavLink exact to="/inbox">
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <InboxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </NavLink>
          <NavLink exact to="/upcoming">
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <UpcomingOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Upcoming" />
            </ListItemButton>
          </NavLink>
          <NavLink exact to="/filter">
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <SortByAlphaOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Filter & Label" />
            </ListItemButton>
          </NavLink>
        </List>
      </Box>
    </Box>
  );
}
