import React from 'react';
import './Referans.css';

const Referanslar = () => {
  const logolar = [
    { id: 1, isim: "Acarlar", dosya: "acarlar.png" },
    { id: 2, isim: "Anadolu Baharat", dosya: "anadolu_baharat.webp" },
    { id: 3, isim: "Arge Güvenlik", dosya: "argeguvenlik.webp" },
    { id: 4, isim: "Bornova Belediyesi", dosya: "bornova_belediyesi.png" },
    { id: 5, isim: "Dijiyol", dosya: "dijiyol-yatay.png" },
    { id: 6, isim: "Dikkaya", dosya: "dikkaya.png" },
    { id: 7, isim: "ESL", dosya: "esl.png" },
    { id: 8, isim: "Gemka Lojistik", dosya: "gemkalojistik.png" },
    { id: 9, isim: "Gözlem Gazetesi", dosya: "gozlem_gazetesi.png" },
    { id: 10, isim: "Güler Güvenlik", dosya: "guler-guvenlik.png" },
    { id: 11, isim: "IQM", dosya: "iqm.webp" },
    { id: 12, isim: "KIA", dosya: "KIA_logo2.svg" },
    { id: 13, isim: "Kutlusan", dosya: "kutlusan.png" },
    { id: 14, isim: "Sentez Göz", dosya: "sentezgoz.png" },
    { id: 15, isim: "Seyfeli", dosya: "seyfeli.webp" },
    { id: 16, isim: "Sufi", dosya: "sufi.webp" },
    { id: 17, isim: "Uplife Academy", dosya: "uplifeacademy.png" },
    { id: 18, isim: "Usca", dosya: "usca.webp" }
  ];

  return (
    <section className="referans-alani">
      <div className="referans-konteynir">
        <div className="referans-baslik-grubu">
          <span className="ust-etiket-yesil">BİRLİKTE BÜYÜDÜĞÜMÜZ MARKALAR</span>
          <h2 className="referans-baslik">KÜRESEL ÇÖZÜM ORTAKLARIMIZ</h2>
          <p className="referans-alt-metin">
            Dünyanın dört bir yanındaki lider markalarla iş birliği yaparak, inovasyon odaklı projelerle dijital dönüşüm yolculuklarına değer katıyoruz.
          </p>
        </div>

        <div className="logo-bandi">
          {logolar.map((logo) => (
            <div key={logo.id} className="logo-item">
              <img 
                src={`/referanslar/${logo.dosya}`} 
                alt={logo.isim} 
                className="sirket-logosu" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Referanslar;