// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/v1/Authors': (req: Request, res: Response) => {
    res.status(200).send({});
  },
  'POST /api/v1/Authors': (req: Request, res: Response) => {
    res.status(200).send({});
  },
  'GET /api/v1/Authors/authors/books/:idBook': (req: Request, res: Response) => {
    res.status(200).send({});
  },
  'GET /api/v1/Authors/:id': (req: Request, res: Response) => {
    res.status(200).send({});
  },
  'PUT /api/v1/Authors/:id': (req: Request, res: Response) => {
    res.status(200).send({});
  },
  'DELETE /api/v1/Authors/:id': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
