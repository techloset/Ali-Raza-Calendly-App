import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse, userAgent } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const availability = await prisma.availability.findMany();
    return NextResponse.json({
      message: "Posts fetched successfully",
      availability,
    });
  } catch (error: any) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

// export const POST = async (req: NextRequest) => {
//   try {
//     const { startingHour, endingHour, selectedDays, userId } = await req.json();

//     const response = await prisma.availability.create({
//       data: {
//         startingHour: startingHour,
//         endingHour: endingHour,
//         selectedDays: selectedDays,
//       },
//     });
//     console.log(response);

//     return NextResponse.json("Availability Added Successfully");
//   } catch (error) {
//     return NextResponse.json("Something went wrong while adding availability");
//   }
// };

// export const POST = async (request: NextRequest) => {
//   try {
//     const { startingHour, endingHour, selectedDays } = await request.json();
//     const data = await prisma.availability.createMany({
//       data: {
//         startingHour,
//         endingHour,
//         selectedDays,
//       },
//     });

//     return NextResponse.json({ data });
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// };
export const POST = async (request: NextRequest) => {
  try {
    const { startingHour, endingHour, selectedDays } = await request.json();
    const data = await prisma.availability.createMany({
      data: {
        userId: "userId",
        startingHour: parseInt(startingHour), // Convert to number
        endingHour: parseInt(endingHour), // Convert to number
        selectedDays,
      },
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

// export const GET = async (req: NextRequest) => {
//   try {
//     const availability = await prisma.availability.findMany();
//     console.log("availability", availability);
//     return NextResponse.json(availability);
//   } catch (error) {
//     return NextResponse.json("Something went wrong while adding availability");
//   }
// };
