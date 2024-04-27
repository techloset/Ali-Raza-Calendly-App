// import { prisma } from "@/app/libs/prismadb";
// import { NextResponse } from "next/server";

import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

// export const POST = async (req: Request) => {
//   try {
//     const { name, email, textArea, timezone, selectedTime, formatDate } =
//       await req.json();

//     if (!name || !email || !textArea) {
//       return NextResponse.json({ message: "Invalid Fields" });
//     }
//     await prisma.scheduledEvents.create({
//       data: { name, email, textArea, timezone, selectedTime, formatDate },
//     });
//     return NextResponse.json({ message: "Event Created Successfully" });
//   } catch (error) {
//     return NextResponse.json({ message: "Something went wrong in the server" });
//   }
// };

// import { prisma } from "@/app/libs/prismadb";
// import { NextResponse } from "next/server";

// export const POST = async (req: Request) => {
//   try {
//     const { name, email, textArea, timezone, selectedTime, formatDate } =
//       await req.json();

//     if (!name || !email || !textArea) {
//       return NextResponse.json({
//         message: "Name, email, and textArea are required",
//       });
//     }

//     await prisma.scheduledEvents.create({
//       data: { name, email, textArea, timezone, selectedTime, formatDate },
//     });

//     return NextResponse.json({ message: "Event Created Successfully" });
//   } catch (error) {
//     console.error("Error occurred:", error);
//     return NextResponse.json({ message: "Something went wrong in the server" });
//   }
// };

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, textArea, timezone, selectedTime, formatDate } =
      await req.json();
    await prisma.scheduledEvents.create({
      data: {
        name,
        email,
        textArea,
        timezone,
        selectedTime,
        formatDate,
      },
    });
    return NextResponse.json({ message: "Event Created Successfully" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};
export const GET = async (req: NextRequest) => {
  try {
    await prisma.scheduledEvents.findMany();
    return NextResponse.json({ message: "Event Created Successfully" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};
