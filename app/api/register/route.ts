import bcrypt from 'bcrypt'
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest){
    const body = await request.json();
    const { email, team, password } = body;

    if(!team || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await db.user.findUnique({
        where: {
            team
        }
    });

    if(exist) {
        throw new Error('Team already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
        data: {
            team,
            email,
            password,
            hashedPassword,
        }
    });

    return NextResponse.json(user)
}