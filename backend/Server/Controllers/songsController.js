//CONNECT TO DATABASE
const Songs = require('../Models/Songs')
const { ObjectId } = require('mongodb')
const uploadPhoto = require('../../uploadPhoto')

//GET SONGS
exports.getSongs = async (req, res) => {
  try {
    const Song = await Songs.find()
    res.json(Song);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

//GET  private SONGS
// exports.getPrivateSongs = async (req, res) => {
//   const userId = req.params.id;
//   try {
//     const Song = await Songs.find({'students': userId})
//     res.json(Song);
//   } catch (error) {
//     res.status(404).json({ message: error })
//   }
// }


// ADD OR POST SONGS
exports.addSongs = async (req, res) => {
  exports.upload = uploadPhoto.upload.single('photo')
  const newSong = new Songs({
    title: req.body.title,
    path: req.body.path,
    artist: req.body.artist,
    photo: req.body.photo,
    uploaded: req.body.uploaded,
    users: req.body.users
  });

  try {
    await newSong.save();
    res.json(newSong);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE Songs
exports.deleteSongs = async (req, res) => {
  const SongId = req.params.id;
  try {
    const data = await Songs.deleteOne({ _id: SongId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE Whole Songs
exports.editSongs = async (req, res) => {
  const SongId = req.params.id;
  const newSong = {
    title: req.body.title,
    path: req.body.path,
    artist: req.body.artist,
    photo: req.body.photo,
    uploaded: req.body.uploaded,
    users: req.body.users
  };
  try {
    const updateSongs = await Songs.findByIdAndUpdate({ _id: SongId }, newSong);
    res.json(updateSongs);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

// //ADD STUDENT Song
// exports.addMySongs = async (req, res) => {
//     const SongId = req.body.SongId
//     const userId = req.body.userId;

//     console.log("userId", userId)
//     console.log("SongId", SongId)

//     //DATETIME NOT AVAILABLE ANYMORE
//     const Song = await Songs.find({ _id: SongId })
//     console.log('Song', Song[0])
//     let mySongs = Song[0]
  
//     mySongs.students.push(Object(userId))
//     console.log("the Songs", mySongs)
//     try {
//     const newAddedSong = await Songs.findByIdAndUpdate({ _id: SongId }, mySongs)

//     res.json(newAddedSong);
//   } catch (error) {
//     res.status(404).json({ message: error })
//   }
// }



