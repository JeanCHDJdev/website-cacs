# Site espace du turfu


# Dépendances à installer (en supposant que python3, node et npm sont installés)

## Django, Django Rest Framework and Django Cors Headers
```bash
pip install django
pip install djangorestframework django-cors-headers
pip install django-modeltranslation
```
## React
```bash
npm install react next react-router
```

## Axios (pour les requêtes http)
```bash
npm install axios
```

# Lancer le projet
Dans un terminal, lancer les commandes suivantes :
```bash
cd back_espace
python3 manage.py runserver
```
Dans un autre terminal, lancer les commandes suivantes :
```bash
cd front-espace
npm run dev
```
# Modifier les bases de données
site : http://127.0.0.1:8000/admin/
user : himmi
mdp : azerty

# Déployer le site web
Récupérer la clé ssh pour pouvoir utilser le mot de passe de la VM, et placer la clé privée dans votre dossier ./.ssh/
Se rendre sur la vm par ssh dans votre terminal :
```bash
ssh cacs@cacs.cs-campus.fr
```

Vous pouvez éditer vos fichiers avec nano.

## Activer simultanément le back et le front pour le déploiement
Utiliser screen :
```bash
screen
```

ctrl+A+D : se détacher des screens
ctrl+A+" : voir les screens actifs
ctrl+A+C : créer un nouveau screen

Créer un nouveau screen, puis :
```bash
cd /site_cacs/front-espace/
npm run build
npm run start
```

Créer un autre screen, puis :
```bash
cd /site_cacs/back_espace/
source venv/bin/activate
```
Ensuite, déployez le back :
```bash
gunicorn back_espace.wsgi:application --bind 127.0.0.1:8000
```

## Reboot nginx 
Relancez nginx si nécessaire : 
```bash
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx
```

## Quitter la VM
Pour clore les screens, utilisez ctrl+A+D.
Ensuite, placez vous dans un terminal et quittez la VM
```bash
exit
```

