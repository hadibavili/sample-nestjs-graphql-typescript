import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Author {
   @Prop({ required: true })
   name: string;

   @Prop({ required: true })
   age: number;
}

export const AuthorModel = SchemaFactory.createForClass(Author);

