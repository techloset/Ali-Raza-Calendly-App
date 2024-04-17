import bcrypt from "bcryptjs";

import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { name, username, email, password } = await req.json();
    const hashpassowrd = await bcrypt;
    if (!name || !username || !password || !email) {
      return NextResponse.json({ message: "Invalid Fields" });
    }
    await prisma.user.create({ data: { name, email, username, password } });
    return NextResponse.json({ message: "User Created Successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
