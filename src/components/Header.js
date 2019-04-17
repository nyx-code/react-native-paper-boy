import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from "react-native";
import Colors from "../styles/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Header extends Component {
  state = {
    isSearchActive: false
  };

  onLogout = () => {
    alert("Logout")
  };

  onBack = () => {
    alert("back")
  };

  render() {
    const { isBack, text, isLogoutIcon, searchBar } = this.props;
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
              onPress={this.onBack}
              name="arrow-left"
              size={24}
              color={Colors.whiteColor}
            />
          )}
          <Text style={[styles.text, isBack && { marginLeft: 12 }]}>
            {text}
          </Text>
          {searchBar && (
            <Icon
              style={{ marginRight: 10 }}
              onPress={this.props.onSearchPress}
              name="magnify"
              size={24}
              color={Colors.whiteColor}
            />
          )}

          {isLogoutIcon && (
            <Icon
              onPress={this.onLogout}
              name="logout"
              size={24}
              color={Colors.whiteColor}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: Colors.primaryColor,
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    color: Colors.whiteColor,
    fontWeight: "bold",
    flex: 1
  },
  textInput: {
    padding: 0,
    marginHorizontal: 10,
    fontSize: 16,
    flex: 1
  }
});

export default Header;
