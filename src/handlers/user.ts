import { comparePasswords, createJWT, hashPassword } from "./../modules/auth";
import prisma from "../db";

export const createNewUser = async (req: any, res: any, next: any) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (error: any) {
    console.log(error);

    error.type = "input";
    next(error);
  }
};

export const signin = async (req: any, res: any, next: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    const isValid = await comparePasswords(
      req.body.password,
      user?.password as string
    );

    if (!isValid) {
      res.staus(401);
      res.json({ message: "nope" });
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (error: any) {
    error.type = "input";
    next(error);
  }
};

export const getUser = async (req: any, res: any) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      foundMarkers: true,
    },
  });
  res.json({ data: user });
};
