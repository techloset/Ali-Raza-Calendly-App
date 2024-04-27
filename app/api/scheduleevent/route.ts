import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

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
// export const GET = async (req: NextRequest) => {
//   try {
//     await prisma.scheduledEvents.findMany(

//     )
//     return NextResponse.json({ message: "Event Created Successfully" });
//   } catch (error) {
//     return NextResponse.json({ message: "error" });
//   }
// };

export const GET = async (req: NextRequest) => {
  try {
    const events = await prisma.scheduledEvents.findMany();
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};
