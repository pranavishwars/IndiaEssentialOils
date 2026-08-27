import { NextResponse } from "next/server";
import { calculatePopularityScores } from "@/lib/scoring";

export async function GET() {
  const result = await calculatePopularityScores();
  return NextResponse.json({
    message: "Popularity scores successfully recalculated across catalog",
    ...result,
  });
}

export async function POST() {
  const result = await calculatePopularityScores();
  return NextResponse.json({
    message: "Popularity scores successfully recalculated across catalog",
    ...result,
  });
}
