import {createStackNavigator,createAppContainer} from "react-navigation"
import MainScreen from "../screens/MainScreen"

const navigation = createStackNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions: {
          header: null
        }
      },
})

const Navigation = createAppContainer(navigation);

export default Navigation;