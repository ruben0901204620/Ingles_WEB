const VOCABULARY = {
    "Countries and Nationalities": [
        { q:"China", a:"China", e:"🇨🇳" },
        { q:"Chino", a:"Chinese", e:"🇨🇳" },

        { q:"Japón", a:"Japan", e:"🇯🇵" },
        { q:"Japonés", a:"Japanese", e:"🇯🇵" },

        { q:"Portugal", a:"Portugal", e:"🇵🇹" },
        { q:"Portugués", a:"Portuguese", e:"🇵🇹" },

        { q:"Vietnam", a:"Vietnam", e:"🇻🇳" },
        { q:"Vietnamita", a:"Vietnamese", e:"🇻🇳" },

        { q:"Inglaterra", a:"England", e:"🏴" },
        { q:"Inglés", a:"English", e:"🏴" },

        { q:"Irlanda", a:"Ireland", e:"🇮🇪" },
        { q:"Irlandés", a:"Irish", e:"🇮🇪" },

        { q:"Polonia", a:"Poland", e:"🇵🇱" },
        { q:"Polaco", a:"Polish", e:"🇵🇱" },

        { q:"Escocia", a:"Scotland", e:"🏴" },
        { q:"Escocés", a:"Scottish", e:"🏴" },

        { q:"España", a:"Spain", e:"🇪🇸" },
        { q:"Español", a:"Spanish", e:"🇪🇸" },

        { q:"Turquía", a:"Turkey", e:"🇹🇷" },
        { q:"Turco", a:"Turkish", e:"🇹🇷" },

        { q:"Reino Unido", a:"United Kingdom", e:"🇬🇧" },
        { q:"Británico", a:"British", e:"🇬🇧" },

        { q:"Alemania", a:"Germany", e:"🇩🇪" },
        { q:"Alemán", a:"German", e:"🇩🇪" },

        { q:"México", a:"Mexico", e:"🇲🇽" },
        { q:"Mexicano", a:"Mexican", e:"🇲🇽" },

        { q:"Estados Unidos", a:"United States", e:"🇺🇸" },
        { q:"Americano", a:"American", e:"🇺🇸" },

        { q:"Argentina", a:"Argentina", e:"🇦🇷" },
        { q:"Argentino", a:"Argentinian", e:"🇦🇷" },

        { q:"Australia", a:"Australia", e:"🇦🇺" },
        { q:"Australiano", a:"Australian", e:"🇦🇺" },

        { q:"Brasil", a:"Brazil", e:"🇧🇷" },
        { q:"Brasileño", a:"Brazilian", e:"🇧🇷" },

        { q:"Canadá", a:"Canada", e:"🇨🇦" },
        { q:"Canadiense", a:"Canadian", e:"🇨🇦" },

        { q:"Colombia", a:"Colombia", e:"🇨🇴" },
        { q:"Colombiano", a:"Colombian", e:"🇨🇴" },

        { q:"Egipto", a:"Egypt", e:"🇪🇬" },
        { q:"Egipcio", a:"Egyptian", e:"🇪🇬" },

        { q:"Perú", a:"Peru", e:"🇵🇪" },
        { q:"Peruano", a:"Peruvian", e:"🇵🇪" },

        { q:"Italia", a:"Italy", e:"🇮🇹" },
        { q:"Italiano", a:"Italian", e:"🇮🇹" },

        { q:"Rusia", a:"Russia", e:"🇷🇺" },
        { q:"Ruso", a:"Russian", e:"🇷🇺" },

        { q:"Francia", a:"France", e:"🇫🇷" },
        { q:"Francés", a:"French", e:"🇫🇷" },

        { q:"Corea del Sur", a:"South Korea", e:"🇰🇷" },
        { q:"Coreano", a:"Korean", e:"🇰🇷" },

        { q:"India", a:"India", e:"🇮🇳" },
        { q:"Indio", a:"Indian", e:"🇮🇳" },

        { q:"Guatemala", a:"Guatemala", e:"🇬🇹" },
        { q:"Guatemalteco", a:"Guatemalan", e:"🇬🇹" },

        { q:"Chile", a:"Chile", e:"🇨🇱" },
        { q:"Chileno", a:"Chilean", e:"🇨🇱" },

        { q:"Venezuela", a:"Venezuela", e:"🇻🇪" },
        { q:"Venezolano", a:"Venezuelan", e:"🇻🇪" }
    ],
    "Personal Objects": [
        { q:"Llaves", a:"Keys", e:"🔑" },
        { q:"Gafas de sol", a:"Sunglasses", e:"🕶️" },
        { q:"Espejo", a:"Mirror", e:"🪞" },
        { q:"Guantes", a:"Gloves", e:"🧤" },
        { q:"Goma de mascar", a:"Chewing gum", e:"🍬" },
        { q:"Linterna", a:"Flashlight", e:"🔦" },
        { q:"Pañuelos", a:"Tissues", e:"🤧" },
        { q:"Foto", a:"Photo", e:"📷" },
        { q:"Estampillas", a:"Stamps", e:"📮" },
        { q:"Anteojos", a:"Glasses", e:"👓" },
        { q:"Carné de identidad", a:"Identity card", e:"🪪" },
        { q:"Reloj", a:"Watch", e:"⌚" },
        { q:"Sombrilla", a:"Umbrella", e:"☂️" },
        { q:"Cepillo para el cabello", a:"Hairbrush", e:"🪮" },
        { q:"Billetera", a:"Wallet", e:"👛" },
        { q:"Dulce", a:"Candy", e:"🍭" },
        { q:"Monedero", a:"Change purse", e:"👝" },
        { q:"Peine", a:"Comb", e:"🪮" },
        { q:"Tableta", a:"Tablet", e:"📱" },

        { q:"Teléfono", a:"Phone", e:"📱" },
        { q:"Celular", a:"Cell phone", e:"📱" },
        { q:"Computadora portátil", a:"Laptop", e:"💻" },
        { q:"Mochila", a:"Backpack", e:"🎒" },
        { q:"Bolso", a:"Bag", e:"👜" },
        { q:"Libro", a:"Book", e:"📚" },
        { q:"Cuaderno", a:"Notebook", e:"📓" },
        { q:"Lápiz", a:"Pencil", e:"✏️" },
        { q:"Bolígrafo", a:"Pen", e:"🖊️" },
        { q:"Borrador", a:"Eraser", e:"🩹" },
        { q:"Regla", a:"Ruler", e:"📏" },
        { q:"Tijeras", a:"Scissors", e:"✂️" },
        { q:"Botella de agua", a:"Water bottle", e:"🧴" },
        { q:"Auriculares", a:"Headphones", e:"🎧" },
        { q:"Cargador", a:"Charger", e:"🔌" },
        { q:"Dinero", a:"Money", e:"💵" },
        { q:"Monedas", a:"Coins", e:"🪙" },
        { q:"Pasaporte", a:"Passport", e:"📘" },
        { q:"Tarjeta de crédito", a:"Credit card", e:"💳" },
        { q:"Llave USB", a:"USB drive", e:"💾" }
    ],
    "Jobs": [
        { q:"Peluquero", a:"Hairdresser", e:"💇" },
        { q:"Guía turístico", a:"Tour Guide", e:"🗺️" },
        { q:"Doctor/Doctora", a:"Doctor", e:"🩺" },
        { q:"Electricista", a:"Electrician", e:"🔌" },
        { q:"Maestro/Maestra", a:"Teacher", e:"👨‍🏫" },
        { q:"Taxista", a:"Taxi Driver", e:"🚕" },
        { q:"Dentista", a:"Dentist", e:"🦷" },
        { q:"Auxiliar de vuelo", a:"Flight Attendant", e:"✈️" },
        { q:"Cantante", a:"Singer", e:"🎤" },
        { q:"Mecánico", a:"Mechanic", e:"🔧" },
        { q:"Enfermero/Enfermera", a:"Nurse", e:"💉" },
        { q:"Abogado/Abogada", a:"Lawyer", e:"⚖️" },
        { q:"Camarero", a:"Waiter", e:"🍽️" },
        { q:"Camarera", a:"Waitress", e:"🍽️" },
        { q:"Recepcionista", a:"Receptionist", e:"🛎️" },
        { q:"Empresario", a:"Businessperson", e:"💼" },
        { q:"Contador", a:"Accountant", e:"📊" },
        { q:"Trabajador de construcción", a:"Construction Worker", e:"👷" },
        { q:"Cocinero", a:"Chef", e:"👨‍🍳" },
        { q:"Vendedor", a:"Salesclerk", e:"🛒" },

        { q:"Policía", a:"Police Officer", e:"👮" },
        { q:"Bombero", a:"Firefighter", e:"👨‍🚒" },
        { q:"Ingeniero", a:"Engineer", e:"👨‍💻" },
        { q:"Programador", a:"Programmer", e:"💻" },
        { q:"Arquitecto", a:"Architect", e:"📐" },
        { q:"Diseñador", a:"Designer", e:"🎨" },
        { q:"Fotógrafo", a:"Photographer", e:"📸" },
        { q:"Periodista", a:"Journalist", e:"📰" },
        { q:"Actor", a:"Actor", e:"🎭" },
        { q:"Actriz", a:"Actress", e:"🎭" },
        { q:"Músico", a:"Musician", e:"🎸" },
        { q:"Veterinario", a:"Veterinarian", e:"🐶" },
        { q:"Farmacéutico", a:"Pharmacist", e:"💊" },
        { q:"Piloto", a:"Pilot", e:"🛩️" },
        { q:"Agricultor", a:"Farmer", e:"🚜" },
        { q:"Panadero", a:"Baker", e:"🥖" },
        { q:"Cajero", a:"Cashier", e:"💵" },
        { q:"Secretario", a:"Secretary", e:"📋" },
        { q:"Gerente", a:"Manager", e:"📈" },
        { q:"Estudiante", a:"Student", e:"🎓" }
    ],
    "Family": [
        { q:"Abuelo", a:"Grandfather", e:"👴" },
        { q:"Abuela", a:"Grandmother", e:"👵" },

        { q:"Padre", a:"Father", e:"👨" },
        { q:"Madre", a:"Mother", e:"👩" },

        { q:"Suegro", a:"Father-in-law", e:"👨‍🦳" },
        { q:"Suegra", a:"Mother-in-law", e:"👩‍🦳" },

        { q:"Tío", a:"Uncle", e:"👨" },
        { q:"Tía", a:"Aunt", e:"👩" },

        { q:"Cuñado", a:"Brother-in-law", e:"👨‍💼" },
        { q:"Cuñada", a:"Sister-in-law", e:"👩‍💼" },

        { q:"Hijo", a:"Son", e:"👦" },
        { q:"Hija", a:"Daughter", e:"👧" },

        { q:"Hermano", a:"Brother", e:"👦" },
        { q:"Hermana", a:"Sister", e:"👧" },

        { q:"Sobrino", a:"Nephew", e:"👦" },
        { q:"Sobrina", a:"Niece", e:"👧" },

        { q:"Primo", a:"Cousin", e:"🧑" },
        { q:"Prima", a:"Cousin", e:"👩" },

        { q:"Esposo", a:"Husband", e:"🤵" },
        { q:"Esposa", a:"Wife", e:"👰" },

        { q:"Padres", a:"Parents", e:"👨‍👩‍👧" },
        { q:"Hijos", a:"Children", e:"👶" },

        { q:"Bebé", a:"Baby", e:"👶" },
        { q:"Nieto", a:"Grandson", e:"👦" },
        { q:"Nieta", a:"Granddaughter", e:"👧" },

        { q:"Nietos", a:"Grandchildren", e:"👨‍👩‍👧‍👦" },

        { q:"Bisabuelo", a:"Great-grandfather", e:"👴" },
        { q:"Bisabuela", a:"Great-grandmother", e:"👵" },

        { q:"Padrastro", a:"Stepfather", e:"👨" },
        { q:"Madrastra", a:"Stepmother", e:"👩" },

        { q:"Hermanastro", a:"Stepbrother", e:"👦" },
        { q:"Hermanastra", a:"Stepsister", e:"👧" },

        { q:"Prometido", a:"Fiancé", e:"💍" },
        { q:"Prometida", a:"Fiancée", e:"💍" },

        { q:"Familia", a:"Family", e:"👨‍👩‍👧‍👦" },
        { q:"Pariente", a:"Relative", e:"👥" }
    ],
    "Daily Routine Verbs": [
        { q: "Despertarse", a: "Wake up", e: "⏰" },
        { q: "Levantarse", a: "Get up", e: "🛏️" },
        { q: "Tender la cama", a: "Make the bed", e: "🛏️" },
        { q: "Ducharse", a: "Take a shower", e: "🚿" },
        { q: "Bañarse", a: "Take a bath", e: "🛁" },
        { q: "Lavarse la cara", a: "Wash my face", e: "🧼" },
        { q: "Cepillarse los dientes", a: "Brush my teeth", e: "🪥" },
        { q: "Peinarse", a: "Comb my hair", e: "🪮" },
        { q: "Vestirse", a: "Get dressed", e: "👕" },

        { q: "Desayunar", a: "Have breakfast", e: "🍳" },
        { q: "Tomar café", a: "Drink coffee", e: "☕" },

        { q: "Ir a la escuela", a: "Go to school", e: "🏫" },
        { q: "Ir a la universidad", a: "Go to university", e: "🎓" },
        { q: "Ir a trabajar", a: "Go to work", e: "💼" },

        { q: "Estudiar", a: "Study", e: "📚" },
        { q: "Asistir a clases", a: "Attend classes", e: "🏫" },
        { q: "Tomar notas", a: "Take notes", e: "📝" },

        { q: "Almorzar", a: "Have lunch", e: "🍽️" },
        { q: "Comer", a: "Eat", e: "🍔" },
        { q: "Beber agua", a: "Drink water", e: "💧" },

        { q: "Llegar a casa", a: "Get home", e: "🏠" },
        { q: "Terminar la escuela", a: "Finish school", e: "🎒" },
        { q: "Terminar de trabajar", a: "Finish work", e: "📂" },

        { q: "Hacer la tarea", a: "Do homework", e: "📖" },
        { q: "Leer", a: "Read", e: "📚" },
        { q: "Escuchar música", a: "Listen to music", e: "🎧" },
        { q: "Ver televisión", a: "Watch TV", e: "📺" },
        { q: "Jugar videojuegos", a: "Play video games", e: "🎮" },
        { q: "Usar la computadora", a: "Use the computer", e: "💻" },

        { q: "Hacer ejercicio", a: "Exercise", e: "🏃" },
        { q: "Salir a caminar", a: "Go for a walk", e: "🚶" },
        { q: "Correr", a: "Run", e: "🏃‍♂️" },

        { q: "Preparar la cena", a: "Prepare dinner", e: "👨‍🍳" },
        { q: "Cenar", a: "Have dinner", e: "🍝" },

        { q: "Relajarse", a: "Relax", e: "😌" },
        { q: "Hablar con amigos", a: "Talk to friends", e: "🗣️" },
        { q: "Revisar el teléfono", a: "Check my phone", e: "📱" },

        { q: "Ir a la cama", a: "Go to bed", e: "🛏️" },
        { q: "Dormirse", a: "Go to sleep", e: "😴" },
        { q: "Soñar", a: "Dream", e: "💭" }
    ],
    "The Weather and the Seasons": [
        { q:"Primavera", a:"Spring", e:"🌸" },
        { q:"Verano", a:"Summer", e:"☀️" },
        { q:"Otoño", a:"Fall", e:"🍂" },
        { q:"Invierno", a:"Winter", e:"❄️" },

        { q:"Está lloviendo", a:"It's raining", e:"🌧️" },
        { q:"Está lluvioso", a:"It's rainy", e:"☔" },

        { q:"Está nevando", a:"It's snowing", e:"🌨️" },
        { q:"Está nevado", a:"It's snowy", e:"❄️" },

        { q:"Hace calor", a:"It's hot", e:"🥵" },
        { q:"Está cálido", a:"It's warm", e:"🌤️" },
        { q:"Hace frío", a:"It's cold", e:"🥶" },
        { q:"Hace mucho frío", a:"It's very cold", e:"🧊" },

        { q:"Está húmedo", a:"It's humid", e:"💧" },
        { q:"Está mojado", a:"It's wet", e:"💦" },

        { q:"Está soleado", a:"It's sunny", e:"☀️" },
        { q:"Hace viento", a:"It's windy", e:"💨" },
        { q:"Está nublado", a:"It's cloudy", e:"☁️" },
        { q:"Está congelado", a:"It's icy", e:"🧊" },

        { q:"Hay tormenta", a:"There's a storm", e:"⛈️" },
        { q:"Hay truenos", a:"There's thunder", e:"⚡" },
        { q:"Hay relámpagos", a:"There's lightning", e:"⚡" },

        { q:"Hay niebla", a:"It's foggy", e:"🌫️" },
        { q:"Está despejado", a:"It's clear", e:"🌞" },

        { q:"Hace buen tiempo", a:"The weather is nice", e:"😊" },
        { q:"Hace mal tiempo", a:"The weather is bad", e:"😞" },

        { q:"Arcoíris", a:"Rainbow", e:"🌈" },
        { q:"Temperatura", a:"Temperature", e:"🌡️" },

        { q:"Sol", a:"Sun", e:"☀️" },
        { q:"Lluvia", a:"Rain", e:"🌧️" },
        { q:"Nieve", a:"Snow", e:"❄️" },
        { q:"Viento", a:"Wind", e:"💨" },
        { q:"Nube", a:"Cloud", e:"☁️" },

        {q:"Auroras boreales", a:"Northern Lights", e:"🌌" },
        { q:"Auroras australes", a:"Southern Lights", e:"🌌" },
        { q:"Eclipse solar", a:"Solar Eclipse", e:"🌞" },
        { q:"Eclipse lunar", a:"Lunar Eclipse", e:"🌕" },
        { q:"Tornado", a:"Tornado", e:"🌪️" },
        { q:"Huracán", a:"Hurricane", e:"🌀" },
        { q:"Granizo", a:"Hail", e:"🧊" },
        { q:"Ola de calor", a:"Heat Wave", e:"🌡️" },
        { q:"Sequía", a:"Drought", e:"🏜️" },
        { q:"Inundación", a:"Flood", e:"🌊" }
    ],
    "Clothes": [
        { q:"Cinturón", a:"Belt", e:"🩳" },
        { q:"Corbata", a:"Tie", e:"👔" },
        { q:"Collar", a:"Necklace", e:"📿" },
        { q:"Pulsera", a:"Bracelet", e:"📿" },

        { q:"Pantalones", a:"Pants", e:"👖" },
        { q:"Camiseta/Playera", a:"T-shirt", e:"👕" },
        { q:"Camisa", a:"Shirt", e:"👔" },
        { q:"Blusa", a:"Blouse", e:"👚" },

        { q:"Pendientes/Aretes", a:"Earrings", e:"💎" },
        { q:"Botas", a:"Boots", e:"🥾" },
        { q:"Zapatos", a:"Shoes", e:"👞" },
        { q:"Sandalias", a:"Sandals", e:"👡" },
        { q:"Tenis/Deportivos", a:"Sneakers", e:"👟" },

        { q:"Abrigo", a:"Coat", e:"🧥" },
        { q:"Chaqueta/Chamarra", a:"Jacket", e:"🧥" },
        { q:"Suéter/Jersey", a:"Sweater", e:"🧶" },
        { q:"Bufanda", a:"Scarf", e:"🧣" },
        { q:"Guantes", a:"Gloves", e:"🧤" },

        { q:"Vaqueros/Mezclilla", a:"Jeans", e:"👖" },
        { q:"Pantalones cortos", a:"Shorts", e:"🩳" },
        { q:"Falda", a:"Skirt", e:"👗" },
        { q:"Vestido", a:"Dress", e:"👗" },

        { q:"Calcetines/Medias", a:"Socks", e:"🧦" },
        { q:"Sombrero/Gorro", a:"Hat", e:"👒" },

        { q:"Traje", a:"Suit", e:"🤵" },
        { q:"Pijama", a:"Pajamas", e:"🌙" },

        { q:"Joyería", a:"Jewelry", e:"💍" },
        { q:"Anillo", a:"Ring", e:"💍" },
        { q:"Reloj", a:"Watch", e:"⌚" },
        { q:"Bolso", a:"Handbag", e:"👜" },
        { q:"Mochila", a:"Backpack", e:"🎒" },

        { q:"Traje de baño", a:"Swimsuit", e:"🏖️" },
        { q:"Pantuflas", a:"Slippers", e:"🩴" },
        { q:"Sudadera", a:"Hoodie", e:"🥷" },
        { q:"Uniforme", a:"Uniform", e:"👮" },
        { q:"Chaleco", a:"Vest", e:"🦺" }
    ],
    "Hobbies": [
        { q:"Coleccionar", a:"Collect", e:"📦" },
        { q:"Jugar", a:"Play", e:"🎮" },
        { q:"Hacer/Crear", a:"Make", e:"🛠️" },
        { q:"Coser", a:"Sew", e:"🧵" },

        { q:"Tejer", a:"Knit", e:"🧶" },
        { q:"Cantar", a:"Sing", e:"🎤" },
        { q:"Bailar", a:"Dance", e:"💃" },
        { q:"Tomar fotos", a:"Take photos", e:"📸" },

        { q:"Escribir", a:"Write", e:"✍️" },
        { q:"Pintar", a:"Paint", e:"🎨" },
        { q:"Dibujar", a:"Draw", e:"✏️" },
        { q:"Hornear/Repostería", a:"Bake", e:"🧁" },

        { q:"Leer", a:"Read", e:"📚" },
        { q:"Escuchar música", a:"Listen to music", e:"🎧" },
        { q:"Ver películas", a:"Watch movies", e:"🎬" },
        { q:"Ver televisión", a:"Watch TV", e:"📺" },

        { q:"Jugar videojuegos", a:"Play video games", e:"🎮" },
        { q:"Nadar", a:"Swim", e:"🏊" },
        { q:"Correr", a:"Run", e:"🏃" },
        { q:"Caminar", a:"Walk", e:"🚶" },

        { q:"Andar en bicicleta", a:"Ride a bike", e:"🚴" },
        { q:"Acampar", a:"Camp", e:"🏕️" },
        { q:"Pescar", a:"Fish", e:"🎣" },
        { q:"Viajar", a:"Travel", e:"✈️" },

        { q:"Cocinar", a:"Cook", e:"👨‍🍳" },
        { q:"Jardinería", a:"Garden", e:"🌱" },
        { q:"Tocar guitarra", a:"Play the guitar", e:"🎸" },
        { q:"Tocar piano", a:"Play the piano", e:"🎹" },

        { q:"Fotografía", a:"Photography", e:"📷" },
        { q:"Coleccionar monedas", a:"Collect coins", e:"🪙" },
        { q:"Coleccionar estampillas", a:"Collect stamps", e:"📮" },
        { q:"Hacer ejercicio", a:"Exercise", e:"💪" }
    ],
    "Rooms and Furniture": [
        { q:"Patio/Jardín", a:"Yard", e:"🌳" },
        { q:"Balcón", a:"Balcony", e:"🏢" },
        { q:"Cocina", a:"Kitchen", e:"🍳" },
        { q:"Dormitorio/Cuarto", a:"Bedroom", e:"🛏️" },

        { q:"Sala de estar", a:"Living Room", e:"🛋️" },
        { q:"Estudio/Despacho", a:"Study", e:"📚" },
        { q:"Cochera/Garaje", a:"Garage", e:"🚗" },
        { q:"Pasillo/Recibidor", a:"Hall", e:"🚪" },

        { q:"Ático/Desván", a:"Attic", e:"🏠" },
        { q:"Sótano", a:"Basement", e:"🏚️" },
        { q:"Escaleras", a:"Stairs", e:"🪜" },

        { q:"Baño", a:"Bathroom", e:"🚿" },
        { q:"Comedor", a:"Dining Room", e:"🍽️" },
        { q:"Lavandería", a:"Laundry Room", e:"🧺" },

        { q:"Sillón", a:"Armchair", e:"🪑" },
        { q:"Sofá", a:"Sofa", e:"🛋️" },
        { q:"Cama", a:"Bed", e:"🛏️" },
        { q:"Mesa", a:"Table", e:"🪵" },
        { q:"Sillas", a:"Chairs", e:"🪑" },

        { q:"Escritorio", a:"Desk", e:"💻" },
        { q:"Estantes/Repisas", a:"Shelves", e:"📚" },
        { q:"Armario", a:"Closet", e:"🚪" },
        { q:"Armarios/Gabinetes", a:"Cabinets", e:"🗄️" },

        { q:"Estufa", a:"Stove", e:"🔥" },
        { q:"Refrigerador", a:"Refrigerator", e:"🧊" },
        { q:"Microondas", a:"Microwave", e:"📡" },
        { q:"Fregadero", a:"Sink", e:"🚰" },

        { q:"Lavadora", a:"Washing Machine", e:"🧺" },
        { q:"Secadora", a:"Dryer", e:"👕" },

        { q:"Espejo", a:"Mirror", e:"🪞" },
        { q:"Lámpara", a:"Lamp", e:"💡" },
        { q:"Televisor", a:"Television", e:"📺" },
        { q:"Reloj de pared", a:"Wall Clock", e:"🕒" },

        { q:"Puerta", a:"Door", e:"🚪" },
        { q:"Ventana", a:"Window", e:"🪟" },
        { q:"Alfombra", a:"Carpet", e:"🧶" },
        { q:"Cortinas", a:"Curtains", e:"🪟" },
        { q:"Mesa de noche", a:"Nightstand", e:"🛏️" },
        { q:"Librero", a:"Bookcase", e:"📖" }
    ],
    "Places in a City": [
        { q:"Apartamento", a:"Apartment Building", e:"🏢" },
        { q:"Puente", a:"Bridge", e:"🌉" },
        { q:"Catedral", a:"Cathedral", e:"⛪" },
        { q:"Sala de conciertos", a:"Concert Hall", e:"🎼" },

        { q:"Biblioteca", a:"Library", e:"📚" },
        { q:"Mercado", a:"Market", e:"🛒" },
        { q:"Monumento", a:"Monument", e:"🗿" },
        { q:"Mezquita", a:"Mosque", e:"🕌" },

        { q:"Edificio de oficinas", a:"Office Building", e:"🏢" },
        { q:"Parque", a:"Park", e:"🌳" },
        { q:"Rascacielos", a:"Skyscraper", e:"🏙️" },

        { q:"Plaza", a:"Square", e:"⛲" },
        { q:"Estadio", a:"Stadium", e:"🏟️" },
        { q:"Teatro", a:"Theater", e:"🎭" },

        { q:"Banco", a:"Bank", e:"🏦" },
        { q:"Hospital", a:"Hospital", e:"🏥" },
        { q:"Escuela", a:"School", e:"🏫" },
        { q:"Universidad", a:"University", e:"🎓" },

        { q:"Restaurante", a:"Restaurant", e:"🍽️" },
        { q:"Cafetería", a:"Coffee Shop", e:"☕" },
        { q:"Hotel", a:"Hotel", e:"🏨" },
        { q:"Supermercado", a:"Supermarket", e:"🛒" },

        { q:"Estación de policía", a:"Police Station", e:"👮" },
        { q:"Estación de bomberos", a:"Fire Station", e:"🚒" },
        { q:"Aeropuerto", a:"Airport", e:"✈️" },
        { q:"Estación de tren", a:"Train Station", e:"🚆" },

        { q:"Parada de autobús", a:"Bus Stop", e:"🚏" },
        { q:"Museo", a:"Museum", e:"🏛️" },
        { q:"Iglesia", a:"Church", e:"⛪" },
        { q:"Farmacia", a:"Pharmacy", e:"💊" },

        { q:"Centro comercial", a:"Shopping Mall", e:"🛍️" },
        { q:"Gasolinera", a:"Gas Station", e:"⛽" },
        { q:"Oficina de correos", a:"Post Office", e:"📮" },
        { q:"Cine", a:"Movie Theater", e:"🎬" },

        { q:"Zoológico", a:"Zoo", e:"🦁" },
        { q:"Acuario", a:"Aquarium", e:"🐠" },
        { q:"Fuente", a:"Fountain", e:"⛲" },
        { q:"Ayuntamiento", a:"City Hall", e:"🏛️" }
    ],
    "Common Adjectives": [
        { q:"Caro", a:"Expensive", e:"💰" },
        { q:"Barato", a:"Cheap", e:"🏷️" },

        { q:"Limpio", a:"Clean", e:"🧼" },
        { q:"Sucio", a:"Dirty", e:"🧹" },

        { q:"Estrecho", a:"Narrow", e:"↔️" },
        { q:"Ancho", a:"Wide", e:"🛣️" },

        { q:"Ruidoso", a:"Noisy", e:"🔊" },
        { q:"Silencioso", a:"Quiet", e:"🤫" },

        { q:"Cómodo", a:"Comfortable", e:"🛋️" },
        { q:"Incómodo", a:"Uncomfortable", e:"😣" },

        { q:"Pesado", a:"Heavy", e:"🏋️" },
        { q:"Ligero", a:"Light", e:"🪶" },

        { q:"Moderno", a:"Modern", e:"🏙️" },
        { q:"Tradicional", a:"Traditional", e:"🏛️" },

        { q:"Grande", a:"Big", e:"🐘" },
        { q:"Pequeño", a:"Small", e:"🐭" },

        { q:"Alto", a:"Tall", e:"📏" },
        { q:"Bajo", a:"Short", e:"📐" },

        { q:"Largo", a:"Long", e:"📏" },
        { q:"Corto", a:"Short", e:"✂️" },

        { q:"Nuevo", a:"New", e:"✨" },
        { q:"Viejo", a:"Old", e:"⌛" },

        { q:"Rápido", a:"Fast", e:"⚡" },
        { q:"Lento", a:"Slow", e:"🐌" },

        { q:"Fácil", a:"Easy", e:"😊" },
        { q:"Difícil", a:"Difficult", e:"🤔" },

        { q:"Fuerte", a:"Strong", e:"💪" },
        { q:"Débil", a:"Weak", e:"🥱" },

        { q:"Caliente", a:"Hot", e:"🔥" },
        { q:"Frío", a:"Cold", e:"🧊" },

        { q:"Hermoso", a:"Beautiful", e:"🌹" },
        { q:"Feo", a:"Ugly", e:"🙈" },

        { q:"Feliz", a:"Happy", e:"😄" },
        { q:"Triste", a:"Sad", e:"😢" },

        { q:"Interesante", a:"Interesting", e:"🤩" },
        { q:"Aburrido", a:"Boring", e:"😴" },

        { q:"Seguro", a:"Safe", e:"🛡️" },
        { q:"Peligroso", a:"Dangerous", e:"⚠️" },

        { q:"Abierto", a:"Open", e:"🚪" },
        { q:"Cerrado", a:"Closed", e:"🔒" }
    ],
    "Food and Drinks": [
        { q:"Fruta", a:"Fruit", e:"🍎" },
        { q:"Pera", a:"Pear", e:"🍐" },

        { q:"Manzana", a:"Apple", e:"🍎" },
        { q:"Banana", a:"Banana", e:"🍌" },

        { q:"Limón", a:"Lemon", e:"🍋" },
        { q:"Fresa", a:"Strawberry", e:"🍓" },

        { q:"Naranja", a:"Orange", e:"🍊" },
        { q:"Uvas", a:"Grapes", e:"🍇" },

        { q:"Melón", a:"Melon", e:"🍈" },
        { q:"Sandía", a:"Watermelon", e:"🍉" },

        { q:"Vegetales", a:"Vegetables", e:"🥦" },
        { q:"Pimiento", a:"Pepper", e:"🫑" },

        { q:"Zanahoria", a:"Carrot", e:"🥕" },
        { q:"Frijoles", a:"Beans", e:"🫘" },

        { q:"Tomate", a:"Tomato", e:"🍅" },
        { q:"Pepino", a:"Cucumber", e:"🥒" },

        { q:"Papa", a:"Potato", e:"🥔" },
        { q:"Champiñones/Hongos", a:"Mushrooms", e:"🍄" },

        { q:"Guisantes/Arvejas", a:"Peas", e:"🫛" },
        { q:"Repollo", a:"Cabbage", e:"🥬" },

        { q:"Cebolla", a:"Onion", e:"🧅" },
        { q:"Maíz", a:"Corn", e:"🌽" },

        { q:"Cereales/Granos", a:"Grains", e:"🌾" },
        { q:"Pasta", a:"Pasta", e:"🍝" },

        { q:"Pan", a:"Bread", e:"🍞" },
        { q:"Cereal", a:"Cereal", e:"🥣" },

        { q:"Arroz", a:"Rice", e:"🍚" },
        { q:"Proteínas", a:"Proteins", e:"🥩" },

        { q:"Lácteos", a:"Dairy", e:"🥛" },
        { q:"Carne", a:"Meat", e:"🍖" },

        { q:"Carne de res", a:"Beef", e:"🥩" },
        { q:"Pollo", a:"Chicken", e:"🍗" },

        { q:"Pescado", a:"Fish", e:"🐟" },
        { q:"Huevo", a:"Egg", e:"🥚" },

        { q:"Queso", a:"Cheese", e:"🧀" },
        { q:"Yogur", a:"Yogurt", e:"🥛" },

        { q:"Helado", a:"Ice Cream", e:"🍨" },
        { q:"Snacks", a:"Snacks", e:"🍿" },

        { q:"Pastel/Torta", a:"Cake", e:"🎂" },
        { q:"Ensalada", a:"Salad", e:"🥗" },

        { q:"Papas fritas", a:"French Fries", e:"🍟" },
        { q:"Sopa", a:"Soup", e:"🍲" },

        { q:"Galletas", a:"Cookies", e:"🍪" },
        { q:"Papas de bolsa", a:"Potato Chips", e:"🥔" },

        { q:"Hamburguesa", a:"Hamburger", e:"🍔" },
        { q:"Pizza", a:"Pizza", e:"🍕" },

        { q:"Bebidas", a:"Drinks", e:"🥤" },
        { q:"Agua", a:"Water", e:"💧" },

        { q:"Café", a:"Coffee", e:"☕" },
        { q:"Té", a:"Tea", e:"🍵" },

        { q:"Jugo", a:"Juice", e:"🧃" },
        { q:"Refresco de cola", a:"Cola", e:"🥤" },

        { q:"Leche", a:"Milk", e:"🥛" },
        { q:"Chocolate caliente", a:"Hot Chocolate", e:"🍫" }
    ],
    "Containers and Portions": [
        { q:"Una cucharada de...", a:"A Spoonful of", e:"🥄" },
        { q:"Una barra de...", a:"A Bar of", e:"🍫" },
        { q:"Una bolsa de...", a:"A Bag of", e:"🛍️" },
        { q:"Una botella de...", a:"A Bottle of", e:"🍾" },

        { q:"Un tazón de...", a:"A Bowl of", e:"🥣" },
        { q:"Una taza de...", a:"A Cup of", e:"☕" },
        { q:"Un vaso de...", a:"A Glass of", e:"🥛" },
        { q:"Un frasco de...", a:"A Jar of", e:"🫙" },

        { q:"Un paquete de...", a:"A Packet of", e:"📦" },
        { q:"Una caja de...", a:"A Box of", e:"📦" },
        { q:"Una lata de...", a:"A Can of", e:"🥫" },
        { q:"Un cartón de...", a:"A Carton of", e:"🧃" },

        { q:"Un pedazo de...", a:"A Piece of", e:"🍰" },
        { q:"Una rebanada de...", a:"A Slice of", e:"🍕" },

        { q:"Una taza grande de...", a:"A Mug of", e:"☕" },
        { q:"Una taza pequeña de...", a:"A Cup of", e:"🍵" },

        { q:"Una cucharadita de...", a:"A Teaspoon of", e:"🥄" },
        { q:"Una cucharada sopera de...", a:"A Tablespoon of", e:"🥄" },

        { q:"Una porción de...", a:"A Portion of", e:"🍽️" },
        { q:"Una ración de...", a:"A Serving of", e:"🍛" },

        { q:"Una rodaja de...", a:"A Round Slice of", e:"🍋" },
        { q:"Una pieza de fruta", a:"A Piece of Fruit", e:"🍎" },

        { q:"Un paquete grande de...", a:"A Pack of", e:"📦" },
        { q:"Un manojo de...", a:"A Bunch of", e:"🍌" },

        { q:"Un kilo de...", a:"A Kilogram of", e:"⚖️" },
        { q:"Una libra de...", a:"A Pound of", e:"⚖️" },

        { q:"Una gota de...", a:"A Drop of", e:"💧" },
        { q:"Un poco de...", a:"A Little", e:"👌" }
    ],
    "Inventions": [
        { q:"Congelador", a:"Freezer", e:"🧊" },
        { q:"Televisión", a:"TV", e:"📺" },
        { q:"Teléfono inteligente", a:"Smartphone", e:"📱" },
        { q:"Refrigerador", a:"Fridge", e:"🧊" },
        { q:"Cámara digital", a:"Digital Camera", e:"📷" },
        { q:"Reproductor de casetes", a:"Cassette Player", e:"📼" },
        { q:"Lavavajillas", a:"Dishwasher", e:"🍽️" },
        { q:"Secadora", a:"Clothes Dryer", e:"👕" },
        { q:"Reproductor de DVD", a:"DVD Player", e:"💿" },
        { q:"Televisión blanco y negro", a:"Black-and-White TV", e:"📺" },
        { q:"Computadora portátil", a:"Laptop", e:"💻" },
        { q:"GPS", a:"GPS", e:"🛰️" },
        { q:"Tostadora", a:"Toaster", e:"🍞" },
        { q:"Reproductor de video", a:"Video Player", e:"📹" },
        { q:"Microondas", a:"Microwave", e:"📡" },
        { q:"Reproductor de CD", a:"CD Player", e:"💿" },
        { q:"Aspiradora", a:"Vacuum Cleaner", e:"🧹" },
        { q:"Lavadora", a:"Washing Machine", e:"🧺" },

        { q:"Computadora", a:"Computer", e:"🖥️" },
        { q:"Tablet", a:"Tablet", e:"📲" },
        { q:"Impresora", a:"Printer", e:"🖨️" },
        { q:"Audífonos", a:"Headphones", e:"🎧" },
        { q:"Altavoz", a:"Speaker", e:"🔊" },
        { q:"Control remoto", a:"Remote Control", e:"🎮" },
        { q:"Reloj inteligente", a:"Smartwatch", e:"⌚" },
        { q:"Aire acondicionado", a:"Air Conditioner", e:"❄️" },
        { q:"Ventilador", a:"Fan", e:"🌀" },
        { q:"Cafetera", a:"Coffee Maker", e:"☕" },
        { q:"Licuadora", a:"Blender", e:"🥤" },
        { q:"Horno eléctrico", a:"Electric Oven", e:"🔥" }
    ],
    "Life Stages": [
        { q:"Nacer", a:"Be Born", e:"👶" },
        { q:"Empezar la escuela", a:"Start School", e:"🎒" },
        { q:"Terminar la escuela", a:"Finish School", e:"🎓" },
        { q:"Ir a la universidad", a:"Go to College", e:"🏫" },
        { q:"Conseguir un trabajo", a:"Get a Job", e:"💼" },
        { q:"Obtener un título universitario", a:"Get a Degree", e:"🎓" },
        { q:"Conocer a alguien", a:"Meet Someone", e:"🤝" },
        { q:"Casarse", a:"Get Married", e:"💍" },
        { q:"Tener un bebé", a:"Have a Baby", e:"👶" },
        { q:"Divorciarse", a:"Get Divorced", e:"💔" },
        { q:"Jubilarse", a:"Retire", e:"🏖️" },
        { q:"Morir", a:"Die", e:"🕊️" },

        { q:"Ser niño", a:"Be a Child", e:"🧒" },
        { q:"Ser adolescente", a:"Be a Teenager", e:"🧑" },
        { q:"Convertirse en adulto", a:"Become an Adult", e:"🧑‍💼" },
        { q:"Mudarse de casa", a:"Move House", e:"🏠" },
        { q:"Aprender a conducir", a:"Learn to Drive", e:"🚗" },
        { q:"Comprar una casa", a:"Buy a House", e:"🏡" },
        { q:"Tener hijos", a:"Have Children", e:"👨‍👩‍👧‍👦" },
        { q:"Cambiar de trabajo", a:"Change Jobs", e:"🔄" },
        { q:"Viajar al extranjero", a:"Travel Abroad", e:"✈️" },
        { q:"Cumplir años", a:"Have a Birthday", e:"🎂" },
        { q:"Graduarse", a:"Graduate", e:"🎓" },
        { q:"Envejecer", a:"Grow Old", e:"👴" }
    ],
};