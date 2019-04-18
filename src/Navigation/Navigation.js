import {createStackNavigator,createAppContainer} from "react-navigation"
import MainScreen from "../screens/MainScreen"
import NewsScreen from "../screens/NewsScreen"
import CategoryScreen from "../screens/CategoryScreen"

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
})

const Navigation = createAppContainer(navigation);

export default Navigation;