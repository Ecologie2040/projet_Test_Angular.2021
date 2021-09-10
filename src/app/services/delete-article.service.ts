import { Router } from '@angular/router';
import { CreateArticle } from './../pages/articles/nouvel-article/article-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteArticleService {

  localstorege: Storage

  constructor(private Router: Router) { }

  supprimerArticle(key: number): boolean {
    const storage = JSON.parse(this.localstorege.getItem('listArticles'))
    if(storage){
      const newList = storage.filter((article: CreateArticle) => article.id != key)
     this.localstorege.setItem('listArticles', JSON.stringify(newList))
     this.Router.navigate(['infoSupComponent'])
      return true;
    }

}
}




