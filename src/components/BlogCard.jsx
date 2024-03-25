import { Link } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg';


const BlogCard = ({blog}) => {
    const {cover_image,title,description,published_at,id} = blog
    return (
        <div>
            <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto  group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30" src={cover_image || placeHolderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{published_at}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>


    );
};

export default BlogCard;