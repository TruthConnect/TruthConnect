import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import type { Theme } from '@react-navigation/native';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // :root[data-theme="light"] {
  //   --primary: #e22c32;
  //   --background: #fef6f6;
  //   --secondary: #7ded93;
  //   --text: #200504;
  //   --accent: #59e8dc;
  // }
  // :root[data-theme="dark"] {
  //   --primary: #d31d23;
  //   --background: #090101;
  //   --secondary: #128228;
  //   --text: #fbe0df;
  //   --accent: #17a69a;
  // }
  
  const LightTheme: Theme = {
    dark: false,
    colors: {
      primary: '#e22c32',
      background: '#fef6f6',
      card: '#7ded93',
      text: '#200504',
      border: '#59e8dc',
      notification: '#59e8dc',
    },
  };

  const DarkTheme: Theme = {
    dark: true,
    colors: {
      primary: '#d31d23',
      background: '#090101',
      card: '#128228',
      text: '#fbe0df',
      border: '#17a69a',
      notification: '#17a69a',
    },
  };

  

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
