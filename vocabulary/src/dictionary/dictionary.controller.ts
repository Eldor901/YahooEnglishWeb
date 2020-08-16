import { Body, Controller, Get, Post , Put } from '@nestjs/common';
import  {FindWordDictionaryDto} from './dto/findword-dictionary.dto'
import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {
  constructor(private dictionaryService : DictionaryService) {

  }

  @Post()
  async findWord(@Body() findWordDictionaryDto: FindWordDictionaryDto): Promise<JSON>{
    return this.dictionaryService.findWord(findWordDictionaryDto)
  }


   @Put()
   async updateInfo(): Promise<string>{
      return this.dictionaryService.updateInfo();
   }
}
