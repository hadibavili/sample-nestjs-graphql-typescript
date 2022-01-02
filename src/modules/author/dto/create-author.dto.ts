import { IsString, IsNumber } from "class-validator";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAuthorDto {
   @Field()
   @IsString()
   name: string;

   @Field()
   @IsNumber()
   age: number;
}
