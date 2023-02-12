import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/foods/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../../shared/models/tags/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL } from '../../shared/constants/urls';
import {
  FOODS_URL,
  FOODS_BY_TAG_URL,
  FOODS_BY_SEARCH_URL,
} from '../../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_BY_TAG_URL);
  }

  getAllFoodByName(searchItem: string) {
    return this.http.get<Food[]>(`${FOODS_BY_SEARCH_URL}${searchItem}`);
  }

  getAllFoodByTag(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.getAll()
      : this.http.get<Food[]>(`${FOODS_BY_TAG_URL}${tag}`);
  }

  getFoodById(id: string): Observable<Food> {
    return this.http.get<Food>(`${FOODS_BY_ID_URL}${id}`);
  }
}
