const dbconnect=require("./Mongodb")
const insert=async()=>{
 const data=await dbconnect()
 const result =data.insertOne({



 })
}
insert()