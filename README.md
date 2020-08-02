# PFE-Chatbot | Natural Language Processing API ![CircleCI](https://img.shields.io/circleci/build/github/ChristopheD31/pfe-chatbot/master?style=plastic)

## Contexte
Projet de fin d'études réalisé à l'[ÉTS](https://www.etsmtl.ca/) à l'été 2020.

Ce projet à pour but d'implémenter une solution de Chatbot pour le client [AzurDev](https://azurdev.ca/en/interactive-platforms/).

Dans le cadre de ce projet, l'équipe a dû implémenter une solution de chatbot permettant de répondre automatiquement, à partir de leur plateforme propriétaire NOAN, à des messages envoyés par les clients d'AzurDev via des outils de messagerie tels que Facebook Messenger, WhatsApp et WeChat.

Cet API s'intègre dans la solution en étant l'intermédiaire du traitement des messages par Natural Language Processing efffectué par [Wit.ai](https://wit.ai/). Les messages sont donc envoyés à cet API afin d'en extraire les informations nécessaires pour obtenir les réponses adéquates, lesquelles sont configurables par les utilisateurs de la plateforme d'AzurDev.

## API

#### Accès
L'API est hébergé sur la plateforme Heroku et est [accessible publiquement](https://pfechatbot-nlpapi.herokuapp.com/).

#### Documentation
La documentation complète a été réalisée sur Postman et est [accessible publiquement](https://documenter.getpostman.com/view/9506110/T1Dv9FAg?version=latest).

#### Déploiement automatique
L'outil [CircleCi](https://circleci.com/) est utilisé afin de déclencher un traitement comprenant une suite de tests et un déploiement automatique sur Heroku lorsque du code est poussé sur la branche _master_. La configuration propre à cet outil est effectuée dans le dossier [.circleci](/.circleci/config.yml).

#### Base de données hébergée

L'API utilise une base de données MongoDB hébergée par mLabs qui peut [être gérée ici](https://www.mlab.com/databases/heroku_qst2h92x). 

## Technologies utilisées

Framework node.js web: [express](https://expressjs.com/)

Plateforme de _Natural Language Processing_: [Wit.ai](https://wit.ai/)

Base de données: [MongoDB](https://www.mongodb.com/)

MongoDB object modeling library for node.js : [Mongoose](https://mongoosejs.com/)
