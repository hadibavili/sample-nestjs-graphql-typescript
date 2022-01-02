import { Document } from "mongoose";

export interface BookInterface extends Document {
   readonly title: string;
   readonly author: string;
}

