import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }

}
interface Post {
  body: string;
  id: number;
  userId: number;
  title: string;
}