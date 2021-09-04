import { Injectable } from '@angular/core';
import { FakeData } from '../fake-data';
import { PetInterface } from '../pet-interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url = "https://613074015fc50700175f18d2.mockapi.io/pets"


  constructor(private http:HttpClient) { }

  getPets(): Observable<PetInterface[]> {
    // const pets = of(FakeData)
    // return pets;

    return this.http.get<PetInterface[]>(this.url)
  }

  updatePetFavorite(pet: PetInterface): Observable<PetInterface> {
    const updateUrl = `${this.url}/${pet.id}`;
    return this.http.put<PetInterface>(updateUrl, pet, httpOptions);
  }

  deletePet(pet: PetInterface): Observable<PetInterface> { 
    const deleteUrl = `${this.url}/${pet.id}`;
    return this.http.delete<PetInterface>(deleteUrl);
  }

  addPet(pet: PetInterface): Observable<PetInterface> {
    return this.http.post<PetInterface>(this.url, pet, httpOptions);
  }
}
