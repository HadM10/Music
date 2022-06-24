const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://HM10:Neymar10.brasil@cluster0.kwaxo.mongodb.net/Music?retryWrites=true&w=majority').then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))
}
