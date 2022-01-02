import { IsString, IsNumber, IsMongoId } from "class-validator";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateAuthorDto {
   @Field()
   @IsString()
   @IsMongoId()
   _id: string;

   @Field()
   @IsString()
   name: string;

   @Field()
   @IsNumber()
   age: number;
}
