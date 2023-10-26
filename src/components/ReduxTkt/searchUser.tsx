import { searchUser } from "@/redux-toolkit/reducers/usersReducer";
import { Input } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchUser = (props: any) => {
    const {search, setSearch} = props
  const dispatch: any = useDispatch();

  React.useEffect(() => {
    if (search?.length > 2) {
      dispatch(searchUser({ search }));
    }
  }, [search]);

  return (
    <div className="bg-white p-5 rounded-xl max-w-[600px] mx-auto">
      <div className="w-full">
        <Input
          label="Search"
          name="search"
          crossOrigin={undefined}
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchUser;
