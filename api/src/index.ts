import express from 'express';
import { port } from './common/consts';

async function main() {
  const app: express.Application = express();

  app.use(express.json());
  app.disable('X-Powered-By');

  app.listen(port, () => {
    console.log(`\n🚀 Servidor iniciado com sucesso na porta ${port}`);
  });
}

main().catch((e) => console.error(e));
