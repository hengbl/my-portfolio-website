import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    } 
    return true;
};

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message =  error.message
    } else if (error && typeof error === "object" && 'message' in error) {
        message = String(error.message);
    } else if (typeof error === "string"){
        message = error;
    } else {
        message = "Something went wrong";
    }
    
    return message;
}

export const getUserSession = async () => {
    const session = await getServerSession(authOptions);
    return session;
}

export const isLoggedIn = async () => {
    const session = await getUserSession();
    return (session !== null);
}

/**
 * Define all fetch actions here 
 * Note that we can only use these inside client component
 */

export async function createPost(title: string, content: string) {
    return fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
    }).then(res => {
        if (!res.ok) return Promise.reject(new Error('Failed to create post'));
        return res;
    });
}

export async function getAllPosts() {
    return fetch('/api/post', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(res => {
        if (!res.ok) return Promise.reject(new Error('Failed to fetch all posts'));
        return res.json();
    });
}