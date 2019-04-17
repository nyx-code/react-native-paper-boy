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

const Header = props => {

  const onRefresh = () => {
    alert("refresh")
  };

  const onBack = () => {
    alert("back")
  };

    const { isBack, text, isRefresh} = props;
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
              size={24}
              color={Colors.whiteColor}
            />
          )}
          <Text style={[styles.text, isBack && { marginLeft: 12 }]}>
            {text.toUpperCase()}
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
    textAlign: 'center'

  },
  textInput: {
    padding: 0,
    marginHorizontal: 10,
    fontSize: 16,
    flex: 1
  }
});

export default Header;
