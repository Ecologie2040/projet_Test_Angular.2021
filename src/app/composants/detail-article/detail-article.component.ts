import { Router } from '@angular/router';
import { ArticleService } from './../../services/article.service';
import { CreateArticle } from './../../pages/articles/nouvel-article/article-interface';
import { DeleteArticleService } from './../../services/delete-article.service';

import { Component, Input, OnInit } from '@angular/core';
import { CreateArticleUser } from 'src/app/pages/articles/nouvel-article/article-interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input('createArticle')
  createArticle : CreateArticle;

  supr = []

  listArticles: string[] = ['id','code','description','prixHt','tauxTva','prixTtc'];
  dataSource: MatTableDataSource<CreateArticle>;



  constructor(
    private Router: Router,
    private articleService: ArticleService,
    private deleteArticleService: DeleteArticleService,
  ) { }

  articles = [];

  
  ngOnInit(): void {
      this.getArticles();
      
    // this.listArticle = JSON.parse(localStorage.getItem('listArticles'));  
  }

  private getArticles(): void {
    this.articles = this.articleService.getArticles();
    this.dataSource = new MatTableDataSource(this.articles)
    //console.log('Article',this.articles);
  }

  interpretation = localStorage.getItem('listArticles');

  
  persist(key: string, value: any) {
    this.articleService.set(key, value)
  }
  
  
  supprimerArticle(key: string){
    this.articleService.supprimerArticle(this.createArticle.id)
    
    //localStorage.removeItem('listArticles')
    
   // this.createArticle.id;
    
   
  }

  modifierArticle(): void{
   // this.Router.navigate(['nouvelarticle', JSON.parse(localStorage.getItem('listArticles',)) as CreateArticle['id']]);
    this.Router.navigate(['nouvelarticle',  this.createArticle.id]);
    console.log('idDeLarticle',this.createArticle.id); 
    console.log('TEST',this.createArticle.id);
  }
}
