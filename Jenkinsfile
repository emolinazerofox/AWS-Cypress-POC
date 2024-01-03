pipeline{
agent any
    environment {
       CHROME_BIN = '/bin/google-chrome'
       NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
       CYPRESS_CACHE_FOLDER = '~/.cache/Cypress'
    }
    stages{
    stage('test'){
        steps{
            script{
                    def image = docker.image('cypress/base:latest')
                    image.pull()
                    image.inside() {
                        sh 'id'
                        sh 'ls -lrt'
                        sh 'npm install -g cypress --unsafe-perm --silent'
                        sh 'npm ci'
                        sh 'npx cypress run --record --key 93f22266-e8f3-4453-8e2f-6c388b420bf9'
                    }
              }
          }
      }
    }
}

