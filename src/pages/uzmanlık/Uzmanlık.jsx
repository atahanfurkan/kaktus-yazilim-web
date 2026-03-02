import React from 'react';
import './Uzmanlık.css';
import { FiLayout, FiSearch, FiGlobe, FiCpu, FiShoppingCart, FiSettings, FiArrowRight } from 'react-icons/fi';

const Uzmanlık = () => {
  const hizmetler = [
    {
      ikon: <FiLayout />,
      baslik: "İnovatif Deneyim Tasarımı",
      metin: "Kullanıcı merkezli bir yaklaşımla, markanızın dijital kimliğini estetik ve işlevsellikle birleştiriyoruz. Sadece bir arayüz değil, akılda kalıcı dijital yolculuklar tasarlıyoruz."
    },
    {
      ikon: <FiSearch />,
      baslik: "Veri Odaklı Büyüme & Strateji",
      metin: "Akıllı analizler ve stratejik optimizasyonlarla dijital görünürlüğünüzü artırıyoruz. Veriyi anlamlandırarak pazar payınızı ve kullanıcı etkileşiminizi zirveye taşıyoruz."
    },
    {
      ikon: <FiGlobe />,
      baslik: "Dijital Marka Kimliği & Dönüşüm",
      metin: "Şirketinizin vizyonunu ve güvenilirliğini dijital dünyaya profesyonel bir çizgide yansıtıyoruz. Kurumsal değerlerinizi modern teknolojiyle buluşturan prestijli çözümler sunuyoruz."
    },
    {
      ikon: <FiCpu />,
      baslik: "İleri Nesil Yazılım Mühendisliği",
      metin: "Karmaşık iş süreçlerinizi, modern mimariler ve temiz kod prensipleriyle yönetilebilir hale getiriyoruz. Ölçeklenebilir, güvenli ve performans odaklı yazılım çözümleri inşa ediyoruz."
    },
    {
      ikon: <FiShoppingCart />,
      baslik: "Dijital Ticaret Ekosistemleri",
      metin: "Satış süreçlerinizi hızlandıran, kullanıcı dostu ve güvenli ödeme altyapılarına sahip online mağaza deneyimleri yaratıyoruz. Ticaretinizi sınırların ötesine taşıyoruz."
    },
    {
      ikon: <FiSettings />,
      baslik: "Bulut Altyapı & Süreklilik Yönetimi",
      metin: "Mevcut sistemlerinizin performansını optimize ediyor, esnek ve güvenli bulut çözümleriyle iş sürekliliğinizi sağlıyoruz. Teknik desteğimizle dijital varlıklarınızı her zaman güncel tutuyoruz."
    }
  ];

  return (
    <section className="uzmanlik-sayfasi">
      <div className="uzmanlik-baslik-grubu">
        <h2 className="ana-baslik">Uzmanlıklarımız</h2>
        <p className="alt-spot">İhtiyacınıza göre tasarlanmış sonuç odaklı ürünler</p>
      </div>

      <div className="hizmet-izgarasi">
        {hizmetler.map((hizmet, index) => (
          <div key={index} className="hizmet-karti">
            <div className="hizmet-ikon">{hizmet.ikon}</div>
            <div className="hizmet-icerik">
              <h3>{hizmet.baslik}</h3>
              <p>{hizmet.metin}</p>
              <div className="detay-linki">
                Detaylar <FiArrowRight className="detay-ok" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Uzmanlık;