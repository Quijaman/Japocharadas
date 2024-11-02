const movies = [
"El Padrino",
"El Padrino II",
"El Lobo de Wall Street",
"El Método",
"El Contador",
"El Hombre de Acero",
"X-Men: Days of Future Past",
"Spider-Man: Homecoming",
"Thor: Ragnarok",
"Avengers: Infinity War",
"Avengers: Endgame",
"El Caballero de la Noche",
"Batman Begins",
"Superman",
"Deadpool",
"Los Vengadores: La Era de Ultrón",
"Thor: El Mundo Oscuro",
"Doctor Strange",
"Capitana Marvel",
"Black Widow",
"Shang-Chi y la Leyenda de los Diez Anillos",
"El Hombre Araña",
"Los Cuatro Fantásticos",
"Ant-Man",
"Spider-Man: Into the Spider-Verse",
"Capitán América: El Soldado de Invierno",
"Capitán América: Civil War",
"Guardians of the Galaxy",
"Wonder Woman",
"Zach y Miri Hacen una Porno",
"Los Cazafantasmas",
"Los Otros",
"Unbreakable",
"El Exorcista",
"Paranormal Activity",
"El Proyecto de la Bruja de Blair",
"Insidious",
"Anabelle",
"El Huésped",
"Hereditary",
"El Resplandor",
"Un Lugar en Silencio",
"El Laberinto del Fauno",
"Los Muertos de la Noche",
"28 Días Después",
"World War Z",
"El Cazador",
"El Hombre Lobo",
"Los Infiltrados",
"Gladiador",
"Los Intocables",
"El Silencio de los Corderos",
"Cadena Perpetua",
"Jurassic Park",
"Terminator 2: Judgment Day",
"Piratas del Caribe: La Maldición de la Perla Negra",
"Mad Max: Furia en la Carretera",
"El Rey León",
"Toy Story",
"Shrek",
"Frozen: El Reino del Hielo",
"Buscando a Nemo",
"Wall-E",
"Los Increíbles",
"Coco",
"Moana",
"Up",
"Ratatouille",
"Zootopia",
"El Viaje de Chihiro",
"Vengadores: La Era de Ultrón",
"Transformers",
"Avatar",
"El Hobbit: Un Viaje Inesperado",
"El Señor de los Anillos: La Comunidad del Anillo",
"Harry Potter y la Piedra Filosofal",
"Harry Potter y las Reliquias de la Muerte - Parte 1",
"Harry Potter y las Reliquias de la Muerte - Parte 2",
"Batman",
"Harry Potter y la Cámara Secreta",
"Harry Potter y el Prisionero de Azkaban",
"Harry Potter y el Cáliz de Fuego",
"Harry Potter y la Orden del Fénix",
"Harry Potter y el Misterio del Príncipe",
"Blade Runner",
"Matrix",
"Inception",
"Interstellar",
"Fight Club",
"El Club de la Pelea",
"El Gran Lebowski",
"Trainspotting",
"Scarface",
"El Bueno, el Malo y el Feo",
"El Pianista",
"Salvar al Soldado Ryan",
"Gladiador",
"Braveheart",
"El Último Samurai",
"El Nacimiento de una Nación",
"Se7en",
"El Sexto Sentido",
"El Laberinto del Fauno",
"El Hombre Araña",
"Wonder Woman",
"Las Crónicas de Narnia: El León, la Bruja y el Armario",
"Avatar",
"Los Miserables",
"Chicago",
"El Gran Showman",
"West Side Story",
"Phantom of the Opera",
"Les Misérables",
"Moulin Rouge!",
"El Fantasma de la Ópera",
"Into the Woods",
"Joker",
"Parásitos",
"El Ciudadano",
"12 Hombres en Pugna",
"El Gran Dictador",
"Intocable",
"Amelie",
"Frida",
"Una Mente Maravillosa",
"La Vida es Bella",
"El Pianista",
"El Discurso del Rey",
"Las Ventajas de Ser Invisible",
"El Indomable Will Hunting",
"Requiem for a Dream",
"El Lobo de Wall Street",
"Birdman",
"El Cisne Negro",
"Shutter Island",
"Los Otros",
"Unbreakable",
"Oldboy",
"El Visitante",
"Spotlight",
"Los dos Papas",
"Un Pequeño Favor",
"Espejito, Espejito",
"Crazy, Stupid, Love",
"500 Días Con Ella",
"Amigos",
"Los Viajes de Gulliver",
"El Proceso de los Chicago 7",
"Escribiendo la Historia",
"La Red Social",
"Her",
"Ex Machina",
"Transcendence",
"Terminator Genisys",
"Warcraft: El Origen",
"Pacific Rim",
"Transformers: El Último Caballero",
"Transformers: La Era de la Extinción",
"Spider-Man: Un Nuevo Universo",
"Godzilla",
"King Kong",
"Pacific Rim",
"Jurassic World",
"Zombieland",
"Los Muertos de la Noche",
"El Juego del Miedo",
"Las Crónicas de Narnia: La Travesía del Viajero del Alba",
"El Regreso de la Momia",
"Men in Black",
"Independence Day",
"Jurassic Park III",
"El Grinch",
"Scary Movie",
"Los Pitufos",
"Los Cazafantasmas",
"Mi Villano Favorito",
"Aladino",
"Los Increíbles",
"Frozen II",
"Toy Story 4",
"Ralph El Demoledor",
"Hotel Transylvania",
"Los Cazafantasmas: Más Allá",
"Las Aventuras de Paddington",
"Paddington 2",
"Ralph Rompe Internet",
"El Rey León",
"Cenicienta",
"Malefica",
"Peter Pan",
"Los Aristogatos",
"El Libro de la Selva",
"La Bella y la Bestia",
"Peter Rabbit",
"Los Muppets",
"Los Pingüinos de Madagascar",
"Madagascar",
"Zootopia",
"El Viaje de Chihiro",
"El Espiritu de la Colmena",
"Los Otros",
"Unbreakable",
"El Espiritu de la Colmena",
"Las Aventuras de Tom Sawyer",
"El Pirata",
"El Estrangulador de Boston",
"Un Mundo Sin Fin",
"El Pasado",
"Un Pequeño Favor",
"Lo Que el Viento se Llevó",
"El Padrino III",
"Crímenes de la Calle Morgue",
"Con los Pies en la Tierra",
"Los Goonies",
"El Juez",
"American Pie",
"Una Historia de Navidad",
"El Profesor Chiflado",
"El Gato con Botas",
"Mi Mascota es un León",
"Mi Novio es un Zombie",
"Como si Fuera la Primera Vez",
"Legalmente Rubia",
"Amigos con Beneficios",
"500 Días de Verano",
"Pequeña Miss Sunshine",
"Las Ventajas de Ser Invisible",
"Perdona si te Llamo Amor",
"Como Si Fuera la Primera Vez",
"Un viaje a la Luna",
"Espejito, Espejito",
"Los Viajes de Gulliver",
"Las Crónicas de Narnia: La Travesía del Viajero del Alba",
"El Grinch",
"El Jorobado de Notre Dame",
"Los Aristogatos",
"Descendientes",
"Los Pitufos",
"Como si Fuera la Primera Vez",
"Un Lugar en Silencio",
"El Rey León",
"El Hombre Araña",
"Mi Villano Favorito",
"Los Cazafantasmas",
"Zombieland",
"Los Increíbles",
"Madagascar",
"Transformers",
"Los Goonies",
"El Gran Lebowski",
"Deadpool",
"Zach y Miri Hacen una Porno",
"El Hombre Araña",
"Los Otros",
"Los Cazafantasmas",
"Paranormal Activity",
"El Proyecto de la Bruja de Blair",
"Insidious",
"Anabelle",
"El Huésped",
"Hereditary",
"El Resplandor",
"Un Lugar en Silencio",
"El Laberinto del Fauno",
"Los Muertos de la Noche",
"28 Días Después",
"World War Z",
"El Cazador",
"El Hombre Lobo",
"Los Infiltrados",
"Gladiador",
"Los Intocables",
"El Silencio de los Corderos",
"Cadena Perpetua",
"Jurassic Park",
"Terminator 2: Judgment Day",
"Piratas del Caribe: La Maldición de la Perla Negra",
"Mad Max: Furia en la Carretera",
"El Rey León",
"Toy Story",
"Shrek",
"Frozen: El Reino del Hielo",
"Buscando a Nemo",
"Wall-E",
"Los Increíbles",
"Coco",
"Moana",
"Up",
"Ratatouille",
"Zootopia",
"El Viaje de Chihiro",
"Vengadores: La Era de Ultrón",
"Transformers",
"Avatar",
"El Hobbit: Un Viaje Inesperado",
"El Señor de los Anillos: La Comunidad del Anillo",
"Harry Potter y la Piedra Filosofal",
"Harry Potter y las Reliquias de la Muerte - Parte 1",
"Harry Potter y las Reliquias de la Muerte - Parte 2",
"Batman",
"Harry Potter y la Cámara Secreta",
"Harry Potter y el Prisionero de Azkaban",
"Harry Potter y el Cáliz de Fuego",
"Harry Potter y la Orden del Fénix",
"Harry Potter y el Misterio del Príncipe",
"Blade Runner",
"Matrix",
"Inception",
"Interstellar",
"Fight Club",
"El Club de la Pelea",
"El Gran Lebowski",
"Trainspotting",
"Scarface",
"El Bueno, el Malo y el Feo",
"El Pianista",
"Salvar al Soldado Ryan",
"Gladiador",
"Braveheart",
"El Último Samurai",
"El Nacimiento de una Nación",
"Se7en",
"El Sexto Sentido",
"El Laberinto del Fauno",
"El Hombre Araña",
"Wonder Woman",
"Las Crónicas de Narnia: El León, la Bruja y el Armario",
"Avatar",
"Los Miserables",
"Chicago",
"El Gran Showman",
"West Side Story",
"Phantom of the Opera",
"Les Misérables",
"Moulin Rouge!",
"El Fantasma de la Ópera",
"Into the Woods",
"Joker",
"Parásitos",
"El Ciudadano",
"12 Hombres en Pugna",
"El Gran Dictador",
"Intocable",
"Amelie",
"Frida",
"Una Mente Maravillosa",
"La Vida es Bella",
"El Pianista",
"El Discurso del Rey",
"Las Ventajas de Ser Invisible",
"El Indomable Will Hunting",
"Requiem for a Dream",
"El Lobo de Wall Street",
"Birdman",
"El Cisne Negro",
"Shutter Island",
"Los Otros",
"Unbreakable",
"Oldboy",
"El Visitante",
"Spotlight",
"Los dos Papas",
"Un Pequeño Favor",
"Espejito, Espejito",
"Crazy, Stupid, Love",
"500 Días Con Ella",
"Amigos",
"Los Viajes de Gulliver",
"El Proceso de los Chicago 7",
"Escribiendo la Historia",
"La Red Social",
"Her",
"Ex Machina",
"Transcendence",
"Terminator Genisys",
"Warcraft: El Origen",
"Pacific Rim",
"Transformers: El Último Caballero",
"Transformers: La Era de la Extinción",
"Spider-Man: Un Nuevo Universo",
"Godzilla",
"King Kong",
"Pacific Rim",
"Jurassic World",
"Zombieland",
"Los Muertos de la Noche",
"El Juego del Miedo",
"Las Crónicas de Narnia: La Travesía del Viajero del Alba",
"El Regreso de la Momia",
"Men in Black",
"Independence Day",
"Jurassic Park III",
"El Grinch",
"Scary Movie",
"Los Pitufos",
"Los Cazafantasmas",
"Mi Villano Favorito",
"Aladino",
"Los Increíbles",
"Frozen II",
"Toy Story 4",
"Ralph El Demoledor",
"Hotel Transylvania",
"Los Cazafantasmas: Más Allá",
"Las Aventuras de Paddington",
"Paddington 2",
"Ralph Rompe Internet",
"El Rey León",
"Cenicienta",
"Malefica",
"Peter Pan",
"Los Aristogatos",
"El Libro de la Selva",
"La Bella y la Bestia",
"Peter Rabbit",
"Los Muppets",
"Los Pingüinos de Madagascar",
"Madagascar",
"Zootopia",
"El Viaje de Chihiro",
"El Espiritu de la Colmena",
"Los Otros",
"Unbreakable",
"El Espiritu de la Colmena",
"Las Aventuras de Tom Sawyer",
"El Pirata",
"El Estrangulador de Boston",
"Un Mundo Sin Fin",
"El Pasado",
"Un Pequeño Favor",
"Lo Que el Viento se Llevó",
"El Padrino III",
"Crímenes de la Calle Morgue",
"Con los Pies en la Tierra",
"Los Goonies",
"El Juez",
"American Pie",
"Una Historia de Navidad",
"El Profesor Chiflado",
"El Gato con Botas",
"Mi Mascota es un León",
"Mi Novio es un Zombie",
"Como si Fuera la Primera Vez",
"Legalmente Rubia",
"Amigos con Beneficios",
"500 Días de Verano",
"Pequeña Miss Sunshine",
"Las Ventajas de Ser Invisible",
"Perdona si te Llamo Amor",
"Como Si Fuera la Primera Vez",
"Un viaje a la Luna",
"Espejito, Espejito",
"Los Viajes de Gulliver",
"Las Crónicas de Narnia: La Travesía del Viajero del Alba",
"El Grinch",
"El Jorobado de Notre Dame",
"Los Aristogatos",
"Descendientes",
"Los Pitufos",
"Como si Fuera la Primera Vez",
"Un Lugar en Silencio",
"El Rey León",
"El Hombre Araña",
"Mi Villano Favorito",
"Los Cazafantasmas",
"Zombieland",
"Los Increíbles",
"Madagascar",
"Transformers",
"Los Goonies",
"El Gran Lebowski",
"Deadpool",
"Zach y Miri Hacen una Porno",
"El Hombre Araña",
"Los Otros",
"Los Cazafantasmas",
"Paranormal Activity",
"El Proyecto de la Bruja de Blair",
"Insidious",
"Anabelle",
"El Huésped",
"Hereditary",
"El Resplandor",
"Un Lugar en Silencio",
"El Laberinto del Fauno",
"Los Muertos de la Noche",
"28 Días Después",
"World War Z",
"El Cazador",
"El Hombre Lobo",
"Los Infiltrados",
"Gladiador",
"Los Intocables",
"El Silencio de los Corderos",
"Cadena Perpetua",
"Jurassic Park",
"Terminator 2: Judgment Day",
"Piratas del Caribe: La Maldición de la Perla Negra",
"Mad Max: Furia en la Carretera",
"El Rey León",
"Toy Story",
"Shrek",
"Frozen: El Reino del Hielo",
"Buscando a Nemo",
"Wall-E",
"Los Increíbles",
"Coco",
"Moana",
"Up",
"Ratatouille",
"Zootopia",
"El Viaje de Chihiro",
"Vengadores: La Era de Ultrón",
"Transformers",
"Avatar",
"El Hobbit: Un Viaje Inesperado",
"El Señor de los Anillos: La Comunidad del Anillo",
"Harry Potter y la Piedra Filosofal",
"Harry Potter y las Reliquias de la Muerte - Parte 1",
"Harry Potter y las Reliquias de la Muerte - Parte 2",
"Batman",
"Harry Potter y la Cámara Secreta",
"Harry Potter y el Prisionero de Azkaban",
"Harry Potter y el Cáliz de Fuego",
"Harry Potter y la Orden del Fénix",
"Harry Potter y el Misterio del Príncipe",
"Blade Runner",
"Matrix",
"Inception",
"Interstellar",
"Fight Club",
"El Club de la Pelea",
"El Gran Lebowski",
"Trainspotting",
"Scarface",
"El Bueno, el Malo y el Feo",
"El Pianista",
"Salvar al Soldado Ryan",
"Gladiador",
"Braveheart",
"El Último Samurai",
"El Nacimiento de una Nación",
"Se7en",
"El Sexto Sentido",
"El Laberinto del Fauno",
"El Hombre Araña",
"Wonder Woman",
"Las Crónicas de Narnia: El León, la Bruja y el Armario",
"Avatar",
"Los Miserables",
"Chicago",
"El Gran Showman",
"West Side Story",
"Phantom of the Opera",
"Les Misérables",
"Moulin Rouge!",
"El Fantasma de la Ópera",
"Into the Woods",
"Joker",
"Parásitos",
"El Ciudadano",
"12 Hombres en Pugna",
"El Gran Dictador",
"Intocable",
"Amelie",
"Frida",
"Una Mente Maravillosa",
"La Vida es Bella",
"El Pianista",
"El Discurso del Rey",
"Las Ventajas de Ser Invisible",
"El Indomable Will Hunting",
"Requiem for a Dream",
"El Lobo de Wall Street",
"Birdman",
"El Cisne Negro",
"Shutter Island",
"Los Otros",
"Unbreakable",
"Oldboy",
"El Visitante",
"Spotlight",
"Los dos Papas",
"Un Pequeño Favor",
"Espejito, Espejito",
"Crazy, Stupid, Love",
"500 Días Con Ella",
"Amigos",
"Los Viajes de Gulliver",
"El Proceso de los Chicago 7",
"Escribiendo la Historia",
"La Red Social",
"Her",
"Ex Machina",
"Transcendence",
"Terminator Genisys",
"Warcraft: El Origen",
"Pacific Rim",
"Transformers: El Último Caballero",
"Transformers: La Era de la Extinción",
"Spider-Man: Un Nuevo Universo",
"Godzilla",
"King Kong",
"Pacific Rim",
"Jurassic World",
"Zombieland",
"Los Muertos de la Noche",
"El Juego del Miedo",
"Las Crónicas de Narnia: La Travesía del Viajero del Alba",
"El Regreso de la Momia",
"Men in Black",
"Independence Day",
"Jurassic Park III",
"El Grinch",
"Scary Movie",
"Los Pitufos",
"Los Cazafantasmas",
"Mi Villano Favorito",
"Aladino",
"Los Increíbles",
"Frozen II",
"Toy Story 4",
"Ralph El Demoledor",
"Hotel Transylvania",
"Los Cazafantasmas: Más Allá",
"Las Aventuras de Paddington",
"Paddington 2",
"Ralph Rompe Internet",
"El Rey León",
"Cenicienta",
"Malefica",
"Peter Pan",
"Los Aristogatos",
"El Libro de la Selva",
"La Bella y la Bestia",
"Peter Rabbit",
"Los Muppets",
"Los Pingüinos de Madagascar",
"Madagascar",
"Zootopia",
"El Viaje de Chihiro",
"El Espiritu de la Colmena",
"Los Otros",
"Unbreakable",
"El Espiritu de la Colmena",
"Las Aventuras de Tom Sawyer",
"El Pirata",
"El Estrangulador de Boston",
"Un Mundo Sin Fin",
"El Pasado",
"Un Pequeño Favor",
"Lo Que el Viento se Llevó",
"El Padrino III",
"Crímenes de la Calle Morgue",
"Con los Pies en la Tierra",
"Los Goonies",
"El Juez",
"American Pie",
"Una Historia de Navidad",
"El Profesor Chiflado",
"El Gato con Botas",
"Mi Mascota es un León",
"Mi Novio es un Zombie",
"Como si Fuera la Primera Vez",
"Legalmente Rubia",
"Amigos con Beneficios",
"500 Días de Verano",
"Pequeña Miss Sunshine",
"Las Ventajas de Ser Invisible",
"Perdona si te Llamo Amor",
"Como Si Fuera la Primera Vez",
"Un viaje a la Luna",
"Espejito, Espejito",
"Los Viajes de Gulliver",
"Las Crónicas de Narnia: La Travesía del Viajero del Alba",
"El Grinch",
"El Jorobado de Notre Dame",
"Los Aristogatos",
"Descendientes",
"Los Pitufos",
"Como si Fuera la Primera Vez",
"Un Lugar en Silencio",
"El Rey León",
"El Hombre Araña",
"Mi Villano Favorito",
"Los Cazafantasmas",
"Zombieland",
"Los Increíbles",
"Madagascar",
"Transformers",
"Los Goonies",
"El Gran Lebowski",
"Deadpool",
"Zach y Miri Hacen una Porno",
"El Hombre Araña",
"Los Otros",
"Los Cazafantasmas",
"Paranormal Activity",
"El Proyecto de la Bruja de Blair",
"Insidious",
"Anabelle",
"El Huésped",
"Hereditary",
"El Resplandor",
"Un Lugar en Silencio",
"El Laberinto del Fauno",
"Los Muertos de la Noche",
"28 Días Después",
"World War Z",
"El Cazador",
"El Hombre Lobo",
"Los Infiltrados",
"Gladiador",
"Los Intocables",
"El Silencio de los Corderos",
"Cadena Perpetua",
"Jurassic Park",
"Terminator 2: Judgment Day",
"Piratas del Caribe: La Maldición de la Perla Negra",
"Mad Max: Furia en la Carretera",
"El Rey León",
"Toy Story",
"Shrek",
"Frozen: El Reino del Hielo",
"Buscando a Nemo",
"Wall-E",
"Los Increíbles",
"Coco",
"Moana",
"Up",
"Ratatouille",
"Zootopia",
"El Viaje de Chihiro",
"Vengadores: La Era de Ultrón",
"Transformers",
"Avatar",
"El Hobbit: Un Viaje Inesperado",
"El Señor de los Anillos: La Comunidad del Anillo",
"Harry Potter y la Piedra Filosofal",
"Harry Potter y las Reliquias de la Muerte - Parte 1",
"Harry Potter y las Reliquias de la Muerte - Parte 2",
"Batman",
"Harry Potter y la Cámara Secreta",
"Harry Potter y el Prisionero de Azkaban",
"Harry Potter y el Cáliz de Fuego",
"Harry Potter y la Orden del Fénix",
"Harry Potter y el Misterio del Príncipe",
"Blade Runner",
"Matrix",
"Inception",
"Interstellar",
"Fight Club",
"El Club de la Pelea",
"El Gran Lebowski",
"Trainspotting",
"Scarface",
"El Bueno, el Malo y el Feo",
"El Pianista",
"Salvar al Soldado Ryan",
"Gladiador",
"Braveheart",
"El Último Samurai",
"El Nacimiento de una Nación",
"Se7en",
"El Sexto Sentido",
"El Laberinto del Fauno",
"El Hombre Araña",
"Wonder Woman",
"Las Crónicas de Narnia: El León, la Bruja y el Armario",
"Avatar",
"Los Miserables",
"Chicago",
"El Gran Showman",
"West Side Story",
"Phantom of the Opera",
"Les Misérables",
"Moulin Rouge!",
"El Fantasma de la Ópera",
"Into the Woods",
"Joker",
"Parásitos",
"El Ciudadano",
"12 Hombres en Pugna",
"El Gran Dictador",
"Intocable",
"Amelie",
"Frida",
"Una Mente Maravillosa",
"La Vida es Bella",
"El Pianista",
"El Discurso del Rey",
"Las Ventajas de Ser Invisible",
"El Indomable Will Hunting",
"Requiem for a Dream",
"El Lobo de Wall Street",
"Birdman",
"El Cisne Negro",
"Shutter Island",
"Los Otros",
"Unbreakable",
"Oldboy",
"El Visitante",
"Spotlight",
"Los dos Papas",
"Un Pequeño Favor",
"Espejito, Espejito",
"Crazy, Stupid, Love",
"500 Días Con Ella",
"Amigos",
"Los Viajes de Gulliver",
"El Proceso de los Chicago 7",
"Escribiendo la Historia",
"La Red Social",
"Her",
"Ex Machina",
"Transcendence",
"Terminator Genisys",
"Warcraft: El Origen",
"Pacific Rim",
"Transformers: El Último Caballero",
"Transformers: La Era de la Extinción",
"Spider-Man: Un Nuevo Universo",
"Godzilla",
"King Kong",
"Pacific Rim",
"Jurassic World",
"Zombieland",
"Los Muertos de la Noche",
"El Juego del Miedo",
"Las Crónicas de Narnia: La Travesía del Viajero del Alba",
"El Regreso de la Momia",
"Men in Black",
"Independence Day",
"Jurassic Park III",
"El Grinch",
"Scary Movie",
"Los Pitufos",
"Los Cazafantasmas",
"Mi Villano Favorito",
"Aladino",
"Los Increíbles",
"Frozen II",
"Toy Story 4",
"Ralph El Demoledor",
"Hotel Transylvania",
"Los Cazafantasmas: Más Allá",
"Las Aventuras de Paddington",
"Paddington 2",
"Ralph Rompe Internet",
"El Rey León",
"Cenicienta",
"Malefica",
"Peter Pan",
"Los Aristogatos",
"El Libro de la Selva",
"La Bella y la Bestia",
"Peter Rabbit",
"Los Muppets",
"Los Pingüinos de Madagascar",
"Madagascar",
"Zootopia",
"El Viaje de Chihiro",
"El Espiritu de la Colmena",
"Los Otros",
"Unbreakable",
"El Espiritu de la Colmena",
"Las Aventuras de Tom Sawyer",
"El Pirata",
"El Estrangulador de Boston",
"Un Mundo Sin Fin",
"El Pasado",
"Un Pequeño Favor",
"Lo Que el Viento se Llevó",
"El Padrino III",
"Crímenes de la Calle Morgue",
"Con los Pies en la Tierra",
"Los Goonies",
"El Juez",
"American Pie",
"Una Historia de Navidad",
"El Profesor Chiflado",
"El Gato con Botas",
"Mi Mascota es un León",
"Mi Novio es un Zombie",
"Como si Fuera la Primera Vez",
"Legalmente Rubia",
"Amigos con Beneficios",
"500 Días de Verano",
"Pequeña Miss Sunshine",
"Las Ventajas de Ser Invisible",
"Perdona si te Llamo Amor",
"Como Si Fuera la Primera Vez",
"Un viaje a la Luna",
"Espejito, Espejito",
"Los Viajes de Gulliver",
"Las Crónicas de Narnia: La Travesía del Viajero del Alba",
"El Grinch",
"El Jorobado de Notre Dame",
"Los Aristogatos",
"Descendientes",
"Los Pitufos",
"Como si Fuera la Primera Vez",
"Un Lugar en Silencio",
"El Rey León",
"El Hombre Araña",
"Mi Villano Favorito",
"Los Cazafantasmas",
"Zombieland",
"Los Increíbles",
"Madagascar",
"Transformers",
"Los Goonies",
"El Gran Lebowski",
"Deadpool",
"Zach y Miri Hacen una Porno",
"El Hombre Araña",
"Los Otros",
"Los Cazafantasmas",
"Paranormal Activity",
"El Proyecto de la Bruja de Blair",
"Insidious",
"Anabelle",
"El Huésped",
"Hereditary",
"El Resplandor",
"Un Lugar en Silencio",
"El Laberinto del Fauno",
"Los Muertos de la Noche",
"28 Días Después",
"World War Z",
"El Cazador",
"El Hombre Lobo",
"Los Infiltrados",
"Gladiador",
"Los Intocables",
"El Silencio de los Corderos",
"Cadena Perpetua",
"Jurassic Park",
"Terminator 2: Judgment Day",
"Piratas del Caribe: La Maldición de la Perla Negra",
"Mad Max: Furia en la Carretera",
"El Rey León",
"Toy Story",
"Shrek",
"Frozen: El Reino del Hielo",
"Buscando a Nemo",
"Wall-E",
"Los Increíbles",
"Coco",
"Moana",
"Up",
"Ratatouille",
"Zootopia",
"El Viaje de Chihiro",
"Vengadores: La Era de Ultrón",
"Transformers",
"Avatar",
"El Hobbit: Un Viaje Inesperado",
"El Señor de los Anillos: La Comunidad del Anillo",
"Harry Potter y la Piedra Filosofal",
"Harry Potter y las Reliquias de la Muerte - Parte 1",
"Harry Potter y las Reliquias de la Muerte - Parte 2",
"Batman",
"Harry Potter y la Cámara Secreta",
"Harry Potter y el Prisionero de Azkaban",
"Harry Potter y el Cáliz de Fuego",
"Harry Potter y la Orden del Fénix",
"Harry Potter y el Misterio del Príncipe",
"Blade Runner",
"Matrix",
"Inception",
"Interstellar",
"Fight Club",
"El Club de la Pelea",
"El Gran Lebowski",
"Trainspotting",
"Scarface",
"El Bueno, el Malo y el Feo",
"El Pianista",
"Salvar al Soldado Ryan",
"Gladiador",
"Braveheart",
"El Último Samurai",
"El Nacimiento de una Nación",
"Se7en",
"El Sexto Sentido",
"El Laberinto del Fauno",
"El Hombre Araña",
"Wonder Woman",
"Las Crónicas de Narnia: El León, la Bruja y el Armario",
"Avatar",
"Los Miserables",
"Chicago",
"El Gran Showman",
"West Side Story",
"Phantom of the Opera",
"Les Misérables",
"Moulin Rouge!",
"El Fantasma de la Ópera",
"Into the Woods",
"Joker",
"Parásitos",
"El Ciudadano",
"12 Hombres en Pugna",
"El Gran Dictador",
"Intocable",
"Amelie",
"Frida",
"Una Mente Maravillosa",
"La Vida es Bella",
"El Pianista",
"El Discurso del Rey",
"Las Ventajas de Ser Invisible",
"El Indomable Will Hunting",
"Requiem for a Dream",
"El Lobo de Wall Street",
"Birdman",
"El Cisne Negro",
"Shutter Island",
"Los Otros",
"Unbreakable",
"Oldboy",
"El Visitante",
"Spotlight",
"Los dos Papas",
"Un Pequeño Favor",
"Espejito, Espejito",
"Crazy, Stupid, Love",
"500 Días Con Ella",
"Amigos",
"Los Viajes de Gulliver",
"El Proceso de los Chicago 7",
"Escribiendo la Historia",
"La Red Social",
"Her",
"Ex Machina",
"Transcendence",
"Terminator Genisys",
"Warcraft: El Origen",
"Pacific Rim",
"Transformers: El Último Caballero",
"Transformers: La Era de la Extinción",
"Spider-Man: Un Nuevo Universo",
"Godzilla",
"King Kong",
    // Asegúrate de agregar más títulos hasta llegar a 1000
];

