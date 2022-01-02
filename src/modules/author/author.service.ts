import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { Author } from "./schemas/author.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthorInterface } from "./interfaces/author.interface";

@Injectable()
export class AuthorService {
   constructor(
      @InjectModel(Author.name) private authorModel: Model<AuthorInterface>
   ) {}
   async createAuthor({ name, age }): Promise<AuthorInterface> {
      const author = await new this.authorModel({ name, age }).save();
      return author;
   }

   async updateAuthor(body): Promise<AuthorInterface> {
      await this.authorModel.updateOne(
         { _id: body._id },
         { name: body.name, age: body.age }
      );
      const book = await this.authorModel.findOne({ _id: body._id });
      return book;
   }

   async getAuthors(): Promise<AuthorInterface[]> {
      return await this.authorModel.find();
   }

   async getAuthor(id: string): Promise<AuthorInterface> {
      const author = await this.authorModel.findById(id);
      return author;
   }
}
