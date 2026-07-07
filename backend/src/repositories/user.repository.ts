import prisma from "../config/prisma";
import type { CreateUserDto } from "../types/user.types";

export async function findAllUsers() {
  return prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findUserById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export async function createUser(data: CreateUserDto) {
  return prisma.user.create({
    data,
  });
}

export async function deleteUser(id: string) {
  return prisma.user.delete({
    where: {
      id,
    },
  });
}