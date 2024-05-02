import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"



const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} >
            <Flex alignItems={"center"} gap={2} >
                <Avatar name="hamitlicina" size={"lg"} src="/profile.jpeg" />
                <Text fontSize={12} fontWeight={"bold"} >Hamit Licina</Text>
            </Flex>
            <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.400"} style={{ textDecoration: "none" }} cursor={"pointer"} >
                Log out
            </Link>
        </Flex>
    )
}

export default SuggestedHeader