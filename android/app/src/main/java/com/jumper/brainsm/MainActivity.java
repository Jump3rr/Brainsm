package com.jumper.brainsm;

import android.os.Bundle;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.initialization.InitializationStatus;
import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;
import com.facebook.react.ReactActivity;
// import com.google.android.gms.ads.AdRequest;
// import com.google.android.gms.ads.AdView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);

    //setContentView(com.jumper.brainsm.R.layout.activity_main);
    MobileAds.initialize(this, new OnInitializationCompleteListener() {
      @Override
      public void onInitializationComplete(InitializationStatus initializationStatus) {
      }
    });

    // AdSize adSize = new AdSize(300, 50);
    // AdView adView = new AdView(this);
    // adView.setAdSize(AdSize.BANNER);
    // adView.setAdUnitId("ca-app-pub-3940256099942544/6300978111");

    // adView = findViewById(R.id.adView);
    // AdRequest adRequest = new AdRequest.Builder().build();
    // adView.loadAd(adRequest);
    
  }
  @Override
  protected String getMainComponentName() {
    return "Brainsm";
  }
}
