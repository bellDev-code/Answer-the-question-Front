import React from 'react';

export default function KakaoShare() {
  const kakaoButton = async () => {
    if (window.Kakao) {
      const shared = window.Kakao;

      if (!shared.isInitialized()) {
        shared.init('da9097fb608a8158e3b3aa48e8585256');
      }

      shared.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '시크릿아웃',
          description: '질문이 이어지는 곳, 우리의 대화가 깊어지는 순간',
          imageUrl: 'https://i.imgur.com/Jwy8VuC.png',
          link: {
            mobileWebUrl: 'https://answer-the-question-front.vercel.app',
            webUrl: 'https://answer-the-question-front.vercel.app',
          },
        },
        buttons: [
          {
            title: '게임 즐기러 가기!',
            link: {
              mobileWebUrl: 'https://answer-the-question-front.vercel.app',
              webUrl: 'https://answer-the-question-front.vercel.app',
            },
          },
        ],
      });
    }
  };

  return (
    <button
      className='sm:text-md bg-yellow-400 py-1 px-3 text-white rounded-md'
      onClick={kakaoButton}
    >
      카카오 공유하기
    </button>
  );
}
