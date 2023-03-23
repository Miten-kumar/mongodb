const dbconnect=require("./Mongodb")
const DeleteData=async ()=>{
    let data =await dbconnect()
    let result=await data.deleteOne({
        pid:1291})
    console.log(result);

}
DeleteData()