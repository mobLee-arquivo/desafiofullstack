import { Arg, Args, Ctx, Query, Resolver } from 'type-graphql';
import 'reflect-metadata';
import { Question } from '../types/question/Question';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import fetch from 'node-fetch';
import { apiUrl } from '../../common/consts';
import QuestionInput from '../input/question.input';

@Resolver()
export class QuestionsResolver {
  @Query(() => [Question])
  async fetchQuestions(@Args() { tag, limit, sort, score }: QuestionInput, @Ctx() ctx) {
    let url = `${apiUrl}?site=stackoverflow`;
    if (tag) url += `&tags=${tag}`;
    if (limit) url += `&limit=${limit}`;
    if (sort) url += `&sort=${sort}`;
    if (score) url += `&score=${score}`;
    //console.log(url);
    const apiResult = await fetch(url);
    if (!apiResult.ok) throw 'Erro ao acessar API';
    const { items } = await apiResult.json();
    return items;
  }

  @Query(() => Question, { nullable: true })
  async fetchQuestion(@Arg('question_id') questionId: string, @Ctx() ctx) {
    const apiResult = await fetch(`${apiUrl}/${questionId}?site=stackoverflow`);
    if (!apiResult.ok) throw 'Erro ao acessar API';
    return await apiResult.json();
  }
}
