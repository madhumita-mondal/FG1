
const PLAYER_KEY = "neon_word_players_custom_v1";
const HISTORY_KEY = "neon_word_history_custom_v1";

const MODE_TIME = {
    easy: 90,
    medium: 75,
    hard: 65,
    tough: 55
};

/*
Add more root sets here in same format.
 
Important:
- root: actual root word
- words: system word choices, one word for each root letter
- starred words from your list are simply kept as strong related words
*/
const ROOT_DATA = [
    { root: "GARDEN", words: ["Grow", "Away", "Raise", "Dirty", "Every", "Nature"] },
    { root: "COFFEE", words: ["Caffeine", "Often", "Fresh", "Flavor", "Enjoy", "Energy"] },
    { root: "SCHOOL", words: ["Study", "Class", "House", "Other", "Open", "Learn"] },
    { root: "WINTER", words: ["White", "Icicle", "Night", "Temperature", "Early", "Robust"] },
    { root: "BRIDGE", words: ["Build", "River", "Index", "Design", "Gully", "Extend"] },
    { root: "ANIMAL", words: ["Alive", "Native", "Instinct", "Mammal", "Adopt", "Large"] },
    { root: "PLAYER", words: ["Pitch", "League", "Action", "Youth", "Eager", "Roster"] },
    { root: "MARKET", words: ["Money", "Aisle", "Retail", "Kiosk", "Empty", "Trade"] },
    { root: "STREET", words: ["Signal", "Tarmac", "Route", "Egress", "Estate", "Traffic"] },
    { root: "BOTTLE", words: ["Beverage", "Object", "Tight", "Thirst", "Liquid", "Empty"] },

    { root: "FAMILY", words: ["Father", "Auntie", "Member", "Infant", "Loving", "Yearly"] },
    { root: "CAMERA", words: ["Click", "Angle", "Memory", "Expose", "Roll", "Aperture"] },
    { root: "DESERT", words: ["Drought", "Entire", "Sandy", "Erode", "Remote", "Tough"] },
    { root: "JOURNY", words: ["Jaunt", "Ocean", "United", "Rover", "North", "Yonder"] },
    { root: "SUMMER", words: ["Sunny", "Under", "Mellow", "Midday", "Equal", "Relax"] },
    { root: "PENCIL", words: ["Point", "Eraser", "Number", "Cedar", "Image", "Leads"] },
    { root: "ISLAND", words: ["Isolate", "Shore", "Land", "Alone", "Novel", "Drift"] },
    { root: "FOREST", words: ["Fauna", "Orchard", "Ranger", "Elms", "Sapling", "Twig"] },
    { root: "CASTLE", words: ["Crown", "Ancient", "Stone", "Tower", "Lord", "Entry"] },
    { root: "VALLEY", words: ["Village", "Alley", "Lowly", "Lush", "Echo", "Yield"] },

    { root: "MIRROR", words: ["Mimic", "Identical", "Reflect", "Real", "Optics", "Reverse"] },
    { root: "PICNIC", words: ["Park", "Invite", "Cloth", "Napkin", "Insect", "Crisp"] },
    { root: "HAMMER", words: ["Hard", "Anvil", "Metal", "Mash", "Exert", "Rivet"] },
    { root: "CHURCH", words: ["Chapel", "Hymn", "Unity", "Revere", "Choir", "Holy"] },
    { root: "BASKET", words: ["Braid", "Array", "Straw", "Knit", "Eggs", "Tote"] },
    { root: "LIZARD", words: ["Leaping", "Iguana", "Zippy", "Arid", "Reptile", "Dry"] },
    { root: "OFFICE", words: ["Order", "Files", "Furnish", "Invoice", "Chair", "Email"] },
    { root: "SILVER", words: ["Shiny", "Ingot", "Lustre", "Value", "Elite", "Rich"] },
    { root: "PUPPET", words: ["Prop", "Upper", "Play", "Pantomime", "Event", "Toy"] },
    { root: "CANDLE", words: ["Cover", "Aroma", "Night", "Dark", "Lamp", "Extinguish"] },

    { root: "DOCTOR", words: ["Diagnose", "Operate", "Clinic", "Treat", "Ought", "Recover"] },
    { root: "FRIDGE", words: ["Frozen", "Rapid", "Ice", "Door", "Grocery", "Eat"] },
    { root: "KITTEN", words: ["Kind", "Indoor", "Tiny", "Tail", "Eye", "Nap"] },
    { root: "LETTER", words: ["Language", "Envelope", "Text", "Type", "Explain", "Read"] },
    { root: "NEPHEW", words: ["Niece", "Each", "Parent", "Home", "Elder", "Whole"] },
    { root: "POCKET", words: ["Pouch", "Outer", "Coin", "Keep", "End", "Tuck"] },
    { root: "QUARTZ", words: ["Quality", "Unique", "Atom", "Rock", "Transparent", "Zinc"] },
    { root: "RABBIT", words: ["Runner", "Alfalfa", "Bunny", "Borrow", "Into", "Timid"] },
    { root: "SPIDER", words: ["Silk", "Prey", "Itsy", "Danger", "Eight", "Race"] },
    { root: "TICKET", words: ["Train", "Item", "Cost", "Kind", "Entry", "Trip"] },

    { root: "WALLET", words: ["Wadded", "Afford", "Leather", "Lost", "Earn", "Teller"] },
    { root: "YOGHURT", words: ["Yummy", "Oral", "Gut", "Health", "Useful", "Raw", "Tart"] },
    { root: "ZODIAC", words: ["Zenith", "Orbit", "Delineate", "Image", "Astrology", "Cosmos"] },
    { root: "BUTTON", words: ["Back", "Up", "Thread", "Tight", "Open", "Notch"] },
    { root: "COUSIN", words: ["Child", "Older", "Uncle", "Son", "In-law", "Niece"] },
    { root: "DANCER", words: ["Duet", "Artist", "Nimble", "Class", "Energy", "Rhythm"] },
    { root: "HAMMOCK", words: ["Hang", "Air", "Mesh", "Move", "Out", "Chill", "Knots"] },
    { root: "MUSEUM", words: ["Masterpiece", "Unit", "Statue", "Exhibit", "Unique", "Modern"] },
    { root: "ORANGE", words: ["Oval", "Rind", "Acid", "Nectar", "Grow", "Every"] },
    { root: "VIOLIN", words: ["Voice", "Instrument", "Opera", "Loud", "Ivory", "Notes"] },

    { root: "FLOWER", words: ["Floral", "Leafy", "Open", "Wild", "Earthy", "Rosy"] },
    { root: "PLANET", words: ["Pluto", "Lunar", "Astro", "NASA", "Earthlike", "Terra"] },
    { root: "ROCKET", words: ["Rocketry", "Orbiting", "Cosmic", "Engine", "Kinetic", "Thrust"] },
    { root: "PIRATE", words: ["Plunder", "Islandic", "Raider", "Anchor", "Treasure", "Explorer"] },
    { root: "JUNGLE", words: ["Jaguar", "Undergrowth", "Nesting", "Green", "Leafage", "Exotic"] },
    { root: "CASTOR", words: ["Celestial", "Astral", "Starry", "Telescope", "Orion", "Radiance"] },
    { root: "DRAGON", words: ["Drake", "Roar", "Armor", "Gold", "Overfly", "Nestling"] },
    { root: "CIRCUS", words: ["Clown", "Indoor", "Ringmaster", "Crowd", "Unicycle", "Showman"] },
    { root: "BAKERY", words: ["Bread", "Aroma", "Knead", "Oven", "Rolls", "Yeasty"] },
    { root: "CHEESE", words: ["Creamy", "Holey", "Edible", "Eaten", "Savory", "Extra"] },

    { root: "PILLOW", words: ["Plushy", "Indoor", "Linen", "Lofty", "Overstuffed", "Warm"] },
    { root: "TURTLE", words: ["Tortoise", "Undersea", "Reptilian", "Tiny", "Longlived", "Eggs"] },
    { root: "MONKEY", words: ["Mischief", "Orangefur", "Nimble", "Kong", "Eats", "Yelp"] },
    { root: "FLOWER", words: ["Fragrant", "Leaflet", "Outdoor", "Wildflower", "Earthbed", "Rosebud"] },
    { root: "GUITAR", words: ["Groove", "Ukulele", "Instrumental", "Tune", "Amplify", "Rhythmic"] },
    { root: "ROBOTY", words: ["Robotic", "Operated", "Botlike", "Outputting", "Techy", "Yielding"] },
    { root: "BUBBLE", words: ["Blown", "Upfloat", "Bursting", "Bath", "Liquidy", "Elastic"] },
    { root: "COTTON", words: ["Clothlike", "Organic", "Threaded", "Textile", "Outfit", "Naturalfiber"] },
    { root: "MARBLE", words: ["Mosaic", "Artstone", "Roundish", "Block", "Luxury", "Elegant"] },
    { root: "PARROT", words: ["Plumage", "Avian", "Repeat", "Rainbow", "Orangebeak", "Talkative"] },

    { root: "TOMATO", words: ["Tangy", "Organic", "Meal", "Acidic", "Tasty", "Ovalish"] },
    { root: "BANANA", words: ["Bunch", "Arc", "Nutritive", "Apefood", "Nibble", "Aromatic"] },
    { root: "CARROT", words: ["Crunchy", "Autumn", "Rooted", "Rabbitfood", "Orange", "Tapered"] },
    { root: "POTATO", words: ["Peeling", "Ovenbake", "Tuber", "Agrarian", "Tasty", "Organic"] },
    { root: "COOKIE", words: ["Crunch", "Oatmeal", "Cocoa", "Kitchen", "Icing", "Edible"] },
    { root: "MUFFIN", words: ["Mini", "Utensilfree", "Fluffy", "Frosted", "Icing", "Nibble"] },
    { root: "NOODLE", words: ["Nest", "Oodles", "Ovalbowl", "Dinnerish", "Long", "Edible"] },
    { root: "PASTRY", words: ["Puffed", "Apple", "Sweet", "Tartlike", "Rich", "Yum"] },
    { root: "BUTTER", words: ["Buttery", "Utensil", "Toast", "Tasteful", "Edible", "Rich"] },
    { root: "PEPPER", words: ["Peppery", "Edible", "Pod", "Piquant", "Extra", "Redhot"] },

    { root: "TENNIS", words: ["Tournament", "Exchange", "Netplay", "Nimble", "Indoorcourt", "Serve"] },
    { root: "SOCCER", words: ["Striker", "Outdoor", "Cleats", "Coach", "Eleven", "Referee"] },
    { root: "HOCKEY", words: ["Helmet", "Onice", "Clubstick", "Keeper", "Edge", "Yardline"] },
    { root: "SKATER", words: ["Sliding", "Kneepad", "Athletic", "Tricks", "Edgework", "Rink"] },
    { root: "RUNNER", words: ["Racing", "Uniform", "Nimble", "Numbered", "Endline", "Rapid"] },
    { root: "BOXING", words: ["Bout", "Opponent", "Xercise", "Impact", "Nimble", "Gloves"] },
    { root: "ARCHER", words: ["Arrow", "Range", "Crossbow", "Hunter", "Eyeaim", "Release"] },
    { root: "DARTER", words: ["Darts", "Aim", "Ringboard", "Targeting", "Edge", "Release"] },
    { root: "JUMPER", words: ["Jumping", "Upwardly", "Motion", "Polevault", "Elevate", "Rise"] },
    { root: "SWIMMY", words: ["Stroke", "Watered", "Immersed", "Moving", "Meetlane", "Yardpool"] },

    { root: "ARTIST", words: ["Artful", "Renderings", "Texture", "Inking", "Studio", "Tint"] },
    { root: "POETRY", words: ["Poem", "Ode", "Expressive", "Tone", "Rhyming", "Yarn"] },
    { root: "SKETCH", words: ["Shading", "Kraft", "Etching", "Charcoal", "Traceable", "Handdrawn"] },
    { root: "DESIGN", words: ["Draft", "Element", "Shape", "Illustrative", "Grid", "Neat"] },
    { root: "MOSAIC", words: ["Mural", "Ornate", "Smalltile", "Arrangement", "Inlay", "Craft"] },
    { root: "CANVAS", words: ["Coloring", "Artboard", "Neat", "Varnish", "Acrylic", "Stroke"] },
    { root: "MURALY", words: ["Museumwall", "Urbanart", "Rarepaint", "Artwork", "Largewall", "Yardart"] },
    { root: "CRAFTS", words: ["Cutout", "Ribbon", "Artpaper", "Folded", "Threading", "Scissor"] },
    { root: "ORIGAM", words: ["Owlfold", "Ricepaper", "Infold", "Geometric", "Artform", "Manual"] },
    { root: "STATUE", words: ["Sculpt", "Tall", "Artpiece", "Texture", "Urnlike", "Exhibitpiece"] },

    { root: "THUNDER", words: ["Tempest", "Humid", "Umbra", "Noise", "Darksky", "Rainfall"] },
    { root: "BREEZE", words: ["Blowy", "Refreshing", "Easyair", "Eveningair", "Zephyr", "Easyflow"] },
    { root: "CLOUDY", words: ["Cloudbank", "Lowlight", "Overcast", "Umbrellaish", "Dimming", "Yondergray"] },
    { root: "SUNSET", words: ["Skyglow", "Umbra", "Nightfall", "Scenic", "Evening", "Twilight"] },
    { root: "RAINER", words: ["Raindrop", "Aqueoussky", "Indoorstay", "Nimbus", "Eveningwet", "Raincoat"] },
    { root: "STORMY", words: ["Squall", "Thunderous", "Overcast", "Rumbling", "Mist", "Yellowsky"] },
    { root: "FROSTY", words: ["Freezing", "Rime", "Outdoorcold", "Snowish", "Tingly", "Yeti"] },
    { root: "BLAZES", words: ["Burning", "Lighted", "Ash", "Zonehot", "Ember", "Smoke"] },
    { root: "MEADOW", words: ["Mossy", "Earthland", "Airy", "Daisies", "Openfield", "Wildgrass"] },
    { root: "CANYON", words: ["Cliff", "Aridland", "Narrow", "Yonderrock", "Overlook", "Naturecut"] },

    { root: "MELODY", words: ["Musical", "Echoing", "Lyric", "Operaish", "Drumbeat", "Yodel"] },
    { root: "SINGER", words: ["Songful", "Indoorstage", "Noteable", "Genre", "Encore", "Rhythmical"] },
    { root: "DRUMER", words: ["Drumbeat", "Rhythmical", "Upbeat", "Music", "Echo", "Rollbeat"] },
    { root: "FLUTES", words: ["Fipple", "Lighttone", "Uptone", "Tuneable", "Ensembleplay", "Softnote"] },
    { root: "PIANOS", words: ["Pedal", "Ivorykey", "Acoustic", "Notation", "Octave", "Song"] },
    { root: "CHORDS", words: ["Chordal", "Harmonytone", "Octave", "Rhythmic", "Duetlike", "Sound"] },
    { root: "LYRICS", words: ["Linesong", "Yodel", "Rhymed", "Inmusic", "Chorus", "Songtext"] },
    { root: "SONATA", words: ["Symphonic", "Orchestral", "Notation", "Arrangement", "Tempo", "Acoustic"] },
    { root: "TUNING", words: ["Tone", "Ukulele", "Note", "Instrumental", "Needle", "Guitarish"] },
    { root: "VIOLAS", words: ["Vibrato", "Instrumental", "Orchestral", "Lowtone", "Acoustic", "Stringed"] },

    { root: "SAFARI", words: ["Savanna", "Animalia", "Fieldtrip", "Adventurelike", "Roaming", "Ivoryland"] },
    { root: "CASTAW", words: ["Coast", "Aloneish", "Shoreline", "Tropical", "Adrift", "Wildernessy"] },
    { root: "HIKING", words: ["Hillpath", "Incline", "Knapsacking", "Intrail", "Naturewalk", "Gear"] },
    { root: "TRAVEL", words: ["Touring", "Roadway", "Abroad", "Visit", "Excursion", "Luggagebag"] },
    { root: "VOYAGE", words: ["Vesseltrip", "Oceanic", "Yondersea", "Anchorway", "Globetrek", "Explore"] },
    { root: "RESORT", words: ["Restful", "Escape", "Suite", "Oceanview", "Relaxing", "Tour"] },
    { root: "CAMPER", words: ["Campfire", "Awning", "Map", "Pinewood", "Explore", "Rucksack"] },
    { root: "CRUISE", words: ["Cabin", "Routeway", "Unwind", "Islandhop", "Shipboard", "Excursion"] },
    { root: "JACKET", words: ["Jersey", "Armsleeve", "Cozywear", "Knitted", "Exterior", "Travelwear"] },
    { root: "SANDAL", words: ["Strappy", "Airy", "Narrowsole", "Daywear", "Ankle", "Light"] },

    { root: "MOTHER", words: ["Mommy", "Olderkin", "Tender", "Helpful", "Embrace", "Relative"] },
    { root: "SISTER", words: ["Sibling", "Inhome", "Supportive", "Together", "Elderkin", "Relative"] },
    { root: "BROTHR", words: ["Brotherly", "Related", "Olderkin", "Together", "Helpful", "Relative"] },
    { root: "PARENT", words: ["Protector", "Adultkin", "Raisechild", "Elder", "Nurturer", "Tender"] },
    { root: "BABIES", words: ["Bundle", "Adorable", "Babbler", "Infancy", "Eldercare", "Small"] },
    { root: "GRANNY", words: ["Gentle", "Relative", "Agedkin", "Nurture", "Nanny", "Yarnstory"] },
    { root: "UNCLES", words: ["Unitkin", "Nicekin", "Caring", "Laughing", "Elder", "Support"] },
    { root: "AUNTLY", words: ["Adultkin", "Unclepair", "Nice", "Tender", "Lovingkin", "Youthcare"] },
    { root: "COUPLE", words: ["Companion", "Oath", "Union", "Pair", "Love", "Everyday"] },
    { root: "TWINLY", words: ["Twofold", "Identikit", "Withsame", "Nearborn", "Linked", "Youth"] },

    { root: "MOBILE", words: ["Message", "Onlineapp", "Battery", "Internet", "Link", "Electronic"] },
    { root: "LAPTOP", words: ["Laptopcase", "Application", "Portable", "Typingpad", "Online", "Processorchip"] },
    { root: "SCREEN", words: ["Sensor", "Computerish", "Reflection", "Electronic", "Eyeview", "Networked"] },
    { root: "BROWSER", words: ["Bookmark", "Online", "Webpage", "Searchbar", "Exploreweb", "Reload"] },
    { root: "SERVER", words: ["Storage", "Endpoint", "Request", "Virtual", "Exchange", "Runtime"] },
    { root: "SCRIPT", words: ["Syntax", "Command", "Runnable", "Input", "Program", "Tag"] },
    { root: "PYTHON", words: ["Program", "YAML", "Tensor", "Hashmap", "Object", "Numeric"] },
    { root: "CODING", words: ["Compile", "Object", "Debug", "Input", "Nodejs", "Git"] },
    { root: "CURSOR", words: ["Clicker", "Userpoint", "Runtime", "Select", "Onscreen", "Resize"] },
    { root: "UPLOAD", words: ["Uploadfile", "Networksend", "Datafile", "Onlinepush", "Attach", "Drive"] },

    { root: "HEALTH", words: ["Healing", "Energybody", "Active", "Lifestyle", "Therapy", "Hydrate"] },
    { root: "DENTAL", words: ["Dentist", "Enamel", "Nibblecare", "Tooth", "Align", "Luster"] },
    { root: "NURSES", words: ["Needlecare", "Uniformed", "Restcare", "Supporter", "Elderhelp", "Scrubs"] },
    { root: "CLINIC", words: ["Care", "Labtest", "Illness", "Nurse", "Injection", "Checkup"] },
    { root: "MEDICS", words: ["Medicine", "Emergencycare", "Dose", "Injurycare", "Caregiver", "Stethoscope"] },
    { root: "VITAMN", words: ["Vital", "Intakefood", "Tablet", "Activebody", "Mineral", "Nutrition"] },
    { root: "SLEEPY", words: ["Slumber", "Latebed", "Eyeshut", "Eveningrest", "Pajamas", "Yawning"] },
    { root: "YOGIST", words: ["Yoga", "Outerpeace", "Gentlepose", "Innercalm", "Stretch", "Training"] },
    { root: "BREATH", words: ["Breathe", "Respire", "Exhale", "Airflow", "Therapy", "Healthy"] },
    { root: "ENERGY", words: ["Exercisepower", "Nutrition", "Endurance", "Recharge", "Glow", "Youthfulpower"] },

    { root: "LIBRAR", words: ["Literature", "Indexcard", "Bookshelf", "Readroom", "Archive", "Reader"] },
    { root: "LESSON", words: ["Learningtask", "Exercisebook", "Studytime", "Subject", "Explainable", "Notesheet"] },
    { root: "TEACHR", words: ["Tutor", "Educator", "Academia", "Classroom", "Helper", "Reader"] },
    { root: "PUPILS", words: ["Practice", "Uniforms", "Pencils", "Inclass", "Learners", "Study"] },
    { root: "COURSE", words: ["Curriculum", "Onlineclass", "Unitstudy", "Reading", "Subject", "Exam"] },
    { root: "QUIZZY", words: ["Querying", "Unitcheck", "Itemtest", "Zesttest", "Zerohint", "Yayscore"] },
    { root: "GRADES", words: ["Grading", "Report", "Assessment", "Deskwork", "Exammark", "Scorecard"] },
    { root: "TUTORS", words: ["Teaching", "Understanding", "Training", "Onlinehelp", "Reviewing", "Support"] },
    { root: "RECESS", words: ["Runplay", "Eatbreak", "Courtyard", "Energybreak", "Snacktime", "Schoolyard"] },
    { root: "ANSWER", words: ["Accuracy", "Notedreply", "Solution", "Writeback", "Explainback", "Response"] },

    { root: "MASCOT", words: ["Mascothead", "Arena", "Spirit", "Costume", "Outfit", "Team"] },
    { root: "PENPAL", words: ["Postcard", "Envelopefriend", "Note", "Paper", "Address", "Letterfriend"] },
    { root: "PUZZLE", words: ["Pieces", "Unlock", "Zigzag", "Zonefit", "Logic", "Enigma"] },
    { root: "RIDDLE", words: ["Riddleme", "Idea", "Deduce", "Difficult", "Logic", "Enigma"] },
    { root: "MAZING", words: ["Maze", "Aroundpath", "Zigzag", "Insidepath", "Navigate", "Goal"] },
    { root: "CASTLE", words: ["Castlewall", "Archway", "Royal", "Stronghold", "Turret", "Entrance"] },
    { root: "KNIGHT", words: ["Kingdom", "Noble", "Ironclad", "Guarded", "Heroic", "Tournament"] },
    { root: "WIZARD", words: ["Wand", "Illusion", "Zap", "Arcane", "Rune", "Dragonspell"] },
    { root: "CAVERN", words: ["Cave", "Ancientrock", "Vault", "Echohole", "Rocky", "Nightdark"] },
    { root: "GALAXY", words: ["Galactic", "Astral", "Luminous", "Asteroid", "Xraystar", "Yonderspace"] },

    { root: "FOREST", words: ["Ferny", "Oaken", "Rootway", "Evergreen", "Squirrel", "Trailwood"] },
    { root: "OCEANS", words: ["Oceana", "Current", "Ebbing", "Abyss", "Nautic", "Seabed"] },
    { root: "RIVERS", words: ["Ripple", "Icyflow", "Valestream", "Eddy", "Riverbank", "Stream"] },
    { root: "HARBOR", words: ["Harboring", "Anchorplace", "Boatdock", "Rope", "Oceanport", "Rigger"] },
    { root: "ANCHOR", words: ["Anchorline", "Nautic", "Chainlink", "Harborhold", "Oceanhold", "Ropeway"] },
    { root: "ISLETS", words: ["Islandlet", "Shorelet", "Lagoon", "Eddy", "Tropical", "Sandbar"] },
    { root: "LAGOON", words: ["Lagoonal", "Aqua", "Gentlewater", "Oasis", "Openwater", "Narrowbay"] },
    { root: "REEFED", words: ["Reefline", "Eelhome", "Ecozone", "Fishbed", "Edgecoral", "Diving"] },
    { root: "TROPIC", words: ["Tropical", "Rainwarm", "Oasis", "Palm", "Islandheat", "Coastal"] },
    { root: "SUMMIT", words: ["Snowcap", "Uphill", "Mountainpeak", "Maptop", "Incline", "Top"] },

    { root: "TAILOR", words: ["Threadwork", "Alter", "Ironing", "Lining", "Outfit", "Repair"] },
    { root: "BUTTON", words: ["Buttonhole", "Upfasten", "Threadloop", "Tinyfasten", "Openclose", "Needlework"] },
    { root: "FABRIC", words: ["Fiber", "Apparel", "Boltcloth", "Ribbon", "Interlace", "Cottony"] },
    { root: "THREAD", words: ["Twine", "Hemline", "Runningstitch", "Embroidery", "Edge", "Darn"] },
    { root: "SEWING", words: ["Stitch", "Embroidery", "Wearable", "Inseam", "Needlework", "Garment"] },
    { root: "JERSEY", words: ["Jumperwear", "Elastic", "Rugbytop", "Sportwear", "Everyday", "Yarnknit"] },
    { root: "OUTFIT", words: ["Outerwear", "Uniformwear", "Trendy", "Fashion", "Itemwear", "Tailored"] },
    { root: "SHIRTS", words: ["Sleeves", "Hem", "Ironed", "Readywear", "Topwear", "Style"] },
    { root: "COLORS", words: ["Crimson", "Orangeish", "Lilac", "Olive", "Rainbowed", "Shade"] },
    { root: "PATERN", words: ["Print", "Arrangement", "Texture", "Emblem", "Repeat", "Needle"] },

    { root: "ABANDONED", words: ["Alone", "By", "Absent", "Neglected", "Deserted", "Outcast", "Nothing", "Empty", "Discard"] },
    { root: "BEVERAGE", words: ["Brewed", "Energy", "Vessel", "Enjoy", "Refresh", "Amount", "Glass", "Elixir"] },
    { root: "COMPUTER", words: ["Coding", "Operating", "Memory", "Processor", "Upload", "Terminal", "Electron", "Router"] },
    { root: "DIAMONDS", words: ["Dazzle", "Invest", "Almost", "Mining", "Outer", "Natural", "Durable", "Sparkle"] },
    { root: "ELEPHANT", words: ["Enormous", "Lumber", "Exhibit", "Pachyderm", "Heavy", "African", "Nobly", "Trunks"] },
    { root: "FESTIVAL", words: ["Fiesta", "Events", "Social", "Tradition", "Invite", "Vibrant", "August", "Leisure"] },
    { root: "GRAPHICS", words: ["Gaming", "Render", "Artistic", "Pixels", "Higher", "Images", "Create", "Screen"] },
    { root: "HOLIDAYS", words: ["Hotel", "Ocean", "Luggage", "Island", "Depart", "Arrive", "Yearly", "Summer"] },
    { root: "INFINITY", words: ["Immense", "Never", "Forever", "Itself", "Number", "Inside", "Total", "Yonder"] },
    { root: "JUNCTION", words: ["Joining", "Urban", "Network", "Crossing", "Traffic", "Into", "Others", "Nearly"] },

    { root: "KEYBOARD", words: ["Keystroke", "Enter", "Yield", "Button", "Output", "Action", "Record", "Digital"] },
    { root: "LANGUAGE", words: ["Lexicon", "Accent", "Native", "Grammar", "United", "Around", "Global", "English"] },
    { root: "MOUNTAIN", words: ["Massive", "Oxygen", "Upward", "Nature", "Terrain", "Altitude", "Indeed", "Nearby"] },
    { root: "NOTEBOOK", words: ["Notes", "Organize", "Thought", "Edition", "Binder", "Openly", "Object", "Keeping"] },
    { root: "OPPOSITE", words: ["Other", "Point", "Parallel", "Obverse", "Stance", "Invert", "Toward", "Either"] },
    { root: "PLATINUM", words: ["Precious", "Lustre", "Afford", "Trade", "Ingot", "Nearly", "Unused", "Metal"] },
    { root: "QUESTION", words: ["Query", "Under", "Explain", "Solve", "Testing", "Inquiry", "Option", "Noticed"] },
    { root: "RESTAURANT", words: ["Recipe", "Eating", "Serving", "Table", "Appetite", "Utensil", "Review", "Amount", "Nightly", "Tipping"] },
    { root: "SANDWICH", words: ["Sliced", "Appetizer", "Nearly", "Dinner", "Wheat", "Ingest", "Crusts", "Hunger"] },
    { root: "TRIANGLE", words: ["Three", "Ruler", "Inside", "Angle", "Nearly", "Geometry", "Length", "Equal"] },

    { root: "UMBRELLA", words: ["Under", "Moist", "Blocking", "Raining", "Erect", "Layers", "Lonely", "Above"] },
    { root: "VACATION", words: ["Voyage", "Airport", "Coastal", "Away", "Tourist", "Itinerary", "Others", "North"] },
    { root: "WATERFALL", words: ["Washed", "Aqueous", "Through", "Entire", "River", "Flowing", "Around", "Lower", "Liquid"] },
    { root: "YESTERDAY", words: ["Years", "Earlier", "Since", "Time", "Event", "Recall", "Dated", "After", "Youth"] },
    { root: "ZUCCHINI", words: ["Zesty", "Unless", "Cooked", "Cuisine", "Healthy", "Ingredient", "Nutritious", "Inside"] },
    { root: "ACCIDENT", words: ["Alert", "Crash", "Cause", "Injure", "Drive", "Emergency", "Noticed", "Total"] },
    { root: "BACKPACK", words: ["Baggage", "Across", "Carry", "Knapsack", "Pocket", "Around", "Camping", "Keeping"] },
    { root: "CHAMPION", words: ["Conquer", "Honor", "Achieve", "Medal", "Player", "Itself", "Others", "Nobly"] },
    { root: "DECORATE", words: ["Design", "Embellish", "Color", "Object", "Roomy", "Adorn", "Theme", "Every"] },
    { root: "EXERCISE", words: ["Energy", "Xtra", "Endure", "Running", "Cardio", "Inside", "Strong", "Effort"] },

    { root: "FORECAST", words: ["Future", "Over", "Report", "Expect", "Climate", "Around", "Stormy", "Today"] },
    { root: "GUARDIAN", words: ["Guard", "Under", "Assist", "Rescue", "Defend", "Itself", "Around", "Nearly"] },
    { root: "HERITAGE", words: ["History", "Elders", "Rooted", "Inside", "Tradition", "Ancestry", "Global", "Estate"] },
    { root: "INSTANCE", words: ["Item", "Nearly", "Sample", "Types", "Actual", "Noted", "Case", "Every"] },
    { root: "JOURNALS", words: ["Jotting", "Openly", "Under", "Record", "Notes", "Author", "Lines", "Story"] },
    { root: "KILOMETRE", words: ["Kilogram", "Index", "Length", "Others", "Meters", "Equal", "Travel", "Route", "Entire"] },
    { root: "LAUGHTER", words: ["Loudly", "Amused", "United", "Giggle", "Happy", "Toward", "Every", "Relief"] },
    { root: "MAGAZINE", words: ["Media", "Article", "Glossy", "About", "Zine", "Issue", "Nearly", "Every"] },
    { root: "NEGATIVE", words: ["Nothing", "Entire", "Ground", "Against", "Toward", "Inside", "Void", "Empty"] },
    { root: "ORCHESTRA", words: ["Overture", "Rhythm", "Conductor", "Harmony", "Ensemble", "Symphony", "Theatrical", "Reverb", "Audience"] },

    { root: "PAINTING", words: ["Portrait", "Artist", "Image", "Nearly", "Talent", "Indigo", "Nature", "Gallery"] },
    { root: "QUIETLY", words: ["Quell", "Under", "Itself", "Eased", "Tacit", "Lowly", "Yonder"] },
    { root: "RAILWAYS", words: ["Rails", "Arrive", "Into", "Locomotive", "Wagons", "Around", "Yonder", "Station"] },
    { root: "SCORPION", words: ["Sting", "Creature", "Others", "Revenue", "Poison", "Inside", "Organic", "Native"] },
    { root: "TELEPHONE", words: ["Talking", "Earpiece", "Listen", "Electron", "Phone", "Hello", "Others", "Number", "Every"] },
    { root: "UNIVERSE", words: ["Upward", "Nebula", "Infinite", "Vastness", "Earth", "Radiant", "Space", "Entire"] },
    { root: "VICTORY", words: ["Vanquish", "Into", "Champion", "Triumph", "Others", "Ranking", "Yields"] },
    { root: "WHISPERS", words: ["Wind", "Hushed", "Inside", "Silent", "People", "Every", "Rustle", "Softly"] },
    { root: "XEROXING", words: ["Xenon", "Entire", "Record", "Object", "Xerox", "Image", "Nearly", "Generate"] },
    { root: "YEARBOOK", words: ["Yearly", "Event", "Alumni", "Record", "Binder", "Others", "Openly", "Keeping"] },

    { root: "ADVENTURES", words: ["Audacious", "Destiny", "Venture", "Exploration", "Navigate", "Traverse", "Unknown", "Rugged", "Expedition", "Survival"] },
    { root: "BENEFICIAL", words: ["Bonus", "Enhance", "Nurture", "Effective", "Favorable", "Improve", "Construct", "Incentive", "Advantage", "Lucrative"] },
    { root: "CONFIDENCE", words: ["Courage", "Optimism", "Nobility", "Fearless", "Integrity", "Decisive", "Esteem", "Natural", "Certain", "Endurance"] },
    { root: "DEMOCRACIES", words: ["Delegate", "Election", "Majority", "Opinion", "Citizen", "Republic", "Assembly", "Carter", "Ideology", "Equality", "Suffrage"] },
    { root: "ENTHUSIASM", words: ["Eager", "Network", "Thrilled", "Highly", "Upbeat", "Spirit", "Intense", "Ardor", "Social", "Motivate"] },
    { root: "FRIENDSHIP", words: ["Fellow", "Rapport", "Intimacy", "Empathy", "Nearest", "Devotion", "Support", "Harmony", "Include", "Partner"] },
    { root: "GENEROSITY", words: ["Giving", "Elevate", "Noblesse", "Endowment", "Reward", "Offer", "Sharer", "Invest", "Tribute", "Yielding"] },
    { root: "HIEROGLYPH", words: ["History", "Inscribe", "Egyptian", "Record", "Obscure", "Glyphs", "Legacy", "Yonder", "Pictograph", "Heritage"] },
    { root: "IMAGINATION", words: ["Ideate", "Mindful", "Abstract", "Genius", "Invent", "Notion", "Artistry", "Theory", "Isight", "Origin", "Novelty"] },
    { root: "JOURNALISM", words: ["Journal", "Observe", "Update", "Reporting", "Narrative", "Accurate", "Latest", "Inform", "Story", "Message"] },

    { root: "KINESTHETIC", words: ["Kinetic", "Ipulse", "Neuron", "Energy", "Sensory", "Tactile", "Haptic", "Exert", "Talent", "Instinct", "Control"] },
    { root: "LIGHTHOUSE", words: ["Lantern", "Illuminate", "Guide", "Harbor", "Tower", "Hazard", "Outpost", "Useful", "Signal", "Erect"] },
    { root: "MANUSCRIPT", words: ["Margins", "Author", "Novel", "Unique", "Scribe", "Chapter", "Revise", "Inkling", "Publish", "Textual"] },
    { root: "NEGOTIATED", words: ["Neutral", "Exchange", "Gains", "Offer", "Treaty", "Impact", "Agreed", "Terms", "Equal", "Deal"] },
    { root: "ORNAMENTAL", words: ["Ornate", "Radiant", "Novelty", "Aesthetic", "Model", "Enhance", "Nuanced", "Trimming", "Array", "Lovely"] },
    { root: "PARTICIPATE", words: ["Presence", "Attend", "Relate", "Together", "Involve", "Connect", "Interact", "Player", "Assist", "Teamwork", "Engage"] },
    { root: "QUADRUPLED", words: ["Quartet", "Unfold", "Amount", "Double", "Ratio", "Upward", "Portion", "Linear", "Expand", "Degree"] },
    { root: "RELATIVELY", words: ["Relate", "Estimate", "Likely", "Average", "Typical", "Instead", "Varying", "Exactly", "Lowly", "Yields"] },
    { root: "SCIENTIFIC", words: ["System", "Chemical", "Inquiry", "Evidence", "Nuclear", "Theory", "Invent", "Formula", "Inside", "Control"] },
    { root: "TECHNOLOGY", words: ["Technical", "Electron", "Compute", "Hardware", "Network", "Output", "Logic", "Online", "Gadget", "Yearly"] },

    { root: "UNDERSTAND", words: ["Unite", "Notion", "Decipher", "Explain", "Reason", "Solve", "Teach", "Absorb", "Noticed", "Deduce"] },
    { root: "VOCABULARY", words: ["Verbal", "Orangery", "Context", "Accent", "Bookish", "Useful", "Language", "Author", "Reading", "Yonder"] },
    { root: "WILDERNESS", words: ["Woodland", "Isolated", "Landscape", "Desolate", "Ecology", "Remote", "Natural", "Expanse", "Scenic", "Solitude"] },
    { root: "XENOPHOBIA", words: ["Xenon", "Exclude", "Negative", "Outcast", "Prejudice", "Hostile", "Other", "Biased", "Ignore", "Afraid"] },
    { root: "YESTERYEAR", words: ["Youthful", "Epoch", "Seventy", "Timeline", "Era", "Recall", "Years", "Ended", "Ancient", "Remote"] },
    { root: "ZOOLOGISTS", words: ["Zoology", "Organism", "Observe", "Living", "Offspring", "Genetics", "Instinct", "Species", "Tracker", "Scientist"] },
    { root: "APPRECIATE", words: ["Admire", "Prize", "Praise", "Regard", "Esteem", "Cherish", "Intake", "Award", "Thank", "Exalt"] },
    { root: "BANKRUPTCY", words: ["Borrow", "Assets", "Nearly", "Kited", "Receiver", "Under", "Poverty", "Total", "Credit", "Yields"] },
    { root: "COMMUNITY", words: ["Collective", "Others", "Members", "Mutual", "United", "Neighbor", "Interact", "Township", "Youth"] },
    { root: "DECENTRALY", words: ["Diffuse", "Equal", "Chain", "Entire", "Network", "Transfer", "Remote", "Away", "Local", "Yield"] },

    { root: "EVOLUTIONS", words: ["Emerge", "Variety", "Origin", "Lineage", "Unfold", "Transform", "Inherit", "Organic", "Natural", "Survive"] },
    { root: "FASCINATED", words: ["Focused", "Attract", "Spellbound", "Curious", "Intrigue", "Noted", "Amazed", "Taken", "Eager", "Delighted"] },
    { root: "GOVERNMENT", words: ["Govern", "Official", "Voting", "Executive", "Regulate", "Nation", "Mandate", "Enact", "Network", "Treaty"] },
    { root: "HYPOTHESIS", words: ["Hint", "Yield", "Propose", "Option", "Testing", "Higher", "Evidence", "Suppose", "Idea", "System"] },
    { root: "ILLUSTRATE", words: ["Image", "Linear", "Layout", "Unique", "Sketch", "Talent", "Render", "Artist", "Trace", "Exhibit"] },
    { root: "JUSTIFIABLE", words: ["Judicial", "Unbiased", "Sound", "Truth", "Integrity", "Fairly", "Inside", "Agreed", "Basis", "Legal", "Ethical"] },
    { root: "KEYSTROKES", words: ["Keyboard", "Enter", "Yield", "Symbol", "Typing", "Record", "Output", "Keep", "Entire", "Space"] },
    { root: "LEGITIMACY", words: ["Lawful", "Edict", "Genuine", "Item", "Title", "Inside", "Mandate", "Actual", "Court", "Yearly"] },
    { root: "METAPHORIC", words: ["Message", "Emblem", "Token", "Analogy", "Phrase", "Hint", "Object", "Relate", "Image", "Context"] },
    { root: "NOSTALGIAS", words: ["Nostalgic", "Older", "Sentiment", "Tender", "Antique", "Lonely", "Golden", "Image", "Aspect", "Sweet"] },

    { root: "OBSERVANCE", words: ["Observe", "Behold", "Sight", "Eyewitness", "Regard", "Viewer", "Attend", "Notice", "Check", "Event"] },
    { root: "PHILANTHROPY", words: ["Patron", "Human", "Invest", "Largesse", "Altruism", "Nobility", "Trustee", "Helper", "Rescue", "Offer", "Public", "Yield"] },
    { root: "QUALIFIERS", words: ["Quota", "Unique", "Ability", "Limit", "Index", "Fitness", "Item", "Eligible", "Rating", "Score"] },
    { root: "RECREATION", words: ["Relax", "Enjoy", "Camping", "Revive", "Exercise", "Amuse", "Travel", "Inside", "Outdoor", "Nature"] },
    { root: "STRATEGIST", words: ["Scheme", "Tactical", "Route", "Action", "Target", "Expert", "Gaming", "Intel", "Skill", "Think"] },
    { root: "TRANSLATOR", words: ["Text", "Reading", "Accent", "Native", "Speech", "Language", "Around", "Talking", "Others", "Render"] },
    { root: "UNDERWATER", words: ["Under", "Nautical", "Deep", "Eel", "Reef", "Whale", "Aqueous", "Tidal", "Entire", "River"] },
    { root: "VEGETARIAN", words: ["Vegan", "Eating", "Greenery", "Entire", "Tomato", "Artichoke", "Roots", "Ingest", "Around", "Nutritious"] },
    { root: "WHOLESOMES", words: ["Wholly", "Health", "Organic", "Lively", "Eating", "Soundness", "Output", "Minerals", "Energy", "Sustenance"] },
    { root: "YESTERNIGHT", words: ["Yester", "Evening", "Sleep", "Twilight", "Event", "Recall", "Nearby", "Into", "Gloom", "Hours", "Today"] }
];

