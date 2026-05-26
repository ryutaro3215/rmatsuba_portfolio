import type { ParsedPost } from "@mysite/shared";
import { useData } from "vike-react/useData";
import { DetailBlogCard } from "../../../components/DetailBlogCard";
import "../../../style.css";

const BlogDetail = () => {
  const post = useData<ParsedPost>();
  return <div>{post && <DetailBlogCard {...post} />}</div>;
};

export default BlogDetail;
