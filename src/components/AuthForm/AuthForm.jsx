import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";



const AuthForm = () => {
    /* I need to store Login data here */
    const [isLogin, setIsLogin] = useState(true)
    // const navigate = useNavigate()
    // const [inputs, setInputs] = useState({
    //     fullName: "",
    //     username: "",
    //     email: "",
    //     password: "",
    // })
    /* This was just before added Firebase backend integration including authentication, Firestore, and storage functionality.
        const handleAuth = () => {
            if (!inputs.email || !inputs.password) {
                alert("Please fill all the fields")
                return
            }
            navigate("/")
        }
    */

    // const [showPassword, setShowPassword] = useState(false);
    // const { loading, error, signup } = useSignUpWithEmailAndPassword();

    return (
        <>
            <>
                <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                    <VStack spacing={4}>
                        <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />

                        {isLogin ? <Login /> : <Signup />}

                        {/* ---------------- OR -------------- */}
                        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                            <Box flex={2} h={"1px"} bg={"gray.400"} />
                            <Text mx={1} color={"white"}>
                                OR
                            </Text>
                            <Box flex={2} h={"1px"} bg={"gray.400"} />
                        </Flex>

                        <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
                    </VStack>
                </Box>

                <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                    <Flex alignItems={"center"} justifyContent={"center"}>
                        <Box mx={2} fontSize={14}>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                        </Box>
                        <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                            {isLogin ? "Sign up" : "Log in"}
                        </Box>
                    </Flex>
                </Box>
            </>

            {/* 
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
                    <Input placeholder="Email" fontSize={14} type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                    <Input placeholder="Password" fontSize={14} type="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    {!isLogin ? (<Input placeholder="Confirm Password" fontSize={14} type="password" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />) : null}
                    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} >
                        {isLogin ? "Log in" : "Sign up"}
                    </Button>
                    {/*-------------------OR Text-----------------------}
                    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text mx={1} color={"white"}>
                            OR
                        </Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>
                    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                        <Image src="/google.png" w={5} alt="Google Logo" />
                        <Text mx={2} color={"blue.500"}>Log in with Google</Text>
                    </Flex>
                </VStack>
            </Box>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"} >
                        {isLogin ? "Sign up" : "Log in"}
                    </Box>
                </Flex>
            </Box> */}
        </>
    )
}

export default AuthForm