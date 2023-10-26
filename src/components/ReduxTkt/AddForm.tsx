import {
  postUser,
  getUser,
  deleteUser,
  updateUser,
} from "@/redux-toolkit/reducers/usersReducer";
import { Button, Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddForm = (props: any) => {
  const { search } = props;

  const dispatch: any = useDispatch();
  const data = useSelector((state: any) => state.usersReducer);

  const [editData, setEditData] = useState(false); // State to hold the data for editing
  const [firstNameInput, setFirstNameInput] = useState(""); // Input field value for first name
  const [lastNameInput, setLastNameInput] = useState("");
  const [userId, setUserId] = useState("");

  const handlesubmit = (e: any) => {
    e.preventDefault();
    const firstName = firstNameInput;
    const lastName = lastNameInput;

    const data = {
      first_name: firstName,
      last_name: lastName,
    };
    dispatch(postUser({ data, dispatch }));

    setFirstNameInput("");
    setLastNameInput("");
  };

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [search]);

  const onEditClick = (value: any) => {
    setFirstNameInput(value?.first_name);
    setLastNameInput(value.last_name);
    setUserId(value._id);
    setEditData(true);
  };

  const handleUpdate = () => {
    const data = {
      first_name: firstNameInput,
      last_name: lastNameInput,
    };

    dispatch(updateUser({ userId, data, dispatch }));
    setFirstNameInput("");
    setLastNameInput("");
    setUserId("");
    setEditData(false);
  };

  return (
    <div className="bg-white p-5 rounded-xl max-w-[600px] mx-auto mt-2">
      <div className="flex gap-4 pb-4">
        <div className="w-72">
          <Input
            label="First Name"
            name="firstName"
            crossOrigin={undefined}
            value={firstNameInput}
            onChange={(e) => setFirstNameInput(e.target.value)}
          />
        </div>

        <div className="w-72">
          <Input
            label="Last Name"
            name="lastName"
            crossOrigin={undefined}
            value={lastNameInput}
            onChange={(e) => setLastNameInput(e.target.value)}
          />
        </div>

        <div>
          {!editData ? (
            <Button onClick={handlesubmit} >
              {!data?.addUserData ? "Adding" : "Add"}
            </Button>
          ) : (
            <Button onClick={handleUpdate} color="blue">
              {!data?.addUserData ? "Updating" : "Update"}
            </Button>
          )}
        </div>
      </div>

      <div className="overflow-y-auto max-h-[50vh]">
        {data?.getUserData?.length > 0 ? (
          data?.getUserData?.map((obj: any, ind: any) => {
            return (
              <div
                key={obj?._id}
                className="px-4 py-2 border rounded-md mt-2 flex justify-between"
              >
                <div className="text-black capitalize">
                  {obj.first_name} {obj.last_name}
                </div>
                <div>
                  <DeleteOutlinedIcon
                    onClick={() =>
                      dispatch(deleteUser({ userId: obj?._id, dispatch }))
                    }
                    fontSize="small"
                    className="text-red-600 cursor-pointer mx-2"
                  />

                  <BorderColorIcon
                    onClick={() => onEditClick(obj)}
                    fontSize="small"
                    className="text-blue-400 cursor-pointer"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-blue-500 text-[12px]">
            data not found
          </div>
        )}
      </div>
    </div>
  );
};

export default AddForm;

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";
