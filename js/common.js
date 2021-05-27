const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');  
  //만약 search안에 input요소(위에서 querySelector로 찾아둔)가 focus되면 익명함수function()이 작동한다.
  //익명함수> html의 search라는 클래스를 가진 요소에 'focused'라는 클래스리스트를 추가할거고,
  //그리고 search안에 input이라는 요소 안에(위에서 querySelector로 찾아둔) 'placeholder'라는 '속성'을 추가할거다. 그 인수는 '통합검색'이다.
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  //한단락 위에서 searchInputEl이 focus되면 searchEl에 'focused'라는 classList가 추가되는데,
  //searchInputEl의 focus가 blur됐을 때 searchEl의 classList에서 'focused'라는 클래스를 삭제하겠다.
  //그리고 searchInputEl의 'placeholder'라는 속성의 값(인수)를 빈문자열 '' 로 세팅하겠다.
});


//Copyright 의 년도(Year)를 매년 바꿔줄 수 없으니까 자동으로 현재년도로 맞춰주는 코드.
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해의 년도 숫자가 나옴 ex)2021

