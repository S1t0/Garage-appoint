import mongoose, { Schema, Document } from "mongoose";
import { updateLanguageServiceSourceFile } from "typescript";
import { DB_URL } from "./config"
import{Appointment} from "./models/appointmen.model",
import { Garage } from "./models/garage.model";
import { Vehicle } from "./models/vehicle.model";


const createAppointment =async () => {
    await Appointment.create({
        
    })
    
}