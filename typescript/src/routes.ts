import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'carlos@gmail.com',
    password: '14314124312',
    techs: [
      'Node.js',
      'React',
      'React Native',
      { title: 'Javascript', experience: 100 }
    ]
  });

  console.log(user.email)

  return response.json({ message: 'Hello World' });
}