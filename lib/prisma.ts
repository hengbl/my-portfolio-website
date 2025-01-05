import { PrismaClient } from "@prisma/client";

// initialise a global object in node.js or browser
// that will store the PrismaClient instance
const prismaGlobalObject = globalThis as { prisma?: PrismaClient };

// create a singleton instance of PrismaClient if not already created
export const prismaClient = prismaGlobalObject.prisma || new PrismaClient();

// if in development mode, assign the prismaClient instance to the global object
if (process.env.NODE_ENV === 'development') {
    prismaGlobalObject.prisma = prismaClient;
}
