import { NextResponse } from "next/server";
import { ApiError } from "@/lib/errors/apiError.js";

export function handleApiError(error) {
  console.error("API Error:", error);

  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: error.statusCode,
      },
    );
  }

  return NextResponse.json(
    {
      error: "Something went wrong while processing your request",
    },
    {
      status: 500,
    },
  );
}
