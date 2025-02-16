import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { BlogPost } from "./BlogPost";
import {useTranslation} from "react-i18next";

const Blog = () => {
    const { t } = useTranslation();
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get(
                    "https://dev.to/api/articles?username=yoan-gilliand&page=1&per_page=3"
                );
                setBlogPosts(response.data);
            } catch (err) {
                setError(t("blog.error"));
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    return (
        <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
            <div
                className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
            >
                {" "}
                <AnimatedWords2
                    title={t("blog.title")}
                    style={`flex max-w-[500px] pr-5 flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,155.04px)]`}
                />
                <AnimatedBody
                    text={t("blog.description")}
                    className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
                />
            </div>
            <div className="lg:w- [850px] grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-3 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1">
                {loading ? (
                    <p>{t("blog.loading")}</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    blogPosts.map((blog, index) => (
                        <BlogCard
                            key={blog.id}
                            {...blog}
                            available={true}
                            index={index}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default Blog;