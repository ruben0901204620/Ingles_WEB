// ╔══════════════════════════════════════════════════════════════════╗
// ║                     LEVELS CONFIGURATION                         ║
// ║                                                                  ║
// ║  Para agregar un nuevo nivel:                                    ║
// ║  1. Crea una carpeta: js/levels/level2/                          ║
// ║  2. Agrega tus archivos .js con const VOC_nombre = [...]         ║
// ║  3. Agrega el <script> en index.html apuntando al archivo        ║
// ║  4. Agrega el nivel aquí abajo siguiendo el mismo formato        ║
// ║                                                                  ║
// ║  Para agregar una categoría a un nivel existente:                ║
// ║  1. Crea el archivo .js en la carpeta del nivel                  ║
// ║  2. Agrega el <script> en index.html                             ║
// ║  3. Registra la categoría aquí abajo                             ║
// ╚══════════════════════════════════════════════════════════════════╝

const LEVELS_CONFIG = [
    {
        id: "level1",
        label: "Level 1",
        icon: "📚",
        categories: [
            { name: "Countries & Nationalities",  data: VOC_countries         },
            { name: "Personal Objects",            data: VOC_personal_objects },
            { name: "Jobs",                        data: VOC_jobs             },
            { name: "Family",                      data: VOC_family           },
            { name: "Daily Routine Verbs",         data: VOC_daily_routine    },
            { name: "Weather & Seasons",           data: VOC_weather          },
            { name: "Clothes",                     data: VOC_clothes          },
            { name: "Hobbies",                     data: VOC_hobbies          },
            { name: "Rooms & Furniture",           data: VOC_rooms_furniture  },
            { name: "Places in a City",            data: VOC_places_city      },
            { name: "Common Adjectives",           data: VOC_adjectives       },
            { name: "Food & Drinks",               data: VOC_food_drinks      },
            { name: "Containers & Portions",       data: VOC_containers       },
            { name: "Inventions",                  data: VOC_inventions       },
            { name: "Life Stages",                 data: VOC_life_stages      },
        ]
    },

    // ── Ejemplo de cómo agregar Level 2 en el futuro ──────────────
    // {
    //     id: "level2",
    //     label: "Level 2",
    //     icon: "🚀",
    //     categories: [
    //         { name: "Animals",    data: VOC_animals    },
    //         { name: "Sports",     data: VOC_sports     },
    //     ]
    // },
];
