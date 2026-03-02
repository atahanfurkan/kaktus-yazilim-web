import React from 'react';
import './Kaktusai.css';
import { FiCpu, FiDatabase } from 'react-icons/fi';

const Kaktusai = () => {
  return (
    <section className="kaktusai-alani">
      <div className="kaktusai-konteynir">
        
        {/* Sol Taraf: Görsel Alanı */}
        <div className="kaktusai-gorsel-taraf">
          <div className="ai-gorsel-cerceve">
            {/* Buraya public içindeki bir AI görselini koyabilirsin */}
            <img src="ai.webp" alt="KaktüsAI Analiz" className="ai-ana-resim" />
            <div className="ai-hareketli-kart">
              <span>AI Analiz Ediliyor...</span>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Metin Alanı */}
        <div className="kaktusai-metin-taraf">
          <span className="ai-ust-etiket">YAPAY ZEKA ÇÖZÜMLERİ</span>
          <h2 className="ai-baslik">Geleceği Veriyle Şekillendirin.</h2>
          <p className="ai-ana-aciklama">
            Sadece standart araçları kullanmıyor, kendi yapay zekamızı geliştiriyoruz. 
            Analiz odaklı çözümlerimizle kullanıcı davranışlarını anlamlandırıyor ve işinizi bir adım öteye taşıyoruz.
          </p>

          <div className="ai-ozellik-listesi">
            {/* Madde 1 */}
            <div className="ai-madde">
              <div className="ai-madde-ikon"><FiCpu /></div>
              <div className="ai-madde-icerik">
                <h3>KaktüsAI Destekli Tahminleme</h3>
                <p>
                  KaktüsAI, kullanıcı davranışlarını önceden analiz ederek LTV (Yaşam Boyu Değer) tahminlemesini 
                  yüksek doğrulukla yapar. Makine öğrenmesi algoritmalarımızla veriyi kazanca dönüştürün.
                </p>
              </div>
            </div>

            {/* Madde 2 */}
            <div className="ai-madde">
              <div className="ai-madde-ikon"><FiDatabase /></div>
              <div className="ai-madde-icerik">
                <h3>Merkezi Veri Havuzu</h3>
                <p>
                  Tüm uygulamalardan gelen verileri tek potada eritip, çapraz promosyon ve büyüme stratejileri 
                  geliştiriyoruz. Veri dağınıklığını ortadan kaldırarak stratejik bütünlük sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Kaktusai;