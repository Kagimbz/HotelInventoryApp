import { Component } from '@angular/core';
import { CommentService } from './service/comment.service';

@Component({
  selector: 'hotelinvapp-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {

  constructor(private commentService: CommentService) { }

  $comments = this.commentService.getComments();

}
