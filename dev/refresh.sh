set -e
source .env

psql -U ${DB_USER} -d ${DB_NAME} -f sql/drop-tables.sql
psql -U ${DB_USER} -d ${DB_NAME} -f sql/tables.sql