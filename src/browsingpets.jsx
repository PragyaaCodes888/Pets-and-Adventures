import React from 'react'
import PetCard from './PetCard'

const BrowsingPets = () => {
  const pets = [
    { slug: "pet1", name: "Buddy", type: "Dog", breed: "Golden Retriever" },
    { slug: "pet2", name: "Lucy", type: "Cat", breed: "Persian" },
    { slug: "pet3", name: "Max", type: "Dog", breed: "German Shepherd" },
    { slug: "pet4", name: "Coco", type: "Parrot", breed: "African Grey" },
    { slug: "pet5", name: "Charlie", type: "Dog", breed: "Labrador Retriever" },
    { slug: "pet6", name: "Snow", type: "Rabbit", breed: "Holland Lop" },
    { slug: "pet7", name: "Daisy", type: "Fish", breed: "Betta" },
    { slug: "pet8", name: "Rocky", type: "Turtle", breed: "Golden Retriever" },
    { slug: "pet9", name: "Molly", type: "Hamster", breed: "Syrian" },
    { slug: "pet10", name: "Cooper", type: "Guinea Pig", breed: "Abyssinian" }
  ]

  return (
    <div className="browsing">
      {pets.map((pet) => (
        <PetCard
          key={pet.slug}
          PetName={pet.name}
          PetType={pet.type}
          breed={pet.breed}
          slug={pet.slug}
        />
      ))}
    </div>
  )
}

export default BrowsingPets