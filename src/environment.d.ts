declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;

      DB_NAME: string;
      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_PASS: string;
    }
  }
}

export {}
