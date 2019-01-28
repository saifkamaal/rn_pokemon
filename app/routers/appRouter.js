import { createStackNavigator } from "react-navigation";
import DetailContainer from "../containers/DetailContainer/detailContainer";
import HomeContainer from "../containers/HomeContainer/homeContainer";

const RootStack = createStackNavigator(
  {
    HomeContainer,
    DetailContainer
  },
  {
    initialRouteName: "HomeContainer",
    headerMode: "none"
  }
);

export default RootStack;
