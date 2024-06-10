const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "prodCode":String,
        "prodName":String,
        "description":String,
        "price":String
    }
)

let productmodel=mongoose.model("products",schema)
module.exports={productmodel}