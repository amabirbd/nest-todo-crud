import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './modules/todos/todos.module';

import { ResourcesModule } from './resources/resources.module';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TodosModule, ResourcesModule, DatabaseModule, DatabaseModule,ConfigModule.forRoot({ isGlobal: true }),],
  controllers: [AppController],
  providers: [AppService, FirebaseAuthStrategy],
})
export class AppModule {}
