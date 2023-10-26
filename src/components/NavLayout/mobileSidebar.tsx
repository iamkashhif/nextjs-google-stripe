import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import SegmentIcon from "@mui/icons-material/Segment";
import Link from "next/link";

type Anchor = "top" | "left" | "bottom" | "right";

const menuitem = [
  {
    name: "Stripe Form",
    path: "/",
  },
  {
    name: "Google Map",
    path: "/",
  },
  {
    name: "Push Notification",
    path: "/",
  },
  {
    name: "Redux Tkt",
    path: "/",
  },
  {
    name: "Logout",
    path: "/",
  },
];

export default function MobileSidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-gray-900 text-white h-full"
    >
      <Box className="px-4 py-6">
        <Link href="/">
          <p className="font-black text-xl gradientText text-center">
            Learning Diaries
          </p>
        </Link>
      </Box>

      <List>
        {menuitem?.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Box className="block md:hidden absolute top-3 left-2">
          <IconButton onClick={toggleDrawer("left", true)}>
            <SegmentIcon fontSize="large" className="text-gray-700" />
          </IconButton>
        </Box>

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
