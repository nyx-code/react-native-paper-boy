import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from "react-native";
import Colors from "../styles/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {withNavigation} from "react-navigation"


const Header = props => {

  const onRefresh = () => {
    props.navigation.navigate("FetchData")
  };

  const onBack = () => {
    props.navigation.pop(1);
  };

  const toOpenDrawer = () => {
    props.navigation.push("Category")
  }

    const { isBack, text, isRefresh, mainTitle} = props;
    return (
      <SafeAreaView style={{ backgroundColor: Colors.primaryColor }}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor={Colors.primaryDarkColor}
          />
          {isBack && (
            <Icon
              onPress={onBack}
              name="arrow-left"
              size={28}
              color={Colors.whiteColor}
            />
          )}
          {
            mainTitle && (
              <Icon
              onPress={toOpenDrawer}
              name="menu"
              size={28}
              color={Colors.whiteColor}
            />
            )
          }
          <Text style={[styles.text, isBack && { marginLeft: 12 }, mainTitle && { textAlign:"center" }]}>
            {mainTitle && (
              <Icon
            name="newspaper"
            size={25}
            style={{marginLeft:10}}
            color={Colors.whiteColor}
            /> 
            )}

                {mainTitle ? " "+text.toUpperCase() : text}
          </Text>
          {isRefresh && (
            <Icon
              onPress={onRefresh}
              name="refresh"
              size={28}
              color={Colors.whiteColor}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: Colors.primaryColor,
    flexDirection: "row",
  },
  text: {
    fontSize: 22,
    color: Colors.whiteColor,
    fontWeight: "bold",
    flex: 1,

  },
  textInput: {
    padding: 0,
    marginHorizontal: 10,
    fontSize: 16,
    flex: 1
  }
});

export default withNavigation(Header);
