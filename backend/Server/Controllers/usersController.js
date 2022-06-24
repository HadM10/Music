//CONNECT TO DATABASE
const Users = require('../Models/Users')


//FIND All USERS
exports.FindUsers = async (req, res) => {
  try {
    const allUsers = await Users.find()
    res.json(allUsers);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}



//FIND ONE USER
exports.FindUser = async (req, res) => {
  try {
    const theUser = await Users.findById({_id: req.params.id})
    res.json(theUser);
    console.log(theUser)
  } catch (error) {
    res.status(400).json({ message: error })
  }
}


//EDIT OR UPDATE Users
exports.editUsers = async (req, res) => {
  const UserId = req.params.id;
  const newUser = {
    id: req.body.id,
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    email: req.body.email,
    photo: req.body.photo,
    membership: req.body.membership,
    password: req.body.password,
    login: req.body.login
  };
  try {
    const updateUsers = await Users.findByIdAndUpdate({ _id: UserId }, newUser);
    res.json(updateUsers);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

// //ADD STUDENT COURSE
// exports.addMyCourses = async (req, res) => {
//   try {
//     const courseId = req.body.courseId
//     const userId = req.params.id;

//     console.log(userId)

//     //DATETIME NOT AVAILABLE ANYMORE
//     const Users = await Users.find({ _id: userId })
//     let myCourses = Users[0].myCourses
    
//     Users[0].myCourses = myCourses
  
//     myCourses.push({ "courseId": ObjectId(id), "myCourses": req.body.myCourses })

//     const newCourse = await Users.findByIdAndUpdate({ _id: userId }, myCourses[0])

//     res.json(newCourse);
//   } catch (error) {
//     res.status(404).json({ message: error })
//   }
// }