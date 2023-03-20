const mongoose = require('mongoose')
const mongoURI= "mongodb+srv://lakshya:lakshya@cluster0.s7ezzzn.mongodb.net/?retryWrites=true&w=majority"
const connection =()=>{
    mongoose.connect(mongoURI,{ useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        // return server.listen({ port: PORT });
      })
    //   .then((res) => {
    //     console.log(`Server running at ${res.url}`);
    //   })
      .catch(err => {
        console.error(err)
    })
}
module.exports=connection