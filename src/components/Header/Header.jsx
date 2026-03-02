import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [mobilMenuAcik, setMobilMenuAcik] = useState(false);

  return (
    <header className="ust-menu-sarma">
      <div className="menu-konteynir">

        {/* Logo */}
        <div className="logo-alani">
          <img src="/images/logo.webp" alt="Logo" className="site-logo" />
        </div>

        {/* Mobil Hamburger */}
        <div 
          className="mobil-menu-ikonu"
          onClick={() => setMobilMenuAcik(!mobilMenuAcik)}
        >
          {mobilMenuAcik ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menü */}
        <nav className={`navigasyon-menusu ${mobilMenuAcik ? 'mobil-aktif' : ''}`}>
          <ul>

            <li><a href="/" className="menu-linki">Anasayfa</a></li>

            {/* Kurumsal Mega Menü */}
            <li className="acilabilir-menu mega-menu-sarma">
              <span className="menu-linki">
                Kurumsal <MdKeyboardArrowDown className="ok-ikonu" />
              </span>
              <div className="mega-menu">
                <div className="mega-kolon">
                  <h4>Şirket</h4>
                  <a href="/hakkimizda" className="alt-menu-linki">Hakkımızda</a>
                  <a href="/kariyer" className="alt-menu-linki">Kariyer</a>
                  <a href="#" className="alt-menu-linki">Ekibimiz</a>
                </div>
              </div>
            </li>

            {/* Hizmetlerimiz Mega Menü */}
            <li className="acilabilir-menu mega-menu-sarma">
              <span className="menu-linki">
                Hizmetlerimiz <MdKeyboardArrowDown className="ok-ikonu" />
              </span>
              <div className="mega-menu">
                <div className="mega-kolon">
                  <h4>Dijital Pazarlama</h4>
                  <a href="#" className="alt-menu-linki">Sosyal Medya Yönetimi</a>
                  <a href="#" className="alt-menu-linki">Google Ads</a>
                  <a href="#" className="alt-menu-linki">SEO Hizmetleri</a>
                  <a href="#" className="alt-menu-linki">GEO</a>
                </div>

                <div className="mega-kolon">
                  <h4>Web & Yazılım</h4>
                  <a href="#" className="alt-menu-linki">Kurumsal Web Site</a>
                  <a href="#" className="alt-menu-linki">Mobil Uygulama</a>
                  <a href="#" className="alt-menu-linki">E-Ticaret</a>
                  <a href="#" className="alt-menu-linki">Yapay Zeka</a>
                </div>

                <div className="mega-kolon">
                  <h4>Tasarım & Marka</h4>
                  <a href="#" className="alt-menu-linki">Grafik Tasarımı</a>
                  <a href="#" className="alt-menu-linki">Markalaşma</a>
                  <a href="#" className="alt-menu-linki">Katalog Tasarımı</a>
                  <a href="#" className="alt-menu-linki">Unity Oyun</a>
                </div>

                <div className="mega-kolon">
                  <h4>Altyapı</h4>
                  <a href="#" className="alt-menu-linki">Hosting</a>
                  <a href="#" className="alt-menu-linki">Kurumsal E-posta</a>
                </div>
              </div>
            </li>

            {/* Portfolyo Mega Menü */}
            <li className="acilabilir-menu mega-menu-sarma">
              <span className="menu-linki">
                Portfolyo <MdKeyboardArrowDown className="ok-ikonu" />
              </span>
              <div className="mega-menu">
                <div className="mega-kolon">
                  <h4>Projeler</h4>
                  <a href="#" className="alt-menu-linki">Başarılı Projeler</a>
                  <a href="#" className="alt-menu-linki">Tüm Referanslar</a>
                  <a href="#" className="alt-menu-linki">Web Referansları</a>
                </div>
              </div>
            </li>

            <li><a href="/blog" className="menu-linki">Blog</a></li>
            <li><a href="/iletisim" className="menu-linki">İletişim</a></li>

            {/* Mobil CTA */}
            <li className="mobil-cta">
              <button className="teklif-butonu">Ücretsiz Teklif Al</button>
            </li>

          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="buton-alani">
          <button className="teklif-butonu">Ücretsiz Teklif Al</button>
          <button className="iletisim-butonu">İletişime Geçin</button>
        </div>

      </div>
    </header>
  );
};

export default Header;