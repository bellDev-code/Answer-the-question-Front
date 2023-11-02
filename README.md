# Project : 질문 답하기

## 목표
- 여러 명이 하나의 화면을 통해 참여하여, 지목된 사람이 주어진 질문에 답을 하는 프로젝트

### Version 1 : Single Deivice
- 인원 설정: 한 대의 핸드폰을 이용해 모든 인원의 이름을 입력.
- 질문 할당: 하나의 질문이 랜덤하게 한 명에게 할당됨.
- 답변: 해당 사람이 핸드폰을 가져와 질문에 답함.
- 반복: 답변이 완료되면 다음 사람에게 넘어가고, 이를 종료할 때까지 반복.

### Version 2 : Multi-Device (Online)
- 방 생성: 한 명이 방을 만들고 링크를 공유.
- 입장과 이름 설정: 참가자들이 링크를 통해 방에 입장하고 이름을 입력.
- 질문 할당 방식 선택: 질문을 랜덤으로 돌릴지, 답변자를 지정할지 선택.
- 게임 시작과 진행: 선택된 질문 할당 방식에 따라 게임이 진행.
- 종료 조건: 모든 인원이 한 바퀴 돌면 게임 종료 또는 지정된 횟수/시간에 도달하면 종료.

### 주의할 점
- UI/UX가 중요: 사용자가 쉽게 참여하고 이해할 수 있도록 해야 함.
- 실시간 반응이 필요: 특히 온라인 버전에서는 실시간으로 정보가 업데이트되어야 함.
- 보안: 온라인 버전에서는 보안을 고려해야 함 (예: 누가 방에 들어왔는지, 데이터 전송 보안 등).

## Front-end skill
### React
   - 현재까지 계속 React library를 활용하여 개발하고 있음 빠른 개발을 위하여 가장 최선의 선택이라고 생각함 방대한 커뮤니티와 라이브러리 등을 활용할 수 있다는 점에서 채택

### Vite
   - 기존 CRA에 의존하여 webpack과 Babel을 활용하였으나, 빌드 속도 및 실제 배포까지 진행할 예정으로 프로젝트 규모가 커질 시를 고려한 선택

### TypeScript
   - 기존 Javascript를 벗어나 아직 공부단계에 있지만 이번 프로젝트에서 채택하여 기존 Javascript 개발에서 불편함을 느낀 런타임 오류를 줄이고 디버깅 시간을 단축시킬 목적으로 채택

### Tailwind CSS
   - 요새 한창 프론트 엔드 개발자 사이에서 많이 사용하는 Tailwind CSS를 활용하여 기존 CSS 설정 시 컴포넌트에 대한 네이밍 고민 없이 작성할 수 있다는 매력에 채택

### Material UI
   - 사용된 Modal 등 UI 구성에 시간 소모를 단축, 옛날부터 많이 써오던 라이브러리 및 커스터마이징 경험이 있으므로 채택함

### axios
   - Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리를 활용할 예정

### React Query
   - 기존 Redux 보다 적은 코드 구현, 사용자 경험 향상을 위한 다양한 Built-in 기능을 활용해보고 싶어서 선정
