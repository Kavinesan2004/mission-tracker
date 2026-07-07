import bcrypt from "bcrypt";
import * as userRepository from "../repositories/user.repository";
import type { CreateUserDto } from "../types/user.types";

const SALT_ROUNDS = 10;

export async function getUsers() {
  return userRepository.findAllUsers();
}

export async function getUserById(id: string) {
  return userRepository.findUserById(id);
}

export async function registerUser(data: CreateUserDto) {
  // Check if email already exists
  const existingUser = await userRepository.findUserByEmail(data.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

  // Save the user
  return userRepository.createUser({
    ...data,
    password: hashedPassword,
  });
}

export async function removeUser(id: string) {
  return userRepository.deleteUser(id);
}