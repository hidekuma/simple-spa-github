# simple-spa-github
> this source can create easily SPA in github. [@hidekuma](https://github.com/hidekuma)
* [Live demo](https://hidekuma.github.io/simple-spa-github/)

---

### cautions
* Adding 'else > not found' router's conditions may affect other repository.

### ready
* replace RoutePrefix with your repository name in `src/componets/App.js`, `webpack.config.dev.js`

### development / deploy
1) git clone
2) yarn install
3) yarn start (dev) / yarn build (deploy)
4) check `http://localhost:3000` (dev)
5) after build, `ln -s index.html 404.html` (symbolic link)
