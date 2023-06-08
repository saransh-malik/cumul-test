/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import CumulioDashboardComponent from '@cumul.io/react-native-cumulio-dashboard';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            height: 500,
            width: '100%',
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <CumulioDashboardComponent
            authKey={'id-key'}
            authToken={'cumul-token'}
            appServer={'https://app.us.cumul.io/'}
            dashboardId={`dashboard-id?qe_version=2`}
            loaderSpinnerColor="rgb(0, 81, 126)"
            loaderSpinnerBackground="rgb(236 248 255)"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
