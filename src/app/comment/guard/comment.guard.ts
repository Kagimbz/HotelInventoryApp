import { ResolveFn } from '@angular/router';
import { Comments } from '../comment';
import { inject } from '@angular/core';
import { CommentService } from '../service/comment.service';

export const commentGuard: ResolveFn<Comments[]> = (route, state) => {
  const commentService = inject(CommentService);
  return commentService.getComments();
};
