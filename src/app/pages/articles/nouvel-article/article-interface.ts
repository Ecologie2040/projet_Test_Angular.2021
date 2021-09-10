export interface ArticleInterface {
}


export class ConstUser {
    id?: string;
    code: string;
   

}

export class CreateArticleUser {
    id?: number;
    code?: string;
    description?: string;
    prixHt?: string;
    tauxTva?: string;
    prixTtc?: string;

}

export class CreateArticle {
    id?: number;
    code: string;
    description: string;
    prixHt: string;
    tauxTva: string;
    prixTtc: string;

}


/*export class AfficheArticle {
    id?: number;
    code?: string;
    description?: string;
    prixHt?: string;
    tauxTva?: string;
    prixTtc?: string;

}*/