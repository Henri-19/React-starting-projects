import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Posts = () =>{
    const [posts,setPosts] = useState([]);

useEffect(()=>{

    const fetchPosts = async ()=>{
        try{
            //E bere me fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    }catch(error){
        console.log("Error!We can't load your Posts!");
    }
 }
 fetchPosts();
},[])

return(
    <div>
    {posts.map((post,id) => (
        <Card key={id} style={{ marginBottom: '10px' }}>
            <CardContent>
                <Typography variant="h3" component="h2">
                    {post.title}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions style={ {justifyContent: 'center' }}>
            <Button size="small" onClick={() => console.log(`Clicked on post ${id + 1}`)}>View Post</Button>
            </CardActions>
        </Card>
    ))}
</div>
)

}
export default Posts;