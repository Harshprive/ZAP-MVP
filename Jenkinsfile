pipeline {
    agent any

    environment {
        environment {
             DOCKER_IMAGE_BACKEND = 'renukagaidhane/zap-backend'
              DOCKER_IMAGE_FRONTEND = 'renukagaidhane/zap-frontend'
}

    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Harshprive/ZAP-MVP.git'

            }
        }

        stage('Build Docker Images') {
            steps {
                dir('Backend') {
                    sh 'docker build -t $DOCKER_IMAGE_BACKEND .'
                }
                dir('Frontend/App') {
                    sh 'docker build -t $DOCKER_IMAGE_FRONTEND .'
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                        echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                        docker push $DOCKER_IMAGE_BACKEND
                        docker push $DOCKER_IMAGE_FRONTEND
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    kubectl apply -f k8s/
                '''
            }
        }
    }
}
