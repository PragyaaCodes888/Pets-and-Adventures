import PetCard from "../components/PetCard";

const BrowsingPets = () => {
  const pets = [
    {
      slug: "pet1",
      name: "Buddy",
      type: "Dog",
      breed: "Golden Retriever",
      img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=300",
    },
    {
      slug: "pet2",
      name: "Lucy",
      type: "Cat",
      breed: "Persian",
      img: "/explore/catluna.jpeg",
    },
    {
      slug: "pet3",
      name: "Max",
      type: "Dog",
      breed: "German Shepherd",
      img: "/explore/germanshepherd.jpeg ",
    },
    {
      slug: "pet4",
      name: "Coco",
      type: "Parrot",
      breed: "African Grey",
      img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww",
    },
    {
      slug: "pet5",
      name: "Charlie",
      type: "Dog",
      breed: "Labrador Retriever",
      img: "https://images.unsplash.com/photo-1537204696486-967f1b7198c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFicmFkb3IlMjByZXRyaWV2ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      slug: "pet6",
      name: "Snow",
      type: "Rabbit",
      breed: "Holland Lop",
      img: "/explore/rabbit.jpeg",
    },
    {
      slug: "pet7",
      name: "Daisy",
      type: "Fish",
      breed: "Betta",
      img: "/explore/fishnemo.jpeg  ",
    },
    {
      slug: "pet8",
      name: "Rocky",
      type: "Turtle",
      breed: "Box Turtle",
      img: "https://images.unsplash.com/photo-1717703479006-72855ee4088e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym94JTIwdHVydGxlfGVufDB8fDB8fHww",
    },
    {
      slug: "pet9",
      name: "Molly",
      type: "Hamster",
      breed: "Syrian",
      img: "/explore/hamster.jpeg",
    },
    {
      slug: "pet10",
      name: "Cooper",
      type: "Guinea Pig",
      breed: "Abyssinian",
      img: "https://images.unsplash.com/photo-1512483652399-7a1f99aa0dd3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3VpbmVhJTIwcGlnfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div
      className="browsing"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "10px",
      }}
    >
      {pets.map((pet) => (
        <PetCard
          key={pet.slug}
          PetName={pet.name}
          PetType={pet.type}
          breed={pet.breed}
          slug={pet.slug}
          img={pet.img}
        />
      ))}
    </div>
  );
};

export default BrowsingPets;
