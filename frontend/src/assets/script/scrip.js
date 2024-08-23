document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const menu = document.getElementById('menu');

    const toggleHamburgerIcon = () => {
        if (window.innerWidth <= 720) {
            hamburgerIcon.style.display = 'flex';
        } else {
            hamburgerIcon.style.display = 'none';
            menu.style.display = 'none'; 
        }
    };

    const toggleMenu = () => {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    };

    window.addEventListener('resize', toggleHamburgerIcon);
    hamburgerIcon.addEventListener('click', toggleMenu);

    toggleHamburgerIcon();
});

//constante principal
const editarTodo = document.getElementById("modeColor");

//constantes para las publicaciones
const nick = document.querySelectorAll(".nombreUsuarioRegistrado")
const descripcion = document.querySelectorAll(".descripcion")


//constantes para el modo oscuro
const main = document.getElementsByClassName("mein");
const asideIzq = document.getElementsByClassName("asideIzq")
const header = document.getElementsByClassName("header")
const asideDer = document.getElementsByClassName("asideDer")

//constantes del nav
const links = document.querySelectorAll('.navLinks.container i');
const links2 = document.querySelectorAll('.navLinks.container span');
const titulo = document.getElementsByClassName("titulo");
const iconI = document.querySelectorAll(".botonIzqi");
const soport = document.getElementsByClassName("letraSoporte");
const insentivar = document.getElementsByClassName("insentivarPu") 
const confianza = document.getElementsByClassName("confianza") 
const aprender = document.getElementsByClassName("aprender") 



    editarTodo.addEventListener("click", () => {
        if (editarTodo.id == "modeColor" ) {
            editarTodo.id = "otroModo"
            editarTodo.innerHTML = `<i class="fa-solid fa-sun"></i>`
            main[0].style.backgroundColor = "#EDEDE9"
            header[0].style.background = "#EDEDE9"
            asideIzq[0].style.background = "#EDEDE9"
            asideDer[0].style.background = "#EDEDE9"
            titulo[0].style.color = "black"
            insentivar[0].style.color = "black"
            confianza[0].style.color = "black"
            aprender[0].style.color = "black"
    

            links.forEach(link  => {
                link.style.color = '#FAA307'; 
            });
            
            links2.forEach(link => {
                link.style.color = 'black'; 
            });

            nick.forEach(link => {
                link.style.color = "black"; 
            });

            iconI.forEach(link => {
                link.style.color = 'black'; 
            });

            descripcion.forEach(link => {
                link.style.color = 'black'; 
            });



        } else {
            location.reload()
        }
        
    });


