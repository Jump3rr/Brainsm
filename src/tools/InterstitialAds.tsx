import React, { useEffect } from 'react';
import { InterstitialAd } from '@react-native-firebase/admob';

const adUnitId = 'ca-app-pub-9930822065651705/7957927241';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
});

const InterstitialAds = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    useEffect(() => {
        interstitial.load();
    }, []);

    // No advert ready to show yet
    if (!interstitial.loaded) {
        return null;
    }

    if (randomNumber === 4) {
        interstitial.show();
    }
}

export default InterstitialAds;