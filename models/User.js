import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exist"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username already exist"],
    },
    image: {
      type: String,
    },
    bookMarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.user || model("User", UserSchema);

export default User;
