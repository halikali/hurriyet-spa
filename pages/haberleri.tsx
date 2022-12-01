import { NextPage } from "next";
import { useRouter } from "next/router";

const Haberleri: NextPage = () => {
  const history = useRouter();

  typeof window && history.push({
    search: "deneme",
  });

  return <div>Haberleri</div>;
};

export default Haberleri;
