pipeline{
    agent {
        docker { 
            image 'cypress/included:latest'
            args '-e PATH=/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
            //reuseNode true // <- this is if you need to access the workspace
        } 
    }
    environment {
       CHROME_BIN = '/bin/google-chrome'
       NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
       CYPRESS_CACHE_FOLDER = '~/.cache/Cypress/13.6.2/Cypress/Cypress'
    }
    
    stages{
    stage('test'){
        steps{
            script{
                    //def image = docker.image('cypress/included:latest')
                    //image.pull()
                    //image.inside() {
                        sh 'pwd'
                        sh 'id'
                        sh 'ls -lrt'
                        sh 'npx cypress verify'
                        sh 'npm ci'
                        sh 'npx cypress install && npm run cypress'
                        //sh 'npx cypress run --record --key 93f22266-e8f3-4453-8e2f-6c388b420bf9'
                    }
              }
          }
      }
}

