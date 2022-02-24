export default function contactApi(req,res){

    if(req.method==='POST'){
        console.log('frm POst cl')
        res.status(200).json({contact: req.body})


    }else if(req.method==='GET'){
        console.log('from GET cl')
        res.status(200).json({status:  'frm GET cl'})

    }
    res.status(200).json({status:  'frm Others cl'})

    


}