import React from 'react';
import './Kultur.css';
import { FiUsers, FiGlobe, FiEye, FiHeart, FiArrowRight } from 'react-icons/fi';

const Kultur = () => {
  return (
    <section className="kultur-alani">
      <div className="kultur-konteynir">
        
        {/* Sol Taraf: Tanıtım */}
        <div className="kultur-sol">
          <span className="kultur-etiket">ÇALIŞMA KÜLTÜRÜMÜZ</span>
          <h2 className="kultur-baslik">Hiyerarşiden uzak, fikirlere yakın.</h2>
          <p className="kultur-aciklama">
            İzmir'in enerjisini global standartlarla birleştiriyor, inovasyonu merkeze alıyoruz.
          </p>
          <a href="/ofis" className="kultur-buton">
            Ofis Hayatı <FiArrowRight />
          </a>
        </div>

        {/* Sağ Taraf: Başlıklar Aynı, Açıklamalar Yeni */}
        <div className="kultur-sag">
          <div className="kultur-izgara">
            
            {/* Otonom Ekipler */}
            <div className="kultur-kart">
              <div className="kultur-ikon"><FiUsers /></div>
              <h3>Otonom Ekipler</h3>
              <p>
                Her ekip kendi vizyonunu belirleme özgürlüğüne sahiptir. Çevik yapımızla fikirleri saniyeler içinde karara, dakikalar içinde uygulamaya dönüştürürüz.
              </p>
            </div>

            {/* Global Vizyon */}
            <div className="kultur-kart">
              <div className="kultur-ikon"><FiGlobe /></div>
              <h3>Global Vizyon</h3>
              <p>
                Sınırlarımızı yerelle çizmiyoruz. Dünyanın her köşesine ulaşan çözümlerimizle kıtalar arası bir teknoloji köprüsü kuruyoruz.
              </p>
            </div>

            {/* Radikal Şeffaflık */}
            <div className="kultur-kart">
              <div className="kultur-ikon"><FiEye /></div>
              <h3>Radikal Şeffaflık</h3>
              <p>
                Süreçlerimizde gizli ajandalara yer yok. Hatalarımızdan ders çıkarıyor, gelişim yolculuğumuzu tüm açıklığıyla paylaşıyoruz.
              </p>
            </div>

            {/* Tutku & Eğlence */}
            <div className="kultur-kart">
              <div className="kultur-ikon"><FiHeart /></div>
              <h3>Tutku & Eğlence</h3>
              <p>
                Üretirken keyif almayı işimizin parçası sayıyoruz. Disiplini elden bırakmadan, en yaratıcı fikirleri eğlendiğimiz anlarda buluyoruz.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Kultur;