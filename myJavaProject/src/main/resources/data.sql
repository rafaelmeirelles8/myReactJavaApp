insert into user(id, username, password, name, age)
values(1000, 'rafael', '$2a$12$yRs3vKPoUAS4dmNuZ1l2E.qKA2Dnfqr7EwBOACld/i7QtwFnEZX8G', 'Rafael Meirelles', 33);

insert into user(id, username, password, name, age)
values(1001, 'mariana', '$2a$12$yRs3vKPoUAS4dmNuZ1l2E.qKA2Dnfqr7EwBOACld/i7QtwFnEZX8G', 'Mariana Araujo', 26);

insert into todo(id, user_id, description, target_date, is_done)
values (10001, 1000, 'Learn JPA', sysdate(), false);

insert into todo(id, user_id, description, target_date, is_done)
values (10002, 1000, 'Learn React', sysdate(), false);

insert into todo(id, user_id, description, target_date, is_done)
values (10003, 1000, 'Learn JWT', sysdate(), false);

