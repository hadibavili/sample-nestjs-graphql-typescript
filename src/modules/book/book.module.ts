import { forwardRef, Module } from "@nestjs/common";
import { BookResolver } from "./book.resolver";
import { BookService } from "./book.service";
import { MongooseModule } from "@nestjs/mongoose";
import { BookModel, Book } from "./schemas/book.schema";
import { AuthorModule } from "modules/author/author.module";

@Module({
   imports: [
      forwardRef(() => AuthorModule),
      MongooseModule.forFeature([{ name: Book.name, schema: BookModel }]),
   ],
   providers: [BookResolver, BookService],
   exports: [BookService],
})
export class BookModule {}
