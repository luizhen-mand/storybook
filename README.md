1️⃣ Arquitetura do Sistema
A arquitetura proposta segue um modelo modular para garantir escalabilidade, segurança e eficiência na manipulação de arquivos grandes.

📌 Diagrama de Arquitetura
![diagrama](https://github.com/user-attachments/assets/e21ad401-23d8-490b-80a1-8dc5ea205dc6)

📌 Estrutura das Entidades
Tabela uploads

| Campo         | Tipo        | Descrição                                           |
|--------------|------------|------------------------------------------------------|
| `id`         | `UUID`      | Identificador único do upload                      |
| `job_number` | `VARCHAR`   | Número do JOB associado                            |
| `category`   | `ENUM`      | Categoria do upload (Ex: Documentos, Imagens, etc.)|
| `classification` | `ENUM`  | Nível de classificação (`Confidencial`, `Restrito`, etc.) |
| `status`     | `ENUM`      | Status (`Aguardando Aprovação`, `Aprovado`, `Rejeitado`) |
| `approver_id` | `UUID`     | Usuário responsável pela aprovação                 |
| `created_at` | `TIMESTAMP` | Data de criação                                    |


tabela assets

| Campo      | Tipo      | Descrição                                    |
|-----------|---------|--------------------------------------------|
| `id`      | `UUID`  | Identificador do asset                     |
| `upload_id` | `UUID`  | Referência ao upload                     |
| `name`    | `VARCHAR` | Nome do arquivo sem extensão             |
| `size`    | `BIGINT`  | Tamanho total do asset                   |
| `created_at` | `TIMESTAMP` | Data de criação                    |


Tabela files

| Campo        | Tipo      | Descrição                                    |
|-------------|---------|--------------------------------------------|
| `id`        | `UUID`  | Identificador do arquivo                  |
| `asset_id`  | `UUID`  | Referência ao asset                       |
| `filename`  | `VARCHAR` | Nome do arquivo com extensão            |
| `storage_path` | `TEXT` | Caminho de armazenamento (Ex: S3, MinIO) |
| `checksum`  | `VARCHAR` | Hash do arquivo para garantir integridade |
| `created_at` | `TIMESTAMP` | Data de criação                    |


2️⃣ Gerenciamento de Uploads Grandes

🔹 Estratégias de Escalabilidade
✅ Multipart Upload: O backend suporta divisão de arquivos grandes em partes menores.
✅ Fila de Processamento (RabbitMQ, Bull.js): Uploads são processados assíncronamente para evitar bloqueios.
✅ Armazenamento em Object Storage (AWS S3, MinIO): Melhora a escalabilidade e separa arquivos do banco de dados.

3️⃣ Segurança e Conformidade com a LGPD

🔹 Controle de Acesso
✔ Autenticação JWT: Apenas usuários autenticados podem acessar a API.
✔ Autorização baseada em papéis (RBAC): Apenas usuários aprovadores podem validar uploads.
✔ Criptografia (AES-256): Arquivos confidenciais armazenados com criptografia.

🔹 Acesso por Nível de Classificação

| Nível         | Acesso                                               |
|--------------|-------------------------------------------------------|
| **Confidencial** | Somente usuários aprovados com permissão especial |
| **Restrito**    | Acesso permitido apenas para usuários internos     |
| **Interno**     | Qualquer usuário autenticado pode acessar         |
| **Público**     | Disponível para todos com link compartilhável     |


4️⃣ Fluxograma de Processos
![fluxograma](https://github.com/user-attachments/assets/428f2258-a519-405d-9708-0402427203ba)

5️⃣ Busca e Indexação
🔎 ElasticSearch para pesquisa rápida por job_number, categoria e classificação.
📂 Filtros dinâmicos no frontend para facilitar a busca.

🎯 Conclusão
Esse System Design cobre todos os aspectos do desafio: arquitetura, escalabilidade, segurança e fluxo de decisão. Se precisar de ajustes ou quiser explorar mais alguma parte, me avise! 🚀
