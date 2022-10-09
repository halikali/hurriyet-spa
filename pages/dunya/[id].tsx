import { NextPage } from "next";
import Image from "next/image";

import Breadcrumb from "components/shared/Breadcrumb/Breadcrumb";
import DetailPageTagList from "components/shared/DetailPageTagList/DetailPageTagList";
import VerticalNewsCard from "components/shared/NewsCard/VerticalNewsCard";
import NewsTitle from "components/shared/NewsTitle/NewsTitle";
import style from "styles/pages/CategoryPage.module.css";

const DunyaDetailPage: NextPage = () => {
  return (
    <div>
      <main className={"main main--category"}>
        <div className={"wrapper"}>
          <Breadcrumb />
          <NewsTitle
            title="'Tek gerçek kraliçe'nin kararı oğlunu çok kızdırdı: 'Babaanneleri unvanlarını alıp çocuklarıma zarar verdi'"
            updatedDate="Güncelleme Tarihi: Eylül 29, 2022 17:00"
          />
          <DetailPageTagList />
          <div className={style.pageContent}>
            <div className={style.newsWrapper}>
              <div>
                <Image
                  src={
                    "https://i4.hurimg.com/i/hurriyet/75/424x282/63359c554e3fe113fc195012.jpg"
                  }
                  alt={"Tek gerçek kraliçenin kararı oğlunu çok kızdırdı"}
                  title={"Tek gerçek kraliçenin kararı oğlunu çok kızdırdı"}
                  width={160}
                  height={90}
                  layout={"responsive"}
                />
                <div className={style.newsInfo}>
                  <span className={style.authorName}>John Doe, JDH</span>
                  <span className={style.createTime}>
                    Oluşturulma Tarihi: Eylül 29, 2022 11:22
                  </span>
                </div>
              </div>
              <div className="content">
                {` Bütün dünya Danimarka kraliyet ailesinde yaşanan büyük değişimle
                şoke oldu. Son yıllarda İsveç kraliyet ailesinde yaşanan
                'küçültme operasyonu' bu konunun çok da sık gündeme gelmediği
                Danimarka kraliyet sarayında yaşandı. Kraliçe 2. Margrethe,
                veliaht olmayan ve taht sırasında da arka sıralarda yer alan
                dört torununun unvanlarını ellerinden aldı. Karar, 1 Ocak 2023
                gününden itibaren yürürlüğe girecek. 'TEK GERÇEK KRALİÇE' OLARAK
                NİTELENDİRİLİYOR İngiltere Kraliçesi 2. Elizabeth'in ölümünden
                sonra "dünyada kan bağı yoluyla tahta geçen tek kraliçe" olarak
                bilinen Danimarka Kraliçesi 2. Margrethe, küçük oğlu Prens
                Joachim'in her iki evliliğinden dünyaya gelen dört çocuğunun
                "prens", "prenses" ve "ekselansları" unvanlarını ellerinden
                aldı. Kraliçe'nin bu kararına şu ana kadar aileden iki kişiden
                tepki geldi. Biri çocukların babası ve Kraliçe'nin küçük oğlu
                Prens Joachim, diğeri de iki büyük oğlunun annesi olan eski eşi
                Alexandra.'BANA FARKLI BİR PLAN SUNULMUŞTU' Daha önce bu
                karardan geçtiğimiz mayıs ayında haberi olduğu belirtilen Prens
                Joachim, konuyla ilgili bir açıklama yaptı. Annesinin,
                çocuklarının taşıdığı unvanları ellerinden alacağını mayıs
                ayında değil de sadece beş gün önce öğrendiğini söyledi Prens
                Joachim. Mayıs ayında kendisine sunulan planın bambaşka olduğunu
                sözlerine ekledi.'ÇOCUKLARIMA, BABAANNELERİ TARAFINDAN ZARAR
                VERİLDİ' Danimarka'da yayınlanan Ekstra Bladet'e konuşan Joachim
                "Hepimiz çok üzgünüz. Çocuklarınızın böyle zarar görmesini
                izlemek hiç eğlenceli değil. Dört çocuğum da anlamadıkları bir
                durumun içine konuldular" dedi. Joachim, çocuklarına zarar veren
                kişinin ise babaanneleri olduğunu belirtti.'ÇOCUKLARIMA ANLATMAK
                İÇİN SADECE BEŞ GÜNÜM VARDI' Kardeşi Veliaht Prens Frederik ve
                eşi Mary ile yaşadıkları anlaşmazlık nedeniyle eşi Marie ve dört
                çocuğuyla birlikte Fransa'ya taşınan Prens Joachim, annesi
                Kraliçe 2. Margrethe'nin bu kararını, Paris'teki Danimarka
                Elçiliği önünde yaptığı açıklamayla değerlendirdi. Kraliçe 2.
                Margrethe'nin küçük oğlu olan 53 yaşındaki Joachim "Bu kararı
                çocuklarıma bildirmem gerektiği bana sadece beş gün önce
                söylendi. Bana mayıs ayında, çocukların her biri 25 yaşına
                geldiğinde gerçekleşecek bir plan sunuldu. Bu son durumu
                çocuklarıma anlatmam için sadece beş günüm vardı" diye konuştu.`}
              </div>
              <div className={style.newsMore}>
                <p className={style.newsMoreText}>
                  Haberlerle ilgili daha fazlası:
                </p>
                <DetailPageTagList />
              </div>
            </div>
            <aside className={style.aside}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={style.cardWrapper}>
                  <VerticalNewsCard />
                </div>
              ))}
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DunyaDetailPage;
