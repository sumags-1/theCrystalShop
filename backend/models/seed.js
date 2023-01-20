const db = require("./")

const initial_users = [
    {
        username: "suma",
        password: "123",
        admin: "no"
    },
    {
        username: "admin",
        password: "admin",
        admin: "yes"
    },
    {
        username: "scott",
        password: "scott",
        admin: "yes"
    },
    {
        username: "matt",
        password: "matt",
        admin: "yes"
    },
    {
        username: "justin",
        password: "justin",
        admin: "yes"
    }
]

const initial_crystals = [
    {
        name: 'Abundance bracelet with Green Aventurine and Jasper',
        origin: '',
        size: 'One size fits ~6" to 7.5"',
        shape: 'Bracelet with round 8mm beads',
        description: 'Green Aventurine Meaning and Properties: Green Aventurine, often called the Stone of Opportunity, is believed to be one of the crystals most associated with prosperity and abundance. It helps to increase creativity and motivation. Green Aventurine supports your individuality and increases enthusiasm and optimism. Green Aventurine balances the Heart Chakra and is a stone of love. It combines the energies of the Elements of Water and Earth. If you are beginning something new, it can be supportive and help you to manifest the confidence to embrace change. Kambaba Jasper Meaning and Properties: Kambaba Jasper, also known as Crocodile Jasper, harmonizes you with the natural world. It is an extremely nurturing stone. Kambaba Jasper aids protection against negative thoughts and any fears you might have. It can be a calming presence and can open your eyes to how much a gift life truly can be. Kambaba Jasper can also offer protection when dealing with traumatic incidents or broken hearts. Kambaba Jasper is a deeply grounding stone. It balances the Root Chakra and connects you to the Earth. Kambaba Jasper provides a sense of comfort and can help you become more intune with your mind and spirit.',
        surface: 'Polished',
        jewelry_category: 'Bracelet',
        intentions: 'Abundance',
        chakra: 'Root',
        zodiac: 'All signs',
        element: 'Earth',
        price: '$12.50',
        image: '/assets/abundance-bracelet-jasper-aventurine.jpeg'
    },
    {
        name: 'Tigers Eye Bracelet',
        origin: '',
        size: 'One size fits ~6" to 7.5"',
        shape: 'Bracelet with round 6mm and 8mm beads',
        description: 'Tigers Eye is a stone of vitality and strength. It provides protection and enhances integrity. It is thought to inspire prosperity and abundance. Tigers Eye gives you the power to see positive light in any situation, and energize your body and mind. It can also inspire mental clarity, and helps you to see past the ego and achieve a path of truth. Tigers Eye is a solar stone, so it especially resonates with the Solar Plexus Chakra. It also stimulates the Sacral and Root Chakras. It grounds you, while simultaneously energizing and inspiring you. Tigers Eye combines the energy of the Earth and the Sun, inspiring optimism and stability of the mind and soul.',
        surface: 'Polished',
        jewelry_category: 'Bracelet',
        intentions: 'Courage, Strength, Personal power',
        chakra: 'Solar Plexus',
        zodiac: 'Leo',
        element: 'Fire',
        price: '$20',
        image: '/assets/tigers-eye-bracelet.jpeg'
    },
    {
        name: 'Clear Quartz Bracelet',
        origin: '',
        size: 'One size fits ~6" to 7.5"',
        shape: 'Bracelet with round 6mm beads',
        description: 'Clear Quartz is the most versatile and universal crystal. It is a master healer and can help with almost any emotional or spiritual issue. Clear Quartz helps to cleanse and clear your mind and any negative energy or emotion you might be experiencing. It can be used to help amplify the energy of other stones, and is easily programmable. Clear Quartz cleanses, resonates with, and activates all of the Chakras. It is thought to help balance you, and enhances energy flow. Clear Quartz can be used to purify and cleanse spiritually, mentally, and physically. Because of its purifying energy, Clear Quartz is an extremely protective stone.',
        surface: 'Polished',
        jewelry_category: 'Bracelet',
        intentions: 'Activation, Energizing, Focus',
        chakra: 'Crown',
        zodiac: 'All signs',
        element: 'Water',
        price: '$18',
        image: '/assets/clear-quartz-bracelet.jpeg'
    },
    {
        name: 'Black Obsidian Bracelet',
        origin: '',
        size: 'One size fits ~6" to 7.5"',
        shape: 'Bracelet with round 6mm and 8mm beads',
        description: 'Black Obsidian is one of the best stones for protection. It is a powerful cleanser of negative energy. Black Obsidian helps to remove negativity from your environment, and also from your emotions and mind. Because of its protection properties, Black Obsidian cleanses your mind and teaches you emotional strength. Black Obsidian stimulates the Root Chakra. It is especially helpful for grounding you, spiritually and emotionally. Black Obsidian also helps to connect you to the energy of the Earth, centering you and aligning you with the spirit of nature. Because of its ability to deflect negativity, Black Obsidian is helpful for clearing energy blockages and aids in bringing truth to the surface to be revealed.',
        surface: 'Polished',
        jewelry_category: 'Bracelet',
        intentions: 'Protection, Grounding, Stress Relief',
        chakra: 'Root',
        zodiac: 'Sagittarius',
        element: 'Earth',
        price: '$20',
        image: '/assets/black-obsidian-bracelet.jpeg'
    },
    {
        name: 'Amethyst (A grade) Bracelet',
        origin: '',
        size: 'One size fits ~6" to 7.5"',
        shape: 'Bracelet with round 8mm beads',
        description: 'Amethyst is one of the most popular crystals because it is almost universally appealing.It is a natural stress reliever. It also encourages inner strength, spirituality, and intuition. It is a healing stone of spiritual growth and protection. Because of its calming and peaceful energy, Amethyst also supports sleep and encourages tranquil dreams. Amethyst is associated with the elements of air and water. It is also associated with the zodiac signs of Aquarius and Pisces. Amethyst is helpful for stimulating the Crown Chakra and opening the Third Eye. It inspires creativity and encourages peace and stability. Amethyst can also help form deep connections and soulful communions.',
        surface: 'Polished',
        jewelry_category: 'Bracelet',
        intentions: 'Stress Relief, Calming, Love, Intuition',
        chakra: 'Crown',
        zodiac: 'Pisces',
        element: 'Air',
        price: '$26',
        image: '/assets/amethyst-bracelet.jpeg'
    },
    {
        name: 'Rose Quartz, Garnet, Strawberry Quartz',
        origin: '',
        size: 'One size fits ~6" to 7.5"',
        shape: 'Bracelet with round 6mm beads',
        description: 'Rose Quartz is a stone that encourages love. While it aids in fostering romantic love, it is also important for familial love, love between friends, and self love. It is a powerful heart healer. Rose Quartz strengthens your sense of empathy, sensitivity, and can be helpful in acceptance of new beginnings. It is also known for stress relief, and can help to calm negative emotions. Rose Quartz stimulates the Heart Chakra, helping to balance the heart and open you to new love and positive emotions. It is a calming stone, and helps to soothe you emotionally. It can also open you to compassion, and it is especially important to aid in loving and accepting yourself.Garnet is filled with robust energy that stabilizes and invigorates. It provides a sense of security. Garnet helps to center you, allowing you to overcome feelings of anxiety or fear. It can fortify your courage when you need to overcome problems, and promotes self-confidence. Because of its connection and ability to balance the Root Chakra, Garnet is very grounding and helps to connect you to the present moment. It is associated with the month of January. It is an Earth Element stone, and can aid in feeling secure both mentally and emotionally.Strawberry Quartz, in addition to radiating the properties of Clear Quartz, carries its own unique characteristics. It inspires universal love and understanding of purpose. Strawberry Quartz encourages you to do everything from a place of love, understanding, and appreciation. It increases your intentions of love of all kinds. Strawberry Quartz stimulates the Heart Chakra and inspires gratitude and love. It helps to balance the emotions of the body and keep us grounded. Strawberry Quartz can steer you in the right direction in your life and enlighten you to your spiritual path.',
        surface: 'Polished',
        jewelry_category: 'Bracelet',
        intentions: 'Love, Strength',
        chakra: 'Heart',
        zodiac: 'All signs',
        element: 'Earth',
        price: '$23',
        image: '/assets/universal-love-bracelet.jpeg'
    },
    {
        name: 'Clear Quartz Tumbled Stones',
        origin: '',
        size: '0.5" to 1" - varying sizes available',
        shape: 'Natural tumbled stone',
        description: 'Need a stone that can help with any problem you may be facing? Well, a Clear Quartz Crystal Tumbled Stone can do the job! These polished tumbled stones are the most versatile and universal crystals in the world. They help with cleansing and clearing your mind and any negative energy around you. You can use them to amplify the energy of stones and are easily progammable. Clear Quartz Crystal Tumbled Stones also cleanse, resonates with, and activates all seven Chakras. Price is for one (1) Tumbled Clear Quartz.',
        surface: 'Polished',
        jewelry_category: 'None',
        intentions: 'Activation, Energizing, Focus',
        chakra: 'Crown',
        zodiac: 'All signs',
        element: 'Water',
        price: '$2',
        image: '/assets/clear-quartz-tumbled-stone.jpeg'
    },
    {
        name: 'Black Obsidian Tumbled Stones',
        origin: 'Mexico',
        size: '0.5" to 1.25" - varying sizes available',
        shape: 'Natural tumbled stone',
        description: 'Need some extra protection in your life? Black Obsidian Tumbled Stones are perfect for that and are here to help! These polished tumbled stones are powerful cleansers of negativity, removing it from your environment, emotions, and mind. Black Obsidian Tumbled Stones also balance the Root Chakra, which helps ground you both spiritually and mentally. Price is for one (1) Tumbled Black Obsidian.',
        surface: 'Polished',
        jewelry_category: 'None',
        intentions: 'Protection, Grounding',
        chakra: 'Root',
        zodiac: 'Sagittarius',
        element: 'Earth',
        price: '$1.5',
        image: '/assets/black-obsidian-tumbled-stone.jpeg'
    },
    {
        name: 'Citrine Tumbled Stones',
        origin: 'Mexico',
        size: '0.5" to 3.5" - varying sizes available',
        shape: 'Natural tumbled stone',
        description: 'Achieve your goals and bring your intentions to life with the help of the most powerfl gemstone for manifestation, a Natural Citrine Tumbled Stone. These polished tumbled stones are gemstonesof light, happiness, and abundance. They help bring and maintain prosperity and remove negative energy so positivity can surround you. Natural Citrine Tumbled Stones also balance the Solar Plexus Chakra, enhancing your mental clarity, confidence, and will power. Price is for one (1) Tumbled Citrine Natural.',
        surface: 'Polished',
        jewelry_category: 'None',
        intentions: 'Happiness, Abundance, Positivity',
        chakra: 'Sacral',
        zodiac: 'Sagittarius',
        element: 'Fire',
        price: '$8.5',
        image: '/assets/citrine-tumbled-stone.jpeg'
    },
    {
        name: 'Moss Agate Tumbled Stones',
        origin: 'Brazil',
        size: '0.75" to 1.5" - varying sizes available',
        shape: 'Natural tumbled stone',
        description: 'Known as an Earth Element stone strongly connected to nature, a Moss Agate Tumbled Stone can connect your physical body to the Earth and spiritually attach you to nature\'s vibrations. These polished tumbled stones can help you during new beginnings and experiences and inspire stability of mind and body. They can balance your spirit and clear your mind and body. Moss Agate Tumbled Stones also open the Root Chakra to help ground and stabilize you. Price is for one (1) Tumbled Moss Agate.',
        surface: 'Polished',
        jewelry_category: 'None',
        intentions: 'Grounding, Stability, Abundance, New Beginnings',
        chakra: 'Root',
        zodiac: 'Virgo',
        element: 'Earth',
        price: '$4.75',
        image: '/assets/moss-agate-tumbled-stone.jpeg'
    },
    {
        name: 'Rose Quartz Tumbled Stones',
        origin: '',
        size: '0.5" to 1.5" - varying sizes available',
        shape: 'Natural tumbled stone',
        description: 'Welcome all forms of love into your life with the help of a Rose Quartz Tumbled Stone. These natural polished tumbled stones not only help with fostering romantic love, but familial love, platonic love, and self-love as well. They can strengthen your empathy and sensitivity, relieve stress, calm negative emotions, and open you to compassion. Rose Quartz Tumbled Stones are also known as powerful heart healers that stimulate the Heart Chakra, balancing your heart and opening you to new love and positive emotions. Price is for one (1) Tumbled Rose Quartz.',
        surface: 'Polished',
        jewelry_category: 'None',
        intentions: 'Love, Stress Relief, Heart Healer',
        chakra: 'Heart',
        zodiac: 'Taurus',
        element: 'Water',
        price: '$4.25',
        image: '/assets/rose-quartz-tumbled-stone.jpeg'
    },
    {
        name: 'Amethyst Tumbled Stones',
        origin: '',
        size: '0.75" to 1.75" - varying sizes available',
        shape: 'Natural tumbled stone',
        description: 'As natural stress relievers, these polished Amethyst Tumbled Stones are perfect for anyone who feels like they have the weight of the world on their shoulders. You can carry these stones around to help keep yourself calm and peaceful during the day, whether you\'re at work or on-the-go doing errands. These Amethyst Tumbled Stones are also good at strengthening your spirituality and intuition. Price is for one (1) Tumbled Amethyst. ',
        surface: 'Polished',
        jewelry_category: 'None',
        intentions: 'Stress Relief, Calming, Love, Intuition',
        chakra: 'Crown',
        zodiac: 'Aquarius',
        element: 'Water',
        price: '$6.75',
        image: '/assets/amethyst-tumbled-stone.jpeg'
    },
]

db.User.deleteMany({}, (err, users) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all users')
    }

    db.User.create(initial_users, (err, users) => {
        if (err) {
            console.log("Error on creating crystals:", err)
        } else {
            console.log("Created", users.length, "users")
        }
    })
})

db.Crystal.deleteMany({}, (err, crystals) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all crystals')
    }

    db.Crystal.create(initial_crystals, (err, crystals) => {
        if (err) {
            console.log("Error on creating crystals:", err)
        } else {
            console.log("Created", crystals.length, "crystals")
        }
    })
})