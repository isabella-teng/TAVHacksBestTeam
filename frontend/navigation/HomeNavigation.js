import { createStackNavigator } from 'react-navigation';
import ChatScreen from '../screens/ChatScreen';
import Home from '../screens/Home';
import { dictToScreens, stackNavigatorConfig } from './NavigationService';

// for each (key: value) map (SignupLanding: Landing) => (SignupLanding: { screen: Landing })
const screens = dictToScreens({ Home, ChatScreen });

const HomeNavigator = createStackNavigator(screens, { ...stackNavigatorConfig, initialRouteName: 'Home' });

export default HomeNavigator;
