import ViewButtonUser from "../components/posts/ViewButtonUser";
import CardList from "../components/posts/cardlist";

const Posts = () => {
  return (
    <>
      <div className="text-blue-800">POSTINGAN PAGE POST</div>
      <CardList>
        <h1>Hello World!</h1>
        <p>AKU CINTA KAMU TYAAAAA SAYANG</p>
        <ViewButtonUser/>
      </CardList>
    </>
  );
};

export default Posts;
