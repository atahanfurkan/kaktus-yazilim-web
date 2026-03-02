import React from 'react';
import './Yorumlar.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Yorumlar = () => {
  const yorumListesi = [
    {
      id: 1,
      isim: "Caner Özkan",
      rol: "Proje Yöneticisi",
      yorum: "Süreç boyunca iletişim çok akıcıydı. Özellikle dijital dönüşüm konusundaki yaklaşımları projemize büyük değer kattı. Kesinlikle tavsiye ederim.",
      yildiz: 5
    },
    {
      id: 2,
      isim: "Selin Yılmaz",
      rol: "Kurucu Ortak",
      yorum: "İnovasyon odaklı çözümleri sayesinde iş süreçlerimizi hızlandırdık. Küresel standartlarda bir iş disipliniyle karşılaştık, çok memnunuz.",
      yildiz: 5
    },
    {
      id: 3,
      isim: "Mert Demir",
      rol: "Teknoloji Direktörü",
      yorum: "Karmaşık projeleri bile basit ve etkili çözümlerle sonuçlandıran bir ekip. Teknik yetkinlikleri ve çözüm odaklı olmaları bizi çok etkiledi.",
      yildiz: 5
    },
    {
      id: 4,
      isim: "Yiğit Emre Temizkan",
      rol: "CEO",
      yorum: "Başarı odaklı çalışmaları sayesinde projemizi tam zamanında ve beklediğimizden daha yüksek kalitede teslim aldık. Teşekkürler!",
      yildiz: 5
    },
    {
      id: 5,
      isim: "Arda Güler",
      rol: "Girişimci",
      yorum: "Global vizyonu olan, her aşamada destek veren harika bir iş ortağı. Güçlü referanslarını neden hak ettiklerini projede bizzat gördük.",
      yildiz: 5
    },
    {
        id : 6,
        isim : "Kaan Temizkan",
        rol: "Pazarlamacı",
        yorum: "Başlangıçtan teslimata kadar her aşamada profesyonelliği hissettik. Sektördeki deneyimlerini bizim vizyonumuzla harmanlayıp Google yorumlarında okuduğumuz o başarı hikayelerinden birini de bize yaşattılar.",
        yildiz: 4
    }
  ];

  return (
    <section className="yorumlar-alani">
      <div className="yorumlar-konteynir">
        
        {/* İstediğin Vurucu Başlık Alanı */}
        <div className="yorum-ust-baslik">
          <h2 className="yorum-dev-baslik">
            Mutlu Müşteri Deneyimleri. <br />
            Güvenle Büyüyen İşler. <br />
            <span className="yesil-vurgu">Yüzlerdeki Tebessüm Referansımızdır.</span>
          </h2>
          <p className="yorum-spot">
            İş ortaklarımızın Google üzerinde paylaştığı samimi geri bildirimler ve başarı dolu yolculuklarımız.
          </p>
        </div>

        <div className="yorum-kart-izgarasi">
          {yorumListesi.map((item) => (
            <div key={item.id} className="yorum-karti">
              <div className="yorum-ikon-sarici">
                <FaQuoteLeft className="quote-ikon" />
                <div className="yildiz-grubu">
                  {[...Array(item.yildiz)].map((_, i) => (
                    <FaStar key={i} className="yildiz-ikon" />
                  ))}
                </div>
              </div>
              <p className="yorum-metni">"{item.yorum}"</p>
              <div className="yorum-alt-bilgi">
                <div className="avatar-gecici">{item.isim.charAt(0)}</div>
                <div>
                  <h4 className="musteri-ismi">{item.isim}</h4>
                  <span className="musteri-rol">{item.rol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="yorum-buton-alani">
          <button className="google-yorum-butonu">
            Tüm Google Yorumlarımızı Görün
          </button>
        </div>
      </div>
    </section>
  );
};

export default Yorumlar;