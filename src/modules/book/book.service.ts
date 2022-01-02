import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookInterface } from "./interfaces/book.interface";
import { CreateBookDto } from "./dto/create-book.dto";
import { Book } from "./book.model";
import { Types } from "mongoose";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BookService {
   constructor(
      @InjectModel(Book.name) private bookModel: Model<BookInterface>
   ) {}
   async getBooks() {
      return await this.bookModel.find().exec();
   }

   async getBooksByAuthorId(id: string) {
      return await this.bookModel.find({ author: id }).exec();
   }

   async getBook(id: string) {
      const book = await this.bookModel.findOne({ _id: id }).exec();
      return book;
   }

   async getAuthor() {
      return {};
   }

   async updateBook(body: UpdateBookDto) {
      await this.bookModel.updateOne(
         { _id: body._id },
         { title: body.title, author: body.authorId }
      );
      const book = await this.bookModel.findOne({ _id: body._id });
      return book;
   }

   async createBook(body: CreateBookDto): Promise<BookInterface> {
      const book = await new this.bookModel({
         title: body.title,
         author: body.authorId,
      }).save();
      return book;
   }
}
