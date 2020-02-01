import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PhoneBookSchema } from './phonebook.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/springrain',{ useNewUrlParser: true, useUnifiedTopology: true}),
    MongooseModule.forFeature([{ name: 'phonebook', schema: PhoneBookSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
