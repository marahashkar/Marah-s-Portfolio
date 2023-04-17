import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

constructor(private http:HttpClient) {
}
getProjectsList(){
 return this.http.get('/assets/projectsList.json');
}
}
