import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { WebService } from 'src/app/services/web.service';
import { AdMob, AdOptions, AdLoadInfo, InterstitialAdPluginEvents } from '@capacitor-community/admob';
import { environment } from "../../../environments/environment.prod"


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(public webApi: WebService, private route: ActivatedRoute, private iab: InAppBrowser) { }

  categoryName = "";
  categoryId: any;
  games: any;
  categoryData = [];
  options: AdOptions = {
    adId: environment.interstitial_ad_id,
    isTesting: environment.testing_ad
  };

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get("id");
    this.categoryName = this.route.snapshot.paramMap.get("name");
    this.prepareData();
    this.makeCategoryData();
    this.initAdmob();
  }

  
  prepareData() {
    if (!localStorage.getItem("games")) {
      this.getData();
    } else {
      this.games = JSON.parse(localStorage.getItem("games"));
      // this.getData();
    }
    this.makeCategoryData();
  }

  getData(){
    this.webApi.getData().subscribe(data => {
      if (data[0].status == "success") {
        localStorage.setItem("games", JSON.stringify(data[0].data[0]));
        this.games = data[0].data[0];
      }
    });
  }


  async initAdmob() {
    await AdMob.initialize({});
  }

  async openGame(gameUri) {
    this.prepareAd();
    const browser = this.iab.create(gameUri, '_blank', 'location=no,mediaPlaybackRequiresUserAction=yes');
    browser.on('exit').subscribe(e => {
      this.showAd();
    });
    browser.on('loaderror').subscribe(e => {
      browser.close();
      this.showAd();
    });
  }


  async showAd() {

    await AdMob.showInterstitial().then(
      value => {
        // console.log(value)
      },
      error => {
        // console.log(error); // show error for debuging if ad is not showing
      }
    );

  }

  async prepareAd(){
    await AdMob.prepareInterstitial(this.options).then(
      value => {
        // console.log(value)
      },
      error => {
        // console.log(error); // show error for debuging if ad is not showing
      }
    );
  }



  makeCategoryData() {
    this.categoryData = [];

    if(this.games != undefined){
    for (let i = 0; i < this.games.games.length; i++) {
      if (this.games.games[i].category_id == this.categoryId) {
        this.categoryData.push(this.games.games[i]);
      }
    }
  }

  if (this.games == undefined) {
    setTimeout(() => {
      this.prepareData();
    }, 2500);
  }


  }

}
