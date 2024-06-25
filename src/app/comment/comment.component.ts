import { Component } from '@angular/core';
import { CommentService } from './service/comment.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'hotelinvapp-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) { }

  $comments = this.commentService.getComments();
  $commentsv2 = this.activatedRoute.data.pipe(
    map((data) => data['comments'])
  );

}
