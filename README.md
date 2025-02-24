1️⃣ Arquitetura do Sistema
A arquitetura proposta segue um modelo modular para garantir escalabilidade, segurança e eficiência na manipulação de arquivos grandes.

📌 Diagrama de Arquitetura
![diagrama](https://github.com/user-attachments/assets/e21ad401-23d8-490b-80a1-8dc5ea205dc6)

📌 Estrutura das Entidades
Tabela uploads
Campo	Tipo	Descrição
id	UUID	Identificador único do upload
job_number	VARCHAR	Número do JOB associado
category	ENUM	Categoria do upload (Ex: Documentos, Imagens, etc.)
classification	ENUM	Nível de classificação (Confidencial, Restrito, etc.)
status	ENUM	Status (Aguardando Aprovação, Aprovado, Rejeitado)
approver_id	UUID	Usuário responsável pela aprovação
created_at	TIMESTAMP	Data de criação
