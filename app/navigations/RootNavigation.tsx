import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserNavigator from "./UserNavigation";
import GuestNavigator from "./GuestNavigation";
import { useAppSelector } from "../redux/hooks";
import { selectAuth } from "../features/auth/authSlice";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isLogin = useAppSelector(selectAuth);
  return (
    <NavigationContainer>
      {isLogin.isLogin ? <UserNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