const ALL_VALID_WORDS = new Set(
    ROOT_DATA.flatMap(item => item.words.map(w => w.toLowerCase()))
);

// ── Typo.js integration ──────────────────────────────────────────────────
// spellChecker is null while dictionaries are loading; falls back to
// pattern-based heuristic so the game is still fully playable immediately.
let spellChecker = null;

(async function loadTypo() {
    try {
        const BASE = "https://cdn.jsdelivr.net/npm/typo-js@1.2.3/dictionaries/en_US";
        const [affRes, dicRes] = await Promise.all([
            fetch(`${BASE}/en_US.aff`),
            fetch(`${BASE}/en_US.dic`)
        ]);

        if (!affRes.ok || !dicRes.ok) throw new Error("Dictionary fetch failed");

        const [aff, dic] = await Promise.all([affRes.text(), dicRes.text()]);

        // Typo is loaded as a global from the <script> tag above
        spellChecker = new Typo("en_US", aff, dic, { platform: "any" });
    } catch (err) {
        // Silently fall back — isSpelledCorrectly() will use heuristics
        console.warn("Spell checker could not load, using fallback heuristics:", err.message);
    }
})();

/**
 * isSpelledCorrectly — replaces the old SIMPLE_DICTIONARY approach.
 * Uses Typo.js when loaded; falls back to lightweight pattern heuristics.
 */
