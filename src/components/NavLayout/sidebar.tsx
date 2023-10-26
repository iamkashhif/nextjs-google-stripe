import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { UserAuth } from "@/pages/context/AuthContext";

const textGradient =
  "bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent";

const bgGradient = "hover:bg-gradient-to-r from-purple-500 to-yellow-500";

const bgGradient1 = "bg-gradient-to-r from-purple-500 to-yellow-500";

export default function Sidebar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(0);
  const { user, googleSignIn, logOut } = UserAuth();

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Card className="h-[calc(100vh)] w-full max-w-[16rem] p-2 rounded-none bg-gray-900 text-white border-r border-gray-800 flex justify-between">
      <Box>
        <Box className="p-4">
          <Link href="/">
            <p className={`font-black text-xl ${textGradient}`}>
              Learning Diaries
            </p>
          </Link>
        </Box>

        <List>
          <ListItem
            onClick={() => router.push("/")}
            className={`text-gray-400 ${bgGradient}`}
          >
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>

          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem
              className={`text-gray-400 p-0 ${
                open === 1 ? bgGradient1 : bgGradient
              }`}
              selected={open === 1}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography className="mr-auto text-gray-400">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>

            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Analytics
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Reporting
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Projects
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem
              className={`text-gray-400 p-0 ${
                open === 2 ? bgGradient1 : bgGradient
              }`}
              selected={open === 2}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography className="mr-auto text-gray-400">
                  E-Commerce
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <ListItem className={`text-gray-400 ${bgGradient}`}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            {/* <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix> */}
          </ListItem>

          <ListItem className={`text-gray-400 ${bgGradient}`}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>

          <ListItem className={`text-gray-400 ${bgGradient}`}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>

          {user && (
            <ListItem
              onClick={handleSignOut}
              className={`text-gray-400 ${bgGradient}`}
            >
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          )}
        </List>
      </Box>

      <Box className=" py-1 px-2 rounded-2xl flex justify-center items-center">
        <div className="  gradientText text-[11px] text-center">
          We stand in solidarity
          with Palestine
        </div>
      </Box>
    </Card>
  );
}
