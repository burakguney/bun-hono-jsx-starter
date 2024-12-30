import { RowDataPacket } from "mysql2";
import pool from "../db";

export const getAllBlogs = async () => {
    const [blogs] = await pool.query<RowDataPacket[]>("SELECT * FROM blog WHERE onay=1");
    return blogs;
}

export const getHomePageBlogs = async () => {
    const [blogs] = await pool.query<RowDataPacket[]>("SELECT * FROM blog WHERE anasayfa=1 AND onay=1");
    return blogs;
}

export const getAllCategories = async () => {
    const [categories] = await pool.query<RowDataPacket[]>("SELECT * FROM category");
    return categories;
}

export const getBlogById = async (id: number) => {
    const [blogs] = await pool.query<RowDataPacket[]>("SELECT * FROM blog WHERE blogid=? LIMIT 1", [id]);
    return blogs[0];
}