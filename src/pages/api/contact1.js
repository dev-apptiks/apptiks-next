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

export default async function contact1Api(req,res){
    if(req.method='POST'){
        console.log('from contact POST call')
        console.log(req.body)
        const AppCustomerMod = new AppCustomer(req.body)
        try{
            AppCustomerMod.save()
        }
        catch(err){

            console.log("Issue from Mongo db save call");
            res.send(500).send("Db issue");
        }
        res.status(200).json({contact1:req.body})
    }
    else if(req.method==='GET'){
        console.log('from GET contact1 API call')
        res.status(200).json({status:'from Get contact API call'})
    }
    res.status(200).json({status:'from other '})


}

const AppCustomerSchema = new mongoose.Schema({
     
    name:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    }

})
const AppCustomer = mongoose.model('AppCustomer', AppCustomerSchema )
