import React, { useState } from 'react';
import './App.css'
import guestImage from './guest.png'

// セクションの型定義
type SectionId = 'home' | 'guestLive' | 'events' | 'map' | 'contact';

// タイムテーブルの項目の型定義
interface TimeTableItem {
  time: string;
  event: string;
}

// プロパティの型定義
interface HeaderProps {
  onSectionChange: (section: SectionId) => void;
}

interface SectionProps {
  isVisible: boolean;
}

// ヘッダーコンポーネント
const Header: React.FC<HeaderProps> = ({ onSectionChange }) => (
  <header className="bg-dark text-white text-center py-4">
    <div className="container">
      <h1 className="display-4">第47回 愛媛大学医学祭</h1>
      <p className="lead">2025年 0月0日〜0日</p>
      <nav className="nav justify-content-center">
        <a href="#home" className="nav-link text-white" onClick={() => onSectionChange('home')}>
          ホーム
        </a>
        <a href="#guestLive" className="nav-link text-white" onClick={() => onSectionChange('guestLive')}>
          ゲストライブ
        </a>
        <a href="#events" className="nav-link text-white" onClick={() => onSectionChange('events')}>
          企画の紹介
        </a>
        <a href="#map" className="nav-link text-white" onClick={() => onSectionChange('map')}>
          区画マップ
        </a>
        <a href="#contact" className="nav-link text-white" onClick={() => onSectionChange('contact')}>
          お問い合わせ
        </a>
      </nav>
    </div>
  </header>
);

// 各セクションコンポーネント
const HomeSection: React.FC<SectionProps> = ({ isVisible }) => (
  <section id="home" className={`section bg-light ${!isVisible && 'hidden'}`}>
    <div className="container">
      <h2 className="text-center mb-4">ようこそ</h2>
      <p className="text-center">愛媛大学医学祭へようこそ！</p>
    </div>
  </section>
);

const GuestLiveSection: React.FC<SectionProps> = ({ isVisible }) => (
  <section id="guestLive" className={`section bg-light ${!isVisible && 'hidden'}`}>
    <div className="container">
      <h2 className="text-center mb-4">ゲストライブのお知らせ</h2>
      <p className="text-center">このページはゲストライブのページです</p>
    </div>
    <img src={guestImage} alt="guest" width={600} />
  </section>
);

const EventsSection: React.FC<SectionProps> = ({ isVisible }) => {
  const timeTable: TimeTableItem[] = [
    { time: '10:00 AM', event: '開会式' },
    { time: '11:00 AM', event: '音楽ライブ' },
    { time: '1:00 PM', event: '屋台オープン' },
    { time: '3:00 PM', event: '医療体験セッション' },
    { time: '5:00 PM', event: '閉会式' },
  ];

  return (
    <section id="events" className={`section bg-light ${!isVisible && 'hidden'}`}>
      <div className="container">
        <h2 className="text-center mb-4">タイムテーブル</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ul className="list-group">
              {timeTable.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item.time} - {item.event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection: React.FC<SectionProps> = ({ isVisible }) => (
  <section id="map" className={`section bg-light ${!isVisible && 'hidden'}`}>
    <div className="container">
      <h2 className="text-center mb-4">区画マップ</h2>
      <p className="text-center">準備中...</p>
    </div>
  </section>
);

const ContactSection: React.FC<SectionProps> = ({ isVisible }) => (
  <section id="contact" className={`section bg-light ${!isVisible && 'hidden'}`}>
    <div className="container">
      <h2 className="text-center mb-4">お問い合わせ</h2>
      <p className="text-center">
        ゲストライブについての問い合わせはこちらにお願いします
        <br />
        <a href="mailto:guestkyoku@gmail.com">guestkyoku@gmail.com</a>
      </p>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer id="mainFooter" className="bg-dark text-white text-center py-3">
    <div className="container">
      <p>© 2025 学生祭実行委員会</p>
    </div>
  </footer>
);

// メインアプリケーション
const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionId>('home');

  return (
    <>
      <Header onSectionChange={setCurrentSection} />
      <HomeSection isVisible={currentSection === 'home'} />
      <GuestLiveSection isVisible={currentSection === 'guestLive'} />
      <EventsSection isVisible={currentSection === 'events'} />
      <MapSection isVisible={currentSection === 'map'} />
      <ContactSection isVisible={currentSection === 'contact'} />
      <Footer />
    </>
  );
};

export default App;