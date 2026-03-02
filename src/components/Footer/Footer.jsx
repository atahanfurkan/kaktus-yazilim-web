import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="ana-footer">
      <div className="footer-ic-konteynir">
        
        {/* Marka ve Kısa Tanım */}
        <div className="footer-sutun marka-tanitim">
          <h2 className="footer-logo">KAKTÜS<span>YAZILIM</span></h2>
          <p className="footer-misyon">
            İzmir merkezli teknoloji odağımızla, işletmelerin dijital dönüşüm yolculuklarında yanındayız. 
            Geleceği veriyle şekillendiriyoruz.
          </p>
          <div className="iletisim-bilgi">
            <div className="iletisim-satir">
              <FaEnvelope className="footer-ikon" />
              <span>info@kaktusyazilim.com</span>
            </div>
            <div className="iletisim-satir">
              <FaMapMarkerAlt className="footer-ikon" />
              <span>İzmir, Türkiye</span>
            </div>
          </div>
        </div>

        {/* ŞİRKET Grubu */}
        <div className="footer-sutun">
          <h4>ŞİRKET</h4>
          <ul>
            <li>Hakkımızda</li>
            <li>Kariyer</li>
            <li>Referanslar</li>
            <li>İletişim</li>
          </ul>
        </div>

        {/* HİZMETLER Grubu */}
        <div className="footer-sutun">
          <h4>HİZMETLER</h4>
          <ul>
            <li>Tüm Hizmetler</li>
            <li>Web Tasarım</li>
            <li>Mobil Uygulama</li>
            <li>E-Ticaret</li>
            <li>Özel Yazılım</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* TOPLULUK & SOSYAL Grubu */}
        <div className="footer-sutun">
          <h4>TOPLULUK</h4>
          <ul>
            <li>Blog</li>
            <li>Makaleler</li>
            <li>Bülten</li>
          </ul>
          
          <h4 className="sosyal-baslik">SOSYAL</h4>
          <div className="footer-sosyal-ikonlar">
            <a href="#" className="sosyal-link"><FaFacebookF /></a>
            <a href="#" className="sosyal-link"><FaTwitter /></a>
            <a href="#" className="sosyal-link"><FaInstagram /></a>
            <a href="#" className="sosyal-link"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* En Alt Bar */}
      <div className="footer-alt-bar">
        <div className="alt-bar-ic">
          <p>© 2026 Kaktüs Yazılım. Tüm Hakları Saklıdır.</p>
          <div className="alt-bar-linkler">
            <span>Gizlilik Politikası</span>
            <span>KVKK Aydınlatma Metni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;