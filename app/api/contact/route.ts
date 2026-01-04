
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Simulate backend processing (database save, email sending)
        // In a real app, this is where you would connect to:
        // 1. A database (PostgreSQL via Prisma/Supabase) to save the inquiry
        // 2. An email service (Resend, SendGrid, Nodemailer) to notify you

        console.log('Received Contact Form Submission:', { name, email, message });

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
