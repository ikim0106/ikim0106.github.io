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
    if(stringresults1==='1111') round2verdict='사모바위 코스', description = '난이도: 산신령 코스(상), 길이: 4.3km, 소요 시간: 2시간 30분<br><br>사모바위 코스를 추천받은 당신은 등산 능력자! 시간이 여유로운 숙련자에게 적합한 사모바위 코스에서는 대남문, 청수동암문, 구기동마애석여래좌상, 석조승가대사좌상 등의 역사 유적을 볼 수 있습니다. 완만한 경사와 가파른 오르막길의 반복으로 이루어져 있어 산행 전 준비운동과 등산화 지참은 필수! 문수봉 이후로는 위험 지구로 간단한 등산 장비(와이어로프, 등산화, 스틱)를 갖춘 뒤, 철난간을 잡고 올라가야 합니다.<br><br>*더 자세한 정보는 북한산국립공원 홈페이지에서 확인할 수 있습니다. http://www.knps.or.kr/'
    else if(stringresults1==='1110') round2verdict='소귀천 코스<br>북한산성 코스', description = '소요시간: 약 2시간 40분, 거리 : 3.4km, 난이도 : 중<br><br>  북한산성코스는 산신령 코스에 해당합니다. 등산에 시간을 많이 투자하실 수 있고 평소에도 자주 산행하시는 분들에게 추천드라는 코스 입니다. 코스의 중 후반 이후부터 돌길의 가파른 오르막길로 이루어져 있어 체력을 고려한 계획적인 산행이 필수입니다.<br>  북한산성의 주요성문과 탐방로주변 계곡의 아름다운 경관을 두루 감상할 수 있는 북한산국립공원의 인기 탐방코스 입니다. 타 코스에 비해 난이도가 조금 있는 편이고 북한산국립공원의 대표 문화유적인 북한산성의 주요 성문들과 산성계곡을 따라 조성된 탐방로 주변의 수려한 경관을 함께 감상할 수 있습니다.<br>주의사항 : 산행 중 겨울철에는 결빙구간이 많아 반드시 아이젠을 착용해야 합니다.'
    else if(stringresults1==='1101') round2verdict='백운대 코스', description = '난이도: 무장공비 코스(상), 길이: 1.9km, 소요 시간: 1시간 30분<br><br>북한산의 최고봉에 오르는 백운대 코스는 단시간에 정상에 오르고 싶은 숙련자에게 적합한 코스입니다. 올라가면 서울과 경기도를 한눈에 내려다 볼 수 있는 매력적인 코스죠. 백운대 등반 코스는 돌길이 많고, 백운대 하단부터는 급경사가 시작되고, 주말에는 탐방객이 몰리므로 백운대 등정 시간이 많이 지체될 수 있으므로 체력과 일몰시간 등을 고려하여 산행계획을 수립해야 합니다. 또한 간단한 등산 장비(와이어로프, 등산화, 스틱)를 갖춰야 합니다. 결빙 구간이 많아 겨울에는 유의하세요.<br> *더 자세한 정보는 북한산국립공원 홈페이지에서 확인할 수 있습니다. http://www.knps.or.kr/'
    else if(stringresults1==='1100') round2verdict='비봉 코스', description = '난이도: 무장공비 코스(상), 길이: 2km, 소요 시간: 1시간<br><br>비봉 코스는 북한산 등산 코스 중 최단시간 코스로, 짧은 시간 안에 비봉을 탐방하고 싶은 숙련자에게 적합한 코스입니다. 비봉탐방지원센터에서 출발하여 비봉을 향하는 탐방로로 비봉과 진흥왕순수비유지를 감상할 수 있습니다. 완만한 경사와 가파른 오르막길의 반복으로 이루어져 있어 산행 전 준비 운동과 등산화 지참은 필수! 등산 도구(헬멧, 자일, 하강기) 역시 필수로 지참하셔야 합니다.'
    else if(stringresults1==='1011') round2verdict='오봉 코스', description = '소요시간: 약 3시간 30분, 거리 : 6.5km, 난이도<br><br> 오봉코스는 자연인 코스에 해당합니다. 평소 등반을 즐겨하지 않지만 산에 대한 관심이 있고 등산을 취미로 시작하시려는 분들에게 추천합니다. 송추지역에서 가장 많은 탐방객이 찾는 북한산국립공원 대표 탐방코스 이고 폭포를 포함한 여러 전망포인트도 있어 초보자들도 지루함 없이 산행 할 수 있는 등산코스 입니다. 수려한 계곡과 더불어 자연의 신비로움을 품고 있는 기암괴석 등을 감상하며 심신의 안정을 꾀할 수 있는 코스입니다. 3시간 30분이라는 상당히 긴 코스이니 참고하시기 바랍니다. 주의사항 : 겨울철에 결빙구간이 많으니 반드시 아이젠을 착용해야 합니다. 송추계곡은 수서생태계보호를 목적으로 안에 들어갈 수 없게 되어 있습니다.'
    else if(stringresults1==='1010') round2verdict='사패산 코스', description = '소요시간: 약 3시간, 거리: 5.5km, 난이도 : 하<br><br>사패산 코스는 자연인 코스에 해당합니다. 등산을 평소에 즐기지는 않지만 가족단위로 등산을 계획할 시 좋은 코스입니다. 코스 초입에 해당하는 송추자연관찰로는 자연에 대한이해도를 높이기 위한 해설안내도가 설치되어 있고 또한 시원한 계곡을 따라 자연관찰로도 조성되어 있어 온 가족이 함께 시원한 계곡을 따라 자연을 느끼면서 산행하기에 좋은 북한산국립공원 도봉산 탐방코스 입니다. 다른 코스에 비해 시간이 조금 더 걸린다는 점을 참고하시기 바랍니다.'
    else if(stringresults1==='1001') {
      round2verdict='N/A'
      finalquestion= '역사 유적을 둘러보고 싶다'
      document.getElementById("question").innerHTML = finalquestion
      return
    }
    else if(stringresults1==='1000') round2verdict='보국문 코스', description = '난이도 하, 직장인, 가을 Y, 경사 N<br>(정릉탐방지원센터-넓적바위-깔딱고개-보국문)<br><br>보국문코스는 북한산성의 보국문까지 오르는 코스입니다. 보국문에서 서울시 전경을 보기 좋고,  가는 길에 정릉계곡이 있어 여름에 시원한 느낌을 주며, 가을에는 아름다운 단풍이 보국문 근처에 많아 가을에도 좋은 코스입니다. 경사가 완만하고 돌계단이 많은 것이 특징입니다. 시간은 1시간 20분 정도로 바쁜 직장인들도 주말에 왔다 갈 수 있는 수준의 코스입니다. 산을 오르기 힘든 특정 장애인들을 배려해 휠체어가 무리없이 갈 수 있는 장애인편의탐방로(무장애탐방로)와 등산화를 잊어버리거나 없는 사람에게 도움이 되는 북한산탐방안내소가 있습니다.'
    else if(stringresults1==='0111') round2verdict='오봉 코스', description = '소요시간: 약 3시간 30분, 거리 : 6.5km, 난이도<br> 오봉코스는 자연인 코스에 해당합니다. 평소 등반을 즐겨하지 않지만 산에 대한 관심이 있고 등산을 취미로 시작하시려는 분들에게 추천합니다. 송추지역에서 가장 많은 탐방객이 찾는 북한산국립공원 대표 탐방코스 이고 폭포를 포함한 여러 전망포인트도 있어 초보자들도 지루함 없이 산행 할 수 있는 등산코스 입니다. 수려한 계곡과 더불어 자연의 신비로움을 품고 있는 기암괴석 등을 감상하며 심신의 안정을 꾀할 수 있는 코스입니다. 3시간 30분이라는 상당히 긴 코스이니 참고하시기 바랍니다. 주의사항 : 겨울철에 결빙구간이 많으니 반드시 아이젠을 착용해야 합니다. 송추계곡은 수서생태계보호를 목적으로 안에 들어갈 수 없게 되어 있습니다.'
    else if(stringresults1==='0110') round2verdict='사패산 코스', description = '소요시간: 약 3시간, 거리: 5.5km, 난이도 : 하, 사패산 코스는 자연인 코스에 해당합니다. 등산을 평소에 즐기지는 않지만 가족단위로 등산을 계획할 시 좋은 코스입니다. 코스 초입에 해당하는 송추자연관찰로는 자연에 대한이해도를 높이기 위한 해설안내도가 설치되어 있고 또한 시원한 계곡을 따라 자연관찰로도 조성되어 있어 온 가족이 함께 시원한 계곡을 따라 자연을 느끼면서 산행하기에 좋은 북한산국립공원 도봉산 탐방코스 입니다. 다른 코스에 비해 시간이 조금 더 걸린다는 점을 참고하시기 바랍니다.'
    else if(stringresults1==='0101') {
      round2verdict='N/A'
      finalquestion='역사 유적을 둘러보고 싶다'
      document.getElementById("question").innerHTML = finalquestion
      return
    }
    else if(stringresults1==='0100') round2verdict='보국문 코스', description = '난이도 하, 직장인, 가을 Y, 경사 N<br>(정릉탐방지원센터-넓적바위-깔딱고개-보국문)<br><br>보국문코스는 북한산성의 보국문까지 오르는 코스입니다. 보국문에서 서울시 전경을 보기 좋고,  가는 길에 정릉계곡이 있어 여름에 시원한 느낌을 주며, 가을에는 아름다운 단풍이 보국문 근처에 많아 가을에도 좋은 코스입니다. 경사가 완만하고 돌계단이 많은 것이 특징입니다. 시간은 1시간 20분 정도로 바쁜 직장인들도 주말에 왔다 갈 수 있는 수준의 코스입니다. 산을 오르기 힘든 특정 장애인들을 배려해 휠체어가 무리없이 갈 수 있는 장애인편의탐방로(무장애탐방로)와 등산화를 잊어버리거나 없는 사람에게 도움이 되는 북한산탐방안내소가 있습니다.'
    else if(stringresults1==='0011') round2verdict='대남문 코스', description = '소요시간: 3시간, 거리: 5.8km, 난이도: 하<br><br>대남문 코스는 초심자 코스에 해당합니다. 등산에 대한 경험이 별로 없지만 느긋하게 북한산의 자연, 역사 등을 탐방할 수 있는 코스입니다. 각 계절별로 야생화요 동물을 볼 수 있으며, 특히 가을단풍이 아름다운 코스 입니다. 코스는 긴 편이지만 완만하여 아이들도 산행이 가능하여 가족단위로도 등산을 즐기기 좋은 코스입니다.<br>다른 코스에 비해 쉬운 코스이지만 5.8km의 비교적 긴 탐방거리로 올바른 탐방장비를 갖추고 가시는 것을 추천합니다.<br>주의사항 : 겨울철에는 결빙구간이 많아 반드시 아이젠을 착용해야 합니다.'
    else if(stringresults1==='0010') round2verdict='망월사 코스', description = '난이도: 초심자코스 (하), 길이: 5.8km, 소요시간: 3시간<br><br>망월사코스는 망월사, 포대, 회룡사를 지나는 코스로 여유를 가지고 등산을 즐기고자 하는 초보자들에게 적합한 코스입니다. 망월탐방지원센터나 원도봉탐방지원센터에서 출발하는 이 코스를 오르다보면 화강암과 푸른 나무들이 절경을 이루고 있는 것을 볼 수 있습니다. 또한 달맞이꽃, 제비꽃, 쪽동백, 아카시아 나무들이 지천에 있기 때문에 계절별로 다양한 식물들을 만나볼 수도 있고 겨울에도 산행에 어려움이 적은 코스입니다. 한국 산악의 상징 엄홍길 대장의 생가나 천년 고찰 망월사에 갈 수 있는 코스이기도 합니다. 사색하기에도 안성맞춤이라고 하니 산을 오르면서 생각에 잠겨보는 건 어떨까요?<br><br>상세 구간 : 원도봉탐방지원센터 – 덕제샘 – 망월사 – 포대능선 – 회룡사거리 - 회룡탐방지원센터'
    else if(stringresults1==='0001') {
      round2verdict='N/A'
      finalquestion='가급적 경사가 완만한 것이 좋다'
      document.getElementById("question").innerHTML = finalquestion
      return
    }
    else if(stringresults1==='0000') round2verdict='신선대 코스', description = '난이도: 직장인코스 (하), 길이: 3.2km, 소요시간: 2시간<br><br>신선대코스는 도봉탐방지원센터를 거쳐 도봉산의 정상을 가장 빠르게 만나볼 수 있는 코스로 시간적 여유가 많지 않은 등산 초보 직장인들에게 적합한 코스입니다. 신선대 코스를 오르면 조선시대의 ‘도봉서원’에 갈 수 있는데 이 도봉서원은 수도권에 남아있는 유일한 서원이랍니다. 현재는 정암 조광조와 우암 송시열의 위패를 모시고 봄과 가을마다 제사를 지내고 있습니다. 도봉서원 바로 앞에는 서어나무 군락지도 있고 청설모나 다람쥐들을 쉽게 만나볼 수도 있습니다. 다만 도봉산은 험한 바위로 이루어져 있기때문에 안전 산행에 주의할 필요가 있습니다.  등산할 때 만용은 금물! 언제나 집중하는 거 잊지 않으셨겠죠?<br><br>상세 구간 : 도봉탐방지원센터 – 서원터- 도봉대피소 – 석굴암- 신선대'
    document.getElementById("question").innerHTML = round2verdict+'를 추천합니다!';
    document.getElementById("question").style.margin='0';
    document.getElementById("description").innerHTML = description;
    yesButton.style.display = "none";
    noButton.style.display = "none";
  }
  else if (stringresults1.length===5)
  {
    if(stringresults1==='10011') round2verdict='대동문 코스', description = '난이도 하, 새내기, 경사 Y, 역사유적 Y<br>(백련공원지킴터-백련사-진달래능선-대동문)<br><br>대동문코스는 진달래능선을 따라 북한산의 세 봉오리 백운대, 인수봉 그리고 만경대를 볼 수 있는 탐방 코스입니다. 능선에 오르면 세 봉오리와 산 너머의 도선사가 보입니다. 전체적으로 완만하지만, 오르막길이 조금 길게 이어지는 부분이 있습니다. (약 500m) 능선 곳곳에는 진달래가 있어 4월에는 분홍색의 아름다운 경관을 감상하실 수 있습니다. 또한 소요시간이 1시간 10분 정도로 짧은 편에 속해 산을 처음 오르는 사람도 큰 무리 없이, 많은 시간을 투자 하지 않아도 북한산의 아름다움을 볼 수 있는 코스입니다.'
    else if(stringresults1==='10010') round2verdict='우이암 코스', description = '난이도: 직장인코스 (하), 길이: 3km, 소요 시간: 1시간 30분<br><br>우이암 코스는 북한산 등산코스 중 시간이 부족한 현대인들이 가볍게 즐기기 좋은 등산코스로 도봉산 탐방지원센터에서 시작하여 북한산 국립공원으로 들어가는 코스입니다 ‘우이암’이라는 이름은 봉우리의 모습이 소의 귀를 닮았다고 붙여진 이름인데요. 경사까지 완만하기 때문에 초보자들에게 가장 많이 추천되는 코스이기도 합니다. 우이암 전망대에 오르면 도봉산과 오봉, 북한산을 한꺼번에 볼 수 있는데 도심과 자연이 어우러진 풍경이 장관을 이룬답니다. 우이암 코스를 오르면 능원사, 천진사 등의 사찰을 만날 수도 있고 특히 봄에는 철쭉, 진달래 등 연분홍색 꽃이 만발하고, 가을에는 아름다운 단풍을 만나볼 수 있습니다. 단, 추락 위험이 있는 급경사 암벽지역이 있기 때문에 우회로 안내판을 반드시 잘 확인하셔야 합니다.'
    else if(stringresults1==='01011') round2verdict='대동문 코스', description = '난이도 하, 새내기, 경사 Y, 역사유적 Y<br>(백련공원지킴터-백련사-진달래능선-대동문)<br><br>대동문코스는 진달래능선을 따라 북한산의 세 봉오리 백운대, 인수봉 그리고 만경대를 볼 수 있는 탐방 코스입니다. 능선에 오르면 세 봉오리와 산 너머의 도선사가 보입니다. 전체적으로 완만하지만, 오르막길이 조금 길게 이어지는 부분이 있습니다. (약 500m) 능선 곳곳에는 진달래가 있어 4월에는 분홍색의 아름다운 경관을 감상하실 수 있습니다. 또한 소요시간이 1시간 10분 정도로 짧은 편에 속해 산을 처음 오르는 사람도 큰 무리 없이, 많은 시간을 투자 하지 않아도 북한산의 아름다움을 볼 수 있는 코스입니다.'
    else if(stringresults1==='01010') round2verdict='우이암 코스', description = '난이도: 직장인코스 (하), 길이: 3km, 소요 시간: 1시간 30분<br><br>우이암 코스는 북한산 등산코스 중 시간이 부족한 현대인들이 가볍게 즐기기 좋은 등산코스로 도봉산 탐방지원센터에서 시작하여 북한산 국립공원으로 들어가는 코스입니다 ‘우이암’이라는 이름은 봉우리의 모습이 소의 귀를 닮았다고 붙여진 이름인데요. 경사까지 완만하기 때문에 초보자들에게 가장 많이 추천되는 코스이기도 합니다. 우이암 전망대에 오르면 도봉산과 오봉, 북한산을 한꺼번에 볼 수 있는데 도심과 자연이 어우러진 풍경이 장관을 이룬답니다. 우이암 코스를 오르면 능원사, 천진사 등의 사찰을 만날 수도 있고 특히 봄에는 철쭉, 진달래 등 연분홍색 꽃이 만발하고, 가을에는 아름다운 단풍을 만나볼 수 있습니다. 단, 추락 위험이 있는 급경사 암벽지역이 있기 때문에 우회로 안내판을 반드시 잘 확인하셔야 합니다.'
    else if(stringresults1==='00011') round2verdict='우이암 코스', description = '난이도: 직장인코스 (하), 길이: 3km, 소요 시간: 1시간 30분<br><br>우이암 코스는 북한산 등산코스 중 시간이 부족한 현대인들이 가볍게 즐기기 좋은 등산코스로 도봉산 탐방지원센터에서 시작하여 북한산 국립공원으로 들어가는 코스입니다 ‘우이암’이라는 이름은 봉우리의 모습이 소의 귀를 닮았다고 붙여진 이름인데요. 경사까지 완만하기 때문에 초보자들에게 가장 많이 추천되는 코스이기도 합니다. 우이암 전망대에 오르면 도봉산과 오봉, 북한산을 한꺼번에 볼 수 있는데 도심과 자연이 어우러진 풍경이 장관을 이룬답니다. 우이암 코스를 오르면 능원사, 천진사 등의 사찰을 만날 수도 있고 특히 봄에는 철쭉, 진달래 등 연분홍색 꽃이 만발하고, 가을에는 아름다운 단풍을 만나볼 수 있습니다. 단, 추락 위험이 있는 급경사 암벽지역이 있기 때문에 우회로 안내판을 반드시 잘 확인하셔야 합니다.'
    else if(stringresults1==='00010') round2verdict='보국문 코스', description = '난이도 하, 직장인, 가을 Y, 경사 N<br>(정릉탐방지원센터-넓적바위-깔딱고개-보국문)<br><br> 보국문코스는 북한산성의 보국문까지 오르는 코스입니다. 보국문에서 서울시 전경을 보기 좋고,  가는 길에 정릉계곡이 있어 여름에 시원한 느낌을 주며, 가을에는 아름다운 단풍이 보국문 근처에 많아 가을에도 좋은 코스입니다. 경사가 완만하고 돌계단이 많은 것이 특징입니다. 시간은 1시간 20분 정도로 바쁜 직장인들도 주말에 왔다 갈 수 있는 수준의 코스입니다. 산을 오르기 힘든 특정 장애인들을 배려해 휠체어가 무리없이 갈 수 있는 장애인편의탐방로(무장애탐방로)와 등산화를 잊어버리거나 없는 사람에게 도움이 되는 북한산탐방안내소가 있습니다.'
    document.getElementById("question").innerHTML = round2verdict+'를 추천합니다!';
    document.getElementById("question").style.margin='0';
    document.getElementById("description").innerHTML = description;
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