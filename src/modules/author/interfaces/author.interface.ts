import { Document } from 'mongoose';

export interface AuthorInterface extends Document {
  readonly name: string;
  readonly age: string;
}