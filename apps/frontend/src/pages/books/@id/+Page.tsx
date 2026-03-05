import type { Book } from "@mysite/shared";
import { useData } from "vike-react/useData";
import DetailBookCard from "../../../components/DetailBookCard";
import "../../../style.css";

const BookDetail = () => {
  const book = useData<Book>();
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 pb-20">
      {book && <DetailBookCard {...book} />}
    </div>
  );
};

export default BookDetail;
