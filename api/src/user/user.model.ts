import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    birthDate: Date;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    gender: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    state: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    pincode: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);