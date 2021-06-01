import 'reflect-metadata';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Owner {
  @Field()
  reputation!: number;

  @Field()
  user_id!: number;

  @Field()
  user_type!: string;

  @Field()
  profile_image!: string;

  @Field()
  display_name!: string;

  @Field()
  link!: string;
}
