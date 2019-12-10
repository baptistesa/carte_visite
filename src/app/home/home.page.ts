import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  user_array = [];

  constructor(private barcodeScanner: BarcodeScanner, private router : Router) {
    this.user_array = JSON.parse(localStorage.getItem("users"))
  }


  // Launch QRCode scanner
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      let user = JSON.parse(barcodeData.text);
      if (!localStorage.getItem("users") || localStorage.getItem("users") == "") {
        this.user_array = [
        ];
        this.user_array.push(user);
        localStorage.setItem("users", JSON.stringify(this.user_array));
      }
      else {
        this.user_array = JSON.parse(localStorage.getItem("users"));
        this.user_array.push(user);
        localStorage.setItem("users", JSON.stringify(this.user_array))
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

  // Go to details page
  goToDetails(user) {
    let params : NavigationExtras = {
      state: {
        user : user
      }
    }
    this.router.navigate(["/"], params)
  }

}
