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

]


module.exports = fruits;