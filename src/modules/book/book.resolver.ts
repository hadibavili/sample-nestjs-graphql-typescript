import {
   Query,
   Mutation,
   Resolver,
   ResolveField,
   Args,
   Parent,
   Info,
} from "@nestjs/graphql";
import { BookService } from "./book.service";
import { Book } from "./book.model";
import { Author } from "../author/author.model";
import { AuthorService } from "../author/author.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { forwardRef, Inject } from "@nestjs/common";

@Resolver(of => Book)
export class BookResolver {
   constructor(
      private bookService: BookService,
      private authorService: AuthorService
   ) {}

   @Query(returns => [Book])
   async books() {
      return this.bookService.getBooks();
   }
   @Query(returns => Book)
   async book(@Args({ name: "id", type: () => String }) id: string) {
      return this.bookService.getBook(id);
   }

   @Mutation(returns => Book)
   async createBook(@Args("body") body: CreateBookDto) {
      return this.bookService.createBook(body);
   }

   @Mutation(returns => Book)
   async updateBook(@Args("body") body: UpdateBookDto) {
      return this.bookService.updateBook(body);
   }

   @ResolveField("author", returns => Author)
   async getAuthor(@Parent() book: Book) {
      return this.authorService.getAuthor(String(book.author));
   }
}
