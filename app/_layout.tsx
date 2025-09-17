import { useCallback, useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Script from 'next/script';
import { View } from 'react-native';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as ExpoSplashScreen from 'expo-splash-screen';
// Import correctly from authStore
import { useAuthStore } from '@/stores/authStore';
import CustomSplashScreen from '@/components/SplashScreen';
import { AuthProvider } from '@/context/AuthProvider';

// Keep the splash screen visible until fonts are loaded
ExpoSplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();
  // Get authentication state from the store
  const { isAuthenticated } = useAuthStore();
  const [isCustomSplashVisible, setIsCustomSplashVisible] = useState(true);

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium, 
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      onLayoutRootView();
    }
  }, [fontsLoaded, fontError, onLayoutRootView]);

  const handleSplashFinish = () => {
    setIsCustomSplashVisible(false);
  };

  // Return null to keep expo splash screen visible while fonts load
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Return our custom animated splash screen after fonts load
  if (isCustomSplashVisible) {
    return <CustomSplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <AuthProvider>
      {/* --- Google Ads Tags START --- */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17548656857"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17550600583"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17543477081"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17543749270"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17541392073"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17548766700"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17525978937"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17526342826"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17554381814"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17554357532"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17554589140"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17554528935"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17554511136"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17554415633"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17550081000"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17559373345"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17575739625"
      />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17548656857');
          gtag('config', 'AW-17550600583');
          gtag('config', 'AW-17543477081');
          gtag('config', 'AW-17543749270');
          gtag('config', 'AW-17541392073');
          gtag('config', 'AW-17548766700');
          gtag('config', 'AW-17525978937');
          gtag('config', 'AW-17526342826');
          gtag('config', 'AW-17554381814');
          gtag('config', 'AW-17554357532');
          gtag('config', 'AW-17554589140');
          gtag('config', 'AW-17554528935');
          gtag('config', 'AW-17554511136');
          gtag('config', 'AW-17554415633');
          gtag('config', 'AW-17550081000');
          gtag('config', 'AW-17559373345');
          gtag('config', 'AW-17575739625');
        `}
      </Script>
      {/* --- Google Ads Tags END --- */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" options={{ animation: 'fade' }} />
        <Stack.Screen name="auth" options={{ animation: 'fade' }} />
        <Stack.Screen name="onboarding" options={{ animation: 'fade' }} />
        <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
        <Stack.Screen name="survey" options={{ animation: 'fade' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}