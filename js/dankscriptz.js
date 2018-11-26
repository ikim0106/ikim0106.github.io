let questions = ["청년/장년층이십니까?", "등산을 즐겨 하십니까?", "등산에 2시간 이상 투자가 가능하십니까?"];

document.getElementById("question").innerHTML = questions[0];
let currentQuestion = document.getElementById("question").innerHTML;
let number = 0;
let stringresults1 = '';
let finalverdict;
let finalquestion;
let description;
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let x = document.getElementById("next");

let round2verdict;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep1sec(){
  await sleep(1000);
}

function nextQuestion() {
  number++;
  if(stringresults1.length ===3)
  {
    console.log('stringresults1', stringresults1);
    if(stringresults1==='111') {finalverdict = '산신령 코스', finalquestion= '뷰포인트가 많은 등산 코스를 선호한다'}
    else if(stringresults1==='110') {finalverdict = '무장공비 코스', finalquestion= '북한산의 최고봉에 올라 보고 싶다'}
    else if(stringresults1==='101') {finalverdict = '자연인 코스', finalquestion= '뷰포인트가 우선이다(YES 선택)<br>자연 관찰로가 우선이다 (NO 선택)'}
    else if(stringresults1==='100') {finalverdict = '새내기 코스', finalquestion= '가급적 경사가 완만한 것이 좋다'}
    else if(stringresults1==='011') {finalverdict = '자연인 코스', finalquestion= '뷰포인트가 우선이다(YES 선택)<br>자연 관찰로가 우선이다 (NO 선택)'}
    else if(stringresults1==='010') {finalverdict = '새내기 코스', finalquestion= '가급적 경사가 완만한 것이 좋다'}
    else if(stringresults1==='001') {finalverdict = '초심자 코스', finalquestion= '계곡길을 따라 등산하고 싶다'}
    else if(stringresults1==='000') {finalverdict = '직장인 코스', finalquestion= '가을에 등산할 예정이다'}
    document.getElementById("question").innerHTML = finalverdict+'를 추천합니다!';
    yesButton.style.display = "none";
    noButton.style.display = "none";
    x.style.display = "block";
  }
  else if(stringresults1.length===4)
  {
    console.log('stringresults1', stringresults1);
    if(stringresults1==='1111') round2verdict='사모바위 코스'
    else if(stringresults1==='1110') round2verdict='소귀천 코스<br>북한산성 코스', description = '소요시간: 약 2시간 40분<br>거리 : 3.4km<br>난이도 : 중<br>북한산성코스는 산신령 코스에 해당합니다. 등산에 시간을 많이 투자하실 수 있고 평소에도 자주 산행하시는 분들에게 추천드라는 코스 입니다. 코스의 중 후반 이후부터 돌길의 가파른 오르막길로 이루어져 있어 체력을 고려한 계획적인 산행이 필수입니다. 북한산성의 주요성문과 탐방로주변 계곡의 아름다운 경관을 두루 감상할 수 있는 북한산국립공원의 인기 탐방코스 입니다. 타 코스에 비해 난이도가 조금 있는 편이고 북한산국립공원의 대표 문화유적인 북한산성의 주요 성문들과 산성계곡을 따라 조성된 탐방로 주변의 수려한 경관을 함께 감상할 수 있습니다.<br>주의사항 : 산행 중 겨울철에는 결빙구간이 많아 반드시 아이젠을 착용해야 합니다.'
    else if(stringresults1==='1101') round2verdict='백운대 코스', description = '난이도: 무장공비 코스(상)<br>길이: 1.9km<br>소요 시간: 1시간 30분<br>북한산의 최고봉에 오르는 백운대 코스는 단시간에 정상에 오르고 싶은 숙련자에게 적합한 코스입니다. 올라가면 서울과 경기도를 한눈에 내려다 볼 수 있는 매력적인 코스죠. 백운대 등반 코스는 돌길이 많고, 백운대 하단부터는 급경사가 시작되고, 주말에는 탐방객이 몰리므로 백운대 등정 시간이 많이 지체될 수 있으므로 체력과 일몰시간 등을 고려하여 산행계획을 수립해야 합니다. 또한 간단한 등산 장비(와이어로프, 등산화, 스틱)를 갖춰야 합니다. 결빙 구간이 많아 겨울에는 유의하세요.<br> *더 자세한 정보는 북한산국립공원 홈페이지에서 확인할 수 있습니다. http://www.knps.or.kr/'
    else if(stringresults1==='1100') round2verdict='비봉 코스', description = '난이도: 무장공비 코스(상)<br>길이: 2km<br>소요 시간: 1시간<br>비봉 코스는 북한산 등산 코스 중 최단시간 코스로, 짧은 시간 안에 비봉을 탐방하고 싶은 숙련자에게 적합한 코스입니다. 비봉탐방지원센터에서 출발하여 비봉을 향하는 탐방로로 비봉과 진흥왕순수비유지를 감상할 수 있습니다. 완만한 경사와 가파른 오르막길의 반복으로 이루어져 있어 산행 전 준비 운동과 등산화 지참은 필수! 등산 도구(헬멧, 자일, 하강기) 역시 필수로 지참하셔야 합니다.'
    else if(stringresults1==='1011') round2verdict='오봉 코스', description = '소요시간 : 약 3시간 30분<br>거리 : 6.5km<br>난이도'
    else if(stringresults1==='1010') round2verdict='사패산 코스'
    else if(stringresults1==='1001') {
      round2verdict='N/A'
      finalquestion= '역사 유적을 둘러보고 싶다'
      document.getElementById("question").innerHTML = finalquestion
      return
    }
    else if(stringresults1==='1000') round2verdict='보국문 코스'
    else if(stringresults1==='0111') round2verdict='오봉 코스'
    else if(stringresults1==='0110') round2verdict='사패산 코스'
    else if(stringresults1==='0101') {
      round2verdict='N/A'
      finalquestion='역사 유적을 둘러보고 싶다'
      document.getElementById("question").innerHTML = finalquestion
      return
    }
    else if(stringresults1==='0100') round2verdict='보국문 코스'
    else if(stringresults1==='0011') round2verdict='대남문 코스'
    else if(stringresults1==='0010') round2verdict='망월사 코스'
    else if(stringresults1==='0001') {
      round2verdict='N/A'
      finalquestion='가급적 경사가 완만한 것이 좋다'
      document.getElementById("question").innerHTML = finalquestion
      return
    }
    else if(stringresults1==='0000') round2verdict='신선대 코스'
    document.getElementById("question").innerHTML = round2verdict+'를 추천합니다!';
    yesButton.style.display = "none";
    noButton.style.display = "none";
  }
  else if (stringresults1.length===5)
  {
    if(stringresults1==='10011') round2verdict='대동문 코스'
    else if(stringresults1==='10010') round2verdict='우이암 코스'
    else if(stringresults1==='01011') round2verdict='대동문 코스'
    else if(stringresults1==='01010') round2verdict='우이암 코스'
    else if(stringresults1==='00011') round2verdict='우이암 코스'
    else if(stringresults1==='00010') round2verdict='보국문 코스'
    document.getElementById("question").innerHTML = round2verdict+'를 추천합니다!';
    yesButton.style.display = "none";
    noButton.style.display = "none";
  }
  else
    document.getElementById("question").innerHTML = questions[number];
};

function yes() {
  stringresults1+=(''+1);
  nextQuestion();
}

function no() {
  stringresults1+=(''+0);
  nextQuestion();
}

function next() {
  document.getElementById("question").innerHTML = finalquestion;
  yesButton.style.display = "initial";
  noButton.style.display = "initial";
  x.style.display = "none";
}