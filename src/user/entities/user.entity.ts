import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';


@Schema({
    timestamps: true,
    toJSON: { virtuals: true},
    toObject: { virtuals: true }

})
export class User extends Document {

    @Prop({ required: true, unique: true })
    name: string;
    @Prop({ required: true, unique: true })
    email: string;  
    @Prop({ required: true })
    password: string;
    @Prop()
    age: number;
    @Prop()
    isActive: boolean;
}

import { SchemaFactory } from '@nestjs/mongoose';

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('enrollments', {
  ref: 'Enrollment',
  localField: '_id',
  foreignField: 'user',
});