import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({ timestamps: true })
export class Book {
   @Prop({ required: true })
   title: string;

   @Prop({ type: Types.ObjectId, ref: "Author" })
   author: string;
}

export const BookModel = SchemaFactory.createForClass(Book);
