import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { PostService } from '../services/post.service';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  posts: any;
  isOpen: any;
  post: Post;
  picture: any | undefined;
  idpost: any | undefined;
  constructor(
    private data: DataService,
    private postService: PostService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.post = new Post();
  }

  openCommentText(index: any) {
    this.isOpen[index] = !this.isOpen[index];
  }

  ngOnInit(): void {
    this.resetForm();
    this.loadPosts();
    // this.data.currentuser.subscribe((user) => (this.user = user));
    this.newuser();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;

      this.isOpen = Array(this.posts.length).fill(false);
      console.log('hello i m home', this.posts);
    });
  }

  newuser() {
    this.data.changekickers(this.user.kickers);
  }

  OnSubmitPost(form: NgForm) {
    const myForm = new FormData();
    myForm.append('posterId', this.user._id);
    myForm.append('message', form.value.message);
    myForm.append('picture', this.picture, this.picture.name);

    this.postService.addPost(myForm).subscribe((data: any) => {
      if (data.success == true) {
        this.resetForm(form);
        this.toastr.success('Awesome!', data.msg + ' Verify Your Account', {
          timeOut: 4000,
        });
        this.loadPosts();
      } else {
        this.toastr.error('Error -', data.msg);
      }
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.post = {
      posterId: '',
      message: '',
      picture: '',
      video: '',
      likers: ['string'],
      comments: [{}],
    };
  }
  clicklike(post: Post) {
    let obj = { id: this.user._id };
    console.log(obj);
    this.postService.editPost(post, obj);
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
      this.isOpen = Array(this.posts.length).fill(false);
      // console.log('hello i m home', this.posts);
    });
  }

  onPictureSelected(event: any) {
    return (this.picture = <File>event.target.files[0]);
  }
  linkImg(fileName: string) {
    // base_URL returns localhost:3000 or the production URL
    return `http://localhost:3001/${fileName}`;
  }
}
