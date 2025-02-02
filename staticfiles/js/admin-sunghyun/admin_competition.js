// function addList() {
//     // 1. 추가할 값을 button 태그에서 읽어온다
//     const addValue = document.querySelector(".relative-category").value;

//     // 1-2 . 기존 초기화면들을 숨김처리
//     const initialScreen = document.querySelector(".justify-center");
//     initialScreen.style.display = "none";

//     // 2. 추가할 li element 생성
//     const li = document.createElement("li");

//     // 2-1. li에 id 속성 추가
//     li.setAttribute("id", addValue);
//     li.style.width = "944px";
//     li.style.height = "83px";
//     li.style.borderStyle = "solid";
//     li.style.borderBottomWidth = "1px";
//     li.style.justifyContent = "space-between";
//     li.style.alignItems = "center";
//     li.style.minHeight = "80px";
//     li.style.display = "flex";
//     li.style.borderColor = "#f3f3f4";

//     // 2-2. li에 text node 추가
//     const textNode = document.createTextNode(addValue);
//     li.appendChild(textNode);

//     // 2-3. input 태그 생성 및 설정
//     const input = document.createElement("input");
//     input.setAttribute("type", "text");
//     input.classList.add("px-op"); // 클래스명 추가

//     // 3. CSS 속성 적용
//     input.style.outline = "2px solid transparent";
//     input.style.outlineOffset = "2px";
//     input.style.paddingLeft = "20px";
//     input.style.paddingRight = "20px";
//     input.style.width = "378px";
//     input.style.height = "48px";
//     input.style.fontWeight = "400";
//     input.style.fontSize = "14px";
//     input.style.lineHeight = "20px";
//     input.style.color = "#1d1d1e";
//     input.style.border = "0.5px solid gray";
//     input.style.borderRadius = "5px";
//     input.style.fill = "#1d1d1e";
//     input.placeholder = "공모전 및 대회 제목을 입력해주세요.";

//     li.appendChild(input);

//     // 2-5 버튼 태그 생성 및 설정
//     const button = document.createElement("button");
//     button.setAttribute("type", "button");
//     button.classList.add("delete"); // 클래스명 추가

//     // 버튼 태그 CSS 속성 적용
//     button.style.backgroundImage =
//         'url("/staticfiles/css/admin-sunghyun/images/trash.jpg")';
//     button.style.width = "50px";
//     button.style.height = "50px";
//     button.style.border = "#e6e6e7";
//     button.style.cursor = "pointer";
//     button.style.borderColor = "#e6e6e7";

//     // 삭제 버튼에 클릭 이벤트 리스너 추가
//     button.addEventListener("click", function () {
//         // 부모인 li 엘리먼트를 찾아서 삭제
//         const liToRemove = this.parentElement;
//         liToRemove.remove();

//         // 모든 li 태그가 삭제되면 초기화면을 다시 보여줌
//         const allLiTags = document.querySelectorAll(".mt-center li");
//         if (allLiTags.length === 0) {
//             initialScreen.style.display = "block";
//         }
//     });

//     li.appendChild(button);

//     // 4. 생성된 li를 div에 추가
//     const colCenter = document.querySelector(".mt-center");
//     colCenter.style.flexDirection = "column";
//     colCenter.appendChild(li);
// }

function addList() {
    // 1. 추가할 값을 button 태그에서 읽어온다
    const addValue = document.querySelector(".relative-category").value;

    // 1-2 . 기존 초기화면들을 숨김처리
    const initialScreen = document.querySelector(".justify-center");
    initialScreen.style.display = "none";

    // 2. 추가할 li element 생성
    const li = document.createElement("li");

    // 2-1. li에 id 속성 추가
    li.setAttribute("id", addValue);
    li.style.width = "944px";
    li.style.height = "83px";
    li.style.borderStyle = "solid";
    li.style.borderBottomWidth = "1px";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.minHeight = "80px";
    li.style.display = "flex";
    li.style.borderColor = "#f3f3f4";

    // 2-2. li에 text node 추가
    // const textNode = document.createTextNode(addValue);
    // li.appendChild(textNode);

    // 2-3. input 태그 생성 및 설정
    const button = document.createElement("a");
    button.setAttribute("type", "a");
    button.classList.add("px-op"); // 클래스명 추가

    // 3. CSS 속성 적용
    button.style.outline = "2px solid transparent";
    button.style.outlineOffset = "2px";
    button.style.paddingLeft = "20px";
    button.style.paddingRight = "20px";
    button.style.width = "378px";
    button.style.height = "48px";
    button.style.textAlign = "center";
    button.style.backgroundColor = "black";
    button.style.fontWeight = "400";
    button.style.fontSize = "14px";
    button.style.lineHeight = "20px";
    button.style.color = "white";
    button.style.border = "0.5px solid black";
    button.style.borderRadius = "5px";
    button.style.fill = "#1d1d1e";
    button.textContent = "공모전 작성 하러가기";
    button.href = "/templates/html/admin_sunghyun/admin_competition.html";

    li.appendChild(button);

    // 2-5 버튼 태그 생성 및 설정
    const button1 = document.createElement("button");
    button1.setAttribute("type", "button");
    button1.classList.add("delete"); // 클래스명 추가

    // 버튼 태그 CSS 속성 적용
    button1.style.backgroundImage =
        'url("/staticfiles/css/admin-sunghyun/images/trash.jpg")';
    button1.style.width = "50px";
    button1.style.height = "50px";
    button1.style.border = "#e6e6e7";
    button1.style.cursor = "pointer";
    button1.style.borderColor = "#e6e6e7";

    // 삭제 버튼에 클릭 이벤트 리스너 추가
    button1.addEventListener("click", function () {
        // 부모인 li 엘리먼트를 찾아서 삭제
        const liToRemove = this.parentElement;
        liToRemove.remove();

        // 모든 li 태그가 삭제되면 초기화면을 다시 보여줌
        const allLiTags = document.querySelectorAll(".mt-center li");
        if (allLiTags.length === 0) {
            initialScreen.style.display = "block";
        }
    });

    li.appendChild(button1);

    // 4. 생성된 li를 div에 추가
    const colCenter = document.querySelector(".mt-center");
    colCenter.style.flexDirection = "column";
    colCenter.appendChild(li);
}