document.getElementById('spin-button').addEventListener('click', generateMovie);

function getRandomMovie() {
    return movies[Math.floor(Math.random() * movies.length)];
}

function generateMovie() {
    const resultDiv = document.getElementById('movie-display');
    resultDiv.innerHTML = 'Generando...'; // Mensaje inicial

    let iterations = 0;
    const maxIterations = 20; // Número máximo de palabras mostradas
    let intervalSpeed = 100; // Velocidad inicial (100 ms)
    let interval;

    // Inicia el intervalo para mostrar palabras al azar
    interval = setInterval(() => {
        const randomWord = getRandomMovie(); // Seleccionar una película aleatoria
        resultDiv.innerHTML = randomWord; // Mostrar el nombre aleatorio
        changeBackgroundColor(); // Cambiar el color de fondo

        iterations++;

        // Cuando se alcance el número máximo de iteraciones, detener el intervalo y mostrar el resultado
        if (iterations >= maxIterations) {
            clearInterval(interval); // Detener el intervalo de nombres
            setTimeout(() => {
                const finalMovie = getRandomMovie(); // Obtener una película final
                resultDiv.innerHTML = finalMovie; // Mostrar el nombre final
            }, 500); // Esperar medio segundo antes de mostrar el resultado final
        }
    }, intervalSpeed); // Intervalo inicial
}

function changeBackgroundColor() {
    const colors = ['#ffcccc', '#ffccff', '#ccffff', '#ccffcc', '#ffffcc'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}