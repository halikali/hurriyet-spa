import api from "../api";
import qs from "qs";
import { AreaToEppear } from "enums";

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

const getNewsForAppearanceArea = async (areaName: AreaToEppear) => {
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        area_to_appear: {
          area_name: {
            $eq: areaName,
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const galleryNews = await api.get("gallery-details" + "?" + query);
  const newsDetails = await api.get("news-details" + "?" + query);
  const news = [galleryNews.data, newsDetails.data].flat();

  return news;
};

const searchNews = async (searchQuery: string | undefined) => {
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        news_title: {
          $containsi: searchQuery,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const galleryNews = await api.get("gallery-details" + "?" + query);
  const newsDetails = await api.get("news-details" + "?" + query);
  const news = [galleryNews.data, newsDetails.data].flat();
  return news;
};

export {
  getGalleryNews,
  getNewsDetail,
  getSingularNews,
  getNewsForAppearanceArea,
  searchNews,
};
