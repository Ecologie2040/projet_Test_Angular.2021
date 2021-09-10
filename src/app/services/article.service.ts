import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CreateArticle, ConstUser } from './../pages/articles/nouvel-article/article-interface';
import { Injectable, Input } from '@angular/core';
import { CreateArticleUser } from '../pages/articles/nouvel-article/article-interface';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  
  @Input('createArticle')
  modifArticle : CreateArticle;
  
  
  localstorege: Storage
  
  
  constructor(
    private _routeParams: ActivatedRoute,
    private Router: Router,
  )   { this.localstorege = window.localStorage }


  get(key: string): any{
    if (this.islocalstorege){
      return JSON.parse(this.localstorege.getItem(key));
    }
    return null;
  }

  set(key: string, value: any): boolean {
    if(this.islocalstorege) {
      this.localstorege.setItem(key, JSON.stringify(value));

      return true;
    }
    return false;
  }

  supprimerArticle(key: number): boolean {
    const storage = JSON.parse(this.localstorege.getItem('listArticles'))
    if(storage){
      const newList = storage.filter((article: CreateArticle) => article.id != key)
     this.localstorege.setItem('listArticles', JSON.stringify(newList))
     this.Router.navigate(['infoSupComponent'])
      return true;
    }


    

    return false
  }

  get islocalstorege() : boolean {
    return !!this.localstorege
  }




  

  ngOnInit(): void {
    

    /*
  const idArticle = this.activatedRoute.snapshot.params.idArticle;
    if (idArticle) {
      this.articleService.findArticleByis(idArticle)
    }
      */
   //const idArticle = this.activatedRoute.params.idArticle;
   
    // console.log(this._routeParams.snapshot.params.idArticle);
     
  }

  //  public article$:BehaviorSubject<CreateArticle[]> = new BehaviorSubject([]);

  








  findArticleByis(): void {
    const idArticle = this.modifArticle.id  //verifier modification
  }

  getArticles(): CreateArticle[] {
    const articles = JSON.parse(localStorage.getItem('listArticles')) as CreateArticle[];
    return articles
 
  }

   // articles= CreateArticle[];
    article: CreateArticle; //CreateArticle
    

    
  findArticleById(id?: number): CreateArticle {
    this.article = this.getArticles().find(p => p.id == id);
    return this.article
  }






storege():void{
  localStorage.getItem('listArticles')
}
  
    
  
  
 
  supr=[{}]


  

  


  updateArticle(p: CreateArticle){
    
    console.log('test', p);

  }

  id2(id: CreateArticle): number{
    
  return id.id

  }





  createArticle(newArticle: CreateArticleUser): void {
    const listArticles: CreateArticle[] = JSON.parse(localStorage.getItem('listArticles')) || [];
    const articleIndex = listArticles?.findIndex(createArticle => createArticle.id === newArticle.id)
    console.log(listArticles);
    if (articleIndex === -1) {
      newArticle.id = listArticles?.length + 1;
      listArticles.push(newArticle as CreateArticle)

      const userArticle: CreateArticleUser = {
        id: newArticle.id
      };

      setTimeout(() => {

        this.createArticle(userArticle);
      }, 500);
    } else {
      alert('Vous avez bien enregistrer un nouvelle article')
    }

    localStorage.setItem('listArticles', JSON.stringify(listArticles))

  }
}