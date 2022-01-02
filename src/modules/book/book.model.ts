import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "../author/author.model";

@ObjectType()
export class Book {
   @Field(type => String)
   _id: string;

   @Field({ nullable: true })
   title?: string;

   @Field(type => Author, { nullable: true })
   author: Author;
}
