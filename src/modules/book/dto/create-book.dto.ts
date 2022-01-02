import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsMongoId } from "class-validator";

@InputType()
export class CreateBookDto {
   @IsString()
   @Field()
   readonly title: string;

   @IsString()
   @Field()
   @IsMongoId()
   readonly authorId: string;
}
