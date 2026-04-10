import React from "react"
import { useParams } from "react-router-dom"

const Info = () => {
  const { slug } = useParams();

  const Description = [
    {
      slug: "pet1",
      describe: `Buddy is a 10 month old Golden Retriever who settled in quickly with his playful nature. Always ready for a walk or a game, he stays active throughout the day. He mixes well with kids and other pets without issues. Training has been smooth as he responds well to commands. A healthy and cheerful companion overall. You can expect him to stay warm, social, and easygoing, traits that define Golden Retrievers.`
    },
    {
      slug: "pet2",
      describe: `Calm and graceful, Lucy is a 1.5 year old Persian cat. She enjoys quiet corners and a peaceful environment. Her routine mostly includes relaxing and staying close to her owner. Low energy makes her ideal for apartment living. Handling and care remain simple. Her quiet, laid-back personality reflects what Persian cats are loved for.`
    },
    {
      slug: "pet3",
      describe: `At 2.5 years old, Max has grown into a strong and alert German Shepherd. Sharp instincts make him naturally protective. He learns commands fast and stays attentive. Regular activity keeps him balanced and focused. A dependable companion for both home and security. That alert and protective mindset comes naturally to German Shepherds.`
    },
    {
      slug: "pet4",
      describe: `Coco, aged 3 years, is an African Grey parrot with impressive intelligence. He quickly picks up sounds and mimics words. Interaction keeps him engaged and active. He enjoys attention and mental stimulation. A long-term companion with personality. His sharp mind and ability to interact like this are typical of African Greys.`
    },
    {
      slug: "pet5",
      describe: `Full of energy, Charlie is a 1.8 year old Labrador Retriever. Playtime and outdoor activity keep him happy. He easily bonds with people around him. Training comes naturally due to his eager nature. Always cheerful and social. That constant friendliness and energy is exactly what Labradors are known for.`
    },
    {
      slug: "pet6",
      describe: `Snow is a 1 year old Holland Lop rabbit with a calm temperament. Handling her is easy due to her gentle nature. She prefers clean and quiet surroundings. Maintenance stays simple and manageable. A good fit for smaller homes. Her calm and gentle behavior fits perfectly with the nature of Holland Lop rabbits.`
    },
    {
      slug: "pet7",
      describe: `A 6 month old Betta fish, Daisy brings color and movement to any tank. Her presence adds a vibrant touch to the space. Care requirements remain minimal. She adapts easily to small aquariums. Watching her is relaxing. That striking look and presence are what make Betta fish stand out.`
    },
    {
      slug: "pet8",
      describe: `Rocky, now 2 years old, is a calm and steady turtle. He requires minimal effort in daily care. Interaction is limited but peaceful. Fits well in small setups. Ideal for a low-maintenance routine. A slow, peaceful routine like this is exactly how turtles tend to live.`
    },
    {
      slug: "pet9",
      describe: `Molly is an 8 month old Syrian hamster full of curiosity. She spends most of her time exploring and running. Small size makes her easy to manage. Watching her activity is engaging. Care stays simple and quick. This kind of curiosity and movement is common in Syrian hamsters.`
    },
    {
      slug: "pet10",
      describe: `At 1.2 years old, Cooper is a friendly Abyssinian guinea pig. He enjoys interaction and responds well to attention. Gentle handling makes him suitable for families. Daily care remains straightforward. A social and expressive companion. His social and interactive nature is what makes Abyssinian guinea pigs so loved.`
    }
  ];

  const pet = Description.find((p) => p.slug === slug);

  if (!pet) {
    return <h2>Pet not found</h2>;
  }

  return (
    <div className="pet-info">
      <h2>{pet.slug}</h2>
      <p>{pet.describe}</p>
    </div>
  )
}

export default Info;