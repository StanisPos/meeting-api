import { Document } from 'mongoose';

export interface Message extends Document {
  readonly email: string;
  readonly message: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly createdAt: Date;
}
