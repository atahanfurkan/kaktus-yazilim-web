import React from 'react';
import './Surec.css';
import { FiEdit3, FiCode, FiSend, FiTrendingUp } from 'react-icons/fi';

const Surec = () => {
  const adimlar = [
    {
      ikon: <FiEdit3 />,
      baslik: "Tasarlıyoruz.",
      aciklama: "Kullanıcıların kafasını karıştırmayan, kullanımı kolay ve şık ekranlar çiziyoruz. Amacımız uygulamayı açan herkesin aradığını saniyeler içinde bulması.",
      maddeler: ["UI/UX Araştırma", "Prototipleme"]
    },
    {
      ikon: <FiCode />,
      baslik: "Geliştiriyoruz.",
      aciklama: "Fikrini gerçeğe dönüştürürken en sağlam kodları yazıyoruz. Uygulaman hem takılmadan hızlı çalışıyor hem de her zaman güvende kalıyor.",
      maddeler: ["iOS & Android Dev", "Backend Mimari"]
    },
    {
      ikon: <FiSend />,
      baslik: "Yayınlıyoruz.",
      aciklama: "Uygulamanı sadece markete yüklemekle kalmıyor, doğru stratejilerle binlerce kişinin karşısına çıkmasını sağlıyoruz.",
      maddeler: ["Soft Launch", "ASO Optimizasyonu"]
    },
    {
      ikon: <FiTrendingUp />,
      baslik: "Büyütüyoruz.",
      aciklama: "Uygulama yayına girdikten sonra da yanındayız. Verileri inceliyor, eksikleri gideriyor ve kazancını artırmak için sürekli iyileştirmeler yapıyoruz.",
      maddeler: ["Kullanıcı Edinimi", "Gelir Artırma"]
    }
  ];

  return (
    <section className="surec-beyaz-alan">
      <div className="surec-konteynir">
        
        {/* Senin İstediğin O Başlık Bölümü */}
        <div className="surec-baslik-ust">
          <h2 className="surec-dev-baslik">
            Koddan Çözüme. <br />
            Hayalden Gerçeğe. <br />
            <span className="vurgulu-metin">Dijitalde İz Bırakın.</span>
          </h2>
        </div>

        {/* 4'lü Kutu Yapısı */}
        <div className="surec-izgara">
          {adimlar.map((adim, index) => (
            <div key={index} className="surec-kart-beyaz">
              <div className="surec-ikon-cerceve">{adim.ikon}</div>
              <h3 className="surec-kart-baslik">{adim.baslik}</h3>
              <p className="surec-kart-metin">{adim.aciklama}</p>
              <div className="surec-alt-maddeler">
                {adim.maddeler.map((madde, i) => (
                  <span key={i} className="surec-etiket">{madde}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Surec;