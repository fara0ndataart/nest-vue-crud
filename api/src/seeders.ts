import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/user.model';
import { UsersSeeder } from './user/user.seed';

seeder({
    imports: [
        MongooseModule.forRoot("mongodb://localhost:27017/nest-vue-crud"),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
}).run([UsersSeeder]);
