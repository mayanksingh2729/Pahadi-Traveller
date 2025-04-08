
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { ArrowLeft, MapPin, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogData } from '@/data/blogData';
import BlogCard from '@/components/BlogCard';

interface PlaceToVisit {
  name: string;
  description: string;
  image: string;
}

// Destination data with additional fields
const destinationsData = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    description: "A UNESCO World Heritage Site known for its meadows of endemic alpine flowers and variety of flora.",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Chamoli, Uttarakhand",
    category: "Adventure",
    fullDescription: [
      "The Valley of Flowers National Park, nestled in the Western Himalayas, is a breathtaking paradise renowned for its meadows of endemic alpine flowers and diverse flora. This UNESCO World Heritage Site stretches over an expanse of 87.50 km² and is set against the backdrop of majestic snow-capped mountains.",
      "The valley comes alive during the monsoon season when thousands of colorful flowers bloom, creating a magical carpet of vibrant colors. The area is home to rare and endangered animals including the Asiatic black bear, snow leopard, brown bear, and blue sheep.",
      "The Valley was discovered in 1931 by British mountaineers Frank S. Smythe and R.L. Holdsworth, who stumbled upon it while returning from an expedition to Mount Kamet. Smythe was so captivated by the beauty of the valley that he later wrote a book about it titled 'The Valley of Flowers'."
    ],
    bestTimeToVisit: "July to September, during and immediately after the monsoon season when the flowers are in full bloom.",
    placesToVisit: [
      {
        name: "Hemkund Sahib",
        description: "A sacred Sikh shrine located at an altitude of 4,632 meters, surrounded by seven mountain peaks.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Ghangaria",
        description: "The base camp for Valley of Flowers and Hemkund Sahib, this small village is the last human settlement in the area.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Pushpawati River",
        description: "A beautiful river that flows through the Valley of Flowers, named after the princess who is believed to have meditated here.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    description: "The 'Yoga Capital of the World' situated on the banks of the holy Ganges river, offering spiritual rejuvenation and adventure sports.",
    imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Dehradun, Uttarakhand",
    category: "Spiritual",
    fullDescription: [
      "Rishikesh, often called the 'Yoga Capital of the World', is a tranquil town nestled in the foothills of the Himalayas on the banks of the sacred Ganges River. This spiritual haven attracts seekers from around the globe who come for meditation, yoga, and spiritual enlightenment.",
      "Beyond its spiritual significance, Rishikesh has emerged as an adventure hotspot offering thrilling activities like white water rafting, bungee jumping, and cliff jumping. The town gained international fame when The Beatles visited Maharishi Mahesh Yogi's ashram in 1968 to learn Transcendental Meditation.",
      "The town is dotted with ancient temples, bustling markets, and peaceful ashrams. The iconic Laxman Jhula and Ram Jhula suspension bridges span the Ganges, offering spectacular views of the river and surrounding mountains."
    ],
    bestTimeToVisit: "February to April and September to November when the weather is pleasant, neither too hot nor too cold.",
    placesToVisit: [
      {
        name: "Triveni Ghat",
        description: "A sacred bathing spot where the Ganges, Yamuna, and Saraswati rivers are believed to meet. The evening Ganga Aarti here is a mesmerizing experience.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "The Beatles Ashram",
        description: "The abandoned ashram where The Beatles stayed in 1968, now covered in artful graffiti and serving as a pilgrimage site for fans.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Neelkanth Mahadev Temple",
        description: "A sacred Hindu temple dedicated to Lord Shiva, situated at an altitude of 1,330 meters amidst dense forests.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "nainital",
    name: "Nainital",
    description: "A charming hill station built around a uniquely shaped lake and surrounded by mountains.",
    imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Kumaon, Uttarakhand",
    category: "Hill Stations",
    fullDescription: [
      "Nainital, known as the 'Lake District of India', is a charming hill station nestled in the Kumaon region. Built around the pear-shaped Naini Lake, this picturesque town is surrounded by seven hills, locally known as 'Sapta-Shring' – Ayarpata, Deopata, Handi Bandi, Cheena Peak, Alma, Laria Kanta, and Sher-Ka-Danda.",
      "The town was discovered by British sugar trader P. Barron in 1839, who was so captivated by the beauty of the emerald lake that he built a European colony on its shores. Today, Nainital retains much of its colonial charm with Gothic-style buildings, while offering modern amenities for tourists.",
      "Legend has it that the lake was formed when the eyes of Goddess Sati fell at this spot when Lord Shiva was carrying her charred body. The town is home to numerous temples, viewpoints offering panoramic vistas, and a vibrant Mall Road bustling with shops and eateries."
    ],
    bestTimeToVisit: "March to June and September to November when the weather is pleasant. Winters (December to February) offer a chance to experience snowfall.",
    placesToVisit: [
      {
        name: "Naini Lake",
        description: "The centerpiece of the town, this kidney-shaped lake offers boating opportunities and is surrounded by hills on all sides.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Tiffin Top (Dorothy's Seat)",
        description: "A viewpoint offering panoramic views of the Himalayas and Nainital town, perfect for capturing stunning photographs.",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Naina Devi Temple",
        description: "A sacred Hindu temple dedicated to Goddess Naina Devi, situated at the northern shore of Naini Lake.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "badrinath",
    name: "Badrinath",
    description: "One of the holiest pilgrimage sites in Hinduism, known for the Badrinath Temple dedicated to Lord Vishnu.",
    imageSrc: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Chamoli, Uttarakhand",
    category: "Spiritual",
    fullDescription: [
      "Badrinath, located in the Chamoli district at an altitude of 3,133 meters, is one of the most sacred pilgrimage sites for Hindus. It is one of the four Char Dham shrines and also part of the larger Chota Char Dham pilgrimage circuit.",
      "The main attraction is the Badrinath Temple dedicated to Lord Vishnu, who is said to have meditated here for thousands of years under a badri tree. The temple's vibrant facade, colorful prayer flags, and spectacular mountain backdrop make it a visual delight.",
      "The town is situated between the Nar and Narayana mountain ranges and along the banks of the Alaknanda River. The spiritual ambiance, combined with breathtaking natural beauty, makes Badrinath a must-visit destination for both pilgrims and tourists alike."
    ],
    bestTimeToVisit: "May to June and September to October, as the temple remains closed during winter months due to heavy snowfall.",
    placesToVisit: [
      {
        name: "Tapt Kund",
        description: "A natural hot water spring near the Badrinath Temple, believed to have medicinal properties. Pilgrims take a dip here before visiting the temple.",
        image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Mana Village",
        description: "India's last village near the Indo-Tibetan border, known for its ancient caves, the mythological Vyas Gufa, and stunning views of Mt. Neelkanth.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Vasudhara Falls",
        description: "A magnificent waterfall located about 5 km from Badrinath, believed to fall only for the virtuous and pure-hearted.",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    description: "Known as the 'Queen of Hills', this popular hill station offers stunning views of the Himalayas.",
    imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Dehradun, Uttarakhand",
    category: "Hill Stations",
    fullDescription: [
      "Mussoorie, fondly called the 'Queen of Hills', is a charming hill station nestled in the foothills of the Garhwal Himalayan ranges. Founded in the early 19th century by British colonial officers seeking refuge from the summer heat, Mussoorie has evolved into one of India's most popular hill stations.",
      "Perched at an altitude of about 2,000 meters (6,600 ft), the town offers panoramic views of the majestic Himalayas to the north and the Doon Valley to the south. The Mall Road, which stretches from Cloud's End in the west to Picture Palace in the east, is the heart of Mussoorie and offers breathtaking vistas.",
      "Mussoorie has a rich literary connection, being home to several renowned authors including Ruskin Bond. The town's colonial architecture, vibrant markets, and pleasant climate throughout the year make it a perfect getaway for travelers seeking tranquility and natural beauty."
    ],
    bestTimeToVisit: "March to June and September to November. Summers are pleasantly cool, while winter brings occasional snowfall.",
    placesToVisit: [
      {
        name: "Kempty Falls",
        description: "A majestic waterfall surrounded by lush greenery, offering a refreshing bathing experience in its natural pool.",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Gun Hill",
        description: "The second highest point in Mussoorie, offering panoramic views of the Himalayan ranges. Accessible by cable car or a trekking path.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Lal Tibba",
        description: "The highest point in Mussoorie with a Japanese telescope offering clear views of the snow-capped Himalayan peaks.",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "haridwar",
    name: "Haridwar",
    description: "One of the seven holiest places for Hindus, famous for the evening Ganga Aarti on the ghats of the Ganges.",
    imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Haridwar, Uttarakhand",
    category: "Spiritual",
    fullDescription: [
      "Haridwar, literally meaning 'Gateway to God', is one of the seven holiest places (Sapta Puri) for Hindus. Located at the foothills of the Himalayas where the Ganges emerges from the mountains into the plains, Haridwar is among the first cities where the River Ganges descends.",
      "This ancient city is steeped in religious history and mythology. According to legend, it was here that Lord Vishnu left his footprint on the bank of the river. The city is also one of the four sites where drops of the celestial nectar, Amrit, fell from the pitcher carried by the divine bird Garuda during the Samudra Manthan (churning of the ocean).",
      "The city comes alive during religious festivals like Kumbh Mela, which is held every 12 years and attracts millions of pilgrims. The spiritual ambiance, with the sound of temple bells and the evening Ganga Aarti, creates a mystical atmosphere that captivates the hearts of visitors."
    ],
    bestTimeToVisit: "September to April, when the weather is pleasant. Summers can be hot, but it's also when many festivals take place.",
    placesToVisit: [
      {
        name: "Har Ki Pauri",
        description: "The most sacred ghat in Haridwar where pilgrims bathe in the holy Ganges and the famous evening Ganga Aarti is performed.",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Mansa Devi Temple",
        description: "A temple dedicated to Goddess Mansa Devi, situated on top of Bilwa Parvat. The temple offers panoramic views of Haridwar and is accessible via cable car.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Chandi Devi Temple",
        description: "A temple dedicated to Goddess Chandi, situated on top of the Neel Parvat on the eastern bank of the Ganges. The temple is accessible by cable car or a trekking path.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "jim-corbett",
    name: "Jim Corbett National Park",
    description: "India's oldest national park known for its Bengal tigers, elephants and diverse wildlife.",
    imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Nainital, Uttarakhand",
    category: "Wildlife",
    fullDescription: [
      "Jim Corbett National Park, established in 1936, is India's oldest national park and one of the most renowned tiger reserves in the country. Initially named Hailey National Park, it was renamed in honor of the legendary hunter-turned-conservationist Jim Corbett, who played a key role in its establishment.",
      "Spread across 520 square kilometers, the park is part of the larger Corbett Tiger Reserve and is home to over 650 species of birds, 50 species of mammals, 25 species of reptiles, and numerous flora. The park is famous for its Bengal tigers, Asian elephants, leopards, jungle cats, fishing cats, wild boars, langurs, rhesus macaques, and various deer species.",
      "The park's diverse landscape includes dense forests, grasslands, hills, marshy depressions, and a large lake formed by the Ramganga dam. The Ramganga River flowing through the park adds to its scenic beauty and serves as a watering hole for the wildlife."
    ],
    bestTimeToVisit: "November to June. The park remains closed during the monsoon season (July to October).",
    placesToVisit: [
      {
        name: "Dhikala",
        description: "The largest and most popular eco-tourism zone in Jim Corbett National Park, offering the best opportunity to spot tigers, elephants, and other wildlife.",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Corbett Museum",
        description: "Located at Kaladhungi, this museum was Jim Corbett's winter home and showcases his personal belongings, articles, and manuscripts.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Garjiya Devi Temple",
        description: "A sacred temple dedicated to Goddess Garjiya Devi, situated on a large rock in the middle of the Kosi River near Ramnagar.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "almora",
    name: "Almora",
    description: "A picturesque hill station known for its rich cultural heritage, scenic beauty, and panoramic view of the Himalayas.",
    imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Almora, Uttarakhand",
    category: "Hill Stations",
    fullDescription: [
      "Almora, nestled in the Kumaon Hills, is a charming hill station shaped like a horseshoe along a ridge at the southern edge of the Kumaon Hills. Founded in 1568 by King Kalyan Chand, Almora is rich in cultural heritage and natural beauty.",
      "The town is known for its distinct local crafts, cuisine, and dance forms. The panoramic view of the snow-capped Himalayas, including peaks like Nanda Devi, Trishul, and Panchachuli, from various points in Almora is simply breathtaking. The town's ancient temples, colonial architecture, and vibrant local markets add to its charm.",
      "Almora is also famous for its delicious local cuisine, particularly bal mithai (a milk-based sweet), singori (a sweet wrapped in a malu leaf), and various other traditional Kumaoni dishes. The town is surrounded by thick forests of pine and oak, making it a perfect retreat for nature lovers."
    ],
    bestTimeToVisit: "March to June and September to November. Winters can be very cold but offer beautiful views of snow-capped mountains.",
    placesToVisit: [
      {
        name: "Kasar Devi Temple",
        description: "An ancient temple dedicated to Kasar Devi, known for its spiritual significance and the famous 'Crank's Ridge', which attracted many western seekers in the 1960s and 70s.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Binsar Wildlife Sanctuary",
        description: "A paradise for bird watchers and nature lovers, offering incredible views of the Himalayan peaks and home to diverse flora and fauna.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Martola",
        description: "A quaint village near Almora known for its apple orchards, terraced fields, and panoramic views of the Himalayas.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "auli",
    name: "Auli",
    description: "A skiing destination with panoramic views of snow-capped Himalayan peaks including Nanda Devi.",
    imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Chamoli, Uttarakhand",
    category: "Adventure",
    fullDescription: [
      "Auli, situated at an altitude of about 2,800 meters, is a premier skiing destination in India. Once a training ground for the Indo-Tibetan Border Police, Auli has transformed into a popular winter sports destination with its well-maintained slopes and world-class infrastructure.",
      "The panoramic views of the snow-capped Himalayan peaks, including Nanda Devi (India's second-highest peak), Mana Parvat, and Kamat Kamet, make Auli a visual treat throughout the year. The slopes are covered with coniferous forests and vast stretches of oak and deodar trees, adding to the scenic beauty.",
      "Apart from skiing, Auli is also famous for its 4 km cable car ride (one of the longest in Asia), connecting Joshimath to Auli. The artificial lake, built for snowmaking on the slopes, adds to the charm and is the highest man-made lake in the world."
    ],
    bestTimeToVisit: "Year-round. For skiing, the best time is from January to March. For general tourism, visit between May and November.",
    placesToVisit: [
      {
        name: "Auli Artificial Lake",
        description: "One of the highest man-made lakes in the world, built for creating artificial snow on the slopes. It's a beautiful spot with reflections of the surrounding mountains.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Joshimath",
        description: "A nearby town with religious significance, known as the winter seat of Lord Badri and the gateway to several Himalayan expeditions.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Kwani Bugyal",
        description: "A high-altitude meadow covered with lush green grass in summer and snow in winter, offering stunning views of the Himalayas.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "binsar",
    name: "Binsar Wildlife Sanctuary",
    description: "A wildlife sanctuary and heaven for bird watchers with panoramic views of the Himalayan peaks.",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Almora, Uttarakhand",
    category: "Wildlife",
    fullDescription: [
      "Binsar Wildlife Sanctuary, spread over an area of 45.59 sq km, is an idyllic sanctuary located in the Almora district of Uttarakhand. Established in 1988, the sanctuary is perched at an altitude of 2,412 meters and is known for its rich biodiversity and breathtaking views of the majestic Himalayan peaks.",
      "The sanctuary is home to over 200 species of birds, making it a paradise for bird watchers. It also shelters various wildlife species including leopards, jungle cats, Himalayan black bears, porcupines, monkeys, and numerous deer species. The dense oak, pine, and rhododendron forests create a mystical ambiance, especially during the early morning mist.",
      "One of the biggest attractions of Binsar is the Zero Point, from where one can enjoy panoramic 360-degree views of the Himalayan peaks, including Nanda Devi, Trishul, and Panchachuli. The sanctuary also has historical significance, as it was once the summer capital of the Chand Kings who ruled over Kumaon.",
    ],
    bestTimeToVisit: "October to March for clear views of the Himalayas. April to June for comfortable weather. Monsoon (July to September) brings lush greenery but may have visibility issues.",
    placesToVisit: [
      {
        name: "Zero Point",
        description: "The highest point in Binsar offering panoramic 360-degree views of the Himalayan range, including peaks like Nanda Devi, Trishul, and Panchachuli.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Binsar Mahadev Temple",
        description: "An ancient 16th-century temple dedicated to Lord Shiva, surrounded by dense forests and offering serene vibes.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Khali Estate",
        description: "A heritage estate built during the British era, now converted into a resort, offering colonial charm and beautiful vistas.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    description: "Home to one of the holiest Hindu temples dedicated to Lord Shiva, located among the magnificent Himalayan ranges.",
    imageSrc: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Rudraprayag, Uttarakhand",
    category: "Spiritual",
    fullDescription: [
      "Kedarnath, situated at an altitude of 3,583 meters in the Rudraprayag district, is one of the holiest pilgrimage sites in Hinduism. It is one of the twelve Jyotirlingas (sacred abodes of Lord Shiva) and also one of the four sites in the Chota Char Dham pilgrimage circuit.",
      "The ancient Kedarnath Temple, dedicated to Lord Shiva, is believed to have been built by the Pandavas to atone for their sins after the Kurukshetra War. The present temple structure dates back to the 8th century, having been restored by Adi Shankaracharya. Miraculously, the temple survived the devastating 2013 Uttarakhand floods that ravaged the surrounding areas.",
      "The journey to Kedarnath itself is a spiritual experience, with pilgrims trekking about 16 kilometers from Gaurikund through breathtaking Himalayan landscapes. The serene ambiance, coupled with the mystical vibrations of the temple and the majestic backdrop of snow-capped peaks, creates a divine atmosphere that touches the soul."
    ],
    bestTimeToVisit: "May to June and September to October. The temple remains closed during winter (November to April) due to heavy snowfall.",
    placesToVisit: [
      {
        name: "Kedarnath Temple",
        description: "The main attraction, this ancient temple dedicated to Lord Shiva is one of the twelve Jyotirlingas and a significant pilgrimage site for Hindus.",
        image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Bhairavnath Temple",
        description: "A temple dedicated to Bhairav (a fierce manifestation of Lord Shiva), believed to protect Kedarnath during the winter months when the main temple is closed.",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Chorabari Tal (Gandhi Sarovar)",
        description: "A glacial lake located about 3 km from the Kedarnath Temple, offering serene vibes and panoramic views of the surrounding mountains.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

const DestinationDetail = () => {
  const { id } = useParams();
  
  // Find the destination with the matching ID
  const destination = destinationsData.find(dest => dest.id === id);
  
  // Find related blogs (blogs that mention this destination in their content or title)
  const relatedBlogs = blogData.filter(blog => 
    blog.title.toLowerCase().includes((destination?.name || '').toLowerCase()) || 
    (blog.content && blog.content.some(paragraph => 
      paragraph.toLowerCase().includes((destination?.name || '').toLowerCase())
    ))
  );
  
  // If destination not found, show an error message
  if (!destination) {
    return (
      <>
        <Navbar />
        <div className="content-container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="mb-6">Sorry, the destination you're looking for doesn't exist.</p>
          <Button>
            <Link to="/destinations">Return to Destinations</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-50 py-6">
        <div className="content-container">
          <Link to="/destinations" className="inline-flex items-center text-forest-700 hover:text-forest-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all destinations
          </Link>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-10">
            {/* Hero image */}
            <div className="aspect-video w-full">
              <img 
                src={destination.imageSrc} 
                alt={destination.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Destination content */}
            <div className="p-6 md:p-10">
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{destination.location}</span>
                {destination.category && (
                  <span className="inline-block ml-4 text-xs font-medium bg-forest-100 text-forest-800 px-2.5 py-1 rounded-full">
                    {destination.category}
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{destination.name}</h1>
              
              <div className="prose prose-forest max-w-none mb-10">
                {destination.fullDescription?.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Best time to visit */}
              <div className="bg-mountain-50 rounded-lg p-6 mb-10">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-mountain-700" />
                  Best Time to Visit
                </h2>
                <p className="text-gray-700">{destination.bestTimeToVisit}</p>
              </div>
              
              {/* Places to visit */}
              {destination.placesToVisit && destination.placesToVisit.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6">Places to Visit in {destination.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {destination.placesToVisit.map((place, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={place.image} 
                            alt={place.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-2">{place.name}</h3>
                          <p className="text-gray-600 text-sm">{place.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Related blogs section */}
          {relatedBlogs.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Blogs Related to {destination.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map(blog => (
                  <BlogCard 
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    imageSrc={blog.imageSrc}
                    date={blog.date}
                    author={blog.author}
                    category={blog.category}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </>
  );
};

export default DestinationDetail;
