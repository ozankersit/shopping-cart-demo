import { NextResponse } from "next/server";
import products from "@/lib/products.json"

export async function GET() {
    return NextResponse.json(products, { status: 200 });
}