import {createStackNavigator,createAppContainer,createSwitchNavigator} from "react-navigation"
import MainScreen from "../screens/MainScreen"
import NewsScreen from "../screens/NewsScreen"
import CategoryScreen from "../screens/CategoryScreen"
import FetchDataScreen from "../screens/FetchDataScreen"
import { fromLeft,fromRight, zoomIn, zoomOut } from 'react-navigation-transitions'
 
const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  if (prevScene
    && prevScene.route.routeName === 'Home'
    && nextScene.route.routeName === 'Category') {
    return fromLeft(1000);
  } else if (prevScene
    && prevScene.route.routeName === 'Category'
    && nextScene.route.routeName === 'Home') {
    return fromRight(1000);
  } else if (prevScene
    && prevScene.route.routeName === 'Home'
    && nextScene.route.routeName === 'News') {
    return zoomIn(500);
  } else if (prevScene
    && prevScene.route.routeName === 'News'
    && nextScene.route.routeName === 'Home') {
    return zoomOut(500);
  }
}

const navigation = createStackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      header: null
    }
  },
  News: {
      screen: NewsScreen,
      navigationOptions: {
        header: null
      }
    },
},{
  transitionConfig: (nav) => handleCustomTransition(nav)
})


const Navigation = createSwitchNavigator(
  {
    FetchData: FetchDataScreen,
    App: navigation
  },
  {
    initialRouteName: "FetchData"
  }
);

export default createAppContainer(Navigation);