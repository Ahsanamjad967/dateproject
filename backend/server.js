const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/user.model");
const asyncHandler = require("./utils/AsyncHandler");
const ApiError = require("./utils/ApiError");
const taskModel = require("./models/task.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}DateApp`);
    console.log("database connected successfully");
  } catch (error) {
    throw error;
  }
};

app.get(
  "/api/personaldetails",
  asyncHandler(async (req, res) => {
    let personaldetails = await userModel.findOne();
    if (!personaldetails) {
      personaldetails = await userModel.create({
        firstName: "demo",
        lastName: "user",
        age: 22,
        gender:'male',
        nationality:'Some nationality',
        dateOfBirth: new Date("2001-03-25"),
        dateOfGraduation: new Date("2022-03-25"),
      });
    }
    res.status(200).json({ personaldetails, message: "success" });
  })
);

app.get(
  "/api/tasks",
  asyncHandler(async (req, res) => {
    let allTasks = await taskModel.find({});
    if (allTasks.length === 0) {
      console.log('iam called')
    allTasks= await  taskModel.insertMany([
        {
          taskName: "dummyTask1",
          discussionDate: new Date("2022-03-25"),
          submissonDate: '2023-2-20',
          description: "this is a test description",
        },
        {
          taskName: "dummyTask2",
          discussionDate: "2023-2-20",
          submissonDate: '2024-12-23T07:50:00.104Z',
          description: "this is a test description",
        },
        {
          taskName: "dummyTask3",
          discussionDate: new Date("2022-03-25"),
          submissonDate: "2025-2-20",
          description: "this is a test description",
        },
        {
          taskName: "dummyTask4",
          discussionDate: new Date("2022-03-25"),
          submissonDate: "Fri Mar 25 2022 05:00:00 GMT+0500 (Pakistan Standard Time)",
          description: "this is a test description",
        },
      ]);

    }
    res.status(200).json({ allTasks, message: "success" });
  })
);

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    console.log(err);
    res.status(err.statusCode).json({ message: err.message });
  } else {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

connectDb()
  .then(() => {
    app.listen(8000, () => {
      console.log(`server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });
