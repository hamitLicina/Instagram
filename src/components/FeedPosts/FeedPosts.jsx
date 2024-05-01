import { Container } from "@chakra-ui/react"
import FeedPost from "./FeedPost"



const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2} >
        <FeedPost img='/public/img1.png' username="yaseminlicina" avatar='/public/img1.png' />
        <FeedPost img='/public/img2.png' username="hamitlicina" avatar='/public/img2.png' />
        <FeedPost img='/public/img3.png' username="serralicina" avatar='/public/img3.png' />
        <FeedPost img='/public/img4.png' username="klicina" avatar='/public/img3.png' />
    </Container>
  )
}

export default FeedPosts