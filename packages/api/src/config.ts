import dotenv from "dotenv";

dotenv.config();

const checkEnv = (envVar: string) => {
    if (!process.env[envVar]) {
        throw new Error(`Please define the Enviroment variable ${envVar}`);
    } else {
        return process.env[envVar] as string;
    }
};

export const PORT = (parseInt(checkEnv('PORT'))) as number
export const DB_URL = checkEnv('DB_URL') as string