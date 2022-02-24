export default function abc(req,res){
    if(req.method==='POST'){

        console.log('from post');
        let comment =req.body;
        commentsArray.push(comment);
      
        res.status(200).json({reqBody:  commentsArray})

    }else if(req.method==='GET'){
        console.log('from get');
        res.status(200).json({status:'Get resp'})
    }

    res.status(200).json({status:'Success'})

}