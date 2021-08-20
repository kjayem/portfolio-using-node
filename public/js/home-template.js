module.exports = {
  htmlHome:function(currentTitle, contact){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../css/main.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <title>${currentTitle}</title>
    </head>
    
    <body>
      <header>
        <nav id="nav-container">
          <div id="nav-left">
              <div>
                  <h1><a href="#" class="translatable">About</a></h1>
                  <h1><a href="#" class="translatable">Projects</a></h1>
                  <h1><a href="/memories/choose-country" class="translatable" id="memories">Memories</a></h1>
                  <h1><a href="#" class="translatable">Shop</a></h1>
              </div>
          </div>
          
          <div id="nav-right">
              <div>
                  <h1>
                      <a href="#" id="change-language" class="current-lang-english">EN &nbsp;<span class="flag-icon flag-icon-us"></span></a>
                  </h1>
                  <h1><a href="#" class="translatable">Login</a></h1>
                  <h1><a href="#" class="translatable">Notice</a></h1>
              </div>
          </div>
        </nav>
      </header>
      <section>
      
      </section>
      <footer>
      ${contact}
      </footer>
    </body>
    
    </html>
    `;
  }
}

// ,showProjects:function(filelist){
//   var projects = `<section id="project-section">
//   <h1>Current Projects</h1>`;
//   var i = 0;
//   //filelist는 우리가 현재 data에 가지고 있는 프로젝트 리스트이다. 
//   // console.log(filelist);
//   while(i < filelist.length){
//     projects = projects + `<li><a href="/projects/${filelist[i]}">${filelist[i]}</a></li>`;
//     i = i + 1;
//   }
//   projects = projects+'</ul></section>';
//   // projects는 우리의 project를 다 나열해준 HTML 코드자체이다. 
//   // console.log(projects);
//   return projects;
// }


