import React from 'react';
import admob, { MaxAdContentRating, BannerAd, BannerAdSize } from '@react-native-firebase/admob';

const Ads = () => {
    admob()
        .setRequestConfiguration({
            // Update all future requests suitable for parental guidance
            maxAdContentRating: MaxAdContentRating.PG,

            // Indicates that you want your content treated as child-directed for purposes of COPPA.
            tagForChildDirectedTreatment: true,

            // Indicates that you want the ad request to be handled in a
            // manner suitable for users under the age of consent.
            tagForUnderAgeOfConsent: true,
        })
        .then(() => {
            // Request config successfully set!
        });
    return (
            <BannerAd
                unitId='ca-app-pub-9930822065651705/4546713157'
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
    )
}

export default Ads;