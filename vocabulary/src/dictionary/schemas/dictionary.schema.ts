import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class WordPage extends Document {
  @Prop()
  word: {
    type: String,
    required: true,
    unique: true,
  };

  @Prop()
  wordPage: {
    type: JSON,
    required: true,
  }
}

export const WordPageSchema = SchemaFactory.createForClass(WordPage);
