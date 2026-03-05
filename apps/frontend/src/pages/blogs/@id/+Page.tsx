import type { ParsedPost } from "@mysite/shared";
import { useData } from "vike-react/useData";
import { DetailBlogCard } from "../../../components/DetailBlogCard";
import "../../../style.css";

const BlogDetail = () => {
  const post = useData<ParsedPost>();
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24">
      {post && <DetailBlogCard {...post} />}
    </div>
  );
};

export default BlogDetail;
