import { config } from 'dotenv';
config();

export const port = process.env['SERVER_PORT'] || 5000;
export const apiUrl =
  process.env['STACKOVERFLOW_API'] ||
  'https://api.stackexchange.com/2.2/questions?site=stackoverflow';
