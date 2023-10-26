import UserData from "@/models/users_model";

// Get : ${baseUrl}/api/users
export const getUsers = async (req: any, res: any) => {
  try {
    const users = await UserData.find({});

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "No Data Found" });
    }
  } catch (error) {
    res.status(404).json({ error: "Something is wrong : Get All" });
  }
};

// POST : ${baseUrl}/api/users
export const postUsers = async (req: any, res: any) => {
  try {
    const body = req.body;

    console.log(body);

    if (body) {
      const data = await UserData.create(body);
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "No Data Provided" });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(404).json({ error: "Something is wrong : Post" });
  }
};

// PUT : ${baseUrl}/api/users/313
export const putUsers = async (req: any, res: any) => {
  try {
    const { userId } = req.query;
    const body = req.body;

    console.log(body);

    if (body && userId) {
      const data = await UserData.findByIdAndUpdate(userId, body);
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Id Not Provided" });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(404).json({ error: "Something is wrong : Put" });
  }
};

// Delete : ${baseUrl}/api/users/313
export const deleteUsers = async (req: any, res: any) => {
  try {
    const { userId } = req.query;

    if (userId) {
      const data = await UserData.findByIdAndDelete(userId);
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Id Not Provided" });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(404).json({ error: "Something is wrong : Delete" });
  }
};

// Get Single : ${baseUrl}/api/users/313
export const getUser = async (req: any, res: any) => {
  try {
    const { userId } = req.query;

    if (userId) {
      const data = await UserData.findById(userId);
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Not Avaiable" });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(404).json({ error: "Something is wrong : Single user" });
  }
};

// Search User : ${baseUrl}/api/users/kashif
export const postSearchUser = async (req: any, res: any) => {
  try {
    const { userId } = req.query;

    if (userId) {
      // const data = await UserData.find({
      //   first_name: userId,
      //   last_name: userId,
      // });

      const data = await UserData.find({
        $or: [
          { first_name: { $regex: new RegExp(userId, "i") } },
          { last_name: { $regex: new RegExp(userId, "i") } },
        ],
      });

      if (data) {
        res.status(200).json(data);
      } else {
        res.status(200).json([]);
      }
    } else {
      res.status(404).json({ message: "please search user" });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(404).json({ error: "Something is wrong : Search user" });
  }
};
