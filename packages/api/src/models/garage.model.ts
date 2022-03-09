import mongoose,{Document, Schema} from "mongoose";

export interface Garage extends Document{
    name:string,
    openHours:Array<Object>,
    priceHour:Number,
    itv:boolean,
   
}

const schema= new Schema({
    name:{type:String,required:true},
    openHours:{type:Array, required:true},
    priceHour:{type:Number},
    itv:{type:Boolean}
})

export const Garage=mongoose.model<Garage>("Garage",schema);