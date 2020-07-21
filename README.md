# 2차 프로젝트: 바이브 클론 

## Intro
* 좋아하는 음악은 물론, 좋아할 음악까지 들려주는 취향 저격 뮤직 서비스 '바이브'를 소개 드립니다.
* Front-end 3명, Back-end 2명 총 5명으로 구성된 FeelTheVibe 팀
* 프로젝트 기간은 2주(2020-06-08 ~ 2020-06-19

## Demo
- https://youtu.be/HWpyll46m9A

## Skills
* Front-End: React, Functional Component, Hooks, Redux, Router, Styled-component, Javascript
* Back-End: Django, MySQL
* Tools: Git, AWS

## Systems
* 매일 아침 Stand Up 미팅으로 진행 단계 공유 및 전체적인 흐름 회의
* Trello를 사용하여 진행 상황 체크

## Goal
* 기존의 바이브와 동일한 UI/기능 구현
* React의 꽃, 컴포넌트 및 재사용 상황에 따라 알맞은 Hooks 사용 
* Redux를 사용하여 전역 state 관리
* Back-end와 API 통신

## Explanation

### SideNav
* 로그인, 비로그인 상태에 따라 UI 동적으로 구현
* Redux를 사용하여 선택한 목록 active 상태 관리
* history.push()를 사용하여 해당 페이지 이동 구현

### Login
* naver 소셜로그인 구현
* JWT Access Token을 활용하여 Back-End와 통신
* 로그아웃 버튼 클릭 시, access_token 삭제 구현

### Main
* Back-End와 API 통신(GET)하여 해당 차트 목록 가져오기
* slick 라이브러리를 사용하여 슬라이더 구현

### Chart
* Back-End와 API 통신(GET) 하여 Top100 차트 목록 가져오기
* scroll 시, SubHeader 구현
* 노래 제목 클릭 시, 노래 디테일 페이지로 이동
* 좋아요 버튼 상태에 따라 보관함 - 노래에 저장 및 삭제
* 체크박스로 선택한 곡의 개수를 SubHeader에 표현 및 내 플레이리스트 추가 버튼 클릭 시, 플레이리스트에 담기
* 가사 보기 클릭 시, 모달 기능 구현 (Back-End와 API 통신(GET) 하여 해당 가사 가져오기)

### Detail
* Query parameters를 이용하여 선택한 노래 정보 가져오기

### locker
 1. Music
 * Back-End와 API 통신(GET) 하여 좋아요 버튼을 클릭한 노래 리스트 가져오기
 2. PlayList
 * Back-End와 API 통신(GET) 하여 플레이리스트에 추가 한 노래 리스트 가져오기
 * Back-End와 API 통신(POST) 하여 플레이 리스트 추가 버튼 클릭 시, 새로운 플레이 리스트 생성하기
 * 전체 재생 버튼 클릭 시, 플레이어에 해당 목록 전달하기
 3. Artist
 * Moca Data 사용하여(GET) 좋아요 버튼을 클릭한 아티스트 목록 가져오기
 * Moca Data를 사용하여(DELETE) 좋아요 버튼 클릭 시, 삭제하기

### Player
* Drag And Drop 구현
* Back-End와 API 통신(GET) 하여 받아온 음악파일 재생, 중간 재생, 다음 곡, 반복 재생, 랜덤 재생 구현
* 볼륨 조절 구현
* Redux를 사용하여 플레이어 내부 현재 재생 정보(커버 사진, 가수 등) 관리
* 음악의 재생 시간에 맞춰 플레이바와 재생시간 동기화 구현
