import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
const ProductScreenDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: `Details ${id}` }} />
      <Text>ProductScreenDetails : {id}</Text>
    </View>
  );
};
export default ProductScreenDetails;
