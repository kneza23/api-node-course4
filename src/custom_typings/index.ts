export {};

declare global {
  namespace Express {
    interface Request {
      secretNest: string;
    }
  }
}
