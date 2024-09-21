export const sqlData = {
  file1: {
    filename: "MySQL Command Line Client",
    code: `CREATE DATABASE test_db;`,
    language: "language-sql",
  },
  file2: {
    filename: "MySQL Command Line Client",
    code: `USE test_db;`,
    language: "language-sql",
  },
  file3: {
    filename: "MySQL Command Line Client",
    code: `CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) NOT NULL UNIQUE,
email VARCHAR(100) NOT NULL,
password VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`,
    language: "language-sql",
  },
  file4: {
    filename: "MySQL Command Line Client",
    code: `SHOW TABLES;`,
    language: "language-sql",
  },
  file5: {
    filename: "MySQL Command Line Client",
    code: `DESCRIBE users;`,
    language: "language-sql",
  },
  file6: {
    filename: "MySQL Command Line Client",
    code: `INSERT INTO users (username, email, password, created_at, updated_at)
VALUES ('johndoe', 'johndoe@example.com', 'securepassword', NOW(), NOW());`,
    language: "language-sql",
  },
  file7: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users;`,
    language: "language-sql",
  },
  file8: {
    filename: "MySQL Command Line Client",
    code: `INSERT INTO users (username, email, password, created_at, updated_at)
VALUES
('alice', 'alice@example.com', 'alicepassword', NOW(), NOW()),
('bob', 'bob@example.com', 'bobpassword', NOW(), NOW()),
('carol', 'carol@example.com', 'carolpassword', NOW(), NOW());`,
    language: "language-sql",
  },
  file9: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE username = 'alice';`,
    language: "language-sql",
  },
  file10: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE username = 'alice' AND email = 'alice@example.com';`,
    language: "language-sql",
  },
  file11: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE username = 'alice' OR username = 'bob';`,
    language: "language-sql",
  },
  file12: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE email LIKE '%example%';`,
    language: "language-sql",
  },
  file13: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id = 2;`,
    language: "language-sql",
  },
  file14: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id != 2;`,
    language: "language-sql",
  },
  file15: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id <> 2;`,
    language: "language-sql",
  },
  file16: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id > 2;`,
    language: "language-sql",
  },
  file17: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id < 2;`,
    language: "language-sql",
  },
  file18: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id >= 2;`,
    language: "language-sql",
  },
  file19: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id <= 2;`,
    language: "language-sql",
  },
  file20: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id BETWEEN 2 AND 4;`,
    language: "language-sql",
  },
  file21: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE id IN (1, 3, 4);`,
    language: "language-sql",
  },
  file22: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users WHERE NOT username = 'alice';`,
    language: "language-sql",
  },
  file23: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users;`,
    language: "language-sql",
  },
  file24: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users ORDER BY username;`,
    language: "language-sql",
  },
  file25: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users ORDER BY created_at DESC;`,
    language: "language-sql",
  },
  file26: {
    filename: "MySQL Command Line Client",
    code: `SELECT * FROM users LIMIT 2;`,
    language: "language-sql",
  },
  file27: {
    filename: "MySQL Command Line Client",
    code: `UPDATE users SET email = 'newalice@example.com' WHERE id = 2;`,
    language: "language-sql",
  },
  file28: {
    filename: "MySQL Command Line Client",
    code: `DELETE FROM users WHERE id = 3;`,
    language: "language-sql",
  },
  file29: {
    filename: "ターミナル",
    code: `brew install mysql`,
    language: "language-bash",
  },
  file30: {
    filename: "ターミナル",
    code: `mysql.server start`,
    language: "language-bash",
  },
  file31: {
    filename: "ターミナル",
    code: `mysql -u root`,
    language: "language-bash",
  },
  file32: {
    filename: "ターミナル",
    code: `SET PASSWORD FOR 'root'@'localhost' = PASSWORD('自分で設定したパスワード');`,
    language: "language-bash",
  },
};
