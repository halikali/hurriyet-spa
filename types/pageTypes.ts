type indexPageAttributesType = {
  news_title: string;
  news_content: String;
  category_name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  news_spot_text: string;
  news_image: any;
  ancestor: string;
  tags: string;
};

type newsType = {
  id: number;
  attributes: indexPageAttributesType;
};

type galleryDetailPageAttributesType = {
  category_name: string;
  updatedAt: string;
  createdAt: string;
  gallery_item_contents: gallerycontentType[];
  news_spot_text: string;
  news_title: string;
  tags: string;
};

type gallerycontentType = {
  gallery_text_content: string;
};

type newsDetailPageAttributesType = {
  category_name: string;
  createdAt: string;
  news_content: any;
  news_image: any;
  news_title: string;
  updatedAt: string;
  tags: string;
};

interface IIndexPageProps {
  news: newsType[];
}

interface IGalleryDetailPageProps {
  data: {
    attributes: galleryDetailPageAttributesType;
  };
}
interface INewsDetailPageProps {
  data: {
    attributes: newsDetailPageAttributesType;
  };
}

export type { IIndexPageProps, IGalleryDetailPageProps, INewsDetailPageProps };
