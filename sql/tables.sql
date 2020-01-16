create table all_jobs (
    id bigserial primary key,
    link text unique,
    heading text
);