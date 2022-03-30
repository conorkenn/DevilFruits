const fruits = [
    {
        id: 1,
        name: 'Gomu Gomu no Mi',
        eng_name: 'Gum-Gum Fruit',
        type: 'Paramecia',
        current_user: 'Monkey D. Luffy'
    },
    {
        id: 2,
        name: 'Bara Bara no Mi',
        eng_name: 'Chop-Chop Fruit',
        type: 'Paramecia',
        current_user: 'Buggy'
    },
    {
        id: 3,
        name: 'Sube Sube no Mi',
        eng_name: 'Smooth-Smooth Fruit',
        type: 'Paramecia',
        current_user: 'Alvida'
    },
    {
        id: 4,
        name: 'Bomu Bomu no Mi',
        eng_name: 'Bomb-Bomb Fruit',
        type: 'Paramecia',
        current_user: 'Gem'
    },
    {
        id: 5,
        name: 'Kiro Kiro no Mi',
        eng_name: 'Kilo-Kilo Fruit',
        type: 'Paramecia',
        current_user: 'Mikita'
    },
    {
        id: 6,
        name: 'Hana Hana no Mi',
        eng_name: 'Flower-Flower Fruit',
        type: 'Paramecia',
        current_user: 'Nico Robin'
    },
    {
        id: 7,
        name: 'Doru Doru no Mi',
        eng_name: 'Wax-Wax Fruit',
        type: 'Paramecia',
        current_user: 'Galdino'
    },
    {
        id: 7,
        name: 'Baku Baku no Mi',
        eng_name: 'Munch-Munch Fruit',
        type: 'Paramecia',
        current_user: 'Wapol'
    },
    {
        id: 8,
        name: 'Mane Mane no Mi',
        eng_name: 'Clone-Clone Fruit',
        type: 'Paramecia',
        current_user: 'Bon Kurei'
    },
    {
        id: 9,
        name: 'Supa Supa no Mi',
        eng_name: 'Dice-Dice Fruit',
        type: 'Paramecia',
        current_user: 'Daz Bonez'
    },
    {
        id: 10,
        name: 'Toge Toge no Mi',
        eng_name: 'Spike-Spike Fruit',
        type: 'Paramecia',
        current_user: 'Zala'
    },
    {
        id: 11,
        name: 'Ori Ori no Mi',
        eng_name: 'Bind-Bind Fruit',
        type: 'Paramecia',
        current_user: 'Hina'
    },
    {
        id: 12,
        name: 'Bane Bane no Mi',
        eng_name: 'Spring-Spring Fruit',
        type: 'Paramecia',
        current_user: 'Bellamy'
    },
    {
        id: 13,
        name: 'Ito Ito no Mi',
        eng_name: 'String-String Fruit',
        type: 'Paramecia',
        current_user: 'Donquixote Doflamingo'
    },
    {
        id: 14,
        name: 'Noro Noro no Mi',
        eng_name: 'Slow-Slow Fruit',
        type: 'Paramecia',
        current_user: 'Foxy'
    },
    {
        id: 15,
        name: 'Doa Doa no Mi',
        eng_name: 'Door-Door Fruit',
        type: 'Paramecia',
        current_user: 'Blueno'
    },
    {
        id: 16,
        name: 'Awa Awa no Mi',
        eng_name: 'Bubble-Bubble Fruit',
        type: 'Paramecia',
        current_user: 'Kalifa'
    },
    {
        id: 17,
        name: 'Beri Beri no Mi',
        eng_name: 'Berry-Berry Fruit',
        type: 'Paramecia',
        current_user: 'Very Good'
    },
    {
        id: 18,
        name: 'Sabi Sabi no Mi',
        eng_name: 'Rust-Rust Fruit',
        type: 'Paramecia',
        current_user: 'Shu'
    },
    {
        id: 19,
        name: 'Shari Shari no Mi',
        eng_name: 'Wheel-Wheel Fruit',
        type: 'Paramecia',
        current_user: 'Sharinguru'
    },
    {
        id: 20,
        name: 'Horo Horo no Mi',
        eng_name: 'Hollow-Hollow Fruit',
        type: 'Paramecia',
        current_user: 'Perona'
    },
    {
        id: 20,
        name: 'Yomi Yomi no Mi',
        eng_name: 'Revive-Revive Fruit',
        type: 'Paramecia',
        current_user: 'Brook'
    },
    {
        id: 20,
        name: 'Kage Kage no Mi',
        eng_name: 'Shadow-Shadow Fruit',
        type: 'Paramecia',
        current_user: 'Gecko Moria'
    },
    {
        id: 21,
        name: 'Suke Suke no Mi',
        eng_name: 'Clear-Clear Fruit',
        type: 'Paramecia',
        current_user: 'Shiryu'
    },
    {
        id: 22,
        name: 'Nikyu Nikyu no Mi',
        eng_name: 'Paw-Paw Fruit',
        type: 'Paramecia',
        current_user: 'Bartholomew Kuma'
    },
    {
        id: 23,
        name: 'Jiki Jiki no Mi',
        eng_name: 'Magnet-Magnet Fruit',
        type: 'Paramecia',
        current_user: 'Eustass Kid'
    },
    {
        id: 24,
        name: 'Ope Ope no Mi',
        eng_name: 'Op-Op Fruit',
        type: 'Paramecia',
        current_user: 'Trafalgar D. Water Law'
    },
    {
        id: 25,
        name: 'Shiro Shiro no Mi',
        eng_name: 'Castle-Castle Fruit',
        type: 'Paramecia',
        current_user: 'Capone Bege'
    },
    {
        id: 25,
        name: 'Wara Wara no Mi',
        eng_name: 'Straw-Straw Fruit',
        type: 'Paramecia',
        current_user: 'Basil Hawkins'
    },
    {
        id: 26,
        name: 'Oto Oto no Mi',
        eng_name: 'Tone-Tone Fruit',
        type: 'Paramecia',
        current_user: 'Scratchmen Apoo'
    },
    {
        id: 27,
        name: 'Mero Mero no Mi',
        eng_name: 'Love-Love Fruit',
        type: 'Paramecia',
        current_user: 'Boa Hancock'
    },
    {
        id: 28,
        name: 'Doku Doku no Mi',
        eng_name: 'Venom-Venom Fruit',
        type: 'Paramecia',
        current_user: 'Magellan'
    },
    {
        id: 29,
        name: 'Horu Horu no Mi',
        eng_name: 'Hor-Hor Fruit',
        type: 'Paramecia',
        current_user: 'Emporio Ivankov'
    },
    {
        id: 30,
        name: 'Choki Choki no Mi',
        eng_name: 'Shear-Shear Fruit',
        type: 'Paramecia',
        current_user: 'Inazuma'
    },
    {
        id: 31,
        name: 'Gura Gura no Mi',
        eng_name: 'Quake-Quake Fruit',
        type: 'Paramecia',
        current_user: 'Marshall D. Teach'
    },
    {
        id: 32,
        name: 'Kira Kira no Mi',
        eng_name: 'Twinkle-Twinkle Fruit',
        type: 'Paramecia',
        current_user: 'Jozu'
    },
    {
        id: 33,
        name: 'Poke Poke no Mi',
        eng_name: 'Pocket-Pocket Fruit',
        type: 'Paramecia',
        current_user: 'Blamenco'
    },
    {
        id: 34,
        name: 'Woshu Woshu no Mi',
        eng_name: 'Wash-Wash Fruit',
        type: 'Paramecia',
        current_user: 'Tsuru'
    },
    {
        id: 35,
        name: 'Fuwa Fuwa no Mi',
        eng_name: 'Float-Float Fruit',
        type: 'Paramecia',
        current_user: 'Shiki'
    },
    {
        id: 36,
        name: 'Mato Mato no Mi',
        eng_name: 'Mark-Mark Fruit',
        type: 'Paramecia',
        current_user: 'Vander Decken IX'
    },
    {
        id: 37,
        name: 'Fuku Fuku no Mi',
        eng_name: 'Garb-Garb Jutsu',
        type: 'Paramecia',
        current_user: 'Kin\'emon'
    },
    {
        id: 38,
        name: 'Hobi Hobi no Mi',
        eng_name: 'Hobby-Hobby Fruit',
        type: 'Paramecia',
        current_user: 'Sugar'
    },
    {
        id: 39,
        name: 'Buki Buki no Mi',
        eng_name: 'Arms-Arms Fruit',
        type: 'Paramecia',
        current_user: 'Baby 5'
    },
    {
        id: 40,
        name: 'Guru Guru no Mi',
        eng_name: 'Spin-Spin Fruit',
        type: 'Paramecia',
        current_user: 'Buffalo'
    },
    {
        id: 41,
        name: 'Beta Beta no Mi',
        eng_name: 'Sticky-Sticky Fruit',
        type: 'Paramecia',
        current_user: 'Trebol'
    },
    {
        id: 42,
        name: 'Zushi Zushi no Mi',
        eng_name: 'Press-Press Fruit',
        type: 'Paramecia',
        current_user: 'Issho'
    },
    {
        id: 43,
        name: 'Bari Bari no Mi',
        eng_name: 'Barrier-Barrier Fruit',
        type: 'Paramecia',
        current_user: 'Bartolomeo'
    },
    {
        id: 44,
        name: 'Nui Nui no Mi',
        eng_name: 'Stitch-Stitch Power',
        type: 'Paramecia',
        current_user: 'Leo'
    },
    {
        id: 45,
        name: 'Giro Giro no Mi',
        eng_name: 'Glare-Glare Fruit',
        type: 'Paramecia',
        current_user: 'Viola'
    },
    {
        id: 46,
        name: 'Jake Jake no Mi',
        eng_name: 'Jacket-Jacket Fruit',
        type: 'Paramecia',
        current_user: 'Kelly Funk'
    },
    {
        id: 47,
        name: 'Pamu Pamu no Mi',
        eng_name: 'Pop-Pop Fruit',
        type: 'Paramecia',
        current_user: 'Gladius'
    },
    {
        id: 48,
        name: 'Sui Sui no Mi',
        eng_name: 'Swim-Swim Fruit',
        type: 'Paramecia',
        current_user: 'Senor Pink'
    },
    {
        id: 49,
        name: 'Ton Ton no Mi',
        eng_name: 'Ton-Ton Fruit',
        type: 'Paramecia',
        current_user: 'Machvise'
    },
    {
        id: 50,
        name: 'Hira Hira no Mi',
        eng_name: 'Ripple-Ripple Fruit',
        type: 'Paramecia',
        current_user: 'Diamante'
    },
    {
        id: 51,
        name: 'Ishi Ishi no Mi',
        eng_name: 'Stone-Stone Fruit',
        type: 'Paramecia',
        current_user: 'Pica'
    },
    {
        id: 52,
        name: 'Fude Fude no Mi',
        eng_name: 'Brush-Brush Fruit',
        type: 'Paramecia',
        current_user: 'Kurozumi Kanjuro'
    },
    {
        id: 53,
        name: 'Nagi Nagi no Mi',
        eng_name: 'Calm-Calm Fruit',
        type: 'Paramecia',
        current_user: 'Donquixote Rosinante'
    },
    {
        id: 54,
        name: 'Chiyu Chiyu no Mi',
        eng_name: 'Heal-Heal Fruit',
        type: 'Paramecia',
        current_user: 'Mansherry'
    },
    {
        id: 55,
        name: 'Soru Soru no Mi',
        eng_name: 'Soul-Soul Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Linlin'
    },
    {
        id: 56,
        name: 'Mira Mira no Mi',
        eng_name: 'Mirror-Mirror Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Brûlée'
    },
    {
        id: 57,
        name: 'Pero Pero no Mi',
        eng_name: 'Lick-Lick Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Perospero'
    },
    {
        id: 58,
        name: 'Bisu Bisu no Mi',
        eng_name: 'Bis-Bis Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Cracker'
    },
    {
        id: 59,
        name: 'Bata Bata no Mi',
        eng_name: 'Butter-Butter Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Galette'
    },
    {
        id: 60,
        name: 'Buku Buku no Mi',
        eng_name: 'Book-Book Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Mont-d\'Or'
    },
    {
        id: 61,
        name: 'Kuri Kuri no Mi',
        eng_name: 'Cream-Cream Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Opera'
    },
    {
        id: 62,
        name: 'Shibo Shibo no Mi',
        eng_name: 'Wring-Wring Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Smoothie'
    },
    {
        id: 63,
        name: 'Memo Memo no Mi',
        eng_name: 'Memo-Memo Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Pudding'
    },
    {
        id: 64,
        name: 'Mochi Mochi no Mi',
        eng_name: 'Mochi-Mochi Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Katakuri'
    },
    {
        id: 65,
        name: 'Hoya Hoya no Mi',
        eng_name: 'Puff-Puff Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Daifuku'
    },
    {
        id: 66,
        name: 'Netsu Netsu no Mi',
        eng_name: 'Heat-Heat Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Oven'
    },
    {
        id: 67,
        name: 'Kuku Kuku no Mi',
        eng_name: 'Kuku Kuku no Mi',
        type: 'Paramecia',
        current_user: 'Streusen'
    },
    {
        id: 68,
        name: 'Gocha Gocha no Mi',
        eng_name: 'Pile-Pile Fruit',
        type: 'Paramecia',
        current_user: 'Charlotte Newshi'
    },
    {
        id: 69,
        name: 'Oshi Oshi no Mi',
        eng_name: 'Push-Push Fruit',
        type: 'Paramecia',
        current_user: 'Morley'
    },
    {
        id: 70,
        name: 'Kobu Kobu no Mi',
        eng_name: 'Pump-Pump Fruit',
        type: 'Paramecia',
        current_user: 'Belo Betty'
    },
    {
        id: 71,
        name: 'Kibi Kibi no Mi',
        eng_name: 'Millet-Millet Fruit',
        type: 'Paramecia',
        current_user: 'Tama'
    },
    {
        id: 72,
        name: 'Toki Toki no Mi',
        eng_name: 'Time-Time Fruit',
        type: 'Paramecia',
        current_user: 'Kozuki Toki'
    },
    {
        id: 73,
        name: 'Juku Juku no Mi',
        eng_name: 'Ripe-Ripe Fruit',
        type: 'Paramecia',
        current_user: 'Shinobu'
    },
    {
        id: 74,
        name: 'Maki Maki no Mi',
        eng_name: 'Scroll-Scroll Fruit',
        type: 'Paramecia',
        current_user: 'Raizo'
    },
    {
        id: 75,
        name: 'Ushi Ushi no Mi, Model: Bison',
        eng_name: 'Ox-Ox Fruit, Bison Form',
        type: 'Zoan',
        current_user: 'Dalton'
    },
    {
        id: 76,
        name: 'Hito Hito no Mi',
        eng_name: 'Human-Human Fruit',
        type: 'Zoan',
        current_user: 'Tony Tony Chopper'
    },
    {
        id: 77,
        name: 'Tori Tori no Mi, Model: Falcon',
        eng_name: 'Bird-Bird Fruit Model: The Falcon',
        type: 'Zoan',
        current_user: 'Pell'
    },
    {
        id: 78,
        name: 'Inu Inu no Mi, Model: Dachshund',
        eng_name: 'Dog-Dog Fruit, Model: Dachshund',
        type: 'Zoan',
        current_user: 'Lassoo'
    },
    {
        id: 79,
        name: 'Mogu Mogu no Mi',
        eng_name: 'Mole-Mole Fruit',
        type: 'Zoan',
        current_user: 'Drophy'
    },
    {
        id: 80,
        name: 'Inu Inu no Mi, Model: Jackal',
        eng_name: 'Dog-Dog Fruit, Model: Jackal',
        type: 'Zoan',
        current_user: 'Chaka'
    },
    {
        id: 81,
        name: 'Uma Uma no Mi',
        eng_name: 'Horse-Horse Fruit',
        type: 'Zoan',
        current_user: 'Pierre'
    },
    {
        id: 82,
        name: 'Neko Neko no Mi, Model: Leopard',
        eng_name: 'Cat-Cat Fruit, Model: Leopard',
        type: 'Zoan',
        current_user: 'Rob Lucci'
    },
    {
        id: 83,
        name: 'Zou Zou no Mi',
        eng_name: 'Elephant-Elephant Fruit',
        type: 'Zoan',
        current_user: 'Funkfreed'
    },
    {
        id: 84,
        name: 'Inu Inu no Mi, Model: Wolf',
        eng_name: 'Dog-Dog Fruit Model Wolf',
        type: 'Zoan',
        current_user: 'Jabra'
    },
    {
        id: 85,
        name: 'Ushi Ushi no Mi, Model: Giraffe',
        eng_name: 'Ox-Ox Fruit, Model: Giraffe',
        type: 'Zoan',
        current_user: 'Kaku'
    },
    {
        id: 86,
        name: 'Ryu Ryu no Mi, Model: Allosaurus',
        eng_name: 'Dragon-Dragon Fruit, Allosaurus Model',
        type: 'Ancient Zoan',
        current_user: 'X Drake'
    },
    {
        id: 87,
        name: 'Hebi Hebi no Mi, Model: King Cobra',
        eng_name: 'Snake-Snake Fruit: Model King Cobra',
        type: 'Zoan',
        current_user: 'Boa Marigold'
    },
    {
        id: 88,
        name: 'Hebi Hebi no Mi, Model: Anaconda',
        eng_name: 'Snake-Snake Fruit: Model Anaconda',
        type: 'Zoan',
        current_user: 'Boa Sandersonia'
    },
    {
        id: 89,
        name: 'Tori Tori no Mi, Model: Phoenix',
        eng_name: 'Bird-Bird Fruit Model: Phoenix',
        type: 'Mythical Zoan',
        current_user: 'Marco'
    },
    {
        id: 90,
        name: 'Hito Hito no Mi, Model: Daibutsu',
        eng_name: 'Human-Human Fruit, Model: Buddha',
        type: 'Mythical Zoan',
        current_user: 'Sengoku'
    },
    {
        id: 91,
        name: 'Kame Kame no Mi',
        eng_name: 'Turtle-Turtle Fruit',
        type: 'Zoan',
        current_user: 'Pekoms'
    },
    {
        id: 92,
        name: 'Sara Sara no Mi, Model: Axolotl',
        eng_name: 'Sala-Sala Fruit, Model: Axolotl',
        type: 'Zoan',
        current_user: 'Unknown'
    },
    {
        id: 93,
        name: 'Mushi Mushi no Mi, Model: Kabutomushi',
        eng_name: 'Bug-Bug Fruit, Model: Rhinoceros beetle',
        type: 'Zoan',
        current_user: 'Kabu'
    },
    {
        id: 94,
        name: 'Mushi Mushi no Mi, Model: Suzumebachi',
        eng_name: 'Bug-Bug Fruit, Model: Suzumebachi',
        type: 'Zoan',
        current_user: 'Bian'
    },
    {
        id: 95,
        name: 'Zou Zou no Mi, Model: Mammoth',
        eng_name: 'Eleph-Eleph Fruit, Model: Mammoth',
        type: 'Ancient Zoan',
        current_user: 'Jack'
    },
    {
        id: 96,
        name: 'Tama Tama no Mi',
        eng_name: 'Egg-Egg Fruit',
        type: 'Zoan',
        current_user: 'Tamago'
    },
    {
        id: 97,
        name: 'Tori Tori no Mi, Model: Albatross',
        eng_name: 'Bird-Bird Fruit, Model: Albatross',
        type: 'Zoan',
        current_user: 'Morgans'
    },
    {
        id: 98,
        name: 'Inu Inu no Mi, Model: Tanuki',
        eng_name: 'Dog-Dog Fruit, Model: Tanuki',
        type: 'Zoan',
        current_user: 'Bunbuku'
    },
    {
        id: 99,
        name: 'Uo Uo no Mi, Model: Seiryu',
        eng_name: 'Fish-Fish Fruit, Model: Azure Dragon',
        type: 'Mythical Zoan',
        current_user: 'Kaidou'
    },
    {
        id: 100,
        name: 'Inu Inu no Mi, Model: Kyubi no Kitsune',
        eng_name: 'Dog-Dog Fruit, Model: Nine Tailed Fox',
        type: 'Mythical Zoan',
        current_user: 'Catarina Devon'
    },
    {
        id: 101,
        name: 'Hebi Hebi no Mi, Model: Yamata no Orochi',
        eng_name: 'Snake-Snake Fruit, Model: Yamata-no-Orochi',
        type: 'Mythical Zoan',
        current_user: 'Kurozumi Orochi'
    },
    {
        id: 102,
        name: 'Hebi Hebi no Mi, Model: Yamata no Orochi',
        eng_name: 'Snake-Snake Fruit, Model: Yamata-no-Orochi',
        type: 'Mythical Zoan',
        current_user: 'Kurozumi Orochi'
    },
    {
        id: 103,
        name: 'Ryu Ryu no Mi, Model: Spinosaurus',
        eng_name: 'Dragon-Dragon Fruit, Model: Spinosaurus',
        type: 'Ancient Zoan',
        current_user: 'Page One'
    },
    {
        id: 104,
        name: 'Ryu Ryu no Mi, Model: Pteranodon',
        eng_name: 'Dragon-Dragon Fruit, Pteranodon Model',
        type: 'Ancient Zoan',
        current_user: 'King'
    },
    {
        id: 105,
        name: 'Hito Hito no Mi, Model: Onyudo',
        eng_name: 'Human-Human Fruit Model Onyudo',
        type: 'Mythical Zoan',
        current_user: 'Onimaru'
    },
    {
        id: 106,
        name: 'Ryu Ryu no Mi, Model: Brachiosaurus',
        eng_name: 'Dragon-Dragon Fruit, Model: Brachiosaurus',
        type: 'Ancient Zoan',
        current_user: 'Queen'
    },
    {
        id: 107,
        name: 'Ryu Ryu no Mi, Model: Pachycephalosaurus',
        eng_name: 'Dragon-Dragon Fruit, Model: Pachycephalosaurus',
        type: 'Ancient Zoan',
        current_user: 'Ulti'
    },
    {
        id: 108,
        name: 'Ryu Ryu no Mi, Model: Triceratops',
        eng_name: 'Dragon-Dragon Fruit, Model: Triceratops',
        type: 'Ancient Zoan',
        current_user: 'Sasaki'
    },
    {
        id: 109,
        name: 'Kumo Kumo no Mi, Model: Rosamygale Grauvogeli',
        eng_name: 'Spider-Spider Fruit, Rosamygale Grauvogeli Model',
        type: 'Ancient Zoan',
        current_user: 'Black Maria'
    },
    {
        id: 110,
        name: 'Neko Neko no Mi, Model: Saber Tiger',
        eng_name: 'Cat-Cat Fruit, Model: Saber-Toothed Tiger',
        type: 'Ancient Zoan',
        current_user: 'Who\'s-Who'
    },
    {
        id: 111,
        name: 'Inu Inu no Mi, Model: Okuchi no Makami',
        eng_name: 'Dog-Dog Fruit, Model: Okuchi-no-Makami',
        type: 'Mythical Zoan',
        current_user: 'Yamato'
    },
    {
        id: 112,
        name: 'Hito Hito no Mi, Model: Nika',
        eng_name: 'Human-Human Fruit, Model: Nika',
        type: 'Mythical Zoan',
        current_user: 'Monkey D. Luffy'
    },
    {
        id: 112,
        name: 'Moku Moku no Mi',
        eng_name: 'Plume-Plume Fruit',
        type: 'Logia',
        current_user: 'Smoker'
    },
    {
        id: 113,
        name: 'Suna Suna no Mi',
        eng_name: 'Sand-Sand Fruit',
        type: 'Logia',
        current_user: 'Crocodile'
    },
    {
        id: 114,
        name: 'Mera Mera no Mi',
        eng_name: 'Flame-Flame Fruit',
        type: 'Logia',
        current_user: 'Sabo'
    },
    {
        id: 115,
        name: 'Goro Goro no Mi',
        eng_name: 'Rumble-Rumble Fruit',
        type: 'Logia',
        current_user: 'Enel'
    },
    {
        id: 116,
        name: 'Hie Hie no Mi',
        eng_name: 'Ice-Ice Fruit',
        type: 'Logia',
        current_user: 'Kuzan'
    },
    {
        id: 117,
        name: 'Yami Yami no Mi',
        eng_name: 'Dark-Dark Fruit',
        type: 'Logia',
        current_user: 'Marshall D. Teach'
    },
    {
        id: 118,
        name: 'Pika Pika no Mi',
        eng_name: 'Glint-Glint Fruit',
        type: 'Logia',
        current_user: 'Borsalino'
    },
    {
        id: 119,
        name: 'Magu Magu no Mi',
        eng_name: 'Mag-Mag Fruit',
        type: 'Logia',
        current_user: 'Sakazuki'
    },
    {
        id: 120,
        name: 'Numa Numa no Mi',
        eng_name: 'Swamp-Swamp Fruit',
        type: 'Logia',
        current_user: 'Caribou'
    },
    {
        id: 121,
        name: 'Gasu Gasu no Mi',
        eng_name: 'Gas-Gas Fruit',
        type: 'Logia',
        current_user: 'Caesar Clown'
    },
    {
        id: 122,
        name: 'Yuki Yuki no Mi',
        eng_name: 'Snow-Snow Fruit',
        type: 'Logia',
        current_user: 'Monet'
    },

]


module.exports = fruits;