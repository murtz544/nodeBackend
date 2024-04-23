require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "murtz544",
    "id": 136434291,
    "node_id": "U_kgDOCCHScw",
    "avatar_url": "https://avatars.githubusercontent.com/u/136434291?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/murtz544",
    "html_url": "https://github.com/murtz544",
    "followers_url": "https://api.github.com/users/murtz544/followers",
    "following_url": "https://api.github.com/users/murtz544/following{/other_user}",
    "gists_url": "https://api.github.com/users/murtz544/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/murtz544/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/murtz544/subscriptions",
    "organizations_url": "https://api.github.com/users/murtz544/orgs",
    "repos_url": "https://api.github.com/users/murtz544/repos",
    "events_url": "https://api.github.com/users/murtz544/events{/privacy}",
    "received_events_url": "https://api.github.com/users/murtz544/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Muhammad Murtaza Hassan",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-06-13T07:36:57Z",
    "updated_at": "2024-04-23T14:33:00Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
})

app.get('/login', (req,res) => {
    res.send('<h1> Login Page </h1>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

