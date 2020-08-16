import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionaryController } from './dictionary.controller';
import { DictionaryService } from './dictionary.service';
import  {WordPage, WordPageSchema } from './schemas/dictionary.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: WordPage.name, schema: WordPageSchema}])],
  controllers: [DictionaryController],
  providers: [DictionaryService],
  exports: [],
})
export class DictionaryModule {}

