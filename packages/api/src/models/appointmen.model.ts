import  mongoose, {Document, Schema} from "mongoose";

export interface Appointment extends Document{
    id_user: string;
    garageId: string;
    date: Date;
    modelCar: string;
    work: string;
}

const schema= new Schema({
    id_user:{
        type: String,
        required: true,
        trim:true,
    },
    garageId:{ type: String, required: true, trim:true},
    date:{type: Date, required:true},
    modelCar:{type: String, required:true},
    work:{type:String, required:true},

});

export const Appointment=mongoose.model<Appointment>("Appointment",schema);