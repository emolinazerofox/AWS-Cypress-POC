pipeline{
agent any
stages{
    stage('test'){
        steps{
            script{
                    def image = docker.image('node:14-alpine')
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
