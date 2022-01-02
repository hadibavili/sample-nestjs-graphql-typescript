import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsMongoId } from "class-validator";

@InputType()
export class UpdateBookDto {
   @IsString()
   @Field()
   @IsMongoId()
   readonly _id: string;

   @IsString()
   @Field()
   readonly title: string;

   @IsString()
   @Field()
   @IsMongoId()
   readonly authorId: string;
}
