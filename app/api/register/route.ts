import bcrypt from "bcryptjs";

import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { name, username, email, password } = await req.json();

    const hashpassowrd: any = await bcrypt.hash(password, 12);

    if (!name || !username || !password || !email) {
      return NextResponse.json({ message: "Invalid Fields" });
    }
    await prisma.user.create({
      data: { name, email, username, password: hashpassowrd },
    });
    return NextResponse.json({ message: "User Created Successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const DELETE = async (req: NextRequest) => {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Invalid Id" });
  }
  await prisma.user.delete({ where: { id: id } });
  return NextResponse.json({ message: "User Deleted Successfully" });
};

export const PUT = async (req: NextRequest) => {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Invalid Id" });
  } else {
    const { name, username, email, password } = await req.json();
    if (!name || !username || !password || !email) {
      return NextResponse.json({ message: "Invalid Fields" });
    }
    const hashpassowrd: any = await bcrypt.hash(password, 12);
    await prisma.user.update({
      where: { id: id },
      data: { name, email, username, password: hashpassowrd },
    });
  }
  return NextResponse.json({ message: "User Updated Successfully" });
};

export const GET = async (req: NextRequest) => {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Invalid Id" });
  }
  const user = await prisma.user.findUnique({ where: { id: id } });
  return NextResponse.json(user);
};

export const GETALL = async (req: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};
