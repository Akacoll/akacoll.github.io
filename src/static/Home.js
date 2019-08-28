import React from 'react';

import Emoji from 'shared/Emoji';
import Button from 'shared/Button';
import { Link, Route, Switch } from "react-router-dom";
import { Card } from 'react-bootstrap';


const posts = [
    { id: 1, title: 'First', content: 'Hello world!' },
    { id: 2, title: 'Second', content: 'Hello again!' }
]

const Post = ({ match }) => {
    console.log(match.params.id);
    let post = posts.find(p => p.id == match.params.id);
    console.log("Post #" + post.id);

    return (
        <Card bg="dark" text="white" style={{ width: '18rem' }} className="col-md-6 col-md-offset-3">
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

const Home = ({ match }) => (
    <div>
        <h2>Home page! <Emoji label="Japanese Gate">⛩</Emoji></h2>
        {posts.map((post) => (
            <Link to={match.path + "/post/" + post.id} key={post.id}>
                <Button
                    variant="outline-dark"
                    text={post.title}
                />
            </Link>
        ))}
        <Switch>
            <Route exact path={match.path + "/post/:id"} component={Post} />
        </Switch>
    </div>
)

export default Home;