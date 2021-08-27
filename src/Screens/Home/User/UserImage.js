import React from "react";
import { StyleSheet, View, Image } from "react-native";

export const UserImage = () => {
  return (
    <View>
      <Image
        style={styles.userImage}
        source={{
          uri: "https://media-exp1.licdn.com/dms/image/C4D03AQF3uHaMSxqDrw/profile-displayphoto-shrink_100_100/0/1601621452324?e=1635379200&v=beta&t=UnsyLoPylCZa6czaCLt37xmjtlUd4r6K3OUyFPBU9g0",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