function isSpelledCorrectly(word) {
    if (spellChecker) {
        return spellChecker.check(word);
    }
    // Fallback heuristics (same logic as original isBadWord, inverted)
    if (!/^[a-z]+$/i.test(word)) return false;
    if (word.length < 3) return false;
    if (/(.)\1\1/.test(word)) return false; // triple repeated letters
    if (!/[aeiou]/i.test(word) && word.length > 4) return false; // no vowels
    return true;
}
// ── end Typo.js integration ───────────────────────────────────────────────


const newPlayerInput = document.getElementById("newPlayerInput");
const playerSelect = document.getElementById("playerSelect");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const removePlayerBtn = document.getElementById("removePlayerBtn");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const submitBtn = document.getElementById("submitBtn");
const revealBtn = document.getElementById("revealBtn");
const clearLeaderboardBtn = document.getElementById("clearLeaderboardBtn");

const modeSelect = document.getElementById("modeSelect");
const scoreEl = document.getElementById("score");
const playerTotalEl = document.getElementById("playerTotal");
const timerEl = document.getElementById("timer");
const matchCountEl = document.getElementById("matchCount");
const rootWordEl = document.getElementById("rootWord");
const systemBoard = document.getElementById("systemBoard");
const userWords = document.getElementById("userWords");
const wordInput = document.getElementById("wordInput");
const messageEl = document.getElementById("message");
const timeBar = document.getElementById("timeBar");
const playersBody = document.getElementById("playersBody");
const leaderboardBody = document.getElementById("leaderboardBody");

