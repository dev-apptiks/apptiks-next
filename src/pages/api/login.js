export default function loginApi(req,res){
    if(req.method==='POST'){
        console.log('frm POst cl')
        res.status(200).json( req.body)

    }else if(req.method==='GET'){
        console.log('frm GET cl')
        res.status(200).json({loginDet: 'From get call'})

    }
    res.status(200).json({loginDet:  'frm Others cl'})
    //console.log("from comment submitvalue-----------",data)


}