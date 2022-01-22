import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import { AdMob, AdOptions, AdLoadInfo, InterstitialAdPluginEvents } from '@capacitor-community/admob';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public webApi: WebService, private iab: InAppBrowser) { }

  games: any;
  homeData = [];
  options: AdOptions = {
    adId: environment.interstitial_ad_id,
    isTesting: environment.testing_ad
  };


  ngOnInit() {
    this.prepareData();
    this.initAdmob();
  }

  doRefresh(event) {
    this.prepareData();
    setTimeout(() => {
      event.target.complete();
    }, 1000);

  }

  prepareData() {
    if (!localStorage.getItem("games")) {
      this.getData();
    } else {
      this.games = JSON.parse(localStorage.getItem("games"));
      this.getData();
    }
    this.makeHomeData();
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

 openGame(gameUri) {
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

    // AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
    //   // console.log(info);
    //   // Subscribe prepared interstitial
    // });

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

  


  makeHomeData() {
    console.log(this.games);
    
    if(this.games != undefined){
      this.homeData = [];
      for (let i = 0; i < this.games.categories.length; i++) {
        this.homeData[i] = [];
        for (let j = 0; j < this.games.games.length; j++) {
          if (this.games.categories[i].id == this.games.games[j].category_id && this.homeData[i].length < 4) {
            this.homeData[i].push(this.games.games[j]);
          }
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
