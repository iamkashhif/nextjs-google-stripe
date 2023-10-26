"use client";
import { UserAuth } from "@/pages/context/AuthContext";
import { Avatar, Box, IconButton } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { requestForToken } from "../../utils/firebase";
import Sidebar from "./sidebar";
// import "nav.css";
import SegmentIcon from "@mui/icons-material/Segment";
import MobileSidebar from "./mobileSidebar";

const Index = ({ children }: any) => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSignOut = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <>
      <Box className="flex bg-gray-900 h-[calc(100vh)] relative">
        <Box className="hidden md:block">
          <Sidebar />
        </Box>

        <MobileSidebar />

        <Box className="flex flex-col justify-between h-screen w-[100%]">
          <Box className="hidden md:block">
            <Box className="flex items-center flex-row-reverse justify-between gap-4 py-4 px-8 border-b border-gray-800 text-gray-400 text-[15px]">
              <Box className="flex gap-5 items-center">
                <Link href="/StripePayment/CheckoutForm">
                  <div className={gradient}>Stripe Form</div>
                </Link>

                <Link href="/GoogleMap">
                  <div className={gradient}>Google Map</div>
                </Link>

                <Link href="/FirebaseNotification">
                  <div className={gradient}>Push Notification</div>
                </Link>

                <Link href="/ReduxTkt">
                  <div className={gradient}>Redux Toolkit</div>
                </Link>

                {loading ? null : !user ? (
                  <>
                    <div
                      onClick={handleSignIn}
                      className="cursor-pointer bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-8 py-1 rounded-full text-[14px]"
                    >
                      Login
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-yellow-500 pr-4 rounded-full">
                    <Avatar
                      alt={user.displayName}
                      src={user?.photoURL ? user?.photoURL : user}
                    />

                    <div className="text-[14px]">
                      <Box className="text-white">{user.displayName}</Box>
                      {/* <Box
                      className="cursor-pointer -mt-1 text-12"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </Box> */}
                    </div>
                  </div>
                )}
              </Box>
            </Box>
          </Box>

          <Box className="pt-7 grow overflow-y-auto">{children}</Box>

          <footer className="text-center py-3 gradientText text-[13px] border-t border-gray-900">
            Powered By Inci Infotech {new Date().getFullYear()}
          </footer>
        </Box>
      </Box>
    </>
  );
};

export default Index;

const gradient =
  "hover:bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text hover:text-transparent";

// const boxStyle = {
//   backgroundImage:
//     "url('https://cdn.pixabay.com/photo/2020/04/25/01/36/road-5089188_1280.jpg')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   height: "100vh",
// };
