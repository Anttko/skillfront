# Front-end for the skill collector
[http://it-ff-2023-t04.pages.labranet.jamk.fi/front](http://it-ff-2023-t04.pages.labranet.jamk.fi/front)

[MOCKUP](https://www.figma.com/file/60gUVePHshMOTZPAXoGbWu/FF-Mockups?node-id=0-1&t=zEovuFRn3jde2VIg-0)

## Install
```bash
npm install
```
# Start development server
```bash
npm run dev
```
# Build for production
```bash
npm run build
```
# Tryout production build
```bash
npm run preview
```
# Docker compose 
```bash
docker-compose -f docker-compose.dev.yml up --build
```


## Jamk color codes


- Chakra-ui: 
  

```
jamk.magentaJAMK
jamk.blueJAMK
jamk.turquoiseJAMK
jamk.yellowJAMK
```

# POST api/results
- Example body:  
 
```
  {
   "sfia":  [{
    "hashkeyId": 1,
    "result":  "valuable",
    "sfiaSkillId": 2
   }],
     "soft":  [{
    "hashkeyId": 1,
    "result":  "valuable",
    "softSkillId": 3
   }]
}
```






stages:
  - deploy
deploy:
  image: ubuntu:latest
  stage: deploy
  only: 
    - main
  tags:
    - testing
  before_script:
    - apt-get -yq update
    - apt-get -yqq install ssh
    - install -m 600 -D /dev/null ~/.ssh/id_rsa
    - echo "$SSH_PRIVATE_KEY" | base64 -d > ~/.ssh/id_rsa
    - ssh-keyscan -H $SSH_HOST_IP > ~/.ssh/known_hosts
  script:
    - ssh $SSH_USER@$SSH_HOST_IP "cd $WORK_DIR && git checkout $MAIN_BRANCH && git pull && docker-compose up -d && exit"
  after_script:
    - rm -rf ~/.ssh