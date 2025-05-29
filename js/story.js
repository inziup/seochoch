const storyList = [
    { id: `pageStoryBody001`, content: `<p class="story-text-box"><b>[ 게임 미리보기 ]</b> <br>어엿한 중학생이 된지 한달이 된 서빛나,<br> 학교생활이 도무지 즐겁지 않은 것 같다.<br><br>학교폭력예방 교육을 듣고 그날 밤, 빛나의 마음이 쿵쿵 울렸다.<br> 왜 이렇게 가슴이 무거운 걸까? <br>하지만 점점 무거워지는 눈꺼풀을 이길 수 없다. <br> 빛나는 결국 꿈나라로 떠나는데.. <br><br> 꿈속에 나타난 귀여운 요정과 함께 마음을 들여다보고, <br>진정한 친구의 의미를 생각해보게 되는데... <br>빛나의 용감한 '방어자 되기 대작전!' 우리 모두 함께 떠나볼까?</p>` },
    {
        id: `pageStoryBody002`, content: `<div class="main-text-box" font-color="black" >
        <ul><li>[게임 유의사항]</li></ul>
        <ul><li>1.</li><li>본 게임은 서초구청소년상담복지센터 상담버스 서포터즈 '마음지기'가 함께 개발한 참여형 학교폭력예방 공감교육입니다.<br></li></ul>
        <ul><li>2.</li><li>게임 제한 시간은 20분입니다. 시간이 지나면 게임은 즉시 종료됩니다.<br></li></ul>
        <ul><li>3.</li><li>본 프로그램은 한국청소년상담복지개발원의 '나는 학교폭력 방어자입니다' 자료를 참고하여 제작하였습니다.<br></li></ul>
        <ul><li><br> · 기획 및 편집: 박수아, 김서현, 김유진, 김정우<br><br> 본 게임은 '서초구청소년상담복지센터'와 상담버스 서포터즈 '마음지기'가 함께 개발한 게임이며, 학교폭력 예방 교육 목적으로 제작되었습니다. 또한, 본 게임에 등장하는 등장인물 및 스토리는 모두 픽션이며, 특정 인물이나 사건, 단체 및 조직, 배경 등은 실제와 어떠한 관련도 없음을 알려드립니다.<br><br>
        게임 내 삽입된 BGM 및 이미지는 저작권법에 의하여 보호되며, 저작권자의 허가없이 사용을 불허합니다.<dvi></li></ul>` },


    // 01.이제는 어엿한 중학생, 서빛나
    { id: `pageStoryBody010`, content: `<h3>이제는 어엿한 중학생, 서빛나</h3><h6>중학교 입학과 동시에 학교폭력예방 교육을 받게 되는데</h6><hr /><br>` },
    { id: `pageStoryBody011`, content: `<p>"빛나야!"<br>내 이름은 '서빛나'다.<br><br>"응, 왜 불러?"<br>중학교에 입학한 지 한 달이 지났다.<br><br>"같이 음악실 가자!"<br>친구들과 어울리느라,<br>새 학기에 적응하느라<br>하루가 어떻게 지나가는지도 모르겠다.<br><br>초등학교 때는 친구들과 쉽게 친해졌는데,<br>중학교는 왜 이렇게 다가가기 어려운 걸까?<br>오늘도 수업시간이 너무 길게 느껴졌다.</p>` },
    { id: `pageStoryBody012`, content: `<img src="./img/img_011.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody013`, content: `<p>♬딩동댕동 딩동댕동♬<br><br>"5교시에는 다른 선생님이 오셔서 '학교폭력 예방 교육'을 해주실 거야.<br> 떠들지 않고 귀 쫑긋하고 잘 들어야 한다." <br><br>학교폭력… 예방 교육?<br>갑자기 가슴이 쿵쿵 뛰기 시작했다.<br><br>"여러분,<br>학교폭력에 대한 교육은 많이 받았죠?<br>장난과 학교폭력은 어떻게 구분할 수 있을까요?<br>친구가 괴로워한다면, 그게 바로 학교폭력입니다."<br></p>` },
    { id: `pageStoryBody014`, content: `<img src="./img/img_012.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody015`, content: `<p>맞아, 폭력은 나쁜 거야.<br>나도 잘 알고 있어.<br>근데 왜 떨리는 거지?<br>가슴이 조여오고 심장이 빨리 뛰기 시작했다.<br><br>.<br>.<br>.<br><br>집에 도착하자마자 침대에 퍽 하고 쓰러졌다.<br>오늘은 평소보다 훨씬 더 피곤한 하루였다.<br>5교시 학교폭력 예방 교육 때<br>선생님 말씀이 자꾸 귓가를 맴돌았다.<br>도대체 왜일까?<br><br>깊은 생각에 빠진 빛나,<br>너무 피곤한 탓에 눈이 점점 감겼다.<br></p>` },
    { id: `pageStoryBody016`, content: `<img src="./img/img_013.png" alt="storyImage" class="img-fluid">` },

    // 02.꿈의 조각을 찾아서
    { id: `pageStoryBody020`, content: `<h3>꿈의 조각을 찾아서</h3><h6>방어자가 되기 위한 마음여행, 함께 해보지 않을래?</h6><hr /><br>` },
    { id: `pageStoryBody021`, content: `<p>"뭔가 찜찜한 기분이 드는 거지?"<br>갑자기 어디에선가 낯선 목소리가 들려왔다.<br><br>"여기야, 여기!<br>좀 더 위를 봐!"<br></p>` },
    { id: `pageStoryBody022`, content: `<img src="./img/img_021.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody023`, content: `<p>요정인가?<br>근데 뭔가 쉼표처럼 생겼네…<br>아직 꿈인가?<br><br>"맞아! 꿈이야! 여긴 빛나, 네 꿈속이라고!"<br><br>"분명 속으로만 생각했는데,<br>어떻게 내 마음을 읽은 거야?!"<br><br>"나는 '마음이'라고 해!<br>항상 네 마음속에 살고 있지.<br>'마음이'니까,<br>당연히 네 속마음을 훤히 들여다볼 수 있는 거야!"<br><br>"잠깐, 여긴 꿈이고 넌 '마음이'라고??<br>근데, 갑자기 내 앞에 툭 나타난 이유가 뭐야?"<br><br>"네가 마음속 깊이 변화하고 싶어하는 게 느껴졌어."<br><br>"내가? 변화하고 싶다고?<br>난 전혀 모르겠는데..."<br><br>"나는 네 진짜 마음이 느껴진다고.<br>오늘 학교에서 가슴이 쿵쿵 뛰고<br>숨이 막히는 것 같지 않았어?"<br><br>빛나, 너는 예전에 괴롭힘 당하는 친구를<br>그냥 지켜만 봤던 기억 때문에 괴로워하고 있어."<br><br>정말 그런가?<br>아직은 쉽게 판단하기 어려웠다.<br><br>"잘 모르겠다면, 함께 찾아보자!<br>나랑 같이 마음여행을 떠날래?<br>예전엔 친구를 그냥 바라만 봤다면,<br>이번엔 용감한 방어자로 변신할 수 있을 거야."<br><br>"방어자?"<br><br>"방어자는 괴롭힘 당하는 친구를 지켜주고<br>학교폭력을 막아내는 진짜 영웅이야.<br>방관자랑은 정반대지!<br><br>방어자가 되려면 4가지 단계를 거쳐야 해.<br>인지, 다짐, 생각, 행동<br>4개의 꿈 조각을 모두 모으고,<br>황금열쇠를 손에 넣는 순간,<br>넌 진정한 방어자로 거듭날 거야!"<br><br>` },
    { id: `pageStoryBody024`, content: `<img src="./img/img_022.png" alt="storyImage" class="img-fluid">` },


    // 03. 최책감의 기억_POPUP
    { id: `pageStoryBody031`, content: `<p>번쩍! 과거의 장면들이,<br>내가 도와주지 못했던 '그 친구'의 얼굴이 머릿속을 스쳐 지나갔다.<br><br>맞아, 나는 그때의 죄책감 때문에 괴로워하고 있었던 거야.<br>이젠 달라지고 싶어.<br>마음이랑 함께 진짜 방어자가 될 거야!<br></p>` },
    { id: `pageStoryBody032`, content: `<img src="./img/img_031.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody033`, content: `<img src="./img/img_032.png" alt="POP이미지" class="img-fluid">` },
    { id: `pageStoryBody034`, content: `<h4>'죄책감의 기억'<br>을 획득했습니다!</h4>` },


    // 04. 과거로 돌아가다(노트찾기)
    { id: `pageStoryBody040`, content: `<h3>과거로 돌아가다</h3><h6>마음이를 따라 꿈속으로 들어온 나.<br>1년 전 우리 반 교실로 돌아갔다.</h6><hr /><br>` },
    { id: `pageStoryBody041`, content: `<p>윽, 머리가 빙글빙글 돈다.</p>` },
    { id: `pageStoryBody042`, content: `<img src="./img/img_041.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody043`, content: `<p>눈을 번쩍 떠보니<br>낯익은 교실의 책상과 사물함,<br>함께 깔깔거리던 친구들 얼굴이 보였다.<br>분명 방금까지 마음이랑 있었는데...<br>진짜로 과거로 돌아온 거구나.<br><br>그때, 누군가 책상을 주먹으로 내려치는<br>쾅! 하는 소리가 났다.<br>나는 깜짝 놀라 소리 나는 쪽으로 고개를 돌렸다.<br><br>"야, 좋은 말로 할 때 내놓으랬지.<br>우리 오늘 코노 가기로 했다니까?"<br><br>"얘 거진가봐. 꼴랑 3천원이 없어?"<br><br>친구들이 한 명을 둘러싸고<br>돈을 내놓으라며 윽박지르고 있었다.<br><br></p>` },
    { id: `pageStoryBody044`, content: `<img src="./img/img_042.png" alt="storyImage" class="img-fluid">` },
    {
        id: `pageStoryBody045`, content: `<p>뭐지?<br>어디서 많이 본 얼굴들인데...<br><br>수연이와 지민이.<br>우리 반에서 친구들을 괴롭히기로 유명한 아이들.<br>그리고 고개를 푹 숙이고 있는 케이.<br>1년 전, 내가 그냥 지켜만 봤던 바로 그 상황이 눈앞에서 펼쳐지고 있다.<br><br>"나 지금 진짜 돈 없어...<br>너네 지난번에도 빌려 갔잖아."<br><br>"아, 진짜 갚겠다고 했잖아.<br>친구끼리 이 정도도 못 도와주냐?"<br><br>큰일이다. 케이를 도와야 할 것 같은데,<br>어떻게 해야할지 모르겠어.<br>.<br>.<br>.<br>빛나야, 저기 친구 표정이 어둡네!<br>무슨 고민이 있는 것 같았어.<br>우리가 도와주어야 할 것 같아.<br>그러려면 먼저 조각을 찾아야 하는 거 기억하지?<br><br>응, 당연하지.<br>조각을 찾게 도와줘.<br><br><b>"이렇게 상대의 돈이나 금품을 요구하면서
    빼앗으려고 하는 행위는 학교폭력의 어떠한 유형일까?"</b></p>` },
    { id: `pageStoryBody046`, content: `<img src="./img/img_043.png" alt="storyImage" class="img-fluid">` },


    // 05. 첫번째 학교폭력 (문제)
    { id: `pageStoryBody050`, content: `<h3>첫 번째 학교폭력 유형을 맞혀보자</h3>` },
    { id: `pageStoryBody051`, content: `<p>상대의 돈이나 금품 등의 물건을<br>강제로 빼앗으려 하는 행위는 무엇일까요?</p>` },
    { id: `pageStoryBody052`, content: `<p>케이의 노트를 잘 살펴보자.<br>무언가 적혀 있을지도 몰라!</p>` },


    // 06. 과거로 돌아가다2(테이블찾기)
    { id: `pageStoryBody061`, content: `<img src="./img/img_061.png" alt="storyImage" class="img-fluid">` },
    {
        id: `pageStoryBody062`, content: `<p>지민이는 케이의 어깨를 팔로 감싸고,<br>씨익 웃으며 교실 뒤쪽을 슬쩍 쳐다봤다.<br><br>"우리끼리 재밌는 거 한번 해볼까?<br>너 저기 뒤로 가서 서봐.<br>
    챌린지 영상 찍기 딱 좋은 자리였어."<br><br>케이는 하기 싫다는 눈빛으로<br>무릎 위의 손을 꽉 쥐었다.<br>그런데 수연이와 지민이가<br>눈을 크게 뜨고 케이를 노려봤다.<br>케이는 천천히 일어나<br>힘없이 교실 뒤편으로 걸어갔다.<br><br>"인터넷에는 절대 올리면 안 돼...<br>너희만 봐야 돼..."<br><br>"안 올릴게, 안 올려!<br>이제 됐지? 얼른 춰봐."<br><br>음악이 나오자마자<br>케이는 몸을 조금씩 움직이기 시작했다.<br>그 모습을 보면서 나와 친구들은<br>마음이 무거웠던 것 같았다.<br><br><br><b>이러한 케이의 상황처럼,<br>상대가 원치 않는 행위 또는 행동을 강제로 하게 하거나<br>자발적으로 하게끔 유도하는 행위는 무엇일까?<br></b></p>` },
    { id: `pageStoryBody063`, content: `<img src="./img/img_062.png" alt="storyImage" class="img-fluid">` },


    // 07. 두번째 학교폭력 (문제)
    { id: `pageStoryBody070`, content: `<h3>두 번째 학교폭력 유형을 맞혀보자.</h3>` },
    { id: `pageStoryBody071`, content: `<p>상대가 원치 않는 행위 또는 행동을 강제로 하게 하거나 자발적으로 하게끔 유도하는 행위는 무엇일까?<br></p>` },
    { id: `pageStoryBody072`, content: `<p>사물함 위 숫자카드를 보고 암호표에 맞게 해독해보자.</p>` },


    // 08. 집에돌아온 후
    { id: `pageStoryBody080`, content: `<h3>집으로 돌아온 후</h3><h6>하교 후 마음이 더욱 심란해진 나,<br>단체 채팅방을 확인하니 케이의 영상이 올라와 있었고 웃음거리가 되고 있었다.</h6><hr />` },
    { id: `pageStoryBody081`, content: `<p>과거로 돌아온 첫날,<br>하교 후 가방을 바닥에 내려놓았다.<br>아무래도 아까 학교에서 그 상황은<br>심상치 않아 보였어.<br>.<br>.<br>.<br><br>휴대폰 너머로 카톡 알림음이 울리기 시작했다.<br></p>` },
    { id: `pageStoryBody082`, content: `<img src="./img/img_081.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody083`, content: `<p>채팅방을 확인한 나는 놀랄 수밖에 없었다.<br>반 아이들이 다 같이 있는 톡방에서의 일이었다.<br><br>이건 진짜 아닌 것 같아.<br>내가 봐도 너무 당황스럽고 무서워…<br>어떻게 해야 하지?<br><br>"빛나야, 너도 봤듯이 잘못된 상황인 거 알겠지?<br>이번 문제를 맞히면<br>첫 번째 꿈의 조각인 '인지' 조각을 얻을 수 있어.<br><br><b>위와 같이 인터넷, 사이버 상에서의 학교폭력은 어떤 유형일까?"</b><br><br></p>` },
    { id: `pageStoryBody084`, content: `<img src="./img/img_082.png" alt="storyImage" class="img-fluid">` },


    // 09. 세번째 학교폭력 (문제)    
    { id: `pageStoryBody090`, content: `<h3>세 번째 학교폭력 유형을 맞혀보자.</h3>` },
    { id: `pageStoryBody091`, content: `<p>인터넷, 온라인 상에서의 형식을 통해 상대에게<br>불쾌감, 폭력, 강요 등을 행사하는 것은 무엇일까요?<br></p>` },
    { id: `pageStoryBody092`, content: `<p>벽면에 붙어있는 한글 포스터에 수상한 이모티콘이 보인다.<br>이모티콘이 붙은 자음과 모음을 합쳐볼까?<br>ㅅㅇㅂㅍㄹ<br></p>` },


    // 10. 인지 획득_POPUP    
    { id: `pageStoryBody101`, content: `<p>우와! '인지' 조각을 획득했구나!<br>정말 축하해!<br><br>문제를 풀면서 알게 되었겠지만,<br>학교폭력이 정말 여러 모습으로 나타난다는 걸<br>문제를 풀면서 알게 됐지?<br><br><b>신체폭력, 언어폭력, 금품갈취, 강요, 따돌림, 성폭력, 사이버폭력</b><br>크게 7가지 유형으로 나누는데<br>한 가지만 일어날 때도 있지만,<br>여러 유형이 같이 나타나는 경우가 많았지.<br><br>학교폭력이 다양한 형태로 나타난다는 것,<br>그리고 여러 폭력이 한꺼번에 일어난다는 걸 기억한다면,<br>분명 학교폭력 유형을 이해하는데 도움이 되겠지?<br><br></p>` },
    { id: `pageStoryBody102`, content: `<img src="./img/img_101.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody103`, content: `<h4>첫 번째 꿈의 조각인<br>'인지' 조각을 획득했습니다!</h4>` },


    // 11. 그럴만한 이유
    { id: `pageStoryBody110`, content: `<h3>그럴만한 이유가 있었을 거야.</h3><h6>피해친구를 돕지 못한 나의 마음을 살펴보자.</h6><hr />` },
    { id: `pageStoryBody111`, content: `<p>저녁이 되어 식탁 앞에 앉았다.<br>숟가락으로 밥알을 하나씩 느릿느릿 씹는 동안<br>채팅방 너머의 케이의 표정이 어떨지 떠올랐다.<br>가슴이 답답해 아무래도 체한 것 같았다.<br><br>양치를 끝내고 방으로 들어와 침대에 풀썩 누웠다.<br>내가 제일 좋아하는 김치볶음밥에 와플까지 먹었는데도<br>전혀 맛있게 느껴지지 않았다.<br><br></p>` },
    { id: `pageStoryBody112`, content: `<img src="./img/img_111.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody113`, content: `<p>몸을 옆으로 뒤척여 핸드폰을 켰다.<br>톡방에는 여전히 케이가 남아있었다.<br>가슴 한쪽이 계속 아파왔다.<br><br>이 기분은 뭘까.<br><br>교실에서 지민이 무리가 톡톡을 찍을 때<br>케이는 절대 하기 싫어했던 게 분명했어.<br>원치 않는 케이를 억지로 영상에 끌어들인 거였어.<br>그건 완전 폭력이었어.<br>그런데도 나는 나서서 막지 못했어...<br>케이의 도움을 청하는 눈빛을 봤는데도<br>나는 책상에 앉아 꼼짝도 안 했어.<br>왜 나는 용기를 내지 못했던 걸까...<br><br></p>` },
    { id: `pageStoryBody114`, content: `<img src="./img/img_112.png" alt="storyImage" class="img-fluid">` },


    // 12. 방관했던이유(선택문제)
    { id: `pageStoryBody120`, content: `<h3>방관했던 이유를 맞혀보자.</h3>` },
    { id: `pageStoryBody121`, content: `<p>케이가 방황하는 눈을 읽었는데도<br>빛나가 책상에 조용히 앉아 있었던 이유는 무엇일까요?<br><br>다음 중 방관했던 이유 3가지를 선택하세요.<br></p>` },
    { id: `pageStoryBody122`, content: `<img src="./img/img_121.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody123`, content: `<p>빛나라면 어떤 마음이 들었을 것 같아?<br>다시 한번 잘 생각해보세요.<br></p>` },


    // 13. 다짐조각획득
    { id: `pageStoryBody131`, content: `<img src="./img/img_131.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody132`, content: `<p>네 진짜 마음을 보여줘서 고마워!<br>케이를 바로 돕지 못한 너의 마음 이해해.<br>너도 괴롭힘 당할까봐 두려웠거나,<br>어떻게 대처해야 할지 몰랐거나,<br>네 힘만으론 이 문제를 해결할 수 없다고 느꼈을 거야.<br><br>케이를 도울 수 없었다고 자책하지는 마.<br>폭력 상황은 정말 무서웠을테니까...<br><br>빛나야!<br>널 위해 특별한 규칙을 준비했어!<br>같이 읽어보면서 마음 속에 담아볼까?<br><br></p>` },
    { id: `pageStoryBody133`, content: `<img src="./img/img_132.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody134`, content: `<img src="./img/img_133.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody135`, content: `<h4>두 번째 꿈의 조각인<br>'다짐' 조각을 획득했습니다!</h4>` },

    // 14. 친구의 마음은 어땠을까?    
    { id: `pageStoryBody140`, content: `<h3>친구의 마음은 어땠을까?</h3><h6>피해 친구, 케이의 마음을 공감해 보자.</h6><hr />` },
    { id: `pageStoryBody141`, content: `<img src="./img/img_141.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody142`, content: `<p>5계명을 다 읽자<br>온몸에 따뜻한 힘이 솟아나는 걸 느꼈다.<br>그건 아마 케이처럼 힘들어하는 친구들을<br>꼭 도와주고 싶은 마음이 만든 거였을 거야.<br><br>케이가 학교를 졸업하고<br>앞으로의 긴 인생에서<br>어떤 상처를 안고 살아가게 될지 마음이 아팠다.<br><br></p>` },
    { id: `pageStoryBody143`, content: `<img src="./img/img_142.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody144`, content: `<p>지민이나 민수, 수연이 같은 친구들과<br>멀어지게 되더라도<br>다른 또래를 만날 때 그날의 기억을 잊을 수 있을까?<br><br>내가 만약 케이였다면,<br>휴대폰 속 그 영상을 보며 혼자 울 때,<br>얼마나 누군가의 손길이 필요했을까?<br><br>목이 타서 물을 마시러<br>방문을 열려는 순간<br>내가 붙여둔 포스터가<br>뭔가 달라진 걸 발견했다.<br><br></p>` },


    // 15. 케이의 마음에 공감해보자.(화살표문제)
    { id: `pageStoryBody150`, content: `<h3>케이의 마음을 공감해 보자.</h3>` },
    { id: `pageStoryBody151`, content: `<p>피해 친구의 마음은 어떤 마음이었을지 공감하며,<br>적절한 감정단어를 찾아보자!<br><br>마음이 요정이 있는 곳을 출발점으로<br>피해친구의 마음과 적절한 감정을 따라<br>방향키를 눌러보자!<br></p>` },
    { id: `pageStoryBody152`, content: `<p>다시 한번 공감해 보세요.</p>` },


    // 16. 생각조각 획득(팝업)
    { id: `pageStoryBody161`, content: `<img src="./img/img_161.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody162`, content: `<p>네가 케이의 마음을 헤아려보며 고른 카드들이야!<br><br>케이는 지민이 무리에게 억지로 영상을 찍게 되어<br>수치스럽고 도망치고 싶었을 거야.<br>제대로 거부하지도 못했으니<br>무력하고 나약해서 자신이 미웠을 거야.<br>영상을 올리지 말라고 했는데도<br>결국엔 놀림의 대상이 되었으니 억울하고 고통스러웠겠지.<br>빛나야, 네가 만약 케이였다면 내일 학교에 가고 싶을까?<br>.<br>.<br>.<br><br></p>` },
    { id: `pageStoryBody163`, content: `<img src="./img/img_162.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody164`, content: `<p>아니, 배가 아프다고 거짓말하고 학교 안 가고 싶었을 거야.<br>그 채팅방은 나갈 수도 없고<br>마치 철창 속에 갇힌 것처럼 꼼짝할 수 없어 화나고 억울했을 거야 <br><br>눈앞에서 괴롭힘 당하는데도<br>아무 말 없는 친구들에게<br>내가 어떻게 도움을 청할 수 있었을까?<br>.<br>.<br>.<br>빛나야, 네 마음속에서 케이를 도와주고 싶은 목소리가 들려.<br>누군가의 웃음을 다시 찾아주려는 그 마음은<br>네 이름처럼 환하게 빛나고 있어.<br><br></p>` },
    { id: `pageStoryBody165`, content: `<img src="./img/img_163.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody166`, content: `<p>괴롭힘당하는 친구를 돕는 건<br>사실 그렇게 어려운 게 아니야.<br><br>외로울 때 곁에 있어주고,<br>같이 대화하고,<br><br>기쁨도 슬픔도 함께 나누며<br>옆에서 걸어주는 거야.<br><br>케이의 마음을 이해해줘서 정말 고마워.<br>이제 케이를 도우러 가볼까?<br><br></p>` },
    { id: `pageStoryBody167`, content: `<img src="./img/img_164.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody168`, content: `<h4>세 번째 꿈의 조각인<br>'생각' 조각을 획득했습니다!</h4>` },


    // 17. 행동으로 보여
    { id: `pageStoryBody170`, content: `<h3>행동으로 보여줄 거야.</h3><h6>방어자 역할을 실천으로 옮길 용기가 생긴 빛나, 변화가 있을까?</h6><hr />` },
    { id: `pageStoryBody171`, content: `<p>"좋아! 빛나야,<br>그럼 이제 케이를 지키러 갈까?<br>우리 말보다 실천으로 보여주자!"<br><br>"응, 케이한테 웃음 돌려주고 싶어."<br>.<br>.<br>.<br>눈을 감았다 뜨니<br>나는 교실 맨 뒤 사물함 앞에 서 있었다.<br><br>그리고 케이는 여전히<br>지민이 무리에게 둘러 싸여 있었다.<br><br></p>` },
    { id: `pageStoryBody172`, content: `<img src="./img/img_171.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody173`, content: `<p>"케이야~<br>우리 오늘 인생네컷 찍기로 했거든?<br>5천원만 빌려줄래?"<br><br>"나 오늘은 진짜 돈 없어..."<br><br>수연이는 큰 한숨을 내쉬며 케이를 째려보더니, <br><br>"야 5천원 정도 빌려주기가 그렇게 힘들어?<br>좋아, 그럼 안 줘도 돼.<br>대신 우리랑 같이 놀아줘."<br><br>민수는 신난 얼굴로 케이에게 어깨동무를 한다.<br><br>"오~ 재밌겠는데?<br>케이야, 우리 또 톡톡 찍을까?<br>이번엔 네가 가운데에 있으면<br>진짜 잘 나올 것 같은데?"<br><br></p>` },
    { id: `pageStoryBody174`, content: `<img src="./img/img_172.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody175`, content: `<p>케이는 고개를 푹 숙이고 얼굴을 찌푸렸다.<br><br>나, 이제 진심으로 케이를 돕고 싶어.<br>힘들어하는 걸 지켜보고만 있을 순 없어.<br><br>그런데 나는 여전히 케이를 어떻게 도울 수 있는지 잘 모르겠어...<br><br></p>` },
    { id: `pageStoryBody176`, content: `<img src="./img/img_173.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody177`, content: `<p>"빛나야, 케이의 필통을 봐봐.<br>쪽지 하나가 놓여있는 것 같은데?"<br><br>"편지에 적힌 암호를 보고, 사물함의 자물쇠를 풀어 보자!<br>그럼, 마지막 '행동' 조각까지 획득할 수 있을 거야."<br><br></p>` },


    // 18. 7가지 보석을 찾아보자_문답
    { id: `pageStoryBody180`, content: `<h3>7가지 보석을 찾아보자!</h3>` },
    { id: `pageStoryBody181`, content: `<p>빛나는 방어자 행동이 적힌 7가지 보석을 찾아보자!<br>영문 자물쇠를 풀어서 보석함을 확인해봐!<br></p>` },
    { id: `pageStoryBody182`, content: `<img src="./img/img_181.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody183`, content: `<p>게시판 속 영어 포스터를 잘 보자.<br><br>곳곳에 이모티콘이 붙어있는 것 같은데…?<br>순서대로 조합해볼까?<br><br>'돕다'라는 뜻을 가진 영어 단어야.<br></p>` },


    // 19. 행동조각 획득
    { id: `pageStoryBody191`, content: `<img src="./img/img_191.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody192`, content: `<p>"빛나야, 네가 할 수 있는 7가지 행동들이야.<br>앞으로 학교폭력을 목격했는데,<br>어떻게 행동해야 할지 모르겠을 때는<br>이 7가지 행동을 골라서 지켜줄 수 있을 거야!<br><br><b>피해 친구의 이야기 들어보기, 어른에게 알리기,<br>티 내지 않고 도와주기, 따뜻한 말 건네기 등</b><br>케이와 같이 학교폭력 피해 친구를 돕는 방법에는 여러 가지가 있어.<br><br>할 수 있겠지?<br>앞으론 너에게 맞는 도움행동으로 힘이 되어주면 돼.<br><br>빛나야, 너는 지금까지<br><b>'인지', '다짐', '생각', '행동'</b> 조각을 모두 획득했고,<br>멋진 방어자로 성장했어.<br>네가 누군가를 도울 수 있는 사람이 되어서 진심으로 기뻐."<br><br>"고마워, 마음이 네가 아니었다면<br>나는 여전히 케이를 돕지 못했다는 죄책감에<br>친구들과 떳떳하게 지낼 수 없었을 거야."<br><br>"이제 곧 잠에서 깰 시간이야.<br>7가지 도움 방법을 마음속에 담아뒀으면 해.<br>학교폭력은 언제 어디서든 일어날 수 있으니까!"<br><br>"응, 꼭 기억할게.<br>이제부터는 학교폭력 방어자로서,<br>용기 있게 행동하는 사람이 될 거야.<br>내 마음속에서 함께해 줘, 마음아!"<br><br>"약속할게. 난 항상 네 마음속에 있을 거니까.<br>다음에 또 만날 수 있기를 바랄게!"<br><br>♬띠리리링 띠리리링♬<br><br>그렇게, 알람 소리가 시끄럽게 울려 꿈에서 깨어났다.<br><br></p>` },
    { id: `pageStoryBody194`, content: `<img src="./img/img_192.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody195`, content: `<h4>네 번째 꿈의 조각인<br>'행동' 조각을 획득했습니다!</h4>` },


    // 20.   
    { id: `pageStoryBody200`, content: `<h3>오늘부터 '빛나'는 황금열쇠의 주인공</h3><h6>단잠에서 깨어난 빛나, 손에는 황금 열쇠가 쥐어져있다!</h6><hr />` },
    { id: `pageStoryBody201`, content: `<p>번쩍, 눈을 떠보니 천장이 보인다.<br><br>"어? 전부 꿈이었던 거야?"<br><br>너무도 실감나는 꿈에 잠시 얼떨떨한 '빛나'는<br>몸을 일으켜 벽에 등을 기대고 앉는다.<br><br>그런데 손바닥에 뭔가 만져진다.<br>"황금열쇠?"<br><br></p>` },
    { id: `pageStoryBody202`, content: `<img src="./img/img_201.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody203`, content: `<p>꿈의 조각 4개를 모두 획득한 '빛나'는 황금 열쇠의 주인공이 되었고,<br>이젠 더는 학교폭력 당하는 친구를 모른 척하지 않는 '방어자'가 되었다.<br><br>오랜만에 상쾌한 마음으로 등굣길에 나선다.<br>'실천'하는 용기를 가득 안고, 한 걸음 한 걸음.<br><br></p>` },
    { id: `pageStoryBody204`, content: `<img src="./img/img_202.png" alt="storyImage" class="img-fluid">` },
    { id: `pageStoryBody205`, content: `<p>같은 반 친구를 향한 작은 관심과 도움으로도<br> 큰 힘이 되어줄 수 있다는 사실,<br><br>어쩌면 따뜻한 말 한마디가<br>학교폭력을 예방하는 첫걸음이 될 수 있답니다!<br><br>오늘부터 '빛나는' 방어자가 된 여러분을 축하하며,<br><b>마지막 미션까지 모두 완료하는 친구에게 '황금선물'을 드려요!</b><br><br></p>` },

    // 21.
    { id: `pageStoryBody211`, content: `<h3>도움 행동 플러스+</h3><h6>주변 어른 또는 전문적인 도움을 필요로 한다면?</h6><hr /><p>도움 방법 안내</p>` },
    { id: `pageStoryBody212`, content: `<img src="./img/img_211.png" alt="storyImage" class="img-fluid">` },
]