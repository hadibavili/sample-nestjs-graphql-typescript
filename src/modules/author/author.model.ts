import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Author {
   @Field(type => String)
   _id: string;

   @Field({ nullable: true })
   name?: string;

   @Field({ nullable: true })
   age?: string;
}
