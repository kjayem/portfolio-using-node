//HTML() 함수는 우리의 HTML template일 뱉어냄.
//showProjects() 함수는 data/projects를 보고 우리의 current projects를 뱉어냄.

module.exports = {
  htmlHome:function(currentTitle, about, projects, photos, contact){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../css/main.css">
      <title>${currentTitle}</title>
    </head>
    
    <body>
      ${currentTitle}
      ${about}
      ${projects}
      ${photos}
      ${contact}
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


