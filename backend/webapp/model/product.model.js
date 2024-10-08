var mongoose=require('mongoose');
const {Schema}=mongoose;
// console.log(Schema);
const productSchema=new Schema({
     "id":Number,
     "title":String,
     "price":Number,
     "description":String,
     "category":String,
     "image":String
});
const Product=mongoose.model('products',productSchema);
module.exports=Product;