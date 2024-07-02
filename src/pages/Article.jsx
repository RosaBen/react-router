import { useParams } from "react-router-dom";
export default function Article() {
  const { id } = useParams();
  return (
    <>
      <h2>Article {id}</h2>
    </>
  );
}
