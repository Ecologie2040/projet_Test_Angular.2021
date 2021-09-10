import { MatTableDataSource } from '@angular/material/table';
import { CreateArticle } from './../nouvel-article/article-interface';
import { ArticleService } from './../../../services/article.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {

   // listArticle: Array<CreateArticle> = [];

   createArticles: CreateArticle[] =  this.articleService.getArticles();

  listArticle: string[] = ['id','code','description','prixHt','tauxTva','prixTtc'];
  dataSource: MatTableDataSource<CreateArticle>;


  constructor(
    private Router: Router,
    private articleService: ArticleService,
    
  ) { }


  
  articles = [];
  @Input() art! : ArticleService

  ngOnInit(): void {
  //  this.articleService.getArticles().subscribe((articles) =>{ this.articles = articles});
  // this.articles = JSON.parse(localStorage.getItem('listArticles'));


   this.getArticles();
   
  }

  tracByArticle(index: number, createArticles: CreateArticle): number {
    return createArticles.id;
    
    
  }

  private getArticles(): void {
    this.articles = this.articleService.getArticles();
    this.dataSource = new MatTableDataSource(this.articles)
    console.log(this.articles);
  }

  nouvelArticle(): void {
    this.Router.navigate(['nouvelarticle'])
  }

}
