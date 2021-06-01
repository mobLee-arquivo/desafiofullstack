import { Field, ObjectType } from 'type-graphql';
import 'reflect-metadata';
import { Owner } from './Owner';

@ObjectType()
export class Question {
  @Field()
  title!: string;

  @Field()
  link!: string;

  @Field()
  question_id!: number;

  @Field((type) => [String])
  tags!: string[];

  @Field((type) => Owner)
  owner!: Owner;
}
