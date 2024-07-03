import { Pressable, Text, View } from "react-native";
import SafeArea from "../components/SafeArea";
import * as SecureStorage from "expo-secure-store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectAuth } from "../features/auth/authSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const token = SecureStorage.getItem("token");
  return (
    <SafeArea className="flex-1 items-center justify-center">
      <Text>Status: {auth.status}</Text>
      <Text>Home</Text>
      <Text>{token}</Text>
      <Pressable
        className="bg-blue-300 py-2 px-2 rounded-md"
        onPress={() => {
          dispatch(logout());
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </SafeArea>
  );
};

export default Home;
