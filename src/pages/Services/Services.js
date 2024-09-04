import { useState,useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Services = () =>{
    const[posts,setPosts]=useState([]);
    useEffect(()=> {
        async function fetchPosts(){
            try{
                //E njejta gje si me fetch por me axios
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            }catch(error){
                console.log('Error during the fetch')
            }
        }
        fetchPosts();
    })
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
export default Services;