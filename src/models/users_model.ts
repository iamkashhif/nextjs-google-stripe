import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  mobile: Number,
  status: Boolean,
});

const UserData = models.users_table || model("users_table", userSchema);
export default UserData;
