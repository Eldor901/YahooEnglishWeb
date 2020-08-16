import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/midleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionaryController } from './dictionary/dictionary.controller';
import { DictionaryModule } from './dictionary/dictionary.module';
import  config from './config/keys';

@Module({
  imports: [CatsModule, MongooseModule.forRoot(config.mongoURI), DictionaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
