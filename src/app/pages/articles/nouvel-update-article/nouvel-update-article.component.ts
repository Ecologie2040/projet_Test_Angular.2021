
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ArticleService } from './../../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateArticle } from './../nouvel-article/article-interface';
import { Component, OnInit } from '@angular/core';
import {KnobModule} from 'primeng/knob';
@Component({
  selector: 'app-nouvel-update-article',
  templateUrl: './nouvel-update-article.component.html',
  styleUrls: ['./nouvel-update-article.component.scss']
})
export class NouvelUpdateArticleComponent implements OnInit {
  
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

    this.createArticle = this.articleService.findArticleById(this._routeParams.snapshot.params.idArticle);
    console.log('OlekoTestModifText',this.createArticle);
  }

  

  updateArticle(): void {
    const createArticle: CreateArticle = {
      
      id: this._routeParams.snapshot.params.idArticle,
      code: this.f.code.value,
      description: this.f.description.value,
      prixHt: this.f.prixHt.value,
      tauxTva: this.f.tauxTva.value,
      prixTtc: this.f.prixTtc.value,
    }
    

    let data = JSON.parse(localStorage.getItem('listArticles'))
    data = data.map((article: CreateArticle) => {
      if(article.id == this._routeParams.snapshot.params.idArticle) {
        return createArticle
      }
      return article
    })
    localStorage.setItem('listArticles', JSON.stringify(data))
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
