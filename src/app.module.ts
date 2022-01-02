import { Module } from "@nestjs/common";
import { GraphQLModule, GqlModuleOptions } from "@nestjs/graphql";
import { AuthorModule } from "./modules/author/author.module";
import { MongooseModule } from "@nestjs/mongoose";
import { BookModule } from "./modules/book/book.module";
require("dotenv").config();

@Module({
   imports: [
      BookModule,
      AuthorModule,
      GraphQLModule.forRoot({
         installSubscriptionHandlers: true,
         autoSchemaFile: "schema.gql",
      } as GqlModuleOptions),
      MongooseModule.forRoot(process.env.MONGO_CONNECTION),
   ],
})
export class AppModule {}
