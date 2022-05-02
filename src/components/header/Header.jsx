import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <img src="img/Logo.png" alt="로고 이미지" />
      <ul className='header-menu'>
        <li>메인뉴스</li>
        <li>포트폴리오</li>
        <li>서비스 소개</li>
        <li>홍보컨설팅</li>
      </ul>
    </div>
    
  )
}
