import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type Post = {
    id: number,
    title: string,
    content: string,
    createdAt: Date,
};
