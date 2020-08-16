import { IsNotEmpty, IsString } from 'class-validator';

export class FindWordDictionaryDto {
  @IsString()
  @IsNotEmpty()
  findWord: string
}
