var mongoose = require('mongoose')


mongoose.connect('mongodb+srv://admin:admin@cluster0.di8rr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
} 
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongo DB Connected successfully from reg js");
});



export default async function abc(req,res){
    if(req.method==='POST'){

        console.log('from post');
       // let comment =req.body;

   //  {data:{comment:'abc',feedback:'xyz'}};

        //commentsArray.push(comment);
        // NOTE: below code should be written after mongoose connection----------
        const appCom = new AppComment(req.body)
        try{
            await appCom.save();
          }
          catch(err){
            console.log("Issue from Mongo db save call");
            res.send(500).send("Db issue");
          }
       //---------------------------------------------------------------------------
      
        res.status(200).json({comment:req.body })

    }else if(req.method==='GET'){
        console.log('from get');
        res.status(200).json({status:'Get resp'})
    }

    res.status(200).json({status:'Success'})

}

const AppCommentSchema = new mongoose.Schema({

    comment:{
        type:String,
        required:true

    },
    feedback:{
        type:String,
        required:true
    }

})
const AppComment = mongoose.model("AppComment",AppCommentSchema)