// app/api/sales/route.ts
import { NextResponse } from 'next/server';
import { salesData } from '@/data/sale';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get('year');
  const year = yearParam ? parseInt(yearParam) : 2024;

  const entry = salesData.find((item) => item.year === year);
  const sales = entry ? entry.sales : [];

  return NextResponse.json({ sales });
}
