import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../login/api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'article',
  template: `
        <div style="background-color:white;">
            <div *ngIf="title == 'gains-en-force-et-en-hypertrophie-musculaire-sommes-nous-tous-egaux'">
                <app-sous-article1></app-sous-article1>
            </div>
            <div *ngIf="title == 'course-a-pied-et-hydratation-les-astuces-a-ne-pas-manquer'">
                <app-sous-article2></app-sous-article2>
            </div>
            <div *ngIf="title == 'quelles-sont-les-causes-du-butt-wink-au-squat'">
                <app-sous-article3></app-sous-article3>
            </div>
            <div *ngIf="title == 'comment-travailler-sur-la-douleur-via-lhypnose-chez-le-sportif'">
                <app-sous-article4></app-sous-article4>
            </div>
            <div *ngIf="title == 'comment-lespacement-des-pieds-affecte-t-il-votre-squat'">
                <app-sous-article5></app-sous-article5>
            </div>
            <div *ngIf="title == 'la-musculation-en-haute-intensite-faible-volume-une-approche-rapide-et-efficace'">
                <app-sous-article6></app-sous-article6>
            </div>
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2><em>Commentaires</em> des lecteurs</h2>
                        <img src="assets/images/line-dec.png" alt="">
                    </div>
                </div>
            </div>
            <div style="text-align: center;" *ngIf="!authService.isAuthenticated" class="row">
                        <h2><em>Connectez-vous pour commenter cet article.</em></h2>
            </div>
        </div>
            <mat-card *ngIf="authService.isAuthenticated" style="background-color: gainsboro;">
                <mat-card-header>
                    <mat-card-title>
                        <h4>Publier un commentaire</h4>
                    </mat-card-title>
                </mat-card-header>
                <mat-card-content>
                    <form>
                        <mat-form-field style="width: 100%">
                            <mat-label>Exprimez-vous</mat-label>
                            <textarea  [(ngModel)]="postCommentaire" name="description" matInput placeholder="Il n'y a pas de victoires sans échecs..."></textarea>
                        </mat-form-field>
                        Note :<button style="margin-left:20px; width:200px;"><mat-select [(ngModel)]="note" name="note" placeholder="Noter l'article">
                                <mat-option value="Inutile">Inutile</mat-option>
                                <mat-option value="Peu utile">Peu utile</mat-option>
                                <mat-option value="Informatif">Informatif</mat-option>
                                <mat-option value="Nécessaire">Nécessaire</mat-option>
                                <mat-option value="Excellent">Excellent</mat-option>
                            </mat-select></button> <br>
                        <button style="margin-top:20px;" (click)="post()" mat-raised-button color="primary">Publier</button>
                    </form>
                </mat-card-content>
            </mat-card>


            <video onloadedmetadata="this.muted = true" autoplay muted loop id="bg-video" id="videoCommentaires">
                <source src="../assets/images/FondCommentairesCrossfit.mp4" type="video/mp4" />
            </video>
            <!-- <div class="video-overlay header-text">
                <div class="caption"> -->
            <div>
                <mat-card-content>
                    <div *ngFor="let comment of apiService.comments">
                        <mat-card style="border:1px solid black; box-shadow:10px 5px 5px black; margin: auto; margin-top:5px; max-width:70%;">
                            <mat-card-header>
                                <mat-card-title>
                                    <p style="font-weight: bold;">{{comment.name}} {{comment.prenom}} <span *ngIf="comment.msg" style="font-size:8px;"> a commenté :</span></p>
                                    <div style="position:relative; bottom:42px; left:600px; "><div *ngIf="comment.note != 0">{{comment.note}}</div></div>
                                </mat-card-title>
                            </mat-card-header>
                            <mat-card-content *ngIf="comment.msg && comment.note != 0" style="border-radius: 4px; border:1px solid gray; background-color:gainsboro; margin: 1%; padding:30px; margin-top:-25px;">
                                {{comment.msg}}
                            </mat-card-content>
                            <mat-card-content *ngIf="comment.msg && comment.note == 0" style="border-radius: 4px; border:1px solid gray; background-color:gainsboro; margin: 1%; padding:30px;">
                                {{comment.msg}}
                            </mat-card-content>
                        </mat-card>
                    </div>
                </mat-card-content>
            </div>
  `,
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    constructor(public authService: AuthService, public apiService: ApiService, public route: ActivatedRoute, private _snackBar: MatSnackBar) { }

    postCommentaire = ''
    title = "";
    note = "0";
    profile: any

    ngOnInit() {
        this.title = this.route.snapshot.params['title']
        this.apiService.getComments(this.title);
    }

    post() {
        this.apiService.postMessage({msg: this.postCommentaire, title: this.title, note: this.note})
        location.reload()
        let bienvenue: string = "Votre commentaire a bien été publié !";
        this._snackBar.open(bienvenue, "Super !");
    }
}