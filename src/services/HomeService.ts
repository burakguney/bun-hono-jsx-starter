import * as blogRepository from "../repository/HomeRepository";

export const getAllBlogs = async () => {
    const blogs = await blogRepository.getAllBlogs();
    const categories = await blogRepository.getAllCategories();
    return {
        blogs,
        categories
    };
}

export const getHomePageBlogs = async () => {
    const blogs = await blogRepository.getHomePageBlogs();
    const categories = await blogRepository.getAllCategories();
    return {
        blogs,
        categories
    };
}

export const getBlogById = async (id: number) => {
    const blog = await blogRepository.getBlogById(id);
    return {
        blog,
    }
}