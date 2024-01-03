pipeline{
agent {
    docker {
        image 'node:21.5.0-alpine3.18'
        args '-u root:root'
        reuseNode true
    }
}
    environment {
       CHROME_BIN = '/bin/google-chrome'
       NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
       CYPRESS_CACHE_FOLDER = '~/.cache/Cypress'
    }
    stages{
    stage('test'){
        steps{
            script{
                    //def image = docker.image('cypress/base:12.16.0')
                    //image.pull()
                    //image.inside() {
                        sh 'id'
                        sh 'ls -lrt'
                        sh 'npm ci'
                        sh 'npx cypress run --record --key 93f22266-e8f3-4453-8e2f-6c388b420bf9'
                    //}
              }
          }
      }
    }
}

