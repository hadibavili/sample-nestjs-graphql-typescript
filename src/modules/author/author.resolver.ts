import {
   Query,
   Resolver,
   ResolveProperty,
   Mutation,
   ResolveField,
   Parent,
   Args,
} from "@nestjs/graphql";
import { AuthorService } from "./author.service";
import { Author } from "./author.model";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { BookService } from "modules/book/book.service";
import { Book } from "../book/book.model";
import { UpdateAuthorDto } from './dto/update-book.dto';

@Resolver(of => Author)
export class AuthorResolver {
   constructor(
      private bookSerivce: BookService,
      private authorService: AuthorService
   ) {}
   @Query(returns => [Author])
   async authors() {
      return this.authorService.getAuthors();
   }

   @Query(returns => Author)
   async author(@Args({ name: "id", type: () => String }) id: string) {
      return this.authorService.getAuthor(id);
   }

   @Mutation(returns => Author)
   async createAuthor(@Args('body') body: CreateAuthorDto) {
      return await this.authorService.createAuthor(body);
   }


   @Mutation(returns => Author)
   async updateAuthor(@Args('body') body: UpdateAuthorDto) {
      return await this.authorService.updateAuthor(body);
   }

   @ResolveField("books", returns => [Book])
   async getAuthor(@Parent() author: Author) {
      return this.bookSerivce.getBooksByAuthorId(String(author._id));
   }
}
