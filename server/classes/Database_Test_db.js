// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/Test_db/UserModel";
import CourseModel from "../models/Test_db/CourseModel";
import ExamModel from "../models/Test_db/ExamModel";
import StudentModel from "../models/Test_db/StudentModel";
import TeacherModel from "../models/Test_db/TeacherModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + "mongodb+srv://Student_Profile:Student_Profile@sting.pmcwx.mongodb.net/Student_Profile_DB?retryWrites=true&w=majority");

    // Start Init Models

    UserModel.init();
    CourseModel.init();
    ExamModel.init();
    StudentModel.init();
    TeacherModel.init();
    // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    
     /* const MongoClient = require('mongodb').MongoClient;
      const uri = "mongodb+srv://Student_Profile:<Student_Profile>@student.nwta3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      this.dbConnection_test_db = client.connect(err => {
        Logger.error(`Failed connection to the DB: ${err.message}`);
        Logger.error(err);
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
      });*/


    try {
      this.dbConnection_test_db = await mongoose.connect(
        "mongodb+srv://Student_Profile:Student_Profile@sting.pmcwx.mongodb.net/Student_Profile_DB?retryWrites=true&w=majority",
        { useNewUrlParser: true , useUnifiedTopology: true }
      );
      //mongodb+srv://Student_Profile:<Student_Profile>@student.nwta3.mongodb.net/Student_DB?retryWrites=true&w=majority;',
      /*this.dbConnection_test_db = await mongoose.connect(
        //"mongodb+srv://database.f9twk.mongodb.net/",
        "mongodb+srv://student.nwta3.mongodb.net/",
        {
          useNewUrlParser: true,
          user: Student_Profile,
          pass: Student_Profile,
          dbName: "@myFirstDatabase",
          retryWrites: true,
          w: "majority",
        }
      );*/
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.stack}`);
      Logger.error(err);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_test_db;
  }
}

export default new Database();
