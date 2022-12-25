import { NextPage } from "next";
import { searchNews } from "Services/NewsService";

export async function getServerSideProps(context: any) {
  const searchQuery = context.params.query;
  let res = null;

  try {
    res = await (await searchNews(searchQuery).then((item) => item.map(a => a.data))).flat();
    console.log("res", res);
  } catch (error: any) {}

  return {
    props: { news: searchQuery },
  };
}
const Haberleri: NextPage = ({ news }: any) => {
  return <div>Haberleri </div>;
};

export default Haberleri;
