/*  MYSQL   */
CREATE TABLE etudiants (
    numero INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    date_naissance DATETIME,
    email VARCHAR(255)
);

CREATE TABLE formateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    specialite VARCHAR(255),
    email VARCHAR(255),
    experience TEXT
);

CREATE TABLE formations (
    code CHAR(6) PRIMARY KEY,
    intitule VARCHAR(255),
    duree FLOAT NOT NULL,
    date_debut DATETIME NOT NULL,
    module TEXT NOT NULL,
    id_formateur INT NOT NULL,
    FOREIGN KEY(id_formateur) REFERENCES formateurs(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    date_limite DATETIME NOT NULL,
    numero_etudient INT,
    FOREIGN KEY(numero_etudient) REFERENCES etudiants(numero) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE Notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    valeur VARCHAR(255) NOT NULL,
    commentaire TEXT,
    id_evaluation INT,
    FOREIGN KEY(id_evaluation) REFERENCES evaluations(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE inscriptions (
    numero INT AUTO_INCREMENT PRIMARY KEY,
    date DATETIME NOT NULL,
    numero_etudiant INT NOT NULL,
    code_formation CHAR(6) NOT NULL,
    FOREIGN KEY(numero_etudiant) REFERENCES etudiants(numero) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY(code_formation) REFERENCES formations(code) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE donnes (
    id_formations_formateur INT AUTO_INCREMENT PRIMARY KEY,
    id_formateur INT NOT NULL,
    code_formations CHAR(6) NOT NULL,
    date_debut DATETIME NOT NULL,
    FOREIGN KEY(id_formateur) REFERENCES formateurs(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY(code_formations) REFERENCES formations(code) ON DELETE RESTRICT ON UPDATE CASCADE
);

/* -  OneToOne (1:1)
 * Exemple : Un Utilisateur a une seule Adresse personnelle, 
 * et une Adresse appartient à un seul Utilisateur
 * 
 * - OneToMany (1:n)
 * Exemple : Un Utilisateur peut avoir plusieurs Commandes, 
 * mais chaque Commande appartient à un seul Utilisateur
 * Dans TypeORM :
 * Dans l'entité A (celle du côté "1"), utilisez @OneToMany.
 * Dans l'entité B (celle du côté "n"), utilisez @ManyToOne.
 *
 * 
 * - ManyToOne (n:1)
 * Plusieurs Commandes appartiennent à un seul Utilisateur 
 * (même exemple que ci-dessus, vu du côté des commandes)
 * Dans TypeORM : C'est la contrepartie de @OneToMany. 
 * Vous utilisez @ManyToOne dans l'entité A et @OneToMany dans l'entité B.
 * 
 *
 * - ManyToMany (n:m)
 * Un Etudiant peut s'inscrire à plusieurs Formations, 
 * et une Formation peut avoir plusieurs Etudiants
 * Dans TypeORM :
 * Utilisez @ManyToMany dans les deux entités, 
 * avec @JoinTable pour spécifier la table pivot.
 */