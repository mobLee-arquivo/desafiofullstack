import { Field, ArgsType } from 'type-graphql';
import 'reflect-metadata';

@ArgsType()
class QuestionInput {
  @Field((type) => String)
  tag!: string;

  @Field((type) => String)
  sort?: string;

  @Field((type) => String)
  limit?: string;

  @Field((type) => String)
  score?: string;
}

export default QuestionInput;
