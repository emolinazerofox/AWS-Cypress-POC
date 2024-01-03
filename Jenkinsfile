pipeline{
agent any
stages{
    stage('test'){
        steps{
            script{
                    def image = docker.image('cypress/base')
                    image.pull()
                    image.inside() {
                        sh 'id'
                        sh 'ls -lrt'
                        sh 'npm ci'
                    }
              }
          }
      }
    }
}
