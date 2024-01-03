pipeline{
agent any
    environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }
    stages{
    stage('test'){
        steps{
            script{
                    def image = docker.image('cypress/base:12.16.0')
                    image.pull()
                    image.inside() {
                        sh 'id'
                        sh 'ls -lrt'
                        sh 'npm ci'

                sh 'npm ci --prefer-offline --no-audit'
                sh 'rm node_modules/.ngcc_lock_file || true'
                sh 'npm run ngcc'
                sh 'rm -rf reports'
                    }
              }
          }
      }
    }
}
