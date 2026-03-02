import React from 'react';
import './News.css';
import { FiZap, FiChevronRight, FiBriefcase } from 'react-icons/fi';

const News = () => {
  const newsData = [
    {
      id: 1,
      date: "18 Şub 2026",
      title: "KaktüsAI ile Veri Tahminleme Teknikleri",
      desc: "Yapay zeka modellerimizin arkasındaki matematiksel derinliği keşfedin.",
      img: "/news1.jpg"
    },
    {
      id: 2,
      date: "15 Şub 2026",
      title: "Dijital Pazarlamada Yeni Stratejiler",
      desc: "Veri odaklı pazarlama ile dönüşüm oranlarını nasıl artırıyoruz?",
      img: "/news3.jpg"
    },
    {
      id: 3,
      date: "12 Şub 2026",
      title: "E-Ticarette Yeni Dönem",
      desc: "Müşteri davranışlarını analiz eden stratejilerimiz yayında.",
      img: "/news2.jpg"
    }
  ];

  return (
    <section className="wow-section">
      <div className="gradient-sphere"></div>
      
      <div className="wow-container">
        <div className="wow-title-area">
          <span className="wow-badge">GÜNCEL AKIŞ</span>
          <h2 className="wow-main-title">Haberler & <br/> <span>Fırsatlar.</span></h2>
        </div>

        <div className="wow-grid">
          
          {/* Sol: Haberler (3 Haberli Yapı) */}
          <div className="wow-news-container">
            {newsData.map((news) => (
              <div key={news.id} className="wow-news-card">
                <div className="news-side-img">
                  <img src={news.img} alt={news.title} />
                </div>
                <div className="news-content-side">
                  <div className="news-date">{news.date}</div>
                  <h4>{news.title}</h4>
                  <p>{news.desc}</p>
                  <button className="news-btn">Devamını Oku <FiChevronRight /></button>
                </div>
              </div>
            ))}
          </div>

          {/* Sağ: Kariyer */}
          <div className="wow-career-card">
            <div className="wow-card-header">
              <FiBriefcase className="wow-icon" />
              <h3>Aramıza Katılın</h3>
            </div>
            <p className="career-sub">Geleceği İzmir'den dünyaya ihraç eden ekibin parçası olun.</p>

            <div className="wow-jobs">
              <div className="wow-job-pill">
                <div className="job-info">
                  <h5>Senior iOS Developer</h5>
                  <span>Remote // Tam Zamanlı</span>
                </div>
                <FiChevronRight />
              </div>

              <div className="wow-job-pill highlight-pill">
                <div className="job-info">
                  <h5>Growth Product Manager</h5>
                  <span>İzmir // Hibrit</span>
                </div>
                <FiChevronRight />
              </div>

              <div className="wow-job-pill">
                <div className="job-info">
                  <h5>UI/UX Designer</h5>
                  <span>Remote // Tam Zamanlı</span>
                </div>
                <FiChevronRight />
              </div>
            </div>

            <button className="wow-all-jobs">Tüm Pozisyonlar</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default News;