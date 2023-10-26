import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "@/components/ReduxTkt/AddForm";
import SearchUser from "@/components/ReduxTkt/searchUser";
import { getUser } from "@/redux-toolkit/reducers/usersReducer";

const Index = () => {
  const [search, setSearch] = React.useState<any>();
  const dispatch: any = useDispatch();

  React.useEffect(() => {
    dispatch(getUser());
  }, [search]);

  return (
    <Box className="">
      <SearchUser search={search} setSearch={setSearch} />
      <AddForm search={search} />
    </Box>
  );
};

export default Index;
