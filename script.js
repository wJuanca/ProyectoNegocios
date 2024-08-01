const products = [
    {
        id: 1,
        name: "Fertilizante NPK 20-20-20",
        image: "img/Producto1.png",
        description: "Fertilizante completo de alta solubilidad para todo tipo de cultivos.",
        price: "L. 825.00",
        category: "fertilizantes"
    },
    {
        id: 2,
        name: "Abono Orgánico Granulado",
        image: "img/Producto2.png",
        description: "Fertilizante orgánico que mejora la estructura del suelo y aporta nutrientes esenciales.",
        price: "L. 685.00",
        category: "categoria2"
    },
    {
        id: 3,
        name: "Sulfato de Amonio",
        image: "img/Producto3.png",
        description: "Fertilizante nitrogenado con acción acidificante ideal para suelos alcalinos.",
        price: "L. 550.00",
        category: "categoria2"
    },
    {
        id: 4,
        name: "Fertilizante de Liberación Lenta",
        image: "img/Producto4.png",
        description: "Abono granulado de liberación controlada para plantas de jardín y huerto.",
        price: "L. 960.00",
        category: "categoria3"
    },
    {
        id: 5,
        name: "Nitrato de Calcio",
        image: "img/Producto5.png",
        description: "Fertilizante que aporta calcio y nitrógeno, ideal para frutales y hortalizas.",
        price: "L. 770.00",
        category: "categoria3"
    },
    {
        id: 6,
        name: "Semillas de Tomate Raf",
        image: "img/Producto6.png",
        description: "Semillas de tomate Raf, variedad tradicional muy apreciada por su sabor.",
        price: "L. 90.00",
        category: "categoria4"
    },
    {
        id: 7,
        name: "Semillas de Lechuga Romana",
        image: "img/Producto7.png",
        description: "Variedad de lechuga resistente y de crecimiento rápido.",
        price: "L. 55.00",
        category: "categoria4"
    },
    {
        id: 8,
        name: "Semillas de Zanahoria Nantesa",
        image: "img/Producto8.png",
        description: "Semillas de zanahoria dulce y de textura crujiente, ideal para huerto.",
        price: "L. 70.00",
        category: "categoria4"
    },
    {
        id: 9,
        name: "Semillas de Calabacín",
        image: "img/Producto9.png",
        description: "Semillas de calabacín de alto rendimiento y fácil cultivo.",
        price: "L. 90.00",
        category: "categoria4"
    },
    {
        id: 10,
        name: "Semillas de Girasol",
        image: "img/Producto10.png",
        description: "Semillas de girasol, perfectas para atraer abejas y otros polinizadores.",
        price: "L. 50.00",
        category: "categoria4"
    },
    {
        id: 11,
        name: "Azada de Mano",
        image: "img/Producto11.png",
        description: "Herramienta de acero forjado para labores de huerto y jardín.",
        price: "L. 400.00",
        category: "categoria4"
    },
    {
        id: 12,
        name: "Tijera de Podar",
        image: "img/Producto12.png",
        description: "Tijeras ergonómicas para poda precisa, con cuchillas de acero inoxidable.",
        price: "L. 680.00",
        category: "categoria4"
    },
    {
        id: 13,
        name: "Rastrillo de Jardín",
        image: "img/Producto13.png",
        description: "Rastrillo de 12 dientes, ideal para nivelar y limpiar el terreno.",
        price: "L. 550.00",
        category: "categoria4"
    },
    {
        id: 14,
        name: "Pala de Punta Redonda",
        image: "img/Producto14.png",
        description: "Pala resistente para excavación en suelos duros y trabajos pesados.",
        price: "L. 825.00",
        category: "categoria4"
    },
    {
        id: 15,
        name: "Mochila Pulverizadora",
        image: "img/Producto15.png",
        description: "Pulverizador de 16 litros para aplicación de productos fitosanitarios.",
        price: "L. 1300.00",
        category: "categoria4"
    },
    {
        id: 16,
        name: "Alimento para Perros Adultos",
        image: "img/Producto16.png",
        description: "Alimento balanceado para perros adultos de todas las razas.",
        price: "L. 1200.00",
        category: "categoria4"
    },
    {
        id: 17,
        name: "Suplemento Vitaminico para Caballos",
        image: "img/Producto17.png",
        description: "Suplemento para mejorar la condición física y salud de los caballos.",
        price: "L. 1100.00",
        category: "categoria4"
    },
    {
        id: 18,
        name: "Leche en Polvo para Terneros",
        image: "img/Producto18.png",
        description: "Sustituto lácteo completo para la alimentación de terneros.",
        price: "L. 825.00",
        category: "categoria4"
    },
    {
        id: 19,
        name: "Pienso para Gallinas Ponedoras",
        image: "img/Producto19.png",
        description: "Pienso formulado para mejorar la producción de huevos en gallinas.",
        price: "L. 550.00",
        category: "categoria4"
    },
    {
        id: 20,
        name: "Arena de Gatos",
        image: "img/Producto20.png",
        description: "La mejor arena para comodidad de tu gatito",
        price: "L. 550.00",
        category: "categoria4"
    },
    {
        id: 21,
        name: "Pala Cuadrada",
        image: "img/Producto21.png",
        description: "La mejor pala cuadrada",
        price: "L. 330.00",
        category: "categoria4"
    },
    {
        id: 22,
        name: "Motosierra",
        image: "img/Producto22.png",
        description: "Corta todos tus arboles con la mejor calidad",
        price: "L. 4,330.00",
        category: "categoria4"
    },
    {
        id: 23,
        name: "Machete",
        image: "img/Producto23.png",
        description: "Compra tu mejor machete del mercado",
        price: "L. 330.00",
        category: "categoria4"
    },
    {
        id: 24,
        name: "Guadana",
        image: "img/Producto24.png",
        description: "Corta la hierba recien plantada",
        price: "L. 330.00",
        category: "categoria4"
    },
    {
        id: 25,
        name: "Hacha",
        image: "img/Producto25.png",
        description: "Hacha con mango rojo de la mejor calidad",
        price: "L. 330.00",
        category: "categoria4"
    },
    {
        id: 26,
        name: "Rastrillo",
        image: "img/Producto26.png",
        description: "Compra el mejor ratrillo para tu patio",
        price: "L. 330.00",
        category: "categoria4"
    },
    {
        id: 27,
        name: "Cabeza de hacha",
        image: "img/Producto27.png",
        description: "Para todo tipo de hacha con la mejor calidad",
        price: "L. 330.00",
        category: "categoria4"
    },
    {
        id: 28,
        name: "Lima",
        image: "img/Producto28.png",
        description: "Lima para sacarle filo a todas tus herramientas en el menor timepo posible",
        price: "L. 330.00",
        category: "categoria4"
    },
    {
        id: 29,
        name: "Reviplus - Tónico Vigorizante Inyectable - 50ml",
        image: "img/Producto29.png",
        description: "Tónico vigorizante inyectable para bovinos, equinos, burros, mulas, ovejas, cabras y perros, a base de hierro, cafeína, cobalto, selenio y vitamina B12.",
        price: "L. 180.00",
        category: "categoria4"
    },
    {
        id: 30,
        name: "Cuello Scalibor - Grande 65 cm - MSD",
        image: "img/Producto30.png",
        description: "De acción inmediata y alta efectividad, el collar Scalibor es un collar antiparasitario que protege a tu perro contra pulgas, garrapatas y además previene la picadura del mosquito que transmite la Leishmaniasis (el flebótomo).",
        price: "L. 500.00",
        category: "categoria4"
    },
    {
        id: 31,
        name: "Matacura Sarnicida y Jabón Antipulgas 80 gramos",
        image: "img/Producto31.png",
        description: "Mata piojos, garrapatas, pulgas y otros parásitos de la piel. Combate la caspa, el picor y la sarna psótica, sarcóptica y notoerdriana, preservando el cabello fino y sedoso.",
        price: "L. 60.00",
        category: "categoria4"
    },
    {
        id: 32,
        name: "Cuello Scalibor - Mediano 48cm - Msd",
        image: "img/Producto32.png",
        description: "De acción inmediata y alta efectividad, el collar Scalibor es un collar antiparasitario que protege a tu perro contra pulgas, garrapatas y además previene la picadura del mosquito que transmite la Leishmaniasis (el flebótomo).",
        price: "L. 500.00",
        category: "categoria4"
    },
    {
        id: 33,
        name: "Flop - Pomada analgésica - Vetoquinol",
        image: "img/Producto33.png",
        description: "Flop Fagra Tube por su acción antiflogística, analgésica y rubefacinante está indicado para su uso en síndromes inflamatorios y dolorosos en mamíferos en general (reumatismo, artritis), luxaciones e hinchazones en las articulaciones (articulaciones).",
        price: "L. 300.00",
        category: "categoria4"
    },
    {
        id: 34,
        name: "Flop - Pomada analgésica - Vetoquinol",
        image: "img/Producto34.png",
        description: "TIURAN está indicado para el tratamiento de la sarna que afecta a los animales domésticos, en las más diversas regiones del cuerpo.",
        price: "L. 400.00",
        category: "categoria4"
    },{
        id: 35,
        name: "Bravecto 20 - 40kgs Anti Pulgas Y Garrapatas",
        image: "img/Producto35.png",
        description: "BRAVECTO™ está indicado para el tratamiento de infestaciones por garrapatas y pulgas en perros, proporcionando 12 semanas de protección.",
        price: "L. 180.00",
        category: "categoria4"
    },
    {
        id: 36,
        name: "Aminomix Pet 100 Gramos",
        image: "img/Producto36.png",
        description: "Suplementación de aminoácidos, vitaminas, macro y micro minerales para caninos, felinos, aves, reptiles, mustélidos y roedores.",
        price: "L. 1,200.00",
        category: "categoria4"
    },
    {
        id: 37,
        name: "Glicopan Pet Vetnil 125 Ml",
        image: "img/Producto37.png",
        description: "En la suplementación de Aminoácidos y Vitaminas del grupo B para caninos, felinos, aves, mustélidos, reptiles y roedores. Ayuda a mejorar el estado general en casos de animales con un estado nutricional inadecuado.",
        price: "L. 230.00",
        category: "categoria4"
    },
    {
        id: 38,
        name: "Antipulgas y Garrapatas - Boehringer Ingelheim",
        image: "img/Producto38.png",
        description: "NexGard para perros de 25,1 a 50 kg es una tableta con sabor a carne de vacuno que garantiza la protección de tu mejor amigo contra pulgas y garrapatas.",
        price: "L. 600.00",
        category: "categoria4"
    },
    {
        id: 39,
        name: "Drontal Plus - 2 Comprimidos Sabor Carne",
        image: "img/Producto39.png",
        description: "Drontal Plus sabor carne está especialmente indicado para el tratamiento y control de lombrices intestinales y giardiasis en perros.",
        price: "L. 170.00",
        category: "categoria4"
    },
    {
        id: 40,
        name: "Tiuran Aerosol 125 Ml",
        image: "img/Producto40.png",
        description: "Elimina la sarna (sarna) y las micosis (dermatofitosis) en la piel de los animales, favoreciendo el crecimiento del pelo que la enfermedad ha eliminado.",
        price: "L. 250.00",
        category: "categoria4"
    },
    {
        id: 41,
        name: "Frontline Spray - 100ml - Boehringer Ingelheim",
        image: "img/Producto41.png",
        description: "Protección instantánea con alivio inmediato para perros y gatos. Actúa directamente contra pulgas y garrapatas y se puede utilizar con la máxima seguridad en cachorros y gatos a partir de los 2 días de edad.",
        price: "L. 250.00",
        category: "categoria4"
    },
    {
        id: 42,
        name: "NPK Fertilizante Mineral Mixto Foliar",
        image: "img/Producto42.png",
        description: "Fertilizante foliar NPK 14% Fertilizante mineral mixto para aplicación foliar.",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 43,
        name: "Vithal Fertilizante para Orquídeas",
        image: "img/Producto43.png",
        description: "Aplique la práctica ampolla dosificadora directamente sobre el sustrato del recipiente. Esta es la mejor y más eficiente manera de nutrir tu planta hasta por 15 días.",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 44,
        name: "FORTH Bokashi Abono Orgánico",
        image: "img/Producto44.png",
        description: "En la preparación del suelo/sustrato. Mezclar el producto con la tierra o sustrato y mantener húmedo. Después de una semana, macetas: 5 g/litro de tierra.",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 45,
        name: "Forth Suculentas Abono Orgánico",
        image: "img/Producto45.png",
        description: "Es un fertilizante completo con macro y micronutrientes que proporciona una nutrición equilibrada para favorecer el crecimiento y la coloración.",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 46,
        name: "Forth Orchids Maintenance",
        image: "img/Producto46.png",
        description: "Es un fertilizante completo con macro y micronutrientes que proporciona una nutrición equilibrada, desarrollado especialmente para el mantenimiento de las orquídeas.",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 47,
        name: "Fertilizante cúprico de jarabe de Burdeos",
        image: "img/Producto47.png",
        description: "Es un fertilizante especial que tiene una formulación líquida que nutre y protege las plantas contra la acción de hongos y bacterias",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 48,
        name: "Vithal Fertilizante Flores de Goteo",
        image: "img/Producto48.png",
        description: "Flores de goteo Vithal, fertilizante listo para usar. Ideal para todo tipo de flores. Contiene 6 ampollas dosificadoras.",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 49,
        name: "GOLD GARDEM - FRUTAS",
        image: "img/Producto49.png",
        description: "Fertilizante cuya formulación completa y equilibrada aporta, complementa y repone los nutrientes que las plantas frutales necesitan y eliminan del suelo.",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 50,
        name: "GOLD GARDEM",
        image: "img/Producto50.png",
        description: "Es un fertilizante organomineral de clase A con una fórmula innovadora y rica en nutrientes.",
        price: "L. 540.00",
        category: "categoria4"
    },
    {
        id: 51,
        name: "GOLD GARDEM",
        image: "img/Producto51.png",
        description: "Semillas tratadas con Thiran al 0,2%. Producto nocivo para la salud al entrar en contacto con la piel, inhalado o ingerido. Si se sospecha de envenenamiento, busque atención médica de inmediato.",
        price: "L. 2,100.00",
        category: "categoria4"
    },
    {
        id: 52,
        name: "GOLD GARDEM",
        image: "img/Producto52.png",
        description: "Sandía Manchester Garantía de productividad y transporte generando rentabilidad.",
        price: "L. 2,700.00",
        category: "categoria4"
    },
    {
        id: 53,
        name: "GOLD GARDEM",
        image: "img/Producto53.png",
        description: "Vigorosa con hábito de crecer en ramas. Uniforme, de color naranja y de forma redonda-plana. Peso medio de 3,0-4,0 kg.",
        price: "L. 1,300.00",
        category: "categoria4"
    },
    {
        id: 54,
        name: "GOLD GARDEM",
        image: "img/Producto54.png",
        description: "Permite múltiples cortes.",
        price: "L. 1,100.00",
        category: "categoria4"
    },
    {
        id: 55,
        name: "GOLD GARDEM",
        image: "img/Producto55.png",
        description: "Maderas duras Planta de ciclo temprano, rústica y de hojas grandes. Tolerante a la espiga temprana y a la bacteriosis, excelente uniformidad entre plantas.",
        price: "L. 800.00",
        category: "categoria4"
    },
    {
        id: 56,
        name: "GOLD GARDEM",
        image: "img/Producto56.png",
        description: " Cáscara veteada de verde oscuro con crema. Excelente coloración interna.",
        price: "L. 1,500.00",
        category: "categoria4"
    },
    {
        id: 57,
        name: "GOLD GARDEM",
        image: "img/Producto57.png",
        description: "Producto recomendado para la fabricación de vallas de contención en zonas rurales y urbanas.",
        price: "L. 1,500.00",
        category: "categoria4"
    },
    {
        id: 58,
        name: "GOLD GARDEM",
        image: "img/Producto58.png",
        description: "El alambre galvanizado es suave para su uso en diversos amarres, aplicaciones industriales, artesanías, artículos para el hogar y acabado de yeso.",
        price: "L. 150.00",
        category: "categoria4"
    },
    {
        id: 59,
        name: "GOLD GARDEM",
        image: "img/Producto59.png",
        description: "Alambre blando, grueso y con púas entrelazadas, siendo un producto recomendado para la fabricación de vallas de contención en zonas rurales y urbanas.",
        price: "L. 1,600.00",
        category: "categoria4"
    },
    {
        id: 60,
        name: "GOLD GARDEM",
        image: "img/Producto60.png",
        description: "Alambre recomendado para la confección de vallas de contención en zonas rurales y urbanas.",
        price: "L. 1,000.00",
        category: "categoria4"
    },
    {
        id: 61,
        name: "GOLD GARDEM",
        image: "img/Producto61.png",
        description: "El alambre galvanizado es suave para su uso en diversos amarres, aplicaciones industriales, artesanías, artículos para el hogar y acabado de yeso.",
        price: "L. 100.00",
        category: "categoria4"
    },
    {
        id: 62,
        name: "GOLD GARDEM",
        image: "img/Producto62.png",
        description: "El espaciador Belgo con bridas permite un mayor espacio entre los postes de la cerca.",
        price: "L. 2,300.00",
        category: "categoria4"
    },
    {
        id: 63,
        name: "GOLD GARDEM",
        image: "img/Producto63.png",
        description: "Poliforte Soluble es un suplemento vitamínico para aves de corral y cerdos con polvo de aminoácidos solubles, formulado para satisfacer las necesidades de las aves sometidas a factores estresantes.",
        price: "L. 650.00",
        category: "categoria4"
    },
    {
        id: 64,
        name: "GOLD GARDEM",
        image: "img/Producto64.png",
        description: "Tratamento de Doencas Respiratórias: Curamoxil é especialmente eficaz no tratamento de doenças respiratórias em aves e suínos.",
        price: "L. 700.00",
        category: "categoria4"
    },
    {
        id: 65,
        name: "GOLD GARDEM",
        image: "img/Producto65.png",
        description: "La solución 1L proporciona la regeneración de animales debilitados, convalecientes o debilitados, como aquellos que están subordinados a condiciones aburridas, fatiga física, deficiencias de nutrientes, anemia, gusanos, etcétera.",
        price: "L. 1,000.00",
        category: "categoria4"
    },
    {
        id: 66,
        name: "GOLD GARDEM",
        image: "img/Producto66.png",
        description: "La aguja veterinaria Hoppner es una excelente aguja de acero inoxidable, corte biselado de tres lados, cañón Luer Lock de latón cromado, no se dobla con el uso diario y no tiene fugas.",
        price: "L. 250.00",
        category: "categoria4"
    },
    {
        id: 67,
        name: "GOLD GARDEM",
        image: "img/Producto67.png",
        description: "Ahí es donde entra en juego Cipromax, un potente antibiótico diseñado específicamente para combatir una amplia gama de infecciones bacterianas en aves de corral y cerdos.",
        price: "L. 500.00",
        category: "categoria4"
    },
    {
        id: 68,
        name: "Fertilizante NPK 15-15-15",
        image: "img/Producto68.png",
        description: "Fertilizante equilibrado con macro nutrientes para cultivos generales.",
        price: "L. 300.00",
        category: "categoria4"
    },
    {
        id: 69,
        name: "Fertilizante Orgánico de Guano de Murciélago",
        image: "img/Producto69.png",
        description: "Fertilizante orgánico rico en nitrógeno y fósforo.",
        price: "L. 200.00",
        category: "categoria4"
    },
    {
        id: 70,
        name: "Fertilizante Líquido de Microelementos",
        image: "img/Producto70.png",
        description: "Mezcla concentrada de microelementos esenciales para mejorar la salud de las plantas.",
        price: "L. 450.00",
        category: "categoria4"
    },
    {
        id: 71,
        name: "Fertilizante para Césped",
        image: "img/Producto71.png",
        description: "Especialmente formulado para nutrir céspedes y jardines.",
        price: "L. 720.00",
        category: "categoria4"
    },
    {
        id: 72,
        name: "Fertilizante de Liberación Controlada",
        image: "img/Producto72.png",
        description: "Proporciona nutrientes de manera gradual y continua durante varias semanas.",
        price: "L. 300.00",
        category: "categoria4"
    },
    {
        id: 73,
        name: "Fertilizante NPK 20-20-20",
        image: "img/Producto73.png",
        description: "Fertilizante balanceado con nitrógeno, fósforo y potasio para cultivos generales.",
        price: "L. 350.00",
        category: "categoria4"
    },
    {
        id: 74,
        name: "Fertilizante Orgánico de Algas Marinas",
        image: "img/Producto74.png",
        description: "Mejora la estructura del suelo y proporciona nutrientes esenciales para plantas.",
        price: "L. 450.00",
        category: "categoria4"
    },
    {
        id: 75,
        name: "Fertilizante Líquido para Flores",
        image: "img/Producto75.png",
        description: "Fertilizante Líquido para Flores",
        price: "L. 230.00",
        category: "categoria4"
    },
    {
        id: 76,
        name: "Fertilizante para Césped de Alta Resistencia",
        image: "img/Producto76.png",
        description: "Fortalece el césped para resistir condiciones climáticas extremas.",
        price: "L. 450.00",
        category: "categoria4"
    },
    {
        id: 77,
        name: "Fertilizante Orgánico de Estiércol de Caballo",
        image: "img/Producto77.png",
        description: "Fertilizante Orgánico de Estiércol de Caballo",
        price: "L. 380.00",
        category: "categoria4"
    },
    {
        id: 78,
        name: "Fertilizante Foliar de Potasio",
        image: "img/Producto78.png",
        description: "Fertilizante Foliar de Potasio",
        price: "L. 550.00",
        category: "categoria4"
    },
    {
        id: 79,
        name: "Fertilizante para Orquídeas",
        image: "img/Producto79.png",
        description: "Fórmula específica para el crecimiento saludable y florecimiento de orquídeas.",
        price: "L. 240.00",
        category: "categoria4"
    },
    
    {
        id: 80,
        name: "Fertilizante Orgánico de Vermicompost",
        image: "img/Producto80.png",
        description: "Mejora la fertilidad del suelo con nutrientes naturales derivados de lombrices.",
        price: "L. 560.00",
        category: "categoria4"
    },
    {
        id: 91,
        name: "Fertilizante para Cultivo de Hortalizas",
        image: "img/Producto111.png",
        description: "Ahí es donde entra en juego Cipromax, un potente antibiótico diseñado específicamente para combatir una amplia gama de infecciones bacterianas en aves de corral y cerdos.",
        price: "L. 500.00",
        category: "categoria4"
    },
    {
        id: 81,
        name: "Semillas de Zanahoria",
        image: "img/Producto81.png",
        description: "Fórmula equilibrada para optimizar la producción de hortalizas.",
        price: "L. 430.00",
        category: "categoria4"
    },
    {
        id: 82,
        name: "Semillas de Zanahoria",
        image: "img/Producto82.png",
        description: "Variedad dulce y crujiente, ideal para cultivo en huertos familiares.",
        price: "L. 70.00",
        category: "categoria4"
    },
    {
        id: 83,
        name: "Semillas de Calabaza",
        image: "img/Producto83.png",
        description: "Semillas grandes y nutritivas para cosechas de otoño.",
        price: "L. 80.00",
        category: "categoria4"
    },
    {
        id: 84,
        name: "Semillas de Lechuga",
        image: "img/Producto84.png",
        description: "Variedad de hojas verdes para cosecha durante todo el año.",
        price: "L. 50.00",
        category: "categoria4"
    },
    {
        id: 85,
        name: "Semillas de Hierbas Aromáticas",
        image: "img/Producto85.png",
        description: "Mezcla de semillas de albahaca, cilantro y perejil.",
        price: "L. 100.00",
        category: "categoria4"
    },
    {
        id: 86,
        name: "Semillas de Girasol para Forraje",
        image: "img/Producto86.png",
        description: "Alta producción de forraje rico en proteínas para ganado.",
        price: "L. 200.00",
        category: "categoria4"
    },
    {
        id: 87,
        name: "Semillas de Tomate Beefsteak",
        image: "img/Producto87.png",
        description: "Variedad de tomate grande y sabroso, ideal para ensaladas y salsas.",
        price: "L. 90.00",
        category: "categoria4"
    },
    {
        id: 88,
        name: "Semillas de Pimiento Jalapeño",
        image: "img/Producto88.png",
        description: "Pimientos picantes ideales para la cocina mexicana.",
        price: "L. 75.00",
        category: "categoria4"
    },
    {
        id: 89,
        name: "Semillas de Calabacín",
        image: "img/Producto89.png",
        description: "Variedad de calabacín de alto rendimiento para huertos familiares.",
        price: "L. 50.00",
        category: "categoria4"
    },
    {
        id: 90,
        name: "Semillas de Girasol para Aves Silvestres",
        image: "img/Producto90.png",
        description: "Atrae aves silvestres y proporciona alimento rico en nutrientes.",
        price: "L. 120.00",
        category: "categoria4"
    },
    {
        id: 92,
        name: "Semillas de Sandía Sin Pepitas",
        image: "img/Producto91.png",
        description: "Variedad dulce y sin semillas, ideal para consumo fresco.",
        price: "L. 100.00",
        category: "categoria4"
    },
    {
        id: 93,
        name: "Semillas de Berenjena",
        image: "img/Producto92.png",
        description: "Variedad de berenjena para cultivo en climas cálidos.",
        price: "L. 50.00",
        category: "categoria4"
    },
    {
        id: 94,
        name: "Semillas de Fresa",
        image: "img/Producto93.png",
        description: "Descripción: Variedad apta para huertos urbanos y contenedores.",
        price: "L. 85.00",
        category: "categoria4"
    },
    {
        id: 95,
        name: "Semillas de Acelga",
        image: "img/Producto94.png",
        description: "Hojas nutritivas y de fácil cultivo para consumo en ensaladas y guisos.",
        price: "L. 55.00",
        category: "categoria4"
    },
    {
        id: 96,
        name: "Semillas de Hierba de Alfalfa",
        image: "img/Producto95.png",
        description: "Ideal para forraje verde y enriquecimiento del suelo.",
        price: "L. 110.00",
        category: "categoria4"
    },
    {
        id: 97,
        name: "Azada de Acero Inoxidable",
        image: "img/Producto96.png",
        description: "Azada de Acero Inoxidable",
        price: "L. 450.00",
        category: "categoria4"
    },
    {
        id: 98,
        name: "Rastrillo de Jardinería",
        image: "img/Producto97.png",
        description: "Ideal para nivelar y limpiar áreas de jardín.",
        price: "L. 340.00",
        category: "categoria4"
    },
    {
        id: 99,
        name: "Motosierra de Gasolina",
        image: "img/Producto98.png",
        description: "Potente herramienta para la poda de árboles y cortes de troncos.",
        price: "L. 6,100.00",
        category: "categoria4"
    },
    {
        id: 100,
        name: "Regadera de Plástico Resistente",
        image: "img/Producto99.png",
        description: "Capacidad de 5 litros, ideal para riego de plantas de interior y exterior.",
        price: "L. 240.00",
        category: "categoria4"
    },
    {
        id: 101,
        name: "Guantes de Jardinería",
        image: "img/Producto100.png",
        description: "Protegen las manos mientras trabajas en el jardín o huerto.",
        price: "L. 200.00",
        category: "categoria4"
    },
    {
        id: 102,
        name: "Pala de Punta",
        image: "img/Producto101.png",
        description: "Herramienta esencial para cavar y mover tierra en el jardín o huerto.",
        price: "L. 430.00",
        category: "categoria4"
    },
    {
        id: 103,
        name: "Cortador de Setos",
        image: "img/Producto102.png",
        description: "Herramienta eléctrica para dar forma y recortar setos y arbustos.",
        price: "L. 900.00",
        category: "categoria4"
    },
    {
        id: 104,
        name: "Manguera de Jardín reforzada",
        image: "img/Producto103.png",
        description: "Resistente a la presión y adecuada para riego intensivo.",
        price: "L. 360.00",
        category: "categoria4"
    },
    {
        id: 105,
        name: "Sopladora de Hojas a Gasolina",
        image: "img/Producto104.png",
        description: "Potente herramienta para limpieza de hojas y residuos en grandes áreas.",
        price: "L. 3,400.00",
        category: "categoria4"
    },
    {
        id: 106,
        name: "Set de Herramientas de Jardinería",
        image: "img/Producto105.png",
        description: "Conjunto básico para tareas de jardinería y mantenimiento.",
        price: "L. 580.00",
        category: "categoria4"
    },
    {
        id: 107,
        name: "Tijeras de Podar Profesionales",
        image: "img/Producto106.png",
        description: "Diseñadas para cortes precisos en árboles frutales y ornamentales.",
        price: "L. 490.00",
        category: "categoria4"
    },
    {
        id: 108,
        name: "Espolvoreador de Semillas",
        image: "img/Producto107.png",
        description: "Para siembra uniforme de semillas pequeñas y fertilizantes granulados.",
        price: "L. 4,500.00",
        category: "categoria4"
    },
    {
        id: 109,
        name: "Tijeras de Hierba Manual",
        image: "img/Producto108.png",
        description: "Herramienta ligera para cortar césped y bordes de jardín.",
        price: "L. 320.00",
        category: "categoria4"
    },
    {
        id: 110,
        name: "Manguera de Riego por Goteo",
        image: "img/Producto109.png",
        description: "Sistema eficiente para riego económico y preciso de cultivos.",
        price: "L. 900.00",
        category: "categoria4"
    },
    {
        id: 111,
        name: "Cultivador de Suelo Manual",
        image: "img/Producto110.png",
        description: "Herramienta robusta para labranza y aireación del suelo.",
        price: "L. 450.00",
        category: "categoria4"
    },
    // Añadir otros productos aquí
];

function showDetails(id) {
    const product = products.find(p => p.id === id);
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-description').textContent = product.description;
    document.getElementById('detail-price').textContent = product.price;
    document.getElementById('product-details').style.display = 'flex';
}

function closeDetails() {
    document.getElementById('product-details').style.display = 'none';
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const productElements = document.getElementsByClassName('product');
    
    for (let productElement of productElements) {
        const productName = productElement.getElementsByTagName('h2')[0].textContent.toLowerCase();
        if (productName.includes(query)) {
            productElement.style.display = 'block';
        } else {
            productElement.style.display = 'none';
        }
    }
}

function filterCategory(category) {
    const productElements = document.getElementsByClassName('product');
    
    for (let productElement of productElements) {
        if (category === 'all' || productElement.getAttribute('data-category') === category) {
            productElement.style.display = 'block';
        } else {
            productElement.style.display = 'none';
        }
    }
}



