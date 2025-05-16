import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    console.log('New application from the form:');
    console.log({ name, email, message });

    return NextResponse.json({
      message: `Thank you for your interest, ${name}!`,
    });
  } catch (error) {
    console.error('Error...:', error);
    return NextResponse.json(
      { message: 'Error...' },
      { status: 500 }
    );
  }
}