let game = {
    started: false,
    player: "",
    mode: "medium",
    root: "",
    systemWords: [],
    score: 0,
    timeLeft: 0,
    maxTime: 0,
    timerId: null,
    usedWords: new Set(),
    matched: new Set(),
    revealed: false,
    saved: false
};

function getPlayers() {
    return JSON.parse(localStorage.getItem(PLAYER_KEY) || "[]");
}

function savePlayers(players) {
    localStorage.setItem(PLAYER_KEY, JSON.stringify(players));
}

function getHistory() {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
}

function saveHistory(history) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function setMessage(text, type = "info") {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
}

function normalize(word) {
    return word.trim().toLowerCase();
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRootPoolByMode(mode) {
    return ROOT_DATA.filter(item => {
        const len = item.root.length;

        if (mode === "easy") return len <= 6;
        if (mode === "medium") return len >= 7 && len <= 9;
        if (mode === "hard") return len >= 10 && len <= 11;
        return len >= 12;
    });
}

function maskWord(word) {
    return "◆".repeat(word.length);
}

function renderPlayers() {
    let players = getPlayers();

    if (!players.length) {
        players = [{ name: "Player 1", total: 0, games: 0 }];
        savePlayers(players);
    }

    playerSelect.innerHTML = "";

    players.forEach(player => {
        const option = document.createElement("option");
        option.value = player.name;
        option.textContent = `${player.name} — ${player.total} pts`;
        playerSelect.appendChild(option);
    });

    const sorted = [...players].sort((a, b) => b.total - a.total);

    playersBody.innerHTML = "";

    sorted.forEach((player, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
 <td>${index + 1}</td>
 <td>${player.name}</td>
 <td>${player.total}</td>
 <td>${player.games}</td>
 `;
        playersBody.appendChild(tr);
    });

    updatePlayerTotal();
}

function updatePlayerTotal() {
    const players = getPlayers();
    const selected = players.find(p => p.name === playerSelect.value);
    playerTotalEl.textContent = selected ? selected.total : 0;
}

function addPlayer() {
    const name = newPlayerInput.value.trim();

    if (!name) {
        setMessage("Please type a player name first.", "error");
        return;
    }

    let players = getPlayers();

    if (players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
        setMessage("This player already exists.", "error");
        return;
    }

    players.push({ name, total: 0, games: 0 });
    savePlayers(players);
    newPlayerInput.value = "";

    renderPlayers();
    playerSelect.value = name;
    updatePlayerTotal();

    setMessage(`${name} added successfully.`, "success");
}

function removePlayer() {
    const name = playerSelect.value;
    let players = getPlayers();

    if (players.length <= 1) {
        setMessage("Keep at least one player.", "error");
        return;
    }

    players = players.filter(p => p.name !== name);
    savePlayers(players);
    renderPlayers();

    setMessage(`${name} removed from player list.`, "info");
}

function createSystemWords(rootItem) {
    const root = rootItem.root.toLowerCase();

    return rootItem.words
        .filter(word => word.toLowerCase() !== root)
        .map((word, index) => ({
            letter: rootItem.root[index] ? rootItem.root[index].toUpperCase() : word[0].toUpperCase(),
            word: word.toLowerCase()
        }));
}

function renderSystemBoard() {
    systemBoard.innerHTML = "";

    game.systemWords.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "system-card";

        const matched = game.matched.has(index);
        const revealed = game.revealed && !matched;

        if (matched) card.classList.add("matched");
        else if (revealed) card.classList.add("revealed");
        else card.classList.add("hidden");

        card.innerHTML = `
 <div class="system-letter">Letter: ${item.letter}</div>
 <div class="system-word">${matched || revealed ? item.word.toUpperCase() : maskWord(item.word)}</div>
 `;

        systemBoard.appendChild(card);
    });
}

function updateStats() {
    scoreEl.textContent = game.score;
    timerEl.textContent = game.timeLeft;
    matchCountEl.textContent = game.matched.size;

    const pct = game.maxTime ? Math.max(0, game.timeLeft / game.maxTime * 100) : 100;
    timeBar.style.width = pct + "%";

    updatePlayerTotal();
}

function stopTimer() {
    if (game.timerId) {
        clearInterval(game.timerId);
        game.timerId = null;
    }
}

function startGame() {
    stopTimer();

    const player = playerSelect.value;
    const mode = modeSelect.value;

    let rootPool = getRootPoolByMode(mode);

    if (!rootPool.length) {
        rootPool = ROOT_DATA;
    }

    const rootItem = pickRandom(rootPool);

    game = {
        started: true,
        player,
        mode,
        root: rootItem.root.toUpperCase(),
        systemWords: createSystemWords(rootItem),
        score: 0,
        timeLeft: MODE_TIME[mode],
        maxTime: MODE_TIME[mode],
        timerId: null,
        usedWords: new Set(),
        matched: new Set(),
        revealed: false,
        saved: false
    };

    rootWordEl.textContent = game.root;
    userWords.innerHTML = "";
    wordInput.value = "";

    renderSystemBoard();
    updateStats();

    setMessage(`${player}'s round started. Make one word for each root letter.`, "info");

    game.timerId = setInterval(() => {
        game.timeLeft--;

        if (game.timeLeft <= 0) {
            game.timeLeft = 0;
            updateStats();
            endGame("time_up");
            return;
        }

        updateStats();
    }, 1000);

    wordInput.focus();
}

function saveRound(reason) {
    if (game.saved || !game.player) return;

    let players = getPlayers();
    const player = players.find(p => p.name === game.player);

    if (player) {
        player.total += game.score;
        player.games += 1;
    }

    savePlayers(players);

    const history = getHistory();

    history.push({
        name: game.player,
        score: game.score,
        mode: game.mode,
        root: game.root,
        matches: game.matched.size,
        reason,
        time: Date.now()
    });

    history.sort((a, b) => b.score - a.score);
    saveHistory(history.slice(0, 15));

    game.saved = true;

    renderPlayers();
    renderHistory();
}

function endGame(reason) {
    stopTimer();
    game.started = false;
    game.revealed = true;
    renderSystemBoard();
    saveRound(reason);
    setMessage(`Round finished. ${game.player} earned ${game.score} points.`, "info");
}

function addChip(word, type, points) {
    const chip = document.createElement("div");
    chip.className = `chip ${type}`;
    chip.textContent = `${word} +${points}`;
    userWords.prepend(chip);
}

function isBadWord(word) {
    if (!/^[a-z]+$/i.test(word)) return true;
    if (word.length < 2) return true;
    if (/(.)\1\1/.test(word)) return true;
    if (!/[aeiou]/i.test(word) && word.length > 4) return true;
    return false;
}

function isCorrectListedWord(word) {
    return ALL_VALID_WORDS.has(word);
}

function submitWord() {
    if (!game.started) {
        setMessage("Start the game first.", "error");
        return;
    }

    const word = normalize(wordInput.value);

    if (!word) {
        setMessage("Please enter a word.", "error");
        wordInput.value = "";
        return;
    }

    if (!/^[a-zA-Z]+$/.test(word)) {
        setMessage("Use letters only.", "error");
        return;
    }

    if (game.usedWords.has(word)) {
        setMessage("You already used this word.", "error");
        return;
    }

    game.usedWords.add(word);

    if (word === game.root.toLowerCase()) {
        addChip(word, "zero", 0);
        wordInput.value = "";
        updateStats();
        setMessage("Root word itself is not allowed for points. +0", "error");
        return;
    }

    const rootLetters = game.root.toLowerCase().split("");

    if (!rootLetters.includes(word[0])) {
        setMessage(`Word must start with one of these letters: ${[...new Set(rootLetters)].join(", ").toUpperCase()}`, "error");
        return;
    }

    const matchIndex = game.systemWords.findIndex((item, index) =>
        item.word === word && !game.matched.has(index)
    );

    if (matchIndex !== -1) {
        game.matched.add(matchIndex);
        game.score += 15;
        renderSystemBoard();
        addChip(word, "match", 15);
        setMessage("Excellent! Exact hidden match. +15 points", "success");
    }
    else if (word.length <= 2) {
        addChip(word, "zero", 0);
        setMessage("2-letter words or shorter get 0 points.", "error");
    }
    // else if (isCorrectListedWord(word)) {
    //     game.score += 2;
    //     addChip(word, "correct", 2);
    //     setMessage("Correct listed word, but not hidden this round. +2 points", "success");
    // }
    // else if (isSpelledCorrectly(word)) {
    //     game.score += 2;
    //     addChip(word, "correct", 2);
    //     setMessage("Correct spelling, but not hidden this round. +2 points", "success");
    // }



    // else if (isCorrectListedWord(word) || isSpelledCorrectly(word)) {
    //     let pts = 2;
    //     let bonusMsg = "";
    //     if (game.mode !== "easy" && word.length > 6) {
    //         const bonus = word.length - 6;
    //         pts += bonus;
    //         bonusMsg = ` (+${bonus} length bonus)`;
    //     }
    //     game.score += pts;
    //     addChip(word, "correct", pts);
    //     setMessage(`Correct word. +${pts} points${bonusMsg}`, "success");
    // }

    else if (isCorrectListedWord(word) || isSpelledCorrectly(word)) {
        let pts = 2;
        let bonusMsg = "";

        if (game.mode !== "easy" && word.length > 6) {
            const bonus = word.length - 6;
            pts += bonus;
            bonusMsg = ` (+${bonus} length bonus)`;
        }

        game.score += pts;
        addChip(word, "correct", pts);
        setMessage(`Correct word. +${pts} points${bonusMsg}`, "success");
    }



    else {
        addChip(word, "zero", 0);
        setMessage("Wrong spelling or unknown word. +0 points", "error");
    }

    wordInput.value = "";
    updateStats();

    // if (game.matched.size === game.systemWords.length) {
    //     endGame("all_matched");
    //     setMessage(`Fantastic! ${game.player} matched every hidden word!`, "success");
    // }


    if (game.matched.size === game.systemWords.length) {
        endGame("all_matched");
        setMessage(`Fantastic! ${game.player} matched every hidden word!`, "success");
        return;
    }

    if (game.usedWords.size >= game.systemWords.length) {
        endGame("word_limit");
        setMessage(`Round finished. ${game.player} entered ${game.systemWords.length} words and earned ${game.score} points.`, "success");
        return;
    }




    wordInput.value = "";
    wordInput.focus();
}

function revealAll() {
    if (!game.root) {
        setMessage("Start the game first.", "error");
        return;
    }

    endGame("revealed");
}

function renderHistory() {
    const history = getHistory();
    leaderboardBody.innerHTML = "";

    if (!history.length) {
        leaderboardBody.innerHTML = `<tr><td colspan="5">No round scores yet.</td></tr>`;
        return;
    }

    history.forEach((item, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
 <td>${index + 1}</td>
 <td>${item.name}</td>
 <td>${item.score}</td>
 <td>${item.mode}</td>
 <td>${item.root}</td>
 `;

        leaderboardBody.appendChild(tr);
    });
}

function clearAllScores() {
    localStorage.removeItem(HISTORY_KEY);

    const players = getPlayers().map(p => ({
        ...p,
        total: 0,
        games: 0
    }));

    savePlayers(players);
    renderPlayers();
    renderHistory();

    setMessage("All cumulative scores and round history cleared.", "info");
}

addPlayerBtn.addEventListener("click", addPlayer);
removePlayerBtn.addEventListener("click", removePlayer);
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", submitWord);
revealBtn.addEventListener("click", revealAll);
clearLeaderboardBtn.addEventListener("click", clearAllScores);

playerSelect.addEventListener("change", updatePlayerTotal);

wordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") submitWord();
});

newPlayerInput.addEventListener("keydown", e => {
    if (e.key === "Enter") addPlayer();
});

modeSelect.addEventListener("change", () => {
    if (!game.started) {
        rootWordEl.textContent = "PRESS START";
        systemBoard.innerHTML = "";
        userWords.innerHTML = "";
        scoreEl.textContent = "0";
        timerEl.textContent = "0";
        matchCountEl.textContent = "0";
        timeBar.style.width = "100%";
        setMessage("Mode changed. Press Start Game.", "info");
    }
});

renderPlayers();
renderHistory();
updateStats();
