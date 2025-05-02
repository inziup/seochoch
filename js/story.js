const storyList = [
    { id: 'storyAudio00', content: '<audio src="./sound/audio00.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody001', content: '<span class="center-line"><b>[게임유의사항]</b></span><br>'},
    { id: 'pageStoryBody002', content: '<div style="text-align: left;">본 게임은 ‘서초구청소년상담복지센터’와 상담버스 서포터즈 ‘마음지기 2기’가 함께 개발한 게임이며, 학교폭력 예방 교육 목적으로 제작되었습니다.<br> 또한, 본 게임에 등장하는 등장인물 및 스토리는 모두 픽션이며, 특정 인물이나 사건, 단체 및 조직, 배경 등은 <span class="red-word"><b>실제와 어떠한 관련도 없음</b></span>을 알려드립니다.<dvi>'},


    // 01.이제는 어엿한 중학생, 서빛나
    { id: 'storyAudio01', content: '<audio src="./sound/audio01.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody010', content: '<h3>이제는 어엿한 중학생, 서빛나</h3>' },
    { id: 'pageStoryBody011', content: '<p>“빛나야!”내 이름은 ‘서빛나’다.<br><br>“응, 왜 불러?”<br>중학교에 입학한 지 한 달이 지났다.<br><br>“같이 음악실 가자!”<br>친구들과 어울리느라,<br>새 학기에 적응하느라<br>하루가 어떻게 지나가는지도 모르겠다.<br><br>중학교 때는 친구들과 쉽게 친해졌는데,<br>중학교는 왜 이렇게 다가가기 어려운 거지?<br>오늘도 수업시간이 너무 길게 느껴졌다.</p>' },
    { id: 'pageStoryBody012', content: '<img src="./img/img_011.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody013', content: '<p>딩동댕동 딩동댕동<br><br>“5교시에는 다른 선생님이 오셔서 ‘학교폭력 예방 교육’을 해주실 거야. 떠들지 않고, 잘 들어야 한다.” <br><br>학교폭력… 예방 교육?<br>갑자기 가슴이 두근거렸다.<br><br>“4반 여러분, 학교폭력에 대한 교육은 많이 받았죠?<br>장난과 학교폭력은 어떻게 구분할 수 있을까요?<br>친구가 괴로워한다면, 그게 바로 학교폭력입니다.”<br></p>' },
    { id: 'pageStoryBody014', content: '<img src="./img/img_012.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody015', content: '<p>맞아, 폭력은 나쁜 거야.<br>나도 잘 알고 있어.<br>근데 왜 떨리는 거지?<br>손을 가만히 두지를 못하겠어.<br><br>.<br>.<br>.<br><br>집에 도착하자마자 침대에 누웠다.<br>다른 날보다 특히 피곤한 하루였다.<br><br>5교시에 학교폭력 예방 교육을 받을 때 선생님에게 집중하기 어려웠던 것 같아.<br>왜일까?<br><br>깊은 생각에 빠진 빛나, 너무 피곤한 탓에 눈이 점점 감겼다.<br></p>' },
    { id: 'pageStoryBody016', content: '<img src="./img/img_013.png" alt="storyImage" class="img-fluid">' },

    // 02.꿈의 조각을 찾아서
    { id: 'storyAudio02', content: '<audio src="./sound/audio02.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody020', content: '<h3>꿈의 조각을 찾아서</h3>' },
    { id: 'pageStoryBody021', content: '<p>“기분이 찝찝한 것 같아?”<br>어디에선가 낯선 목소리가 들려왔다.<br><br>“여기야, 여기! 좀 더 위를 봐!”<br></p>' },
    { id: 'pageStoryBody022', content: '<img src="./img/img_021.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody023', content: '<p>요정인가?<br>근데 뭔가 쉼표처럼 생겼네…<br>아직 꿈인가?<br><br>“꿈 맞아! 여긴 빛나, 네 꿈 속이야.”<br><br>“난 분명 마음 속으로 말했는데, 어떻게 아는 거야?”<br><br>“나는 ‘마음이’라고 해!<br>늘 네 마음 속에 존재하고 있어.<br>나는 ‘마음이’니까,<br>당연히 네 마음을 알 수 있는 거야!”<br><br>“그러니까, 여긴 꿈이고 너는 ‘마음이’라고?<br>그런데 갑자기 내 앞에 나타난 이유가 뭐야?”<br><br>“네가 간절히 변화하고 싶어 하는 것 같았어.”<br><br>“내가? 간절히 변화하고 싶어한다고?<br>난 잘 모르겠는데…”<br><br>“나는 네 마음이 느껴져.<br>오늘 학교에서 이상할 정도로 가슴이 답답하지 않았어?<br>빛나, 너는 과거에 학교폭력을 당하는 친구를 도와주지 못한 기억 때문에 힘들어하고 있어.”<br><br>그런가?<br>아직은 쉽게 판단할 수 없었다.<br><br>“잘 모르겠다면, 한 번 고민해봐도 좋아.<br>나와 함께 떠나볼래?<br>네가 과거에 친구를 바라보기만 했다면, 이번에는 방어자로 변화할 수 있을 거야.”<br><br>“방어자?”<br>“방어자는 학교폭력을 당하는 친구를 도와 학교폭력을 막는 사람을 말해.<br>방관자와는 반대 개념이지.<br><br>방어자가 되기 위해서는 4단계가 있어.<br><br><span class="yello-word">인지, 다짐, 생각, 행동</span><br>4개의 꿈의 조각을 모두 맞추고, 황금열쇠를 얻게 되는 순간, 너는 방어자가 될 수 있을 거야!”<br></p>' },
    { id: 'pageStoryBody024', content: '<img src="./img/img_022.png" alt="storyImage" class="img-fluid">' },


    // 03. 최책감의 기억_POPUP
    { id: 'pageStoryBody031', content: '<p>순간 과거의 일들이,<br>내가 돕지 못했던 ‘그 친구’에 대한 기억이 스쳐 지나갔다.<br>그래, 나는 죄책감 때문에 힘들어 하고 있던 거였어.<br>나는 이제 변화하고 싶어.<br>마음이와 함께 방어자가 되겠어!<br></p>' },
    { id: 'pageStoryBody032', content: '<img src="./img/img_031.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody033', content: '<img src="./img/img_032.png" alt="POP이미지" class="img-fluid">' },
    { id: 'pageStoryBody034', content: '<h4>‘죄책감의 기억’<br>을 획득했습니다!</h4>' },


    // 04. 과거로 돌아가다(노트찾기)
    { id: 'storyAudio04', content: '<audio src="./sound/audio04.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody040', content: '<h3>과거로 돌아가다</h3>' },
    { id: 'pageStoryBody041', content: '<p>으, 머리가 어지러워.<br>어디로 가고 있는 거지?</p>' },
    { id: 'pageStoryBody042', content: '<img src="./img/img_041.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody043', content: '<p>정신을 차려 보니<br>익숙한 교실 책상과 사물함,<br>같이 웃고 떠들던 친구들의 얼굴이 보였다. <br>분명 방금 전까지 마음이와 함께 있었는데…<br>나 정말로 돌아갔구나.<br><br>그때, 누군가 주먹으로 책상을 내리쳤는지<br>꽝 소리가 났다.<br>나는 놀라서 소리가 난 방향으로 시선을 돌렸다.<br><br>“야, 좋은 말로 할 때 내놓으랬지.<br>우리 오늘 코노 가기로 했다니까?”<br><br>“얘 거진가 봐. 꼴랑 3천원이 없어?”<br><br>친구들이 한 명을 둘러싸고<br>돈을 달라고 협박하고 있었다.<br><br></p>' },
    { id: 'pageStoryBody044', content: '<img src="./img/img_042.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody045', content: '<p>뭐지?<br>어디서 많이 본 얼굴들인데…<br><br>수연이와 지민이.<br>우리 반에서 친구들을 자주 괴롭히던 아이들.<br>그리고 고개를 숙이고 있는 케이.<br>1년 전 내가 교실에서 지켜보았던 바로 그 상황이다.<br><br>“나 지금 진짜 돈 없어…<br>너네 지난번에도 빌려 갔잖아.”<br>“아, 진짜 갚겠다고 했잖아.<br>넌 친구한테 이 정도도 못해주냐?”<br><br>큰일이다.<br>케이를 도와야 할 것 같은데,<br>어떻게 해야 할지 모르겠어.<br><br>.<br>.<br>.<br><br>“빛나야, 친구가 곤란해하는 것 같지?<br>표정이 안 좋아 보이고, 힘들어 보이는데<br>우리가 도와주어야 할 것 같아.<br>그러려면 먼저 조각을 찾아야 하는 거 기억하지?”<br><br>응, 당연하지.<br>조각을 찾게 도와줘.<br><br>“이렇게 상대의 돈이나 금품을 요구하면서<br>빼앗으려고 하는 행위는 학교 폭력의 어떠한 유형일까?”<br><br></p>' },
    { id: 'pageStoryBody046', content: '<img src="./img/img_043.png" alt="storyImage" class="img-fluid">' },


    // 05. 첫번째 학교폭력 (문제)
    { id: 'pageStoryBody050', content: '<h3>첫 번째 학교폭력 유형을 맞혀보자</h3>' },
    { id: 'pageStoryBody051', content: '<p>상대의 돈이나 금품 등의 물건을 강제로<br>빼앗으려 하는 행위는 무엇일까요?</p>' },
    { id: 'pageStoryBody052', content: '<p>케이의 노트를 잘 살펴보자.<br>무언가 적혀 있을지도 몰라!</p>' },


    // 06. 과거로 돌아가다2(테이블찾기)
    { id: 'pageStoryBody061', content: '<img src="./img/img_061.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody062', content: '<p>지민이는 케이에게 어깨동무를 하고,<br>씨익 웃으며 교실 뒤편을 보았다.<br><br>“그러면 우리끼리 재미있는 거 할까?<br>너 저기 뒤로 가서 서봐.<br>챌린지 찍기 좋은 자리 같거든.”<br><br>케이는 하고 싶지 않다며<br>무릎에 올려둔 손을 꽉 쥐었다.<br>하지만 수연이와 지민이는<br>눈을 치켜뜨곤 한참 동안 말없이 케이를 지켜보았다.<br><br>케이는 자리에서 일어나<br>느리고 힘없게 뒤편으로 향했다.<br><br>“인터넷에는 올리면 안 돼…<br>너희만 봐야 돼…”<br><br>“안 올릴게, 안 올려!<br>이제 됐지? 얼른 춰봐.”<br><br>곧이어 음악 소리가 들렸고,<br>케이는 몸을 작게 움직이기 시작했다.<br>그 모습을 나와 친구들은 지켜보면서<br>어딘가 마음이 무거웠던 것 같다.<br><br>이러한 케이의 상황처럼,<br>상대가 원치 않는 행위 또는 행동을 강제로 하게 하거나<br>자발적으로 하게끔 유도하는 행위는 무엇일까?<br><br></p>' },
    { id: 'pageStoryBody063', content: '<img src="./img/img_062.png" alt="storyImage" class="img-fluid">' },


    // 07. 두번째 학교폭력 (문제)
    { id: 'pageStoryBody070', content: '<h3>두번째 학교폭력 유형을 맞혀보자.</h3>' },
    { id: 'pageStoryBody071', content: '<p>상대가 원치 않는 행위 또는 행동을 강제로 하게 하거나 자발적으로 하게끔 유도하는 행위는 무엇일까?<br></p>' },
    { id: 'pageStoryBody072', content: '<p>사물함 위 숫자카드를 보고<br>암호표에 맞게 해독해보자.</p>' },


    // 08. 집에돌아온 후
    { id: 'storyAudio08', content: '<audio src="./sound/audio08.mp3" autoplay controls></audio>'},
    { id: 'pageStoryBody080', content: '<h3>집에 돌아온 후</h3>' },
    { id: 'pageStoryBody081', content: '<p>과거로 돌아온 첫날,<br>하교 후 가방을 바닥에 내려놓았다.<br>아무래도 아까 학교에서 그 상황은<br>심상치 않아 보였어.<br>.<br>.<br>.<br><br>휴대폰 너머로 카톡 알림음이 울리기 시작했다.<br></p>' },
    { id: 'pageStoryBody082', content: '<img src="./img/img_081.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody083', content: '<p>채팅방을 확인한 나는 놀랄 수밖에 없었다.<br>반 아이들이 다 같이 있는 톡방에서의 일이었다.<br><br>이건 진짜 아닌 것 같아.<br>내가 봐도 너무 당황스럽고 무서워…<br>어떻게 해야 하지?<br><br>“빛나야, 너도 봤듯이 잘못된 상황인 거 알겠지?<br>이번 문제를 맞히면<br>첫 번째 꿈의 조각인 ‘인지’ 조각을 얻을 수 있어.<br><br>위와 같이 인터넷, 사이버 상에서의 <br>학교폭력은 어떤 유형일까?”<br><br></p>' },
    { id: 'pageStoryBody084', content: '<img src="./img/img_082.png" alt="storyImage" class="img-fluid">' },


    // 09. 세번째 학교폭력 (문제)    
    { id: 'pageStoryBody090', content: '<h3>세번째 학교폭력 유형을 맞혀보자.</h3>' },
    { id: 'pageStoryBody091', content: '<p>인터넷, 온라인 상에서의 형식을 통해 상대에게<br>불쾌감, 폭력, 강요 등을 행사하는 것은 무엇일까요?<br></p>' },
    { id: 'pageStoryBody092', content: '<p>벽면에 붙어있는 한글 포스터에 수상한 이모티콘이 보인다.<br>이모티콘이 붙은 자음과 모음을 합쳐볼까?<br></p>' },


    // 10. 인지 획득_POPUP    
    { id: 'storyAudio10', content: '<audio src="./sound/audio10.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody101', content: '<p>“우와! ‘인지’ 조각을 획득했구나!<br>정말 축하해!<br><br>문제를 풀면서 알게 되었겠지만,<br>학교폭력은 실제로 여러 가지 다양한 형태로 나타나,<br><br>신체폭력, 언어폭력, 금품갈취, 강요, 따돌림, 성폭력, 사이버폭력<br>크게 7가지 유형으로 나누는데<br>한 가지 유형만 나타나기도 하지만,<br>여러 유형이 함께 나타나는 경우가 많아.<br><br>학교폭력이 다양한 형태로 나타난다는 것,<br>그리고 폭력의 유형들이 섞여서 일어난다는 걸 기억한다면,<br>분명 학교폭력 유형을 이해하는데 도움이 되겠지?”<br></p>' },
    { id: 'pageStoryBody102', content: '<img src="./img/img_101.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody103', content: '<h4>첫 번째 꿈의 조각인<br>‘인지’ 조각을 획득했습니다!</h4>'},


    // 11. 그럴만한 이유
    { id: 'storyAudio11', content: '<audio src="./sound/audio11.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody110', content: '<h3>그럴만한 이유가 있었을 거야.</h3>' },
    { id: 'pageStoryBody111', content: '<p>저녁이 되어 식탁 앞에 앉았다.<br>숟가락을 들고 밥알을 느리게 씹는 동안<br>채팅방 너머의 케이의 표정이 어떨지 떠올랐다.<br>가슴이 답답해 아무래도 체한 것 같았다.<br><br>양치를 하고 방으로 돌아와 침대에 누웠다.<br>내가 좋아하는 김치볶음밥과 와플까지 먹었는데도<br>만족스러운 식사가 아니었다.<br><br></p>' },
    { id: 'pageStoryBody112', content: '<img src="./img/img_111.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody113', content: '<p>몸을 옆으로 누워 핸드폰을 켰다.<br>톡방에는 여전히 케이가 남아있었다.<br>가슴이 욱신거렸다.<br><br>이 기분은 뭘까?<br><br>교실에서 지민이 무리가 틱톡을 찍을 때<br>케이는 거기에 끼고 싶지 않은 게 분명했어.<br>곤란해하는 케이를 억지로 영상에 끌어들인 거야.<br>그건 폭력이었어.<br>그런데도 나는 나서서 말리지 못했어…<br>케이의 방황하는 눈을 읽었는데도<br>나는 책상에 앉아 조용히 있었어.<br>왜 나는 용기를 내지 못했을까…<br><br></p>' },
    { id: 'pageStoryBody114', content: '<img src="./img/img_112.png" alt="storyImage" class="img-fluid">' },


    // 12. 방관했던이유(선택문제)
    { id: 'pageStoryBody120', content: '<h3>방관했던 이유를 맞혀보자.</h3>' },
    { id: 'pageStoryBody121', content: '<p>케이가 방황하는 눈을 읽었는데도<br>빛나가 책상에 조용히 앉아 있었던 이유는 무엇일까요?<br><br>다음 중 방관했던 이유 3가지를 선택하세요.<br></p>' },
    { id: 'pageStoryBody122', content: '<img src="./img/img_121.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody123', content: '<p>빛나라면 어떤 마음이 들었을 것 같아?<br>다시 한번 잘 생각해보세요.<br></p>' },


    // 13. 다짐조각획득
    { id: 'storyAudio13', content: '<audio src="./sound/audio13.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody131', content: '<img src="./img/img_131.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody132', content: '<p>너의 마음을 들여다 보아주어서 고마워!<br>케이를 바로 돕지 못한 너의 마음 이해해.<br>괴롭힘의 또 다른 표적이 되고 싶지 않았거나,<br>어떻게 대처해야 할지 몰랐거나,<br>너 혼자서 상황을 해결할 수 없다고 생각했겠구나.<br><br>케이를 그저 바라볼 수 밖에 없었다고 해서<br>자신을 너무 탓하지 않았으면 좋겠어. <br>폭력이란 건 무서운 거니까…<br><br>빛나야!<br>너를 위해 준비한 규칙이 하나 있어!<br>우리 한 번 같이 읽고 마음에 새겨볼까? <br><br></p>' },
    { id: 'pageStoryBody133', content: '<img src="./img/img_132.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody134', content: '<img src="./img/img_133.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody135', content: '<h4>두 번째 꿈의 조각인<br>‘다짐’ 조각을 획득했습니다!</h4>'},

    // 14. 친구의 마음은 어땠을까?    
    { id: 'storyAudio14', content: '<audio src="./sound/audio14.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody140', content: '<h3>친구의 마음은 어땠을까?</h3>' },
    { id: 'pageStoryBody141', content: '<img src="./img/img_141.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody142', content: '<p>5계명을 읽고 나니<br>몸에 어떤 기운이 흐르는 것 같았다.<br>그건 아마도 케이와 비슷한 친구들을<br>지켜주고 싶은 마음에서 생긴 것일 거다.<br><br>케이가 학교를 졸업하고<br>앞으로 살아갈 시간 속에서 <br>어떤 두려움을 마주하게 될지 생각해보게 되었다.<br><br></p>' },
    { id: 'pageStoryBody143', content: '<img src="./img/img_142.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody144', content: '<p>지민이나 민수, 수연이 같은 친구들과<br>멀어지게 되더라도<br>다른 또래를 만날 때<br>그날의 기억을 잊을 수 있을까?<br><br>만약 내가 케이였다면,<br>휴대폰을 보며 울고 싶을 때,<br>얼마나 도움이 필요했을까?<br><br>나는 목이 말라 물을 마시려<br>방에서 나가려고 하는데<br>문에 붙여두었던 포스터가<br>평소와 달라졌음을 알아챘다.<br></p>'},


    // 15. 케이의 마음에 공감해보자.(화살표문제)
    { id: 'pageStoryBody150', content: '<h3>케이의 마음을 공감해보자.</h3>' },
    { id: 'pageStoryBody151', content: '<p>피해친구의 마음은 어떤 마음이었을지 공감하며,<br>적절한 감정단어를 찾아보자!<br><br>마음이 요정이 있는 곳을 출발점으로<br>피해친구의 마음과 적절한 감정을 따라<br>방향키를 눌러보자!<br></p>' },
    { id: 'pageStoryBody152', content: '<p>다시 한번 공감해보세요.</p>' },


    // 16. 생각조각 획득(팝업)
    { id: 'storyAudio16', content: '<audio src="./sound/audio16.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody161', content: '<img src="./img/img_161.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody162', content: '<p>네가 케이의 마음을 헤아려보며 고른 카드들이야!<br><br>케이는 지민이 무리에게 억지로 영상을 찍게 되어<br>수치스럽고 도망치고 싶었을 거야.<br>제대로 거부하지도 못했으니<br>무력하고, 나약해서 자신이 미웠을 거야.<br>영상을 올리지 말라고 했는데도<br>결국엔 놀림의 대상이 되었으니 억울하고<br>고통스러웠겠지.<br>빛나야, 네가 케이였다면 내일 학교에 오고 싶을까?<br>.<br>.<br>.<br><br></p>' },
    { id: 'pageStoryBody163', content: '<img src="./img/img_162.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody164', content: '<p>아니, 아프다고 하고 결석하고 싶었을 거야.<br>채팅방을 나가지도 못하고<br>감옥에 갇힌 듯 자유를 빼앗겨 억울했을 거야.<br>죽고 싶을 만큼 고통스러운데 아무도 도와주지 않으니<br>외롭고 슬펐을 거야.<br><br>눈앞에서 괴롭힘을 당하는데도<br>침묵을 지키는 친구들에게<br>내가 도움을 요청할 수 있었을까?<br>내 마음을 털어놓을 수 있는<br>한 명의 친구라도 필요했을 거야.<br>.<br>.<br>.<br><br>빛나야,<br>네 마음에서 케이를 돕고 싶다는 소리가 들려.<br>누군가의 미소를 되찾아주려는 의지는<br>너의 이름처럼 반짝이는 거야.<br><br></p>' },
    { id: 'pageStoryBody165', content: '<img src="./img/img_163.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody166', content: '<p>괴롭힘 당하는 친구를 돕는 건<br>사실 그렇게 어려운 게 아니야.<br><br>혼자 있을 때 먼저 다가가주고,<br>함께 이야기 나누고,<br><br>좋은 일도 슬픈 일도 공유하며<br>나란히 걸어주는 거야.<br><br>케이의 감정을 들여다봐 주어서 진심으로 고마워.<br>이제 케이를 도우러 가볼까?<br><br></p>' },
    { id: 'pageStoryBody167', content: '<img src="./img/img_164.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody168', content: '<h4>세 번째 꿈의 조각인<br>‘생각’ 조각을 획득했습니다!</h4>' },


    // 17. 행동으로 보여
    { id: 'storyAudio17', content: '<audio src="./sound/audio17.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody170', content: '<h3>행동으로 보여줄 거야.</h3>' },
    { id: 'pageStoryBody171', content: '<p>“좋아! 빛나야,<br>그럼 이제 케이를 지키러 갈까?<br>우리 행동으로 보여주자!”<br><br>응, 케이를 웃게 해주고 싶어.<br><br>눈을 감았다 뜨니<br>나는 교실 맨 뒤 사물함 앞에 서 있었다.<br><br>그리고 케이는 여전히<br>지민이 무리에게 둘러싸여 있었다.<br><br></p>' },
    { id: 'pageStoryBody172', content: '<img src="./img/img_171.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody173', content: '<p>“케이야~<br>우리 오늘 인생네컷 찍기로 했거든?<br>5천원만 빌려줄래?”<br><br>“나 오늘은 진짜 돈 없어…”<br><br>수연은 한숨을 크게 쉬며 케이를 흘겨보곤,<br>지민이에 이어 협박을 한다.<br><br>“야, 5천원 주기가 그렇게 어려워?<br>그래, 그럼 주지마.<br><br>대신 우리랑 같이 놀자.” <br>민수는 신난 얼굴로 케이에게 어깨 동무를 한다.<br><br>“오~ 재밌겠는데?<br>케이야, 우리 또 틱톡 찍을까?<br>이번엔 네가 가운데에 있으면<br>진짜 잘 나올 것 같은데?”<br><br>케이는 고개를 숙이며 표정을 찡그렸다.<br><br>나, 이제 짐심으로 케이를 돕고 싶어.<br>힘들어하는 걸 지켜보고만 있을 순 없어.<br><br>그런데 나는 여전히 케이를<br>어떻게 도울 수 있는지 잘 모르겠어…<br><br></p>' },
    { id: 'pageStoryBody174', content: '<img src="./img/img_172.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody175', content: '<p>“빛나야, 케이의 필통을 봐봐.<br>쪽지 하나가 놓여있는 것 같은데?”<br><br></p>' },
    { id: 'pageStoryBody176', content: '<img src="./img/img_173.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody177', content: '<p>“편지에 적힌 암호를 보고, 사물함의 자물쇠를 풀어 보자!<br>그럼, 마지막 ‘행동’ 조각까지 획득할 수 있을 거야.”<br></p>' },


    // 18. 7가지 보석을 찾아보자_문답
    { id: 'pageStoryBody180', content: '<h3>7가지 보석을 찾아보자!</h3>' },
    { id: 'pageStoryBody181', content: '<p>빛나는 방어자 행동이 적힌 7가지 보석을 찾아보자!<br>영문자물쇠를 풀어서 보석함을 확인해봐!<br>*잘 모르겠다면 ‘힌트’를 적어보자.<br></p>' },
    { id: 'pageStoryBody182', content: '<img src="./img/img_18.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody183', content: '<p>게시판 속 영어 포스터를 잘 보자.<br><br>곳곳에 이모티콘이 붙어있는 것 같은데…?<br>순서대로 조합해볼까?<br><br>‘돕다’라는 뜻을 가진 영어 단어야.<br></p>' },


    // 19. 행동조각 획득
    { id: 'storyAudio191', content: '<audio src="./sound/audio191.mp3" autoplay controls></audio>' },
    { id: 'storyAudio192', content: '<audio src="./sound/audio192.mp3" autoplay controls></audio>' },
    { id: 'pageStoryBody191', content: '<img src="./img/img_191.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody192', content: '<p>“빛나야, 네가 할 수 있는 7가지 행동들이야.<br>앞으로 학교폭력을 목격했는데,<br>어떻게 행동해야 할지 모르겠을 때는<br>이 7가지 행동을 골라서 지켜줄 수 있을 거야!<br><br></p><p style="color: red;">피해 친구의 이야기 들어보기, 어른에게 알리기,<br>티 내지 않고 도와주기, 따뜻한 말 건네기 등</p><p><br>케이와 같이 학교폭력 피해 친구를<br>돕는 방법에는 여러 가지가 있어. <br><br>할 수 있겠지?<br>앞으로 너에게 맞은 도움행동으로 힘이 되어주면 돼.<br><br>빛나야, 너는 지금까지<br></p><p style="color: red;">‘인지’, ‘다짐’, ‘생각’, ‘행동’</p><p> 조각을 모두 획득했고,<br>멋진 방어자로 성장했어.<br>네가 누군가를 도울 수 있는 사람이 되어서 진심으로 기뻐.”<br><br>고마워.<br>마음이 네가 아니었다면<br>나는 여전히 케이를 돕지 못했다는 죄책감에 <br>친구들과 떳떳하게 지낼 수 없었을 거야.<br><br>“이제 슬슬 꿈에서 깰 시간이야.<br>7개의 행동 요령을 네 안에 새겼으면 좋겠어.<br>학교 폭력은 또 언제, 어디서 발생할 지 모르니까!”<br><br>“응, 꼭 기억할게.<br>이제부터는 학교폭력 </p><p style="color: red;">방어자</p><p>로서,<br>용기 있게 행동하는 사람이 될 거야.<br>내 안에서 지켜봐 줘, 마음아!”<br><br>“약속할게. 나는 네 마음 속에 있는 존재니까.<br>다음에 또 볼 수 있었으면 좋겠다!”<br><br></p>' },
    { id: 'pageStoryBody193', content: '<p>‘띠리리링 띠리리링’<br>그렇게, 알람 소리가 시끄럽게 울려 꿈에서 깨어났다.<br><br></p>' },
    { id: 'pageStoryBody194', content: '<img src="./img/img_192.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody195', content: '<h4>네 번째 꿈의 조각인<br>‘행동’ 조각을 획득했습니다!</h4>' },


    // 20.   
    { id: 'storyAudio20', content: '<audio src="./sound/audio20.mp3" autoplay controls></audio>' }, 
    { id: 'pageStoryBody201', content: '<p>번쩍, 눈을 떠보니 천장이 보인다.<br><br>“뭐지? 다 꿈이었나?”<br><br>너무 생생한 기억에 잠시 멍해진 ‘빛나’는<br>자세를 바로 세우고, 벽에 몸을 기대어 앉는다.<br>그런데 손에는 느껴지는 무언가.<br>“황금 열쇠?”<br><br></p>' },
    { id: 'pageStoryBody202', content: '<img src="./img/img_201.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody203', content: '<p>꿈의 조각 4개를 모두 획득한 ‘빛나’는<br>황금 열쇠의 주인공이 되었고,<br>이제는 더 이상 학교 폭력 피해 친구를<br>외면하지 않는 ‘방어자’가 되었다.<br><br>이게 얼마만인지 상쾌한 발걸음으로 등굣길을 나선다.<br>‘실천’하는 용기를 가득 안고,<br>한 걸음 한 걸음.<br><br></p>' },
    { id: 'pageStoryBody204', content: '<img src="./img/img_202.png" alt="storyImage" class="img-fluid">' },
    { id: 'pageStoryBody205', content: '<p>같은 반 친구를 향한 작은 관심과 도움으로<br>큰 힘이 되어줄 수 있다는 사실,<br>어쩌면 따듯한 말 한마디가 학교 폭력을 예방하는<br>첫걸음이 될 수 있답니다!<br><br>오늘부터 ‘빛나는’ 방어자가 된 여러분을 축하하며,<br></p><p style="color: red;">마지막 미션까지 모두 완료하는 친구에게<br>‘황금선물’을 드려요!<br></p>' },

    // 21.
    { id: 'pageStoryBody211', content: '<p>주변 어른 또는 전문적인 도움을 필요로 한다면?<br><br>도움 행동 플러스+</p>' },
    { id: 'pageStoryBody212', content: '<img src="./img/img_211.png" alt="storyImage" class="img-fluid">' },
]