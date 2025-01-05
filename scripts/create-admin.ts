import { prismaClient } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv'; // load environment variables from .env.local

// load environment variables from .env.local
dotenv.config({path: '.env.local'});

// IIFE to create the admin user
(async () => {
    try {
        // grab credentials from .env.local
        const username = process.env.ADMIN_USERNAME as string;
        const password = process.env.ADMIN_PASSWORD as string;

        if (!username || !password) {
            throw new Error('Admin credentials not found');
        }

        // hash the password with a salt of length 10
        // salt is a random string of characters that is added to the password before hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        // upsert the admin user in the database
        // update password if the username already exists
        // else insert the new user and password
        const adminUser = await prismaClient.user.upsert({
            where: { username: username },
            update: { password: hashedPassword },
            create: { 
                username: username, 
                password: hashedPassword 
            },
        });

        console.log(`Admin user ${adminUser.username} created successfully`);
    } catch (error) {
        console.error(`Error creating admin user: ${error}`);
    } finally {
        // disconnect from the database if not in development mode
        if (process.env.NODE_ENV !== 'development') {
            await prismaClient.$disconnect();
        }
    }
})();
