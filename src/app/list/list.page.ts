import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  private user = {
    prenom: "",
    nom: "",
    mail: "",
    tel: "",
    entreprise: ""
  };
  private user_stringified

  // Récupérer les informations
  constructor() {
    this.user_stringified = localStorage.getItem("user");
    if (this.user_stringified && this.user_stringified != "")
      this.user = JSON.parse(this.user_stringified);
  }

  ngOnInit() {
  }

  // Enregistrer les modifications
  validate() {
    this.user_stringified = JSON.stringify(this.user);
    localStorage.setItem('user', this.user_stringified);
  }
}
