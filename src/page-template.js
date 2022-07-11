// create the projects section
const generateProjects = projectsArr => {
  return `
      ${projectsArr
      .map(({ name, id, roles, email, misc }) => {
        return `
        <div class="col-sm-6 col-lg-4 mb-4">
         <div class="card">
          <div class="card-body">
          <p class="card-title">${roles}</p> 
          <p class="card-title">${name}</p>                
          <p class="card-text">ID: ${id}   
          <p class="card-text">Email: ${email}</p>
          <p class="card-text">
          ${(() => {
            if (roles === 'Manager') {
              return ` 
               Office: ${misc}
               `
            } else if (roles === 'Engineer') {
              return `
                GitHub: <a href="https://github.com/${misc}" target="_blank">${misc}</a>
                `
            } else if (roles === 'Intern') {
              return `
                School: ${misc}
                `
            }
          })()}
          </p>
         </div>
         </div>
         </div>
        `;
      })
      .join('')}
  `;
};

// TODO: get current year
// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { employee, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center">
        <h1>Team</h1>
      </div>
    </header>
    <main>
    <div class="row" data-masonry='{"percentPosition": true }'>    
      ${generateProjects(employee)}
    </div>
    </main>
    <footer>
      <h3>&copy;2022 by ${employee[0].name}</h3>
    </footer>

    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    <script async src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"></script>

  </body>
  </html>
  `;
};