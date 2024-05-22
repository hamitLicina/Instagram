import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants"
import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"
import SidebarItems from "./SidebarItems"



const Sidebar = () => {

  {
    /*
    
    // The commented and abbreviated code block below is the static user interface. It has been deprecated as a dynamic version was later created with Firebase
    // const sidebarItems = [
    //   {
    //     icon: <AiFillHome size={25} />,
    //     text: "Home",
    //     link: "/",
    //   },
    //   {
    //     icon: <SearchLogo />,
    //     text: "Search",
    //   },
    //   {
    //     icon: <NotificationsLogo />,
    //     text: "Notifications",
    //   },
    //   {
    //     icon: <CreatePostLogo />,
    //     text: "Create",
    //   },
    //   {
    //     icon: <Avatar size={"sm"} name="Hamit Licina" src="/profile.jpeg" />,
    //     text: "Profile",
    //     link: "/hamitlicina",
    //   },
  
    // ]
    // Avatar => "@chakra-ui/react" , CreatePostLogo, NotificationsLogo, SearchLogo => "../../assets/constants" , import { AiFillHome } from "react-icons/ai"
  
    // // Also This is a part of static code 
    //         {sidebarItems.map((item, index) => (
    //           <Tooltip key={index} hasArrow label={item.text} placement="right" ml={1} openDelay={500} display={{ base: "block", md: "none" }} >
    //             <Link display={"flex"} to={item.link || null} as={RouterLink} alignItems={"center"} gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }} >
    //               {item.icon}
    //               <Box display={{ base: "none", md: "block" }} >
    //                 {item.text}
    //               </Box>
    //             </Link>
    //           </Tooltip>
    //         ))}
    //       </Flex>
  */
  }

  const { handleLogout, isLoggingOut } = useLogout()
  return (
    <Box height={"100vh"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} position={"sticky"} top={0} left={0} px={{ base: 2, md: 4 }} >
      <Flex direction={"column"} gap={10} w="full" height={"full"} >
        <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor="pointer" >
          <InstagramLogo />
        </Link>
        <Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: "none" }} cursor="pointer" borderRadius={6} _hover={{ bg: "whiteAlpha.200" }} w={10} >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}> <SidebarItems /> </Flex>
        {/* Log Out */}
        <Tooltip hasArrow label={"Logout"} placement="right" ml={1} openDelay={500} display={{ base: "block", md: "none" }} >
          <Flex onClick={handleLogout} alignItems={"center"} gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }} mt={"auto"}>
            <BiLogOut size={25} />
            <Button display={{ base: "none", md: "block" }} variant={"ghost"} _hover={{ bg: "transparent" }} isLoading={{ isLoggingOut }} >
              Log out
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Sidebar