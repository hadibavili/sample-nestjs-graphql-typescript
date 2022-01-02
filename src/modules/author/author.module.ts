import { forwardRef, Module } from "@nestjs/common";
import { AuthorResolver } from "./author.resolver";
import { AuthorService } from "./author.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthorModel, Author } from "./schemas/author.schema";
import { BookModule } from "modules/book/book.module";
@Module({
   imports: [
      forwardRef(() => BookModule),
      MongooseModule.forFeature([{ name: Author.name, schema: AuthorModel }]),
   ],
   providers: [AuthorResolver, AuthorService],
   exports: [AuthorService],
})
export class AuthorModule {}
