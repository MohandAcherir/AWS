import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h4>Profil personnel</h4>
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <mat-list>
                <mat-list-item><b>Nom</b>: {{profile?.name}}</mat-list-item>
                <mat-list-item><b>Prénom</b>: {{profile?.prenom}}</mat-list-item>
                <mat-list-item><b>Adresse courriel</b>: {{profile?.email}}</mat-list-item>
                <mat-list-item><b>Date de naissance</b>: {{profile?.dateDeNaissance}}</mat-list-item>
                <mat-list-item><b>Taille</b>: {{profile?.taille}}</mat-list-item>
                <mat-list-item><b>Poids</b>: {{profile?.poids}}</mat-list-item>
                <mat-list-item><b>Sexe</b>: {{profile?.sexe}}</mat-list-item>
                <mat-list-item><b>Description</b>: {{profile?.description}}</mat-list-item>
            </mat-list>
        </mat-card-content>
    </mat-card>
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h2>Publications</h2>
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <messages></messages>
        </mat-card-content>
    </mat-card>
`
})
export class ProfileComponent implements OnInit {
    constructor(public apiService: ApiService, public route: ActivatedRoute) { }

    profile: any

    ngOnInit() {
        var id = this.route.snapshot.params['id']
        this.apiService.getProfile(id).subscribe((data: any) => this.profile = data);
    }
}