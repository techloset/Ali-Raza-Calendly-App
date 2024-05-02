import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const {
      name,
      image,
      welcome,
      language,
      dateFormat,
      timeFormat,
      country,
      timeZone,
    } = await req.json();

    await prisma.profile.create({
      data: {
        name,
        image,
        welcome,
        language,
        dateFormat,
        timeFormat,
        country,
        timeZone,
      },
    });
    return NextResponse.json({ message: "Profile Created Successfully" });
  } catch (error) {
    return NextResponse.json({
      message: "Error while Creating Profile",
      error,
    });
  }
};

// import { prisma } from "@/app/libs/prismadb";
// import { getServerSession, GetServerSessionOptions } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";

// export const POST = async (req: NextRequest) => {
//   try {
//     // Parse request body
//     const {
//       name,
//       image,
//       welcome,
//       language,
//       dateFormat,
//       timeFormat,
//       country,
//       timeZone,
//     } = await req.json();

//     // Retrieve session
//     const session = await getServerSession({ req } as GetServerSessionOptions);

//     // Extract user ID from session
//     const userId = session?.user?.id; // Adjust this based on your session structure

//     // Check if user ID is available
//     if (!userId) {
//       return NextResponse.json(
//         { message: "User not authenticated" },
//         { status: 401 }
//       );
//     }

//     // Create profile using the retrieved user ID
//     const createdProfile = await prisma.profile.create({
//       data: {
//         name,
//         image,
//         welcome,
//         language,
//         dateFormat,
//         timeFormat,
//         country,
//         timeZone,
//         userId,
//       },
//     });

//     return NextResponse.json({
//       message: "Profile Created Successfully",
//       profile: createdProfile,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { message: "Error creating profile" },
//       { status: 500 }
//     );
//   }
// };
