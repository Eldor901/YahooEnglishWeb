import { Injectable } from '@nestjs/common';
import { findWord } from './Interface/findWordInterface';
import { WordPage } from './schemas/dictionary.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DictionaryService {
  constructor(@InjectModel(WordPage.name) private WordPage) {
  }

  async findWord(searchWord: findWord): Promise<JSON>
  {
    const { findWord } = searchWord;

    let query = {word: findWord};

    return await this.WordPage.find(query)
  }

  async updateInfo(): Promise<string>
  {
    let query ={'wordPage.links': {$regex: 'version=1.2.4'}} ;
    let results = await this.WordPage.find(query);

    console.log(results.length);

  //  url.wordPage.links[links] =  url.wordPage.links[links].replace('version=1.2.2', 'version=1.2.4');


      for (let result in results) {
        for (let link in results[result].wordPage.links) {
          results[result].wordPage.links[link] = results[result].wordPage.links[link].replace('version=1.2.4', 'version=1.2.5');
        }

        for (let def in results[result].wordPage.definitions) {
          if (results[result].wordPage.definitions[def].phrases) {
            for (let phrase in results[result].wordPage.definitions[def].phrases) {

              if (results[result].wordPage.definitions[def].phrases[phrase].audios) {
                results[result].wordPage.definitions[def].phrases[phrase].audios =
                  results[result].wordPage.definitions[def].phrases[phrase].audios.replace('version=1.2.4', 'version=1.2.5');
              }
            }
          }
        }

        for (let morePhr in results[result].wordPage.morePhrases) {
          if (results[result].wordPage.morePhrases[morePhr].phrases)
          {
            for (let phrase in results[result].wordPage.morePhrases[morePhr].phrases) {

              if (results[result].wordPage.morePhrases[morePhr].phrases[phrase].audio)
              {
                results[result].wordPage.morePhrases[morePhr].phrases[phrase].audio =
                  results[result].wordPage.morePhrases[morePhr].phrases[phrase].audio.replace('version=1.2.4', 'version=1.2.5');
              }
            }
          }
        }

        await this.WordPage.updateOne({ _id: results[result].id }, { $set: results[result] });
      }

    console.log("finished");

    return "OK";
  }

}
