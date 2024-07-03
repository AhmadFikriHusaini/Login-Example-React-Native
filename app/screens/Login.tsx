import { Pressable, Text, TextInput } from "react-native";
import SafeArea from "../components/SafeArea";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectAuth } from "../features/auth/authSlice";
import { login } from "../features/auth/authActions";
import * as SecureStorage from "expo-secure-store";

const Login = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const doLogin = () => {
    if (username === "" || password === "") {
      alert("There is an empty field");
      return;
    }
    dispatch(login({ username, password, service: "moodle_mobile_app" }));
  };
  return (
    <SafeArea>
      <Text>Status : {auth.status}</Text>
      <Text>
        {SecureStorage.getItem("token") !== undefined
          ? SecureStorage.getItem("token")
          : "no token"}
      </Text>
      <Text>Login</Text>
      <TextInput
        className="border my-2 p-2"
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        className="border my-2 p-2"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable className="bg-cyan-500 p-2" onPress={() => doLogin()}>
        <Text>Login</Text>
      </Pressable>
    </SafeArea>
  );
};

export default Login;
