const DATA = [
    {
        id: 1,
        title: "El nombre del viento",
        author: "Patrick Rothfuss",
        price: 15.99,
        desc: "He robado princesas a reyes agónicos. Incendié la ciudad de Trebon. He pasado la noche con Felurian y he despertado vivo y cuerdo. Me expulsaron de la Universidad a una edad a la que a la mayoría todavía no los dejan entrar. He recorrido caminos de los que otros no se atreven a hablar ni siquiera de día. He hablado con dioses, he amado a mujeres y escrito canciones que hacen llorar a los bardos. Me llamo Kvothe. Quizás hayas oído hablar de mí.",
        "category": "Ficción",
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/a7/90/a790dff70defe5c61b66fd73716b6e30.jpg",
        rating: {
            rate: 4.5,
            count: 200
        }
    },
    {
        id: 2,
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        price: 12.50,
        desc: "Un clásico del realismo mágico que transportará al lector a un mundo lleno de personajes inolvidables y eventos fantásticos.",
        "category": "Realismo mágico",
        img: "https://http2.mlstatic.com/D_NQ_NP_720823-MLM50486431974_062022-O.webp",
        rating: {
            rate: 4.8,
            count: 350
        }
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 10.99,
        desc: "Una novela distópica que examina el poder del gobierno sobre la sociedad y la lucha por la libertad individual.",
        "category": "Ficción",
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/ff/1c/ff1cb10c1f8c0327512ac45484cbd7cc.jpg",
        rating: {
            rate: 4.3,
            count: 280
        }
    },
    {
        id: 4,
        title: "La sombra del viento",
        author: "Carlos Ruiz Zafón",
        price: 14.99,
        desc: "Una historia emocionante llena de misterio y romance, ambientada en la Barcelona de la posguerra.",
        "category": "Misterio",
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/30/57/3057e792c1953b16740975d6fa56664f.jpg",
        rating: {
            rate: 4.6,
            count: 180
        }
    },
    {
        id: 5,
        title: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling",
        price: 9.99,
        desc: "La emocionante historia de un joven mago que descubre su destino en la escuela de magia de Hogwarts.",
        "category": "Fantasía",
        img: "https://www.mrbooks.com/mrbooks/portadas/9789585234048.webp",
        rating: {
            rate: 4.9,
            count: 500
        }
    },
    {
        id: 6,
        title: "El señor de los anillos: La comunidad del anillo",
        author: "J.R.R. Tolkien",
        price: 18.50,
        desc: "La primera entrega de la legendaria trilogía de fantasía que sigue las aventuras de un grupo de personajes en su búsqueda para destruir un poderoso anillo.",
        "category": "Fantasía",
        img: "https://www.mrbooks.com/mrbooks/portadas/9786287574045.webp",
        rating: {
            rate: 4.7,
            count: 400
        }
    },
    {
        id: 7,
        title: "El retrato de Dorian Gray",
        author: "Oscar Wilde",
        price: 8.99,
        desc: "Una historia clásica sobre la vanidad y la decadencia moral, donde un retrato misterioso refleja el envejecimiento y la corrupción de su dueño mientras él permanece joven y hermoso.",
        "category": "Clásicos",
        img: "https://www.planetadelibros.com.ec/usuaris/libros/fotos/383/m_libros/382805_portada_el-retrato-de-dorian-gray_oscar-wilde_202307191606.jpg",
        rating: {
            rate: 4.4,
            count: 320
        }
    },
    {
        id: 8,
        title: "Orgullo y prejuicio",
        author: "Jane Austen",
        price: 7.50,
        desc: "Una comedia romántica clásica que sigue las vicisitudes de las hermanas Bennet en su búsqueda de amor y matrimonio en la Inglaterra del siglo XIX.",
        "category": "Romance",
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/dd/24/dd24299280a501fbc7be722f9f24e29d.jpg",
        rating: {
            rate: 4.6,
            count: 280
        }
    },
    {
        id: 9,
        title: "Moby Dick",
        author: "Herman Melville",
        price: 11.25,
        desc: "La épica novela sobre la obsesiva búsqueda del capitán Ahab para vengarse de la ballena blanca que le arrancó una pierna.",
        "category": "Aventura",
        img: "https://editoresmexicanosunidos.mx/wp-content/uploads/2022/02/fractales-moby-dick.png",
        rating: {
            rate: 4.3,
            count: 380
        }
    },
    {
        id: 10,
        title: "Crimen y castigo",
        author: "Fyodor Dostoyevsky",
        price: 9.75,
        desc: "Una exploración profunda de la moralidad y la psique humana, donde un estudiante comete un asesinato y luego lucha con su conciencia.",
        "category": "Clásicos",
        img: "https://static.wixstatic.com/media/761ccc_f917f92f016141ff8a7818583022a384~mv2.webp",
        rating: {
            rate: 4.5,
            count: 420
        }
    },
    {
        id: 11,
        title: "El Gran Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
        desc: "Una novela emblemática que captura la decadencia del sueño americano en la era del jazz, a través de la historia del misterioso Jay Gatsby y su obsesión por Daisy Buchanan.",
        "category": "Clásicos",
        img: "https://www.mrbooks.com/mrbooks/portadas/9789583065064.webp",
        rating: {
            rate: 4.6,
            count: 380
        }
    },
    {
        id: 12,
        title: "Drácula",
        author: "Bram Stoker",
        price: 9.99,
        desc: "Una historia clásica de horror que sigue los esfuerzos del Conde Drácula para trasladarse a Inglaterra desde Transilvania y extender su dominio de terror.",
        "category": "Horror",
        img: "https://assets-global.website-files.com/6034d7d1f3e0f52c50b2adee/62545414f3a6fb9f5d120730_6034d7d1f3e0f55ec6b2b1da_Dracula-bram-stocker-editorial-alma.jpeg",
        rating: {
            rate: 4.4,
            count: 320
        }
    },
    {
        id: 13,
        title: "Los juegos del hambre",
        author: "Suzanne Collins",
        price: 11.50,
        desc: "La primera entrega de la popular trilogía distópica, donde los jóvenes de un futuro distópico son seleccionados para luchar en un evento televisado a muerte.",
        "category": "Ficción",
        img: "https://recomendacionlibros.com/wp-content/uploads/2023/11/libro-los-juegos-del-hambre.jpg",
        rating: {
            rate: 4.7,
            count: 400
        }
    },
    {
        id: 14,
        title: "El Hobbit",
        author: "J.R.R. Tolkien",
        price: 8.75,
        desc: "Una aventura clásica que sigue al hobbit Bilbo Bolsón en su búsqueda para ayudar a un grupo de enanos a reclamar su tierra natal y su tesoro de un dragón.",
        "category": "Fantasía",
        img: "https://www.planetadelibros.com.ec/usuaris/libros/fotos/178/m_libros/177100_portada_el-hobbit_j-r-r-tolkien_201505211338.jpg",
        rating: {
            rate: 4.5,
            count: 380
        }
    },
    {
        id: 15,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        price: 12.25,
        desc: "Una novela clásica sobre el amor, la traición y la sociedad rusa en la que una mujer casada se embarca en un romance prohibido.",
        "category": "Clásicos",
        img: "https://www.mrbooks.com/mrbooks/portadas/9788484288442.webp",
        rating: {
            rate: 4.6,
            count: 420
        }
    },
    {
        id: 16,
        title: "La ladrona de libros",
        author: "Markus Zusak",
        price: 8.99,
        desc: "Una novela conmovedora sobre una niña adoptada por una familia alemana durante la Segunda Guerra Mundial, quien encuentra consuelo en los libros y aprende el poder de las palabras.",
        "category": "Clásicos",
        img: "https://ciervoblanco.club/wp-content/uploads/2018/05/ladrona-de-libros-markus-zusak-tertulia-literaria-madrid-ciervo-blanco-club.jpg",
        rating: {
            rate: 4.5,
            count: 300
        }
    },
    {
        id: 17,
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        price: 5.99,
        desc: "Una obra maestra de la literatura infantil que sigue las aventuras de un pequeño príncipe que viaja por diferentes planetas, explorando temas como la amistad, el amor y la responsabilidad.",
        "category": "Ficción",
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/1a/d0/1ad00b45cfb9ee36f629b922d55ced81.jpg",
        rating: {
            rate: 4.8,
            count: 350
        }
    },
    {
        id: 18,
        title: "La ciudad y los perros",
        author: "Mario Vargas Llosa",
        price: 10.25,
        desc: "Una novela que sigue la vida de un grupo de jóvenes en una escuela militar de Lima, explorando temas como la violencia, la corrupción y la identidad en la sociedad peruana.",
        "category": "Ficción",
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/46/0c/460cf768bec27103e3d93791c2770ba5.jpg",
        rating: {
            rate: 4.4,
            count: 280
        }
    },
    {
        id: 19,
        title: "El código Da Vinci",
        author: "Dan Brown",
        price: 11.99,
        desc: "Una emocionante novela de misterio que sigue al profesor de simbología Robert Langdon mientras descifra códigos y desentraña conspiraciones en París.",
        "category": "Misterio",
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/ef/0f/ef0fe302954a688d71d2a988393ad609.jpg",
        rating: {
            rate: 4.6,
            count: 380
        }
    },
    {
        id: 20,
        title: "Matar a un ruiseñor",
        author: "Harper Lee",
        price: 9.49,
        desc: "Una novela clásica que aborda temas de racismo, injusticia y moralidad en el sur de Estados Unidos durante la Gran Depresión. La historia sigue a la joven Scout Finch y su padre, el abogado Atticus Finch, mientras defienden a un hombre negro acusado falsamente de violación.",
        "category": "Ficción",
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/1b/d7/1bd7b432c94ccdcf816c917d8abe8e83.jpg",
        rating: {
            rate: 4.8,
            count: 200
        }
    },

];

export default DATA;