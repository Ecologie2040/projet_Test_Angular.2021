import { ArticleService } from './../../../services/article.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
//import {RouteParams} from 'angular2/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CreateArticle, ArticleInterface } from './article-interface';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {

  createArticle = new CreateArticle();


  
  private activatedRoute: ActivatedRoute;
  myForm1 : FormGroup;

  constructor(private _routeParams: ActivatedRoute, // ROUTEPARAMS :ID
              private articleService: ArticleService,
              private formBuilder: FormBuilder,
              private route: Router
  ) { this.myForm1 = this.formBuilder.group({
    code: formBuilder.control('', [Validators.required]),
    prixHt: formBuilder.control('', [Validators.required]),
    prixTtc: formBuilder.control('', [Validators.required]),
    tauxTva: formBuilder.control('', [Validators.required]),
  },)
 }

 public control(code: string) {
  return this.myForm1.get(code)
}

  ngOnInit(): void {
    this.initForm();

    /*
  const idArticle = this.activatedRoute.snapshot.params.idArticle;
    if (idArticle) {
      this.articleService.findArticleByis(idArticle)
    }
      */
   //const idArticle = this.activatedRoute.params.idArticle;
   
    // console.log(this._routeParams.snapshot.params.idArticle);

  /*  this.createArticle = this.articleService.findArticleById(this._routeParams.snapshot.params.idArticle);
    console.log('OlekoTestModifText',this.createArticle); */

    
  }


  
  onSubmit(): void {
    const createArticle: CreateArticle = {
      
      code: this.f.code.value,
      description: this.f.description.value,
      prixHt: this.f.prixHt.value,
      tauxTva: this.f.tauxTva.value,
      prixTtc: this.f.prixTtc.value,
    }
     this.articleService.createArticle(createArticle)
  }

  

  

  get f() {

    return this.myForm1.controls
  }

   numericNumberReg= '^-?[0-9]\\d*(d{1,2})?$';

  private initForm(): void {
    this.myForm1 = this.formBuilder.group({
      
      code: ['', Validators.required],
      description: ['', Validators.required],
      prixHt: ['', [Validators.required,Validators.pattern(this.numericNumberReg)]],
      tauxTva: ['', [Validators.required,Validators.pattern(this.numericNumberReg)]],
      prixTtc: ['', [Validators.required,Validators.pattern(this.numericNumberReg)]]


    })

  }




  cancel(): void {
    this.route.navigate(['articles']);
  }

  saveClick(): void {
    console.log(this.myForm1.value);
    
  }
  
}
