var cards = [
  {
    name: "The Paladin",
    alignment: "Lawful good",
    ability: "Strength",
    description: "symbolizes standing strong in the face of adversity. The Paladin does not back down under any circumstances. This card usually indicates the need to stay the course or do what one knows is right, even if it takes a heavy toll. If the card is misaligned, such a course might be foolhardy",
    image: "paladin.jpg"
  },
  {
    name: "The Keep",
    alignment: "Neutral good",
    ability: "Strength",
    description: "is a symbol of quiet strength, one that can move when necessary, yet stand firm through the greatest hardship. Those represented by The Keep are not shaken by any force. If The Keep appears misaligned, it can mean giving way to temptation or falling in the face of greater strength.",
    image: "keep.jpg"
  },
  {
    name: "The Big Sky",
    alignment: "Chaotic good",
    ability: "Strength",
    description: "shows an epic moment as the slaves of a nation are freed. The slaves’ freedom specifies momentous and powerful change, as old shackles are cast off in the light of day. If misaligned, those castoff shackles might be replaced with worse ones.",
    image: "big-sky.jpg"
  },
  {
    name: "The Forge",
    alignment: "Lawful neutral",
    ability: "Strength",
    description: "evokes strength through great diversity. The blacksmith represents those who can survive the mephits’ trial by fire, but The Forge’s fire is so strong it burns many to cinders instead. This card often represents a dangerous event that needs many sources of strength to overcome.",
    image: "forge.jpg"
  },
  {
    name: "The Bear",
    alignment: "Neutral",
    ability: "Strength",
    description: "is pure strength. People often make the mistake of thinking The Bear can be tamed or trained. When someone believes he has The Bear under control, that person eventually learns the error of his ways. Brute force might be required here, but the consequences of its use might be severe.",
    image: "bear.jpg"
  },
  {
    name: "The Uprising",
    alignment: "Chaotic neutral",
    ability: "Strength",
    description: "represents being caught in the clutches of something much more powerful than you. It is an overwhelming strength that often crushes what comes in contact with it. The crown held high signifies an overthrowing of a leader of some sort. In the spread, it indicates a force much stronger than the person receiving the reading.",
    image: "uprising.jpg"
  },
  {
    name: "The Fiend",
    alignment: "Lawful evil",
    ability: "Strength",
    description: "depicts a devil swallowing innocents. It can indicate the deaths of many in a great calamity or, if misaligned, the salvation from the same calamity. The Fiend can also indicate that some sort of dark and intelligent creature is in the area, endangering the populace.",
    image: "fiend.jpg"
  },
  {
    name: "The Beating",
    alignment: "Neutral evil",
    ability: "Strength",
    description: "signifies coming under attack from all sides, but it can also indicate the dissolution of the self—mentally. Whether the strength is of the flesh or the mind, it dissolves under the relentless attack. Misaligned, this card suggests that during the assault, undiscovered strength is found.",
    image: "beating.jpg"
  },
  {
    name: "The Cyclone",
    alignment: "Chaotic evil",
    ability: "Strength",
    description: "is a force that tears through whatever it meets. This disaster does not come in the course of natural order but is one that comes from the plots of intelligent beings. The Cyclone signifies war, arson, or other plans that destroy everything they touch. Misaligned, this card can indicate renewal after a blustery trial.",
    image: "cyclone.jpg"
  },
  {
    name: "The Dance",
    alignment: "Lawful good",
    ability: "Dexterity",
    description: "is a rich and delicate framework that, like the universe itself, requires everyone within it to abide by its rules, lest the entire construct collapse. It advises staying in perfect step, knowing your place in the greater good. Those who step out of the pattern do so at their peril. Misaligned, that pattern might be hypnotic, but not to the good of all.",
    image: "dance.jpg"
  },
  {
    name: "The Cricket",
    alignment: "Neutral good",
    ability: "Dexterity",
    description: "is a grig, a creature whose mind is as quick as its body. It represents speed and quick passage. Although The Cricket is commonly associated with travel, the peach it sits by represents treasure at the end. If misaligned, the journey will go poorly, and the treasure will be one that is lost rather than found.",
    image: "cricket.jpg"
  },
  {
    name: "The Juggler",
    alignment: "Chaotic good",
    ability: "Dexterity",
    description: "represents fate, the gods, or those who play with the lives and destinies of others. If this titanic Juggler can keep up his rhythm, he will achieve his goals. But in a misaligned placement, he falters, and tragedy and failure are assured for those whose lives he meddled in.",
    image: "juggler.jpg"
  },
  {
    name: "The Locksmith",
    alignment: "Lawful neutral",
    ability: "Dexterity",
    description: "presents the subject with the keys she needs to unlock her destiny. He grants the tools to access a new location, clue, or treasure. He does not grant insight into how or where to use the tools granted. This card often represents a strange, ancient, or magical object.",
    image: "locksmith.jpg"
  },
  {
    name: "The Peacock",
    alignment: "Neutral",
    ability: "Dexterity",
    description: "is a creature of astonishing beauty, but it is a beauty that can only be retained if frozen like a cockatrice’s statues. Smarter people accept the passage of time and dance out of The Peacock’s way. Its appearance always signifies a sudden personal shift in attitude or societal change.",
    image: "peacock.jpg"
  },
  {
    name: "The Rabbit Prince",
    alignment: "Chaotic neutral",
    ability: "Dexterity",
    description: "is a quirky fellow who represents the vagaries of hand-to-hand combat. The Prince is battle personified and nothing if not capricious. As his broken sword symbolizes, any combatant can fall in battle, no matter how brave or skilled. This card sometimes stands for younger members of royalty or other powerful households.",
    image: "rabbit-prince.jpg"
  },
  {
    name: "The Avalanche",
    alignment: "Lawful evil",
    ability: "Dexterity",
    description: "is disaster. It is an unthinking, unreasoning thing that overruns all who get in its way. It can represent physical disaster or the disaster that comes from a panicked crowd or other unthinking group or entity. If misaligned, the calamity is likely to be averted, though not without consequence.",
    image: "avalanche.jpg"
  },
  {
    name: "The Crows",
    alignment: "Neutral evil",
    ability: "Dexterity",
    description: "are a dangerous bunch who indicate violent taking of that which is loved. When The Crows appear, murder, theft, or other shocking loss occurs. If misaligned, such acts can be averted or the thievery is a just one.",
    image: "crows.jpg"
  },
  {
    name: "The Demon's Lantern",
    alignment: "Chaotic evil",
    ability: "Dexterity",
    description: "is the card of traps and tricks, sleight of hand and sleight of mind. These will-o’-wisps and the man who sought their light represent an impossible or intractable situation. Misaligned, it represents an opportunity or a guide arriving at a perfect moment to show the way.",
    image: "demons-lantern.jpg"
  },
  {
    name: "The Trumpet",
    alignment: "Lawful good",
    ability: "Constitution",
    description: "is a declaration of power. This archon is an aggressive force who wades into the direst situations without hesitation in the cause of right. Misaligned, it suggests the motives aren’t noble, bringing injury and crumbling strength. It is a card that grants all or nothing at all.",
    image: "trumpet.jpg"
  },
  {
    name: "The Survivor",
    alignment: "Neutral good",
    ability: "Constitution",
    description: "represents a person who has been through an ordeal of some kind. Surrounded by his fallen comrades, the man represents someone or something thought lost forever, but found once more. It can also represent rebirth. Misaligned, The Survivor can evoke terrible news or a profound loss.",
    image: "survivor.jpg"
  },
  {
    name: "The Desert",
    alignment: "Chaotic good",
    ability: "Constitution",
    description: "is an environment so bleak that none can survive it without aid. For those who find that aid, the journey across the wastes can lead to great things. Misaligned, it implies the subject cannot rely on the help of others and will assuredly be lost. The sphinx on this card can refer to a mystic or doctor bringing salvation in times of plague or illness.",
    image: "desert.jpg"
  },
  {
    name: "The Brass Dwarf",
    alignment: "Lawful neutral",
    ability: "Constitution",
    description: "shows an azer who represents invulnerability to a current danger. Although others might fall, he remains hale and strong. The Brass Dwarf can also mean a failure or dark fate for one, which in turn might save all others around him from a greater danger.",
    image: "brass-dwarf.jpg"
  },
  {
    name: "The Teamster",
    alignment: "Neutral",
    ability: "Constitution",
    description: "is a driving external force that keeps the subject going, no matter what. This force can be physical or mental, as a person who exhorts others to continue on when they have no more strength to give. The force can be for good or ill but cannot be ignored. The half-orc depicted is leading a life of constant toil, but for his own betterment.",
    image: "teamster.jpg"
  },
  {
    name: "The Mountain Man",
    alignment: "Chaotic neutral",
    ability: "Constitution",
    description: "signifies an encounter with a physical power outside of one’s control. The giant could personify an authority, an army, an earthquake, or even a desperately needed rainstorm in a parched land. Acceding to the force might be wise, but surviving it is paramount.",
    image: "mountain-man.jpg"
  },
  {
    name: "The Tangled Briar",
    alignment: "Lawful evil",
    ability: "Constitution",
    description: "is a card of ancient deeds. It indicates an object or person from long ago that will somehow have great influence on the situation. The object or person in question is one lost or murdered in some foul way. Misaligned, the thorny past brings not just pain, but hope for the future.",
    image: "tangled-briar.jpg"
  },
  {
    name: "The Sickness",
    alignment: "Neutral evil",
    ability: "Constitution",
    description: "represents plague, pestilence, famine, and disease. It can also indicate corruption of the soul or of a multitude of souls. If misaligned, The Sickness represents either great health or a chance to stop such a disaster.",
    image: "sickness.jpg"
  },
  {
    name: "The Waxworks",
    alignment: "Chaotic evil",
    ability: "Constitution",
    description: "is a place of helplessness and physical entropy. The mind might be willing, but the flesh is frozen in this place of horror. It is also the card of torture and imprisonment, signifying literal inability to move or a paralysis of a more prosaic kind. Misaligned, this card indicates an abundance of energy at a crucial moment that changes all.",
    image: "waxworks.jpg"
  },
  {
    name: "The Hidden Truth",
    alignment: "Lawful good",
    ability: "Intelligence",
    description: "symbolizes the ability to see past the obvious and the banal to a greater truth within. Sometimes this discovery is an esoteric one, sometimes it is a literal find, such as an item revealed within a room. Regardless, it is a card with the power to reveal secrets. Misaligned, it can mean a secret being revealed to the subject’s detriment.",
    image: "hidden-truth.jpg"
  },
  {
    name: "The Wanderer",
    alignment: "Neutral good",
    ability: "Intelligence",
    description: "is a collector. This centaur appreciates that which others regard as junk or trash. The Wanderer appears to those clever enough to find the true worth in something others ignore or treat as worthless. Misaligned, The Wanderer signifies a loss of values, or the inability to see what is truly valuable in a person or situation.",
    image: "wanderer.jpg"
  },
  {
    name: "The Joke",
    alignment: "Chaotic good",
    ability: "Intelligence",
    description: "hows a terror that must be overcome—but not by physical means. This monster can only be defeated by trickery or artifice. This card can represent the value of humor in finding the way past a difficult person or task. When misaligned, it often signals that the joke will be on you.",
    image: "joke.jpg"
  },
  {
    name: "The Inquisitor",
    alignment: "Lawful neutral",
    ability: "Intelligence",
    description: "accepts nothing save the truth. He represents immutable reality, that which cannot be fooled or swayed in any way. To attempt to go against this unchangeable object, person, or idea is to court disaster.",
    image: "inquisitor.jpg"
  },
  {
    name: "The Foreign Trader",
    alignment: "Neutral",
    ability: "Intelligence",
    description: "is the card of spies and peddlers alike. Any who trade in information are subject to this card’s influence. A bargain made under this card’s auspice always concludes true, but the ramifications of the pact might be shocking for those who do not understand its implications.",
    image: "foreign-trader.jpg"
  },
  {
    name: "The Vision",
    alignment: "Chaotic neutral",
    ability: "Intelligence",
    description: "represents arcane knowledge. Such knowledge can take the form of madness or cryptic words. This card often means an encounter with a crazy person, but it can also signify a brush with genius.",
    image: "vision.jpg"
  },
  {
    name: "The Rakshasa",
    alignment: "Lawful evil",
    ability: "Intelligence",
    description: "is the card of dominance and mind control. The creature sitting serenely upon the back of the slave indicates an exterior force imposing itself upon another being’s mind. On occasion, the slavery is literal, but more often it is mental enslavement to a force or idea. Misaligned, that enslavement can be cast off in the face of new information.",
    image: "rakshasa.jpg"
  },
  {
    name: "The Idiot",
    alignment: "Neutral evil",
    ability: "Intelligence",
    description: "is a card of grave foolishness and greed. It can mean bribery, blackmail, or naivety so grand it can see no evil. The goblins have captured a foolhardy man, representing the knowledge that loss of dignity can precede loss of life. Misaligned, this card might indicate feigning of idiocy to disguise one’s gifts.",
    image: "idiot.jpg"
  },
  {
    name: "The Snakebite",
    alignment: "Chaotic evil",
    ability: "Intelligence",
    description: "is a vile, poisoned weapon. Poison takes many forms—not all of them physical. The poison on the assassin’s blade represents the death of ideas and freedom, as well as the ability to turn friends against each other or poison the minds of the virtuous. Misaligned, this card can mean a mental leap, a new friendship, or a discovery.",
    image: "snakebite.jpg"
  },
  {
    name: "The Winged Serpent",
    alignment: "Lawful good",
    ability: "Wisdom",
    description: "is a powerful being. Knowledge and prudence are separate keeps bridged by understanding. The couatl represents this bridge, knowing whether now is the time to strike. Misaligned, this card means either not seizing a moment or doing so ill-advisedly.",
    image: "winged-serpent.jpg"
  },
  {
    name: "The Midwife",
    alignment: "Neutral good",
    ability: "Wisdom",
    description: "is a conduit to creation, although she does not create on her own. This halfling is a key that lets new life or information into the world. Her heart can see the good in even the worst situation. She can see the import of any new arrival, but if the card is misaligned, the new arrival will likely not inspire much joy.",
    image: "midwife.jpg"
  },
  {
    name: "The Publican",
    alignment: "Chaotic good",
    ability: "Wisdom",
    description: "represents fellowship and camaraderie, and a place of refuge for those in need. Most would find the cyclops inconsequential, but he has insights relevant to the reading or a quest. Misaligned, The Publican represents refuge unfound or false information given at a crucial moment.",
    image: "publican.jpg"
  },
  {
    name: "The Queen Mother",
    alignment: "Lawful neutral",
    ability: "Wisdom",
    description: "is knowledge personified. The formian knows all but does not reveal anything to anyone who does not show her proper worship. She is fond of the powerless and the underclasses, for they serve her when the more powerful refuse. She represents the need to become part of a society, or to bow before those who know more than you.",
    image: "queen-mother.jpg"
  },
  {
    name: "The Owl",
    alignment: "Neutral",
    ability: "Wisdom",
    description: "represents the eternal wisdom of the natural order. It is the harsh realism that causes a pack of wolves to cull the weak in the herd. It is tragic for the culled deer, but through such actions the herd grows stronger. The needle The Owl holds binds life together, but just as easily can pick that life apart.",
    image: "owl.jpg"
  },
  {
    name: "The Carnival",
    alignment: "Chaotic neutral",
    ability: "Wisdom",
    description: "is the card of illusions and false dreams. This card can heighten the power of the arcane, but depending on such whimsical forces can be risky. For others, this card depicts imprudent plans or unrealistic ambitions.",
    image: "carnival.jpg"
  },
  {
    name: "The Eclipse",
    alignment: "Lawful evil",
    ability: "Wisdom",
    description: "represents self-doubt and loss of purpose. This card afflicts those with faith in the divine, as their talents can wane under this stress. It can also indicate a loss of way along a path. If misaligned, it can augur an unheralded ability coming to the fore or a concealed location revealed.",
    image: "eclipse.jpg"
  },
  {
    name: "The Mute Hag",
    alignment: "Neutral evil",
    ability: "Wisdom",
    description: "might be silent, but the eye she holds lets her see into the hearts of men. This hag invokes blood pacts and poisonous secrets, the kind that turn brother against brother and son against father. It is a card that performers loathe, as it leaves them stumbling over their words and songs. Misaligned, it indicates unshakable loyalty and lucidity of speech.",
    image: "mute-hag.jpg"
  },
  {
    name: "The Lost",
    alignment: "Chaotic evil",
    ability: "Wisdom",
    description: "is the card of emptiness and loss of identity. The bodak shown is forever mad, lost in a world of lunatics, insane asylums, and mass killers. For those under its influence, the world makes no sense. It evokes times where all is babble, as when meeting someone who speaks only in another tongue. Misaligned, it can indicate clarity of mind under duress.",
    image: "lost.jpg"
  },
  {
    name: "The Empty Throne",
    alignment: "Lawful good",
    ability: "Charisma",
    description: "has a sense of loss that is palpable. The ghost signifies that those who are gone will always be with us. They taught us important lessons, if only we choose to listen. This card can bring information from a far-off or ancient source. If misaligned, the ghosts of the past are restless, and might require effort to set at peace.",
    image: "empty-throne.jpg"
  },
  {
    name: "The Theater",
    alignment: "Neutral good",
    ability: "Charisma",
    description: "is the card of true prophecy. The puppets act out a scene, just as the prophet acts out a scene in which she has no part. The prophet is the audience and the prophecy is the show. She has no influence on what she sees, and its importance is often not recognized until too late. If misaligned, the prophecy is just for show.",
    image: "theater.jpg"
  },
  {
    name: "The Unicorn",
    alignment: "Chaotic good",
    ability: "Charisma",
    description: "is a card that generously offers that which the subject seeks, just as the charger in the picture offers up its fruit. When misaligned, the card means betrayal, poisoning, or a false friend.",
    image: "unicorn.jpg"
  },
  {
    name: "The Marriage",
    alignment: "Lawful neutral",
    ability: "Charisma",
    description: "can be a union of people, ideas, kingdoms, or other distinct things. The progeny of the salamander and water weird shows that a union might bring forth new power from both parties, or it might be a ruinous joining of that which should never have been united. Once wedded, the two cannot be parted. This is the card of permanent change.",
    image: "marriage.jpg"
  },
  {
    name: "The Twin",
    alignment: "Neutral",
    ability: "Charisma",
    description: "signals duality of purpose or identity. This doppelganger can also mean indecision, as a person or group wavers between very different options. It can also mean divided loyalties abound. The card makes a harrower wary, as it can also mean the entire spread has a hidden or reversed meaning.",
    image: "twin.jpg"
  },
  {
    name: "The Courtesan",
    alignment: "Chaotic neutral",
    ability: "Charisma",
    description: "is the card of political intrigue. Her mask embodies the social niceties that must be followed. If it slips, negotiations can take an unexpected turn. The card can also indicate a woman of power who shapes events. How she is treated decides the outcome of the situation.",
    image: "courtesan.jpg"
  },
  {
    name: "The Tyrant",
    alignment: "Lawful evil",
    ability: "Charisma",
    description: "indicates a ruler who is a blight upon those ruled. The dragon might indicate a monarch, overseer, or head of a household. Whoever this person is, he does harm to those over whom he holds sway, whether he realizes it or not. Misaligned, it might show a tyrant revealed or dethroned.",
    image: "tyrant.jpg"
  },
  {
    name: "The Betrayal",
    alignment: "Neutral evil",
    ability: "Charisma",
    description: "is selfishness incarnate. Envy twists the spirit and leads ultimately to devastation. It can also indicate a person whose loveliness hides an evil heart. Misaligned, the card means self-sacrifice or turning away from the material world and its temptations.",
    image: "betrayal.jpg"
  },
  {
    name: "The Liar",
    alignment: "Chaotic evil",
    ability: "Charisma",
    description: "is love at its most treacherous. This is not the love that moves mountains, this is the love that rips the heart in two and causes lovers to leap to their deaths. This lamia can mean obsession, unrequited passion, or doomed love. Misaligned, the card can indicate a new relationship beginning, although disguised as something much less beautiful.",
    image: "liar.jpg"
  }
]
