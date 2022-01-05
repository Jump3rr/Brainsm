import React, {useEffect, useState} from 'react';
import admob, { MaxAdContentRating, BannerAd, BannerAdSize, AdsConsent, AdsConsentStatus } from '@react-native-firebase/admob';
import { View } from '../components/Themed';
import { Box } from 'react-native-design-utility';


const BannerAds = () => {
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
    const [adHeight,setAdHeitht] = useState(1);
    const setHeight = () => {
        if(adHeight === 1) {
            setAdHeitht(0);
        }
    }
    let status: number = 1;

    const CheckStatus = async() => {
        status =  await AdsConsent.getStatus();
    }
    CheckStatus();
    return (
            <Box h={adHeight}>
            <BannerAd
                unitId='ca-app-pub-9930822065651705/4546713157'
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: status === AdsConsentStatus.NON_PERSONALIZED,
                }}
                onAdLoaded={() => {
                    setHeight();
                }}
                onAdFailedToLoad={(error) => {
                }}
            />
            </Box>
    )
}

export default BannerAds;