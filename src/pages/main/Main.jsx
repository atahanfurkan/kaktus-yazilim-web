import React from 'react';
import './Main.css';
import { FaArrowRight, FaThLarge, FaFolderOpen, FaNewspaper, FaBriefcase } from 'react-icons/fa';
import { FiCheckCircle, FiStar, FiZap, FiUsers } from 'react-icons/fi';

const Main = () => {
  return (
    <div className="sayfa-arka-plan">
      <section className="genis-banner-kart">
        
        {/* Ana Yeşil Gövde */}
        <div className="banner-govde-genis">
          <div className="banner-sol-icerik">
            <span className="one-cikan-badge">ÖNE ÇIKAN</span>
            <h1 className="dev-baslik">Dijital Dönüşüme Hazır mısınız?</h1>
            <p className="banner-spot-metin">
              İşinizi büyütecek 18+ hizmet kategorisinde uzman çözümler. 
              Ücretsiz danışmanlık ile hemen başlayın.
            </p>
            
            <div className="interaktif-aksiyonlar">
              <button className="ana-teklif-butonu">
                Ücretsiz Teklif Al <FaArrowRight />
              </button>
              
              <div className="dik-ayirici"></div>

              <div className="etiket-grubu-yatay">
                <span className="etiket-ust-yazi">POPÜLER ARAMALAR</span>
                <div className="etiket-listesi">
                  <span>Özel Yazılım</span>
                  <span>Web Tasarım</span>
                  <span>Mobil Uygulama</span>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-sag-gorsel">
             <div className="cihaz-mockup-sarma">
                <img src="/images/mockup.jpg" alt="Modern Dashboard" className="mockup-resim" />
                <div className="gorsel-isik-efekti"></div>
             </div>
          </div>
        </div>

        {/* Alt Şerit: Linkler ve Yardım Alanı */}
        <div className="banner-alt-serit">
          <div className="serit-sol-linkler">
            <div className="serit-link"><FaThLarge /> Hizmetler</div>
            <div className="serit-link"><FaFolderOpen /> Portfolyo</div>
            <div className="serit-link"><FaNewspaper /> Blog</div>
            <div className="serit-link"><FaBriefcase /> Kariyer</div>
          </div>

          <div className="serit-sag-destek">
            <span className="destek-yazisi">Yardıma mı ihtiyacınız var?</span>
            <button className="destek-butonu">Bize Ulaşın</button>
          </div>
        </div>

        {/* Değer Önerisi ve 4'lü İstatistik Alanı */}
        <div className="deger-onerisi-alani">
          <div className="deger-sol-metin">
            <h2 className="alt-bolum-baslik">Hızlı, Şık ve Ölçülebilir</h2>
            <p className="alt-bolum-aciklama">
              UI/UX tasarımdan başlayarak, modern web geliştirme süreçleri, 
              yüksek performanslı mobil hizmetler ve büyüme odaklı stratejilerimizle 
              işletmenizi dijitalin zirvesine taşıyoruz.
            </p>
            
            <div className="istatistik-sarma">
              <div className="mini-istatistik-kutusu">
                <FiCheckCircle className="ist-ikon" />
                <div>
                  <span className="ist-rakam">50+</span>
                  <span className="ist-etiket">Tamamlanan Proje</span>
                </div>
              </div>
              <div className="mini-istatistik-kutusu">
                <FiStar className="ist-ikon" />
                <div>
                  <span className="ist-rakam">4.9/5</span>
                  <span className="ist-etiket">Müşteri Memnuniyeti</span>
                </div>
              </div>
              <div className="mini-istatistik-kutusu">
                <FiZap className="ist-ikon" />
                <div>
                  <span className="ist-rakam">14 Gün</span>
                  <span className="ist-etiket">İlk Demo Teslimi</span>
                </div>
              </div>
              <div className="mini-istatistik-kutusu">
                <FiUsers className="ist-ikon" />
                <div>
                  <span className="ist-rakam">12.4M</span>
                  <span className="ist-etiket">Aktif Kullanıcı</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Main;