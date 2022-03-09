import mongoose, { Document, Schema} from "mongoose";

export interface Vehicle extends Document{
    brand:String,
    model:String,
    year:Date,
    enrollment:String,
}

