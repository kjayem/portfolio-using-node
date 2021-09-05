//supported translations
var language = {
    "us":{
        "nav about": "About",
        "nav projects": "Projects",
        "nav memories" : "Memories",
        "nav shop": "Shop",
        "nav login": "Login",
        "nav notice" : "Notice",
    },
    "kr":{
        "nav about": "소개",
        "nav projects": "프로젝트",
        "nav memories" : "사진",
        "nav shop": "제품",
        "nav login": "로그인",
        "nav notice" : "공지",
    }
}

var langButton = document.getElementById('change-language');
langButton.addEventListener('click', changeLang);

function changeLang() {
    var textToTranslate = document.querySelectorAll(".translatable")
    var koreanCategory = [];
    var key = Object.keys(languageSupport.us);
    var englishCategory = [];
    // var englishKey = Object.keys(language.us);

    if (langButton.classList.contains('current-lang-english')) {
        for (var i = 0; i < key.length; i++) {
            koreanCategory.push(languageSupport.kr[key[i]]);
            console.log(koreanCategory);
            textToTranslate[i].innerHTML = koreanCategory[i];
        }
        langButton.className = 'current-lang-korean';
        langButton.innerHTML = 'KR &nbsp;<span class="flag-icon flag-icon-kr"></span>';
    } else if (langButton.classList.contains('current-lang-korean')) {
        for (var i = 0; i < key.length; i++) {
            englishCategory.push(languageSupport.us[key[i]]);
            console.log(englishCategory);
            textToTranslate[i].innerHTML = englishCategory[i];
        }
        langButton.className = 'current-lang-english';
        langButton.innerHTML = 'EN &nbsp;<span class="flag-icon flag-icon-us"></span>';
    }
}



