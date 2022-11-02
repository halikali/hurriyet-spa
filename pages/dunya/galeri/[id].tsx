import { NextPage } from "next";
import Image from "next/image";

import Breadcrumb from "components/shared/Breadcrumb/Breadcrumb";
import DetailPageTagList from "components/shared/DetailPageTagList/DetailPageTagList";
import NewsTitle from "components/shared/NewsTitle/NewsTitle";
import style from "styles/pages/CategoryPage.module.css";

const DunyaGalleryDetailPage: NextPage = () => {
  return (
    <main className={"main main--category"}>
      <div className={"wrapper"}>
        <Breadcrumb category="dünya" />
        <NewsTitle
          title="'Tek gerçek kraliçe'nin kararı oğlunu çok kızdırdı: 'Babaanneleri
unvanlarını alıp çocuklarıma zarar verdi'"
          updatedDate="Güncelleme Tarihi: Eylül 29, 2022 17:00"
        />
        <DetailPageTagList />
        <div className={style.pageContent}>
          <div className={style.newsWrapper}>
            <div className={style.newsInfo}>
              <span className={style.authorName}>John Doe, JDH</span>
              <span className={style.createTime}>
                Oluşturulma Tarihi: Eylül 29, 2022 11:22
              </span>
            </div>
            <h2 className={style.h2}>
              {`KYK borcu sorgulama ekranı, Kabine Toplantısı'nda alınan kararın ardından gündeme geldi. Gençlik ve Spor Bakanı Kasapoğlu'nun açıklamaları ile gündeme gelen KYK borcu faizleri ile ilgili Cumhurbaşkanı Erdoğan, "Kredi geri ödemelerinin herhangi bir enflasyon farkı veya faiz uygulaması olmaksızın sadece alınan kredi rakamı üzerinden yapılmasını kararlaştırdık." dedi. KYK faiz silme kararı sonrası üniversite eğitimlerinde kredi alanlar borçlarını hesaplamaya başladı. KYK borç bilgilerini e Devlet ekranı üzerinden öğrenilecek. Peki, KYK kredi borcu nasıl hesaplanır? İşte, KYK borcu hesaplama ve sorgulama ile ilgili bilgiler.`}
            </h2>
            <div className="content">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className={style.newsCard} key={index}>
                  <Image
                    key={index}
                    src={
                      "https://i4.hurimg.com/i/hurriyet/75/0x0/62d70f1267b0a9386cdd0908.jpg"
                    }
                    alt={
                      "KYK borcu nasıl ve nereden hesaplanır e- Devlet KYK kredi borcu sorgulama ve öğrenme ekranı 2022"
                    }
                    title={
                      "KYK borcu nasıl ve nereden hesaplanır e- Devlet KYK kredi borcu sorgulama ve öğrenme ekranı 2022"
                    }
                    width={160}
                    height={90}
                    layout={"responsive"}
                  />
                  <span className={style.counter}>1 / 6</span>
                  <p className={style.galleryBodyText}>
                    {`KYK kredi borcu hesaplamaları faiz silme kararı ile hız kazandı. Ekonomiye yönelik çalışmalar tüm hızıyla sürerken, Cumhurbaşkanı Erdoğan, KYK kredi borçları hakkında faiz uygulamasının kaldırıldığını ve sadece ana paranın ödeneceğini söyledi. KYK borcu bulunan vatandaşlar borç hesaplamalarını e Devlet üzerinden sorgulayarak öğrenecekler. KYK kredi borcu e Devlet internet sitesinden, "Öğrenim / Katkı Kredisi Geri Ödeme Sorgulama" ekranı üzerinden T.C kimlik numarası ve e Devlet şifresi ile sorgulanabiliyor.`}
                  </p>
                </div>
              ))}
            </div>
            <div className={style.newsMore}>
              <p className={style.newsMoreText}>
                Haberlerle ilgili daha fazlası:
              </p>
              <DetailPageTagList />
            </div>
          </div>
          <aside className={style.aside}></aside>
        </div>
      </div>
    </main>
  );
};

export default DunyaGalleryDetailPage;
