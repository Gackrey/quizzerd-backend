const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      validate: {
        validator: function (v) {
          return /[a-z][0-9]*@gmail.com/.test(v);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    password: {
      type: String,
      require: [true, "password field is required"],
      validate: {
        validator: function (v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,15}$/.test(v);
        },
        message: () =>
          `Password must be more than 8 characters long and 
          must contain an uppercase,lowercase and a number`,
      },
    },
  },
  { timestamps: true }
);

// For hashing
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

//Compare password
userSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

const User = mongoose.model("Userdata", userSchema);
module.exports = { User };
