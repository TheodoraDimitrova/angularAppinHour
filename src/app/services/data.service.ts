import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(public http: Http) {
    //http is service need to be injected
    console.log("Data service connected..");
  }

  getPosts() {
    return this.http   //this is returning observable so we need map to json
      .get("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        map((res: Response) => res.json())
    ) 
  }
}
