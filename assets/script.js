const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//console.log(teamMembers);

//------------------------------------------------------------------------

// OUTPUT TEMPORANEO CON <LI> IN <UL>

// Selezione elemento di output
const listaTeam = document.querySelector(".team-container");

let items = "";
// Tirare fuori ogni singolo oggetto
for (let i = 0; i < teamMembers.length; i++) {
  let membroTeam = teamMembers[i];
  //console.log(membroTeam);

  // Estrapolare i valori delle varie proprietà dell'oggetto (1 metodo)
  // let name = membroTeam.name;
  // let role = membroTeam.role;
  // let email = membroTeam.email;
  // let img = membroTeam.img;

  // Estrapolare i valori delle varie proprietà dell'oggetto (2 metodo)
  const { name, role, email, img } = membroTeam;
  
  //console.log(name, role, email, img);

  items += `
    <div class="team-card">

      <div class="card-image">
        <img src="${img}" alt="" height="80px">
      </div>

      <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p><br>
        <p class="email-bianchi">${email}</p>
      </div>

    </div>
  `

  console.log(items); 
}


// OUTPUT
listaTeam.innerHTML = items;
