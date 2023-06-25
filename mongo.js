const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

//const url = `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`;
//const url = `mongodb+srv://atp:${password}@aaa.wxza5ra.mongodb.net/dbnts?retryWrites=true&w=majority`;
const url = `mongodb+srv://atp:${password}@aaa.wxza5ra.mongodb.net/testdbnts?retryWrites=true&w=majority`;
//mongodb+srv://atp:<password>@aaa.wxza5ra.mongodb.net/?retryWrites=true&w=majority

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "HTML is bbbbb",
//   important: true,
// });

// note.save().then(() => {
//   console.log("note saved!");
//   mongoose.connection.close();
// });

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
