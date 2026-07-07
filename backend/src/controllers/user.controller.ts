import { Request, Response } from "express";
import * as userService from "../services/user.service";

export async function getUsers(
  _req: Request,
  res: Response
) {
  try {
    const users = await userService.getUsers();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
}

export async function getUserById(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user",
    });
  }
}

export async function createUser(
  req: Request,
  res: Response
) {
  try {
    const user = await userService.registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create user",
    });
  }
}

export async function deleteUser(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    await userService.removeUser(req.params.id);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to delete user",
    });
  }
}