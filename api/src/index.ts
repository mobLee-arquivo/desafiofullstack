import express from 'express';
import { QuestionsResolver } from './graphql/resolvers/question';
import { buildSchema } from 'type-graphql';
import { ApolloServer, ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { port } from './common/consts';

async function main() {
  const app: express.Application = express();

  app.use(express.json());
  app.disable('X-Powered-By');

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [QuestionsResolver],
    }),
    context: ({ req, res }: ExpressContext) => ({ res, req }),
    introspection: true,
    playground: true,
  });

  app.listen(port, () => {
    console.log(`\n🚀 Servidor iniciado com sucesso na porta ${port}`);
  });

  apolloServer.applyMiddleware({ app });
}

main().catch((e) => console.error(e));
