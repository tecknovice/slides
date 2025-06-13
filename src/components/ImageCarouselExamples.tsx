import React from 'react';
import ImageCarousel from './ImageCarousel';

// Example usage of ImageCarousel with predefined image sets
export const TravelCarousel: React.FC = () => {
  const travelImages = [
    {
      src: './images/singapore.jpg',
      alt: 'シンガポール',
      caption: 'シンガポール旅行'
    },
    {
      src: './images/merlion.jpg',
      alt: 'マーライオン',
      caption: 'マーライオン像'
    },
    {
      src: './images/thailand.jpg',
      alt: 'タイ',
      caption: 'タイ旅行'
    },
    {
      src: './images/phuquoc.jpg',
      alt: 'フーコック島',
      caption: 'ベトナム・フーコック島'
    }
  ];

  return <ImageCarousel images={travelImages} className="mb-6" />;
};

export const ProfileCarousel: React.FC = () => {
  const profileImages = [
    {
      src: './images/profile.jpg',
      alt: 'プロフィール写真',
      caption: '自己紹介'
    },
    {
      src: './images/hachiko_2016.jpg',
      alt: '2016年の渋谷',
      caption: '2016年 - 東京で日本語勉強中'
    },
    {
      src: './images/hachiko_2024.jpg',
      alt: '2024年の渋谷',
      caption: '2024年 - 日本に戻ってきました'
    }
  ];

  return <ImageCarousel images={profileImages} className="mb-6" />;
};

export const StudyCarousel: React.FC = () => {
  const studyImages = [
    {
      src: './images/hust.jpg',
      alt: 'ハノイ工科大学',
      caption: 'ハノイ工科大学で情報技術を専攻'
    },
    {
      src: './images/hanoi.jpg',
      alt: 'ハノイ',
      caption: 'ベトナム・ハノイの風景'
    }
  ];

  return <ImageCarousel images={studyImages} className="mb-6" />;
};

export const HobbyCarousel: React.FC = () => {
  const hobbyImages = [
    {
      src: './images/snowboarding.jpg',
      alt: 'スノーボード',
      caption: 'スノーボードを楽しんでいます'
    },
    {
      src: './images/thailand.jpg',
      alt: '旅行',
      caption: '旅行が好きです - タイ'
    },
    {
      src: './images/singapore.jpg',
      alt: 'シンガポール旅行',
      caption: 'シンガポール旅行'
    }
  ];

  return <ImageCarousel images={hobbyImages} className="mb-6" />;
};
