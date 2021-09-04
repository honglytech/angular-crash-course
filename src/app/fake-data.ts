import { PetInterface } from "./pet-interface"

export const FakeData: PetInterface[] = [
    {
        id: 1, 
        breed: 'Shiba Inu',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. Shiba Inu was originally bred for hunting.',
        favorite: true
    },
    {
        id: 2, 
        breed: 'German Shepherds',
        url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-103196073.jpg?crop=0.801xw:1.00xh;0.201xw,0&resize=768:*',
        description: 'These trusted companions often work as police dogs and service dogs because they are fiercely loyal to their main caretakers.',
        favorite: false
    },
    {
        id: 3, 
        breed: 'Golden Retrievers',
        url: 'https://www.marvelousdogs.com/wp-content/uploads/2021/05/Golden-Retriever-Price-Social.jpg',
        description: 'This intelligent, friendly breed is basically the movie star of the group with starring roles on Full House, Air Bud, and Homeward Bound.',
        favorite: false
    }
]