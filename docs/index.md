## TP DevOps - CI/CD GitOPS

Cette documentation a été réalisé par Théo DENIAUD, avec la collaboration de Thibault LONG et Tanguy PICHON.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Test Gitlab
La version Gitlab CI/CD est payante. Nous avons tenté de déployer nos propres runners pour nos tests mais étant donné le peu de temps, nous avons préférer passer sur Github Actions.
![GitLabCI](/docs/assets/img/test_gitlab_CI.png)
![RegisterRunner](/docs/assets/img/register_runner.png)
![AvailableRunner](/docs/assets/img/available_runner.png)

### Phase de test 

Afin d'éffectuer le premier test unitaire nous le lancons manuellement via npm run test
![FirstTest](/docs/assets/img/first_test.png)

Afin d'automatiser cette action nous allons implémenter dans le dorker file le lancement du test dans le conteneur afin de valider le bon fonctionement
![TestUnitaire](/docs/assets/img/test_unitaire.png)
















Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/theodeniaud/project_DevOps/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
