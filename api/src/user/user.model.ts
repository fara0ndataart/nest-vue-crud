import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
import { Factory } from 'nestjs-seeder';

@Schema()
export class User {
    @Factory(faker => faker.person.firstName())
    @Prop({ required: true })
    firstName: string;

    @Factory(faker => faker.person.lastName())
    @Prop({ required: true })
    lastName: string;

    @Factory(faker => faker.date.past().toISOString())
    @Prop({ required: true })
    birthDate: Date;

    @Factory(faker => faker.internet.email())
    @Prop({ required: true, unique: true })
    email: string;

    @Factory(faker => faker.helpers.arrayElement(['male', 'female']))
    @Prop({ required: true })
    gender: string;

    @Factory(() => 'US')
    @Prop({ required: true })
    country: string;

    @Factory(faker => faker.helpers.arrayElement(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']))
    @Prop({ required: true })
    state: string;

    @Factory(faker => faker.helpers.arrayElement(['Buffalo', 'Rochester', 'Yonkers', 'Syracuse',  'Albany']))
    @Prop({ required: true })
    city: string;

    @Factory(faker => faker.location.streetAddress())
    @Prop({ required: true })
    address: string;

    @Factory(faker => faker.finance.accountNumber(5))
    @Prop({ required: true })
    pincode: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.plugin(paginate);


