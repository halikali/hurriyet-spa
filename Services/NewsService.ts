import api from "../api";
import qs from "qs";

const getGalleryNews = async (category: string) => {
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        category_name: {
          $eq: category,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  let response: any = await api.get("gallery-details?" + query);

  return response;
};

const getNewsDetail = async (category: string) => {
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        category_name: {
          $eq: category,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  let response: any = await api.get("news-details?" + query);

  return response;
};

const getSingularNews = async (
  id: string,
  type: "news-details" | "gallery-details"
) => {
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        id: {
          $eq: id,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return await api.get(type + "?" + query);
};

export { getGalleryNews, getNewsDetail, getSingularNews };
