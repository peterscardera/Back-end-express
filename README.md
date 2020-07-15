#  Test
Master branch contains the answer at the 1h mark. Branch 'aftertime' contains me finishing it for fun
## Pré-requis

- Docker desktop
- Node.js (si lancé localement)

## Démarrage

### **Docker**:

Accédez au répertoire contenant le Dockerfile et exécutez la commande suivante pour créer l'image Docker:

- " docker build -t <docker username>/node-web-app . " ou sans alias " docker build . "
- docker run -p 8000:8000 <insert Image name> 

Le pod et l'application fonctionne sur le port 8000.

### **Localement**:

Exécutez `npm install` pour installer les dépendances, puis`npm start` pour démarrer le serveur.
Le serveur fonctionne sur le port ** 8000 **, vous pouvez donc accéder au serveur à `http://localhost:8000`

## Fabriqué avec

- Node.js
- Express (Express est une infrastructure d'applications Web Node JS qui apporte une couche fine de fonctionnalités d'application Web fondamentales, sans masquer les fonctionnalités de Node)

## Structure des fichiers

```
project
│   README.md
│   package.json
│
└───src
    │   app.js 
    │   index.js
    │
    └───routes # Une instance de Router d'express
    │     mainRoutes.js
    │
    └───controllers  # Gestionnaires de route modulaires
          handlesnamedif.js 
    

```
## Modules

#### Helmet
 Définit des en-têtes HTTP liés à la sécurité .

#  Points finaux d’application (URI) // Endpoints

/api/save
/api/loadData
/api/EaxctRoute# test
